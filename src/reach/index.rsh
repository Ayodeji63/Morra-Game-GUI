"reach 0.1";

const [isFinger, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const [
  isResult,
  ZEROS,
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXS,
  SEVENS,
  EIGHTS,
  NINES,
  TENS,
] = makeEnum(11);
const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

const result = (aliceFinger, bobFinger, aliceGuessResult, bobGuessResult) => {
  const outcome =
    aliceGuessResult == bobGuessResult
      ? DRAW
      : aliceFinger + bobFinger == aliceGuessResult
      ? A_WINS
      : aliceFinger + bobFinger == bobGuessResult
      ? B_WINS
      : DRAW;
  return outcome;
};

// assert statements

assert(result(ZERO, FOUR, FOURS, SEVENS) == A_WINS);
assert(result(THREE, TWO, SEVENS, FIVES) == B_WINS);
assert(result(THREE, THREE, SIXS, SIXS) == DRAW);
assert(result(ONE, ONE, ONES, ONES) == DRAW);

// forall loops

forall(UInt, (aliceFinger) =>
  forall(UInt, (bobFinger) =>
    forall(UInt, (aliceGuessResult) =>
      forall(UInt, (bobGuessResult) =>
        assert(
          isOutcome(
            result(aliceFinger, bobFinger, aliceGuessResult, bobGuessResult)
          )
        )
      )
    )
  )
);

forall(UInt, (finger) =>
  forall(UInt, (guess) => assert(result(finger, finger, guess, guess) == DRAW))
);

forall(UInt, (aliceFinger) =>
  forall(UInt, (bobFinger) =>
    forall(UInt, (guess) =>
      assert(result(aliceFinger, bobFinger, guess, guess) === DRAW)
    )
  )
);

const common = {
  ...hasRandom,
  showBoard: Fun([], Null),
  pickFinger: Fun([], UInt),
  guessResult: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  roundWinner: Fun([UInt, UInt, UInt, UInt, UInt], Null),
  seeWinning: Fun([UInt], Null),
  endGame: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    //
    ...common,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant("Bob", {
    //
    ...common,
    acceptWager: Fun([UInt], Null),
  });
  init();

  //helper function
  const informTimeout = () => {
    each([Alice, Bob], () => interact.informTimeout());
  };

  Alice.only(() => {
    const amt = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(amt, deadline).pay(amt);
  commit();

  Bob.only(() => {
    interact.acceptWager(amt);
  });
  Bob.pay(amt).timeout(relativeTime(deadline), () =>
    closeTo(Alice, informTimeout)
  );

  var LHS = DRAW;
  invariant(balance() == 2 * amt);
  while (LHS === DRAW) {
    var [round, forAlice, forBob] = [0, 0, 0];
    invariant(balance() == 2 * amt);
    while (round < 3) {
      commit();

      each([Alice, Bob], () => interact.showBoard());

      Alice.only(() => {
        const _aliceFinger = interact.pickFinger();
        const [_commitAliceFinger, _saltAliceFinger] = makeCommitment(
          interact,
          _aliceFinger
        );
        const commitAliceFinger = declassify(_commitAliceFinger);

        const _aliceGuessResult = interact.guessResult();
        const [_commitResult, _saltResult] = makeCommitment(
          interact,
          _aliceGuessResult
        );
        const commitResult = declassify(_commitResult);
      });
      Alice.publish(commitAliceFinger, commitResult).timeout(
        relativeTime(deadline),
        () => closeTo(Bob, informTimeout)
      );

      commit();

      Bob.only(() => {
        const bobFinger = declassify(interact.pickFinger());
        const bobGuessResult = declassify(interact.guessResult());
      });
      Bob.publish(bobFinger, bobGuessResult).timeout(
        relativeTime(deadline),
        () => closeTo(Alice, informTimeout)
      );

      commit();

      unknowable(Bob, Alice(_aliceFinger, _saltAliceFinger));
      unknowable(Bob, Alice(_aliceGuessResult, _saltResult));

      Alice.only(() => {
        const aliceFinger = declassify(_aliceFinger);
        const saltFinger = declassify(_saltAliceFinger);
        const aliceGuessed = declassify(_aliceGuessResult);
        const saltResult = declassify(_saltResult);
      });
      Alice.publish(aliceFinger, saltFinger, aliceGuessed, saltResult).timeout(
        relativeTime(deadline),
        () => closeTo(Bob, informTimeout)
      );

      checkCommitment(commitAliceFinger, saltFinger, aliceFinger);
      checkCommitment(commitResult, saltResult, aliceGuessed);

      const outcome = result(
        aliceFinger,
        bobFinger,
        aliceGuessed,
        bobGuessResult
      );

      each([Alice, Bob], () => {
        const addition = aliceFinger + bobFinger;
        interact.seeWinning(addition);
        const roundWinner = declassify(
          interact.roundWinner(
            outcome,
            aliceFinger,
            bobFinger,
            aliceGuessed,
            bobGuessResult
          )
        );
      });

      [forAlice, forBob, round] =
        outcome == 0
          ? [forAlice + 2, forBob + 0, round + 1]
          : outcome == 2
          ? [forAlice + 0, forBob + 2, round + 1]
          : [forAlice + 1, forBob + 1, round + 1];
      continue;
    }

    Alice.only(() => {
      const endGame = declassify(interact.endGame());
    });
    commit();
    Alice.publish(endGame);

    LHS = forAlice > forBob ? 0 : forBob > forAlice ? 2 : 1;
    continue;
  }

  transfer(2 * amt).to(LHS == A_WINS ? Alice : Bob);

  // assert(LHS == A_WINS || LHS == B_WINS);
  each([Alice, Bob], () => {
    interact.seeOutcome(LHS);
  });

  commit();
});
