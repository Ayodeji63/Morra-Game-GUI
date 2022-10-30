import "./App.css";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./reach/build/index.main.mjs";
import { useState } from "react";
import { views, Loader } from "./utils/";
import {
  ConnectAccount,
  PasteContractInfo,
  SelectRole,
  TestView,
  WaitForAttacher,
} from "./screens";

import { SetWager } from "./views/DeployerViews";
import { async, Promise } from "q";
import { AcceptWager } from "./views/AttacherViews";
import { Board } from "./views/PlayerViews";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [account, setAccount] = useState({});
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [contractInfo, setContractInfo] = useState();
  const [token, setToken] = useState();
  const [resolver, setResolver] = useState();
  const [text, setText] = useState("");
  const [isfinger, setIsfinger] = useState(false);
  const [isGuess, setIsGuess] = useState(false);
  const [value, setValue] = useState("");
  const [fingerPicked, setFingerPicked] = useState();
  const [guessVal, setGuessVal] = useState();
  const [isAlice, setIsAlice] = useState(false);
  const [gameView, setGameView] = useState();
  const [aliceFinger, setAliceFinger] = useState();
  const [bobFinger, setBobFinger] = useState();
  const [roundWinner, setRoundWinner] = useState();
  const [rounds, setRounds] = useState(0);
  const [winnigNum, setWinnigNum] = useState("");
  const [aliceScore, setAliceScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [winner, setWinner] = useState();
  const [aliceGuess, setAliceGuess] = useState();
  const [bobGuess, setBobGuess] = useState();

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic
          ? await reach.newAccountFromMnemonic(secret)
          : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = "success";
      } catch (error) {
        result = "failed";
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {
      if (deployer) {
        setView(views.SET_WAGER);
        setIsAlice(true);
      } else {
        setView(views.PASTE_CONTRACT_INFO);
        setIsAlice(false);
      }
    },

    deploy: async (wager) => {
      const contract = account.contract(backend);
      const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
      Alice.deadline = deadline;
      Alice.wager = reach.parseCurrency(wager);

      backend.Alice(contract, Alice);
      setToken(wager);
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER);
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Bob(contract, Bob);
      setView(views.ATTACHING);
    },
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function score(outcome) {
    if (Number(outcome) == 0) {
      setAliceScore((prev) => prev + 1);
    } else if (Number(outcome) == 2) {
      setOpponentScore((prev) => prev + 1);
    }
  }

  console.log(aliceScore);
  console.log(opponentScore);

  let OUTCOME;
  if (isAlice) {
    OUTCOME = ["You Won", "Draw", "Opponent Won"];
  } else {
    OUTCOME = ["Opponent Won", "Draw", "You Won"];
  }
  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),
    showBoard: () => {
      setText("Take a chill pill before picking a finger 😉 ");
      setWinner();
      setView(views.PLAYER_VIEW);
      setGameView(views.PICK_FINGER);
      setRounds((prev) => prev + 1);
    },
    pickFinger: async () => {
      setIsfinger(true);
      setGameView(views.PICK_FINGER);
      setText("Pick A Finger");
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: (num) => {
            resolve(num);
            console.log(num);
          },
        });
      });
    },
    guessResult: async () => {
      setGameView(views.GUESS_RESULT);
      setIsGuess(true);
      setText("Guess the result");
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: (num) => {
            setText("Waiting for Opponent...");
            resolve(num);
          },
        });
      });
    },
    roundWinner: async (
      outcome,
      aliceFinger,
      bobFinger,
      aliceGuess,
      bobGuess
    ) => {
      setGameView(views.GAME_RESULT);
      setRoundWinner(`${outcome}`);
      setAliceFinger(`${aliceFinger}`);
      setBobFinger(`${bobFinger}`);
      setIsfinger(false);
      setFingerPicked("");
      setGuessVal();
      setValue("");
      setText("");
      score(outcome);
      setAliceGuess(`${aliceGuess}`);
      setBobGuess(`${bobGuess}`);
      await sleep(10000);
    },
    seeWinning: (outcome) => {
      setWinnigNum(`${outcome}`);
      console.log(`${outcome}`);
    },
    endGame: () => {
      setText("Loading...");
    },
    seeOutcome: (outcome) => {
      setWinner(`${OUTCOME[outcome]}`);
      setGameView(views.RESTART);
    },
  };

  const Alice = {
    ...Common,
  };

  const Bob = {
    ...Common,
    acceptWager: async (wager) => {
      setView(views.ACCEPT_WAGER);
      setToken(reach.formatCurrency(wager, 4));
      return new Promise((resolve) => {
        setResolver({
          resolve: () => {
            setView(views.ATTACHING);
            resolve();
          },
        });
      });
    },
  };

  return (
    <div className="App">
      <div className="top">
        <h1 className="App__head">Morra Game</h1>
      </div>
      <section className="App-header">
        {view === views.CONNECT_ACCOUNT && (
          <ConnectAccount connect={reachFunctions.connect} />
        )}

        {view === views.DEPLOY_OR_ATTACH && (
          <SelectRole setAsDeployer={reachFunctions.setAsDeployer} />
        )}

        {view === views.SET_WAGER && (
          <SetWager deploy={reachFunctions.deploy} />
        )}

        {view == views.ACCEPT_WAGER && (
          <AcceptWager
            wager={token}
            accept={resolver.resolve}
            decline={() => setView(views.DEPLOY_OR_ATTACH)}
          />
        )}

        {(view === views.DEPLOYING || view === views.ATTACHING) && <Loader />}

        {view === views.PASTE_CONTRACT_INFO && (
          <PasteContractInfo attach={reachFunctions.attach} />
        )}

        {view === views.WAIT_FOR_ATTACHER && (
          <WaitForAttacher info={contractInfo} />
        )}

        {view === views.PLAYER_VIEW && (
          <Board
            accept={resolver.resolve}
            guessResult={resolver.resolve}
            setText={setText}
            text={text}
            view={gameView}
            isFinger={isfinger}
            isGuess={isGuess}
            setFingerPicked={setFingerPicked}
            setGuessVal={setGuessVal}
            fingerPicked={fingerPicked}
            guessVal={guessVal}
            value={value}
            setValue={setValue}
            isAlice={isAlice}
            aliceFinger={aliceFinger}
            bobFinger={bobFinger}
            roundWinner={roundWinner}
            rounds={rounds}
            winningNum={winnigNum}
            scoreNum1={aliceScore}
            scoreNum2={opponentScore}
            winner={winner}
            aliceGuess={aliceGuess}
            bobGuess={bobGuess}
            reset={setView}
            setWinner={setWinner}
            setAliceScore={setAliceScore}
            setOpponentScore={setOpponentScore}
            setRounds={setRounds}
          />
        )}
      </section>
    </div>
  );
}

export default App;
