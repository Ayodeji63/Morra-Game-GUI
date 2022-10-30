// Automatically generated with Reach 0.1.12 (ae94865f)
/* eslint-disable */
export const _version = "0.1.12";
export const _versionHash = "0.1.12 (ae94865f)";
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;

  return {
    infos: {},
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1],
      12: [
        ctc0,
        ctc1,
        ctc1,
        ctc0,
        ctc1,
        ctc1,
        ctc1,
        ctc1,
        ctc2,
        ctc2,
        ctc1,
        ctc1,
        ctc1,
      ],
    },
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0,
  };
}
export async function Alice(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Alice expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Alice expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;

  const v445 = stdlib.protect(
    ctc0,
    interact.deadline,
    "for Alice's interact field deadline"
  );
  const v446 = stdlib.protect(
    ctc0,
    interact.wager,
    "for Alice's interact field wager"
  );

  const txn1 = await ctc.sendrecv({
    args: [v446, v445],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./index.rsh:102:9:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v446, []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [v450, v451],
        secs: v453,
        time: v452,
        didSend: v95,
        from: v449,
      } = txn1;

      sim_r.txns.push({
        amt: v450,
        kind: "to",
        tok: undefined /* Nothing */,
      });
      const v462 = stdlib.safeAdd(v452, v451);
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false,
  });
  const {
    data: [v450, v451],
    secs: v453,
    time: v452,
    didSend: v95,
    from: v449,
  } = txn1;
  const v462 = stdlib.safeAdd(v452, v451);
  const txn2 = await ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ["time", v462],
    waitIfNotPresent: false,
  });
  if (txn2.didTimeout) {
    const txn3 = await ctc.sendrecv({
      args: [v449, v450, v451, v462],
      evt_cnt: 0,
      funcNum: 2,
      lct: v452,
      onlyIf: true,
      out_tys: [],
      pay: [
        stdlib.checkedBigNumberify(
          "reach standard library:197:11:decimal",
          stdlib.UInt_max,
          "0"
        ),
        [],
      ],
      sim_p: async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [],
          secs: v677,
          time: v676,
          didSend: v364,
          from: v675,
        } = txn3;

        sim_r.txns.push({
          kind: "from",
          to: v449,
          tok: undefined /* Nothing */,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;

        return sim_r;
      },
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false,
    });
    const {
      data: [],
      secs: v677,
      time: v676,
      didSend: v364,
      from: v675,
    } = txn3;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: "./index.rsh:95:52:application",
      fs: [
        "at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)",
        'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:94:28:function exp)',
        'at ./index.rsh:109:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "informTimeout",
      who: "Alice",
    });

    return;
  } else {
    const {
      data: [],
      secs: v468,
      time: v467,
      didSend: v104,
      from: v466,
    } = txn2;
    const v470 = stdlib.add(v450, v450);
    let v471 = stdlib.checkedBigNumberify(
      "./index.rsh:makeEnum",
      stdlib.UInt_max,
      "1"
    );
    let v472 = v467;
    let v479 = v470;

    let txn3 = txn2;
    while (
      await (async () => {
        const v483 = stdlib.eq(
          v471,
          stdlib.checkedBigNumberify(
            "./index.rsh:makeEnum",
            stdlib.UInt_max,
            "1"
          )
        );

        return v483;
      })()
    ) {
      let v484 = stdlib.checkedBigNumberify(
        "./index.rsh:115:41:decimal",
        stdlib.UInt_max,
        "0"
      );
      let v485 = stdlib.checkedBigNumberify(
        "./index.rsh:115:44:decimal",
        stdlib.UInt_max,
        "0"
      );
      let v486 = stdlib.checkedBigNumberify(
        "./index.rsh:115:38:decimal",
        stdlib.UInt_max,
        "0"
      );
      let v487 = v472;
      let v494 = v479;

      let txn4 = txn3;
      while (
        await (async () => {
          const v498 = stdlib.lt(
            v486,
            stdlib.checkedBigNumberify(
              "./index.rsh:117:20:decimal",
              stdlib.UInt_max,
              "3"
            )
          );

          return v498;
        })()
      ) {
        const v505 = stdlib.safeAdd(v487, v451);
        stdlib.protect(ctc1, await interact.showBoard(), {
          at: "./index.rsh:120:50:application",
          fs: [
            "at ./index.rsh:120:11:application call to [unknown function] (defined at: ./index.rsh:120:29:function exp)",
          ],
          msg: "showBoard",
          who: "Alice",
        });

        const v511 = stdlib.protect(ctc0, await interact.pickFinger(), {
          at: "./index.rsh:123:49:application",
          fs: [
            "at ./index.rsh:122:17:application call to [unknown function] (defined at: ./index.rsh:122:21:function exp)",
          ],
          msg: "pickFinger",
          who: "Alice",
        });
        const v512 = stdlib.protect(ctc0, await interact.random(), {
          at: "reach standard library:64:31:application",
          fs: [
            'at ./index.rsh:124:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)',
            "at ./index.rsh:122:17:application call to [unknown function] (defined at: ./index.rsh:122:21:function exp)",
          ],
          msg: "random",
          who: "Alice",
        });
        const v513 = stdlib.digest([ctc0, ctc0], [v512, v511]);
        const v515 = stdlib.protect(ctc0, await interact.guessResult(), {
          at: "./index.rsh:130:55:application",
          fs: [
            "at ./index.rsh:122:17:application call to [unknown function] (defined at: ./index.rsh:122:21:function exp)",
          ],
          msg: "guessResult",
          who: "Alice",
        });
        const v516 = stdlib.protect(ctc0, await interact.random(), {
          at: "reach standard library:64:31:application",
          fs: [
            'at ./index.rsh:131:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)',
            "at ./index.rsh:122:17:application call to [unknown function] (defined at: ./index.rsh:122:21:function exp)",
          ],
          msg: "random",
          who: "Alice",
        });
        const v517 = stdlib.digest([ctc0, ctc0], [v516, v515]);

        const txn5 = await ctc.sendrecv({
          args: [
            v449,
            v450,
            v451,
            v466,
            v484,
            v485,
            v486,
            v494,
            v505,
            v513,
            v517,
          ],
          evt_cnt: 2,
          funcNum: 7,
          lct: v487,
          onlyIf: true,
          out_tys: [ctc2, ctc2],
          pay: [
            stdlib.checkedBigNumberify(
              "./index.rsh:137:13:decimal",
              stdlib.UInt_max,
              "0"
            ),
            [],
          ],
          sim_p: async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            const {
              data: [v520, v521],
              secs: v523,
              time: v522,
              didSend: v146,
              from: v519,
            } = txn5;

            const v531 = stdlib.safeAdd(v522, v451);
            sim_r.isHalt = false;

            return sim_r;
          },
          soloSend: true,
          timeoutAt: ["time", v505],
          tys: [
            ctc3,
            ctc0,
            ctc0,
            ctc3,
            ctc0,
            ctc0,
            ctc0,
            ctc0,
            ctc0,
            ctc2,
            ctc2,
          ],
          waitIfNotPresent: false,
        });
        if (txn5.didTimeout) {
          const txn6 = await ctc.sendrecv({
            args: [v449, v450, v451, v466, v484, v485, v486, v494, v505],
            evt_cnt: 0,
            funcNum: 8,
            lct: v487,
            onlyIf: true,
            out_tys: [],
            pay: [
              stdlib.checkedBigNumberify(
                "reach standard library:197:11:decimal",
                stdlib.UInt_max,
                "0"
              ),
              [],
            ],
            sim_p: async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => {
                sim_txn_ctr = sim_txn_ctr.sub(1);
                return sim_txn_ctr;
              };

              const {
                data: [],
                secs: v630,
                time: v629,
                didSend: v298,
                from: v628,
              } = txn6;

              sim_r.txns.push({
                kind: "from",
                to: v466,
                tok: undefined /* Nothing */,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;

              return sim_r;
            },
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false,
          });
          const {
            data: [],
            secs: v630,
            time: v629,
            didSend: v298,
            from: v628,
          } = txn6;
          const v631 = stdlib.addressEq(v449, v628);
          const v632 = stdlib.addressEq(v466, v628);
          const v633 = v631 ? true : v632;
          stdlib.assert(v633, {
            at: "reach standard library:197:11:dot",
            fs: [
              'at ./index.rsh:139:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
            ],
            msg: "sender correct",
            who: "Alice",
          });
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: "./index.rsh:95:52:application",
            fs: [
              "at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)",
              'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:94:28:function exp)',
              'at ./index.rsh:139:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
            ],
            msg: "informTimeout",
            who: "Alice",
          });

          return;
        } else {
          const {
            data: [v520, v521],
            secs: v523,
            time: v522,
            didSend: v146,
            from: v519,
          } = txn5;
          const v524 = stdlib.addressEq(v449, v519);
          stdlib.assert(v524, {
            at: "./index.rsh:137:13:dot",
            fs: [],
            msg: "sender correct",
            who: "Alice",
          });
          const v531 = stdlib.safeAdd(v522, v451);
          const txn6 = await ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 9,
            out_tys: [ctc0, ctc0],
            timeoutAt: ["time", v531],
            waitIfNotPresent: false,
          });
          if (txn6.didTimeout) {
            const txn7 = await ctc.sendrecv({
              args: [
                v449,
                v450,
                v451,
                v466,
                v484,
                v485,
                v486,
                v494,
                v520,
                v521,
                v531,
              ],
              evt_cnt: 0,
              funcNum: 10,
              lct: v522,
              onlyIf: true,
              out_tys: [],
              pay: [
                stdlib.checkedBigNumberify(
                  "reach standard library:197:11:decimal",
                  stdlib.UInt_max,
                  "0"
                ),
                [],
              ],
              sim_p: async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => {
                  sim_txn_ctr = sim_txn_ctr.sub(1);
                  return sim_txn_ctr;
                };

                const {
                  data: [],
                  secs: v614,
                  time: v613,
                  didSend: v264,
                  from: v612,
                } = txn7;

                sim_r.txns.push({
                  kind: "from",
                  to: v449,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;

                return sim_r;
              },
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [
                ctc3,
                ctc0,
                ctc0,
                ctc3,
                ctc0,
                ctc0,
                ctc0,
                ctc0,
                ctc2,
                ctc2,
                ctc0,
              ],
              waitIfNotPresent: false,
            });
            const {
              data: [],
              secs: v614,
              time: v613,
              didSend: v264,
              from: v612,
            } = txn7;
            const v615 = stdlib.addressEq(v449, v612);
            const v616 = stdlib.addressEq(v466, v612);
            const v617 = v615 ? true : v616;
            stdlib.assert(v617, {
              at: "reach standard library:197:11:dot",
              fs: [
                'at ./index.rsh:150:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
              ],
              msg: "sender correct",
              who: "Alice",
            });
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: "./index.rsh:95:52:application",
              fs: [
                "at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)",
                'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:94:28:function exp)',
                'at ./index.rsh:150:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
              ],
              msg: "informTimeout",
              who: "Alice",
            });

            return;
          } else {
            const {
              data: [v538, v539],
              secs: v541,
              time: v540,
              didSend: v158,
              from: v537,
            } = txn6;
            const v542 = stdlib.addressEq(v466, v537);
            stdlib.assert(v542, {
              at: "./index.rsh:148:11:dot",
              fs: [],
              msg: "sender correct",
              who: "Alice",
            });
            const v549 = stdlib.safeAdd(v540, v451);
            const txn7 = await ctc.sendrecv({
              args: [
                v449,
                v450,
                v451,
                v466,
                v484,
                v485,
                v486,
                v494,
                v520,
                v521,
                v538,
                v539,
                v549,
                v511,
                v512,
                v515,
                v516,
              ],
              evt_cnt: 4,
              funcNum: 11,
              lct: v540,
              onlyIf: true,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              pay: [
                stdlib.checkedBigNumberify(
                  "./index.rsh:164:13:decimal",
                  stdlib.UInt_max,
                  "0"
                ),
                [],
              ],
              sim_p: async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => {
                  sim_txn_ctr = sim_txn_ctr.sub(1);
                  return sim_txn_ctr;
                };

                const {
                  data: [v554, v555, v556, v557],
                  secs: v559,
                  time: v558,
                  didSend: v170,
                  from: v553,
                } = txn7;

                const v565 = stdlib.eq(v556, v539);
                let v566;
                if (v565) {
                  v566 = stdlib.checkedBigNumberify(
                    "./index.rsh:makeEnum",
                    stdlib.UInt_max,
                    "1"
                  );
                } else {
                  const v567 = stdlib.safeAdd(v554, v538);
                  const v568 = stdlib.eq(v567, v556);
                  let v569;
                  if (v568) {
                    v569 = stdlib.checkedBigNumberify(
                      "./index.rsh:makeEnum",
                      stdlib.UInt_max,
                      "0"
                    );
                  } else {
                    const v571 = stdlib.eq(v567, v539);
                    const v572 = v571
                      ? stdlib.checkedBigNumberify(
                          "./index.rsh:makeEnum",
                          stdlib.UInt_max,
                          "2"
                        )
                      : stdlib.checkedBigNumberify(
                          "./index.rsh:makeEnum",
                          stdlib.UInt_max,
                          "1"
                        );
                    v569 = v572;
                  }
                  v566 = v569;
                }

                const v579 = stdlib.eq(
                  v566,
                  stdlib.checkedBigNumberify(
                    "./index.rsh:194:20:decimal",
                    stdlib.UInt_max,
                    "0"
                  )
                );
                let v580;
                if (v579) {
                  const v581 = stdlib.safeAdd(
                    v484,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:195:25:decimal",
                      stdlib.UInt_max,
                      "2"
                    )
                  );
                  const v582 = stdlib.safeAdd(
                    v486,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:195:48:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v583 = [v581, v485, v582];
                  v580 = v583;
                } else {
                  const v584 = stdlib.eq(
                    v566,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:196:24:decimal",
                      stdlib.UInt_max,
                      "2"
                    )
                  );
                  let v585;
                  if (v584) {
                    const v586 = stdlib.safeAdd(
                      v485,
                      stdlib.checkedBigNumberify(
                        "./index.rsh:197:37:decimal",
                        stdlib.UInt_max,
                        "2"
                      )
                    );
                    const v587 = stdlib.safeAdd(
                      v486,
                      stdlib.checkedBigNumberify(
                        "./index.rsh:197:48:decimal",
                        stdlib.UInt_max,
                        "1"
                      )
                    );
                    const v588 = [v484, v586, v587];
                    v585 = v588;
                  } else {
                    const v589 = stdlib.safeAdd(
                      v484,
                      stdlib.checkedBigNumberify(
                        "./index.rsh:198:25:decimal",
                        stdlib.UInt_max,
                        "1"
                      )
                    );
                    const v590 = stdlib.safeAdd(
                      v485,
                      stdlib.checkedBigNumberify(
                        "./index.rsh:198:37:decimal",
                        stdlib.UInt_max,
                        "1"
                      )
                    );
                    const v591 = stdlib.safeAdd(
                      v486,
                      stdlib.checkedBigNumberify(
                        "./index.rsh:198:48:decimal",
                        stdlib.UInt_max,
                        "1"
                      )
                    );
                    const v592 = [v589, v590, v591];
                    v585 = v592;
                  }
                  v580 = v585;
                }
                const v593 =
                  v580[
                    stdlib.checkedBigNumberify(
                      "./index.rsh:193:7:array",
                      stdlib.UInt_max,
                      "0"
                    )
                  ];
                const v594 =
                  v580[
                    stdlib.checkedBigNumberify(
                      "./index.rsh:193:7:array",
                      stdlib.UInt_max,
                      "1"
                    )
                  ];
                const v595 =
                  v580[
                    stdlib.checkedBigNumberify(
                      "./index.rsh:193:7:array",
                      stdlib.UInt_max,
                      "2"
                    )
                  ];
                const cv484 = v593;
                const cv485 = v594;
                const cv486 = v595;
                const cv487 = v558;
                const cv494 = v494;

                await (async () => {
                  const v484 = cv484;
                  const v485 = cv485;
                  const v486 = cv486;
                  const v487 = cv487;
                  const v494 = cv494;

                  if (
                    await (async () => {
                      const v498 = stdlib.lt(
                        v486,
                        stdlib.checkedBigNumberify(
                          "./index.rsh:117:20:decimal",
                          stdlib.UInt_max,
                          "3"
                        )
                      );

                      return v498;
                    })()
                  ) {
                    const v505 = stdlib.safeAdd(v487, v451);
                    sim_r.isHalt = false;
                  } else {
                    sim_r.isHalt = false;
                  }
                })();
                return sim_r;
              },
              soloSend: true,
              timeoutAt: ["time", v549],
              tys: [
                ctc3,
                ctc0,
                ctc0,
                ctc3,
                ctc0,
                ctc0,
                ctc0,
                ctc0,
                ctc2,
                ctc2,
                ctc0,
                ctc0,
                ctc0,
                ctc0,
                ctc0,
                ctc0,
                ctc0,
              ],
              waitIfNotPresent: false,
            });
            if (txn7.didTimeout) {
              const txn8 = await ctc.sendrecv({
                args: [
                  v449,
                  v450,
                  v451,
                  v466,
                  v484,
                  v485,
                  v486,
                  v494,
                  v520,
                  v521,
                  v538,
                  v539,
                  v549,
                ],
                evt_cnt: 0,
                funcNum: 12,
                lct: v540,
                onlyIf: true,
                out_tys: [],
                pay: [
                  stdlib.checkedBigNumberify(
                    "reach standard library:197:11:decimal",
                    stdlib.UInt_max,
                    "0"
                  ),
                  [],
                ],
                sim_p: async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => {
                    sim_txn_ctr = sim_txn_ctr.sub(1);
                    return sim_txn_ctr;
                  };

                  const {
                    data: [],
                    secs: v598,
                    time: v597,
                    didSend: v230,
                    from: v596,
                  } = txn8;

                  sim_r.txns.push({
                    kind: "from",
                    to: v466,
                    tok: undefined /* Nothing */,
                  });
                  sim_r.txns.push({
                    kind: "halt",
                    tok: undefined /* Nothing */,
                  });
                  sim_r.isHalt = true;

                  return sim_r;
                },
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [
                  ctc3,
                  ctc0,
                  ctc0,
                  ctc3,
                  ctc0,
                  ctc0,
                  ctc0,
                  ctc0,
                  ctc2,
                  ctc2,
                  ctc0,
                  ctc0,
                  ctc0,
                ],
                waitIfNotPresent: false,
              });
              const {
                data: [],
                secs: v598,
                time: v597,
                didSend: v230,
                from: v596,
              } = txn8;
              const v599 = stdlib.addressEq(v449, v596);
              const v600 = stdlib.addressEq(v466, v596);
              const v601 = v599 ? true : v600;
              stdlib.assert(v601, {
                at: "reach standard library:197:11:dot",
                fs: [
                  'at ./index.rsh:166:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
                ],
                msg: "sender correct",
                who: "Alice",
              });
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: "./index.rsh:95:52:application",
                fs: [
                  "at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)",
                  'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:94:28:function exp)',
                  'at ./index.rsh:166:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
                ],
                msg: "informTimeout",
                who: "Alice",
              });

              return;
            } else {
              const {
                data: [v554, v555, v556, v557],
                secs: v559,
                time: v558,
                didSend: v170,
                from: v553,
              } = txn7;
              const v560 = stdlib.addressEq(v449, v553);
              stdlib.assert(v560, {
                at: "./index.rsh:164:13:dot",
                fs: [],
                msg: "sender correct",
                who: "Alice",
              });
              const v561 = stdlib.digest([ctc0, ctc0], [v555, v554]);
              const v562 = stdlib.digestEq(v520, v561);
              stdlib.assert(v562, {
                at: "reach standard library:69:17:application",
                fs: [
                  'at ./index.rsh:169:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)',
                ],
                msg: null,
                who: "Alice",
              });
              const v563 = stdlib.digest([ctc0, ctc0], [v557, v556]);
              const v564 = stdlib.digestEq(v521, v563);
              stdlib.assert(v564, {
                at: "reach standard library:69:17:application",
                fs: [
                  'at ./index.rsh:170:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)',
                ],
                msg: null,
                who: "Alice",
              });
              const v565 = stdlib.eq(v556, v539);
              let v566;
              if (v565) {
                v566 = stdlib.checkedBigNumberify(
                  "./index.rsh:makeEnum",
                  stdlib.UInt_max,
                  "1"
                );
              } else {
                const v567 = stdlib.safeAdd(v554, v538);
                const v568 = stdlib.eq(v567, v556);
                let v569;
                if (v568) {
                  v569 = stdlib.checkedBigNumberify(
                    "./index.rsh:makeEnum",
                    stdlib.UInt_max,
                    "0"
                  );
                } else {
                  const v571 = stdlib.eq(v567, v539);
                  const v572 = v571
                    ? stdlib.checkedBigNumberify(
                        "./index.rsh:makeEnum",
                        stdlib.UInt_max,
                        "2"
                      )
                    : stdlib.checkedBigNumberify(
                        "./index.rsh:makeEnum",
                        stdlib.UInt_max,
                        "1"
                      );
                  v569 = v572;
                }
                v566 = v569;
              }
              const v575 = stdlib.safeAdd(v554, v538);
              stdlib.protect(ctc1, await interact.seeWinning(v575), {
                at: "./index.rsh:181:28:application",
                fs: [
                  "at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:29:function exp)",
                ],
                msg: "seeWinning",
                who: "Alice",
              });
              stdlib.protect(
                ctc1,
                await interact.roundWinner(v566, v554, v538, v556, v539),
                {
                  at: "./index.rsh:183:31:application",
                  fs: [
                    "at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:29:function exp)",
                  ],
                  msg: "roundWinner",
                  who: "Alice",
                }
              );

              const v579 = stdlib.eq(
                v566,
                stdlib.checkedBigNumberify(
                  "./index.rsh:194:20:decimal",
                  stdlib.UInt_max,
                  "0"
                )
              );
              let v580;
              if (v579) {
                const v581 = stdlib.safeAdd(
                  v484,
                  stdlib.checkedBigNumberify(
                    "./index.rsh:195:25:decimal",
                    stdlib.UInt_max,
                    "2"
                  )
                );
                const v582 = stdlib.safeAdd(
                  v486,
                  stdlib.checkedBigNumberify(
                    "./index.rsh:195:48:decimal",
                    stdlib.UInt_max,
                    "1"
                  )
                );
                const v583 = [v581, v485, v582];
                v580 = v583;
              } else {
                const v584 = stdlib.eq(
                  v566,
                  stdlib.checkedBigNumberify(
                    "./index.rsh:196:24:decimal",
                    stdlib.UInt_max,
                    "2"
                  )
                );
                let v585;
                if (v584) {
                  const v586 = stdlib.safeAdd(
                    v485,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:197:37:decimal",
                      stdlib.UInt_max,
                      "2"
                    )
                  );
                  const v587 = stdlib.safeAdd(
                    v486,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:197:48:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v588 = [v484, v586, v587];
                  v585 = v588;
                } else {
                  const v589 = stdlib.safeAdd(
                    v484,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:198:25:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v590 = stdlib.safeAdd(
                    v485,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:198:37:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v591 = stdlib.safeAdd(
                    v486,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:198:48:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v592 = [v589, v590, v591];
                  v585 = v592;
                }
                v580 = v585;
              }
              const v593 =
                v580[
                  stdlib.checkedBigNumberify(
                    "./index.rsh:193:7:array",
                    stdlib.UInt_max,
                    "0"
                  )
                ];
              const v594 =
                v580[
                  stdlib.checkedBigNumberify(
                    "./index.rsh:193:7:array",
                    stdlib.UInt_max,
                    "1"
                  )
                ];
              const v595 =
                v580[
                  stdlib.checkedBigNumberify(
                    "./index.rsh:193:7:array",
                    stdlib.UInt_max,
                    "2"
                  )
                ];
              const cv484 = v593;
              const cv485 = v594;
              const cv486 = v595;
              const cv487 = v558;
              const cv494 = v494;

              v484 = cv484;
              v485 = cv485;
              v486 = cv486;
              v487 = cv487;
              v494 = cv494;

              txn4 = txn7;
              continue;
            }
          }
        }
      }
      stdlib.protect(ctc1, await interact.endGame(), {
        at: "./index.rsh:203:56:application",
        fs: [
          "at ./index.rsh:202:15:application call to [unknown function] (defined at: ./index.rsh:202:19:function exp)",
        ],
        msg: "endGame",
        who: "Alice",
      });

      const txn5 = await ctc.sendrecv({
        args: [v449, v450, v451, v466, v484, v485, v494, null],
        evt_cnt: 1,
        funcNum: 5,
        lct: v487,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [
          stdlib.checkedBigNumberify(
            "./index.rsh:206:11:decimal",
            stdlib.UInt_max,
            "0"
          ),
          [],
        ],
        sim_p: async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };

          const {
            data: [v647],
            secs: v649,
            time: v648,
            didSend: v321,
            from: v646,
          } = txn5;

          sim_r.isHalt = false;

          return sim_r;
        },
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc1],
        waitIfNotPresent: false,
      });
      const {
        data: [v647],
        secs: v649,
        time: v648,
        didSend: v321,
        from: v646,
      } = txn5;
      const v650 = stdlib.addressEq(v449, v646);
      stdlib.assert(v650, {
        at: "./index.rsh:206:11:dot",
        fs: [],
        msg: "sender correct",
        who: "Alice",
      });
      const txn6 = await ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false,
      });
      const {
        data: [v654],
        secs: v656,
        time: v655,
        didSend: v330,
        from: v653,
      } = txn6;
      const v657 = stdlib.addressEq(v466, v653);
      stdlib.assert(v657, {
        at: "./index.rsh:212:9:dot",
        fs: [],
        msg: "sender correct",
        who: "Alice",
      });
      const v658 = stdlib.gt(v484, v485);
      const v659 = stdlib.gt(v485, v484);
      const v660 = v659
        ? stdlib.checkedBigNumberify(
            "./index.rsh:214:55:decimal",
            stdlib.UInt_max,
            "2"
          )
        : stdlib.checkedBigNumberify(
            "./index.rsh:214:59:decimal",
            stdlib.UInt_max,
            "1"
          );
      const v661 = v658
        ? stdlib.checkedBigNumberify(
            "./index.rsh:214:31:decimal",
            stdlib.UInt_max,
            "0"
          )
        : v660;
      const cv471 = v661;
      const cv472 = v655;
      const cv479 = v494;

      v471 = cv471;
      v472 = cv472;
      v479 = cv479;

      txn3 = txn6;
      continue;
    }
    const v662 = stdlib.safeMul(
      stdlib.checkedBigNumberify(
        "./index.rsh:218:12:decimal",
        stdlib.UInt_max,
        "2"
      ),
      v450
    );
    const v663 = stdlib.eq(
      v471,
      stdlib.checkedBigNumberify("./index.rsh:makeEnum", stdlib.UInt_max, "0")
    );
    const v664 = v663 ? v449 : v466;
    stdlib.protect(ctc1, await interact.seeOutcome(v471), {
      at: "./index.rsh:222:24:application",
      fs: [
        "at ./index.rsh:221:7:application call to [unknown function] (defined at: ./index.rsh:221:25:function exp)",
      ],
      msg: "seeOutcome",
      who: "Alice",
    });

    return;
  }
}
export async function Bob(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Bob expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Bob expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;

  const txn1 = await ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false,
  });
  const {
    data: [v450, v451],
    secs: v453,
    time: v452,
    didSend: v95,
    from: v449,
  } = txn1;
  const v462 = stdlib.safeAdd(v452, v451);
  stdlib.protect(ctc1, await interact.acceptWager(v450), {
    at: "./index.rsh:106:25:application",
    fs: [
      "at ./index.rsh:105:11:application call to [unknown function] (defined at: ./index.rsh:105:15:function exp)",
    ],
    msg: "acceptWager",
    who: "Bob",
  });

  const txn2 = await ctc.sendrecv({
    args: [v449, v450, v451, v462],
    evt_cnt: 0,
    funcNum: 1,
    lct: v452,
    onlyIf: true,
    out_tys: [],
    pay: [v450, []],
    sim_p: async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [],
        secs: v468,
        time: v467,
        didSend: v104,
        from: v466,
      } = txn2;

      const v470 = stdlib.add(v450, v450);
      sim_r.txns.push({
        amt: v450,
        kind: "to",
        tok: undefined /* Nothing */,
      });
      const v471 = stdlib.checkedBigNumberify(
        "./index.rsh:makeEnum",
        stdlib.UInt_max,
        "1"
      );
      const v472 = v467;
      const v479 = v470;

      if (
        await (async () => {
          const v483 = stdlib.eq(
            v471,
            stdlib.checkedBigNumberify(
              "./index.rsh:makeEnum",
              stdlib.UInt_max,
              "1"
            )
          );

          return v483;
        })()
      ) {
        const v484 = stdlib.checkedBigNumberify(
          "./index.rsh:115:41:decimal",
          stdlib.UInt_max,
          "0"
        );
        const v485 = stdlib.checkedBigNumberify(
          "./index.rsh:115:44:decimal",
          stdlib.UInt_max,
          "0"
        );
        const v486 = stdlib.checkedBigNumberify(
          "./index.rsh:115:38:decimal",
          stdlib.UInt_max,
          "0"
        );
        const v487 = v472;
        const v494 = v479;

        if (
          await (async () => {
            const v498 = stdlib.lt(
              v486,
              stdlib.checkedBigNumberify(
                "./index.rsh:117:20:decimal",
                stdlib.UInt_max,
                "3"
              )
            );

            return v498;
          })()
        ) {
          const v505 = stdlib.safeAdd(v487, v451);
          sim_r.isHalt = false;
        } else {
          sim_r.isHalt = false;
        }
      } else {
        const v662 = stdlib.safeMul(
          stdlib.checkedBigNumberify(
            "./index.rsh:218:12:decimal",
            stdlib.UInt_max,
            "2"
          ),
          v450
        );
        const v663 = stdlib.eq(
          v471,
          stdlib.checkedBigNumberify(
            "./index.rsh:makeEnum",
            stdlib.UInt_max,
            "0"
          )
        );
        const v664 = v663 ? v449 : v466;
        sim_r.txns.push({
          kind: "from",
          to: v664,
          tok: undefined /* Nothing */,
        });

        sim_r.txns.push({
          kind: "halt",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;
      }
      return sim_r;
    },
    soloSend: true,
    timeoutAt: ["time", v462],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false,
  });
  if (txn2.didTimeout) {
    const txn3 = await ctc.sendrecv({
      args: [v449, v450, v451, v462],
      evt_cnt: 0,
      funcNum: 2,
      lct: v452,
      onlyIf: true,
      out_tys: [],
      pay: [
        stdlib.checkedBigNumberify(
          "reach standard library:197:11:decimal",
          stdlib.UInt_max,
          "0"
        ),
        [],
      ],
      sim_p: async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [],
          secs: v677,
          time: v676,
          didSend: v364,
          from: v675,
        } = txn3;

        sim_r.txns.push({
          kind: "from",
          to: v449,
          tok: undefined /* Nothing */,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;

        return sim_r;
      },
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false,
    });
    const {
      data: [],
      secs: v677,
      time: v676,
      didSend: v364,
      from: v675,
    } = txn3;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: "./index.rsh:95:52:application",
      fs: [
        "at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)",
        'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:94:28:function exp)',
        'at ./index.rsh:109:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "informTimeout",
      who: "Bob",
    });

    return;
  } else {
    const {
      data: [],
      secs: v468,
      time: v467,
      didSend: v104,
      from: v466,
    } = txn2;
    const v470 = stdlib.add(v450, v450);
    let v471 = stdlib.checkedBigNumberify(
      "./index.rsh:makeEnum",
      stdlib.UInt_max,
      "1"
    );
    let v472 = v467;
    let v479 = v470;

    let txn3 = txn2;
    while (
      await (async () => {
        const v483 = stdlib.eq(
          v471,
          stdlib.checkedBigNumberify(
            "./index.rsh:makeEnum",
            stdlib.UInt_max,
            "1"
          )
        );

        return v483;
      })()
    ) {
      let v484 = stdlib.checkedBigNumberify(
        "./index.rsh:115:41:decimal",
        stdlib.UInt_max,
        "0"
      );
      let v485 = stdlib.checkedBigNumberify(
        "./index.rsh:115:44:decimal",
        stdlib.UInt_max,
        "0"
      );
      let v486 = stdlib.checkedBigNumberify(
        "./index.rsh:115:38:decimal",
        stdlib.UInt_max,
        "0"
      );
      let v487 = v472;
      let v494 = v479;

      let txn4 = txn3;
      while (
        await (async () => {
          const v498 = stdlib.lt(
            v486,
            stdlib.checkedBigNumberify(
              "./index.rsh:117:20:decimal",
              stdlib.UInt_max,
              "3"
            )
          );

          return v498;
        })()
      ) {
        const v505 = stdlib.safeAdd(v487, v451);
        stdlib.protect(ctc1, await interact.showBoard(), {
          at: "./index.rsh:120:50:application",
          fs: [
            "at ./index.rsh:120:11:application call to [unknown function] (defined at: ./index.rsh:120:29:function exp)",
          ],
          msg: "showBoard",
          who: "Bob",
        });

        const txn5 = await ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc2, ctc2],
          timeoutAt: ["time", v505],
          waitIfNotPresent: false,
        });
        if (txn5.didTimeout) {
          const txn6 = await ctc.sendrecv({
            args: [v449, v450, v451, v466, v484, v485, v486, v494, v505],
            evt_cnt: 0,
            funcNum: 8,
            lct: v487,
            onlyIf: true,
            out_tys: [],
            pay: [
              stdlib.checkedBigNumberify(
                "reach standard library:197:11:decimal",
                stdlib.UInt_max,
                "0"
              ),
              [],
            ],
            sim_p: async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => {
                sim_txn_ctr = sim_txn_ctr.sub(1);
                return sim_txn_ctr;
              };

              const {
                data: [],
                secs: v630,
                time: v629,
                didSend: v298,
                from: v628,
              } = txn6;

              sim_r.txns.push({
                kind: "from",
                to: v466,
                tok: undefined /* Nothing */,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;

              return sim_r;
            },
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false,
          });
          const {
            data: [],
            secs: v630,
            time: v629,
            didSend: v298,
            from: v628,
          } = txn6;
          const v631 = stdlib.addressEq(v449, v628);
          const v632 = stdlib.addressEq(v466, v628);
          const v633 = v631 ? true : v632;
          stdlib.assert(v633, {
            at: "reach standard library:197:11:dot",
            fs: [
              'at ./index.rsh:139:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
            ],
            msg: "sender correct",
            who: "Bob",
          });
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: "./index.rsh:95:52:application",
            fs: [
              "at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)",
              'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:94:28:function exp)',
              'at ./index.rsh:139:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
            ],
            msg: "informTimeout",
            who: "Bob",
          });

          return;
        } else {
          const {
            data: [v520, v521],
            secs: v523,
            time: v522,
            didSend: v146,
            from: v519,
          } = txn5;
          const v524 = stdlib.addressEq(v449, v519);
          stdlib.assert(v524, {
            at: "./index.rsh:137:13:dot",
            fs: [],
            msg: "sender correct",
            who: "Bob",
          });
          const v531 = stdlib.safeAdd(v522, v451);
          const v535 = stdlib.protect(ctc0, await interact.pickFinger(), {
            at: "./index.rsh:145:57:application",
            fs: [
              "at ./index.rsh:144:15:application call to [unknown function] (defined at: ./index.rsh:144:19:function exp)",
            ],
            msg: "pickFinger",
            who: "Bob",
          });
          const v536 = stdlib.protect(ctc0, await interact.guessResult(), {
            at: "./index.rsh:146:63:application",
            fs: [
              "at ./index.rsh:144:15:application call to [unknown function] (defined at: ./index.rsh:144:19:function exp)",
            ],
            msg: "guessResult",
            who: "Bob",
          });

          const txn6 = await ctc.sendrecv({
            args: [
              v449,
              v450,
              v451,
              v466,
              v484,
              v485,
              v486,
              v494,
              v520,
              v521,
              v531,
              v535,
              v536,
            ],
            evt_cnt: 2,
            funcNum: 9,
            lct: v522,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [
              stdlib.checkedBigNumberify(
                "./index.rsh:148:11:decimal",
                stdlib.UInt_max,
                "0"
              ),
              [],
            ],
            sim_p: async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => {
                sim_txn_ctr = sim_txn_ctr.sub(1);
                return sim_txn_ctr;
              };

              const {
                data: [v538, v539],
                secs: v541,
                time: v540,
                didSend: v158,
                from: v537,
              } = txn6;

              const v549 = stdlib.safeAdd(v540, v451);
              sim_r.isHalt = false;

              return sim_r;
            },
            soloSend: true,
            timeoutAt: ["time", v531],
            tys: [
              ctc3,
              ctc0,
              ctc0,
              ctc3,
              ctc0,
              ctc0,
              ctc0,
              ctc0,
              ctc2,
              ctc2,
              ctc0,
              ctc0,
              ctc0,
            ],
            waitIfNotPresent: false,
          });
          if (txn6.didTimeout) {
            const txn7 = await ctc.sendrecv({
              args: [
                v449,
                v450,
                v451,
                v466,
                v484,
                v485,
                v486,
                v494,
                v520,
                v521,
                v531,
              ],
              evt_cnt: 0,
              funcNum: 10,
              lct: v522,
              onlyIf: true,
              out_tys: [],
              pay: [
                stdlib.checkedBigNumberify(
                  "reach standard library:197:11:decimal",
                  stdlib.UInt_max,
                  "0"
                ),
                [],
              ],
              sim_p: async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => {
                  sim_txn_ctr = sim_txn_ctr.sub(1);
                  return sim_txn_ctr;
                };

                const {
                  data: [],
                  secs: v614,
                  time: v613,
                  didSend: v264,
                  from: v612,
                } = txn7;

                sim_r.txns.push({
                  kind: "from",
                  to: v449,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;

                return sim_r;
              },
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [
                ctc3,
                ctc0,
                ctc0,
                ctc3,
                ctc0,
                ctc0,
                ctc0,
                ctc0,
                ctc2,
                ctc2,
                ctc0,
              ],
              waitIfNotPresent: false,
            });
            const {
              data: [],
              secs: v614,
              time: v613,
              didSend: v264,
              from: v612,
            } = txn7;
            const v615 = stdlib.addressEq(v449, v612);
            const v616 = stdlib.addressEq(v466, v612);
            const v617 = v615 ? true : v616;
            stdlib.assert(v617, {
              at: "reach standard library:197:11:dot",
              fs: [
                'at ./index.rsh:150:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
              ],
              msg: "sender correct",
              who: "Bob",
            });
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: "./index.rsh:95:52:application",
              fs: [
                "at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)",
                'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:94:28:function exp)',
                'at ./index.rsh:150:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
              ],
              msg: "informTimeout",
              who: "Bob",
            });

            return;
          } else {
            const {
              data: [v538, v539],
              secs: v541,
              time: v540,
              didSend: v158,
              from: v537,
            } = txn6;
            const v542 = stdlib.addressEq(v466, v537);
            stdlib.assert(v542, {
              at: "./index.rsh:148:11:dot",
              fs: [],
              msg: "sender correct",
              who: "Bob",
            });
            const v549 = stdlib.safeAdd(v540, v451);
            const txn7 = await ctc.recv({
              didSend: false,
              evt_cnt: 4,
              funcNum: 11,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              timeoutAt: ["time", v549],
              waitIfNotPresent: false,
            });
            if (txn7.didTimeout) {
              const txn8 = await ctc.sendrecv({
                args: [
                  v449,
                  v450,
                  v451,
                  v466,
                  v484,
                  v485,
                  v486,
                  v494,
                  v520,
                  v521,
                  v538,
                  v539,
                  v549,
                ],
                evt_cnt: 0,
                funcNum: 12,
                lct: v540,
                onlyIf: true,
                out_tys: [],
                pay: [
                  stdlib.checkedBigNumberify(
                    "reach standard library:197:11:decimal",
                    stdlib.UInt_max,
                    "0"
                  ),
                  [],
                ],
                sim_p: async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => {
                    sim_txn_ctr = sim_txn_ctr.sub(1);
                    return sim_txn_ctr;
                  };

                  const {
                    data: [],
                    secs: v598,
                    time: v597,
                    didSend: v230,
                    from: v596,
                  } = txn8;

                  sim_r.txns.push({
                    kind: "from",
                    to: v466,
                    tok: undefined /* Nothing */,
                  });
                  sim_r.txns.push({
                    kind: "halt",
                    tok: undefined /* Nothing */,
                  });
                  sim_r.isHalt = true;

                  return sim_r;
                },
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [
                  ctc3,
                  ctc0,
                  ctc0,
                  ctc3,
                  ctc0,
                  ctc0,
                  ctc0,
                  ctc0,
                  ctc2,
                  ctc2,
                  ctc0,
                  ctc0,
                  ctc0,
                ],
                waitIfNotPresent: false,
              });
              const {
                data: [],
                secs: v598,
                time: v597,
                didSend: v230,
                from: v596,
              } = txn8;
              const v599 = stdlib.addressEq(v449, v596);
              const v600 = stdlib.addressEq(v466, v596);
              const v601 = v599 ? true : v600;
              stdlib.assert(v601, {
                at: "reach standard library:197:11:dot",
                fs: [
                  'at ./index.rsh:166:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
                ],
                msg: "sender correct",
                who: "Bob",
              });
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: "./index.rsh:95:52:application",
                fs: [
                  "at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)",
                  'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:94:28:function exp)',
                  'at ./index.rsh:166:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
                ],
                msg: "informTimeout",
                who: "Bob",
              });

              return;
            } else {
              const {
                data: [v554, v555, v556, v557],
                secs: v559,
                time: v558,
                didSend: v170,
                from: v553,
              } = txn7;
              const v560 = stdlib.addressEq(v449, v553);
              stdlib.assert(v560, {
                at: "./index.rsh:164:13:dot",
                fs: [],
                msg: "sender correct",
                who: "Bob",
              });
              const v561 = stdlib.digest([ctc0, ctc0], [v555, v554]);
              const v562 = stdlib.digestEq(v520, v561);
              stdlib.assert(v562, {
                at: "reach standard library:69:17:application",
                fs: [
                  'at ./index.rsh:169:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)',
                ],
                msg: null,
                who: "Bob",
              });
              const v563 = stdlib.digest([ctc0, ctc0], [v557, v556]);
              const v564 = stdlib.digestEq(v521, v563);
              stdlib.assert(v564, {
                at: "reach standard library:69:17:application",
                fs: [
                  'at ./index.rsh:170:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)',
                ],
                msg: null,
                who: "Bob",
              });
              const v565 = stdlib.eq(v556, v539);
              let v566;
              if (v565) {
                v566 = stdlib.checkedBigNumberify(
                  "./index.rsh:makeEnum",
                  stdlib.UInt_max,
                  "1"
                );
              } else {
                const v567 = stdlib.safeAdd(v554, v538);
                const v568 = stdlib.eq(v567, v556);
                let v569;
                if (v568) {
                  v569 = stdlib.checkedBigNumberify(
                    "./index.rsh:makeEnum",
                    stdlib.UInt_max,
                    "0"
                  );
                } else {
                  const v571 = stdlib.eq(v567, v539);
                  const v572 = v571
                    ? stdlib.checkedBigNumberify(
                        "./index.rsh:makeEnum",
                        stdlib.UInt_max,
                        "2"
                      )
                    : stdlib.checkedBigNumberify(
                        "./index.rsh:makeEnum",
                        stdlib.UInt_max,
                        "1"
                      );
                  v569 = v572;
                }
                v566 = v569;
              }
              const v578 = stdlib.safeAdd(v554, v538);
              stdlib.protect(ctc1, await interact.seeWinning(v578), {
                at: "./index.rsh:181:28:application",
                fs: [
                  "at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:29:function exp)",
                ],
                msg: "seeWinning",
                who: "Bob",
              });
              stdlib.protect(
                ctc1,
                await interact.roundWinner(v566, v554, v538, v556, v539),
                {
                  at: "./index.rsh:183:31:application",
                  fs: [
                    "at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:29:function exp)",
                  ],
                  msg: "roundWinner",
                  who: "Bob",
                }
              );

              const v579 = stdlib.eq(
                v566,
                stdlib.checkedBigNumberify(
                  "./index.rsh:194:20:decimal",
                  stdlib.UInt_max,
                  "0"
                )
              );
              let v580;
              if (v579) {
                const v581 = stdlib.safeAdd(
                  v484,
                  stdlib.checkedBigNumberify(
                    "./index.rsh:195:25:decimal",
                    stdlib.UInt_max,
                    "2"
                  )
                );
                const v582 = stdlib.safeAdd(
                  v486,
                  stdlib.checkedBigNumberify(
                    "./index.rsh:195:48:decimal",
                    stdlib.UInt_max,
                    "1"
                  )
                );
                const v583 = [v581, v485, v582];
                v580 = v583;
              } else {
                const v584 = stdlib.eq(
                  v566,
                  stdlib.checkedBigNumberify(
                    "./index.rsh:196:24:decimal",
                    stdlib.UInt_max,
                    "2"
                  )
                );
                let v585;
                if (v584) {
                  const v586 = stdlib.safeAdd(
                    v485,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:197:37:decimal",
                      stdlib.UInt_max,
                      "2"
                    )
                  );
                  const v587 = stdlib.safeAdd(
                    v486,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:197:48:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v588 = [v484, v586, v587];
                  v585 = v588;
                } else {
                  const v589 = stdlib.safeAdd(
                    v484,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:198:25:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v590 = stdlib.safeAdd(
                    v485,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:198:37:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v591 = stdlib.safeAdd(
                    v486,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:198:48:decimal",
                      stdlib.UInt_max,
                      "1"
                    )
                  );
                  const v592 = [v589, v590, v591];
                  v585 = v592;
                }
                v580 = v585;
              }
              const v593 =
                v580[
                  stdlib.checkedBigNumberify(
                    "./index.rsh:193:7:array",
                    stdlib.UInt_max,
                    "0"
                  )
                ];
              const v594 =
                v580[
                  stdlib.checkedBigNumberify(
                    "./index.rsh:193:7:array",
                    stdlib.UInt_max,
                    "1"
                  )
                ];
              const v595 =
                v580[
                  stdlib.checkedBigNumberify(
                    "./index.rsh:193:7:array",
                    stdlib.UInt_max,
                    "2"
                  )
                ];
              const cv484 = v593;
              const cv485 = v594;
              const cv486 = v595;
              const cv487 = v558;
              const cv494 = v494;

              v484 = cv484;
              v485 = cv485;
              v486 = cv486;
              v487 = cv487;
              v494 = cv494;

              txn4 = txn7;
              continue;
            }
          }
        }
      }
      const txn5 = await ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false,
      });
      const {
        data: [v647],
        secs: v649,
        time: v648,
        didSend: v321,
        from: v646,
      } = txn5;
      const v650 = stdlib.addressEq(v449, v646);
      stdlib.assert(v650, {
        at: "./index.rsh:206:11:dot",
        fs: [],
        msg: "sender correct",
        who: "Bob",
      });
      stdlib.protect(ctc1, await interact.endGame(), {
        at: "./index.rsh:209:54:application",
        fs: [
          "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:17:function exp)",
        ],
        msg: "endGame",
        who: "Bob",
      });

      const txn6 = await ctc.sendrecv({
        args: [v449, v450, v451, v466, v484, v485, v494, null],
        evt_cnt: 1,
        funcNum: 6,
        lct: v648,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [
          stdlib.checkedBigNumberify(
            "./index.rsh:212:9:decimal",
            stdlib.UInt_max,
            "0"
          ),
          [],
        ],
        sim_p: async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };

          const {
            data: [v654],
            secs: v656,
            time: v655,
            didSend: v330,
            from: v653,
          } = txn6;

          const v658 = stdlib.gt(v484, v485);
          const v659 = stdlib.gt(v485, v484);
          const v660 = v659
            ? stdlib.checkedBigNumberify(
                "./index.rsh:214:55:decimal",
                stdlib.UInt_max,
                "2"
              )
            : stdlib.checkedBigNumberify(
                "./index.rsh:214:59:decimal",
                stdlib.UInt_max,
                "1"
              );
          const v661 = v658
            ? stdlib.checkedBigNumberify(
                "./index.rsh:214:31:decimal",
                stdlib.UInt_max,
                "0"
              )
            : v660;
          const cv471 = v661;
          const cv472 = v655;
          const cv479 = v494;

          await (async () => {
            const v471 = cv471;
            const v472 = cv472;
            const v479 = cv479;

            if (
              await (async () => {
                const v483 = stdlib.eq(
                  v471,
                  stdlib.checkedBigNumberify(
                    "./index.rsh:makeEnum",
                    stdlib.UInt_max,
                    "1"
                  )
                );

                return v483;
              })()
            ) {
              const v484 = stdlib.checkedBigNumberify(
                "./index.rsh:115:41:decimal",
                stdlib.UInt_max,
                "0"
              );
              const v485 = stdlib.checkedBigNumberify(
                "./index.rsh:115:44:decimal",
                stdlib.UInt_max,
                "0"
              );
              const v486 = stdlib.checkedBigNumberify(
                "./index.rsh:115:38:decimal",
                stdlib.UInt_max,
                "0"
              );
              const v487 = v472;
              const v494 = v479;

              if (
                await (async () => {
                  const v498 = stdlib.lt(
                    v486,
                    stdlib.checkedBigNumberify(
                      "./index.rsh:117:20:decimal",
                      stdlib.UInt_max,
                      "3"
                    )
                  );

                  return v498;
                })()
              ) {
                const v505 = stdlib.safeAdd(v487, v451);
                sim_r.isHalt = false;
              } else {
                sim_r.isHalt = false;
              }
            } else {
              const v662 = stdlib.safeMul(
                stdlib.checkedBigNumberify(
                  "./index.rsh:218:12:decimal",
                  stdlib.UInt_max,
                  "2"
                ),
                v450
              );
              const v663 = stdlib.eq(
                v471,
                stdlib.checkedBigNumberify(
                  "./index.rsh:makeEnum",
                  stdlib.UInt_max,
                  "0"
                )
              );
              const v664 = v663 ? v449 : v466;
              sim_r.txns.push({
                kind: "from",
                to: v664,
                tok: undefined /* Nothing */,
              });

              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;
            }
          })();
          return sim_r;
        },
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc1],
        waitIfNotPresent: false,
      });
      const {
        data: [v654],
        secs: v656,
        time: v655,
        didSend: v330,
        from: v653,
      } = txn6;
      const v657 = stdlib.addressEq(v466, v653);
      stdlib.assert(v657, {
        at: "./index.rsh:212:9:dot",
        fs: [],
        msg: "sender correct",
        who: "Bob",
      });
      const v658 = stdlib.gt(v484, v485);
      const v659 = stdlib.gt(v485, v484);
      const v660 = v659
        ? stdlib.checkedBigNumberify(
            "./index.rsh:214:55:decimal",
            stdlib.UInt_max,
            "2"
          )
        : stdlib.checkedBigNumberify(
            "./index.rsh:214:59:decimal",
            stdlib.UInt_max,
            "1"
          );
      const v661 = v658
        ? stdlib.checkedBigNumberify(
            "./index.rsh:214:31:decimal",
            stdlib.UInt_max,
            "0"
          )
        : v660;
      const cv471 = v661;
      const cv472 = v655;
      const cv479 = v494;

      v471 = cv471;
      v472 = cv472;
      v479 = cv479;

      txn3 = txn6;
      continue;
    }
    const v662 = stdlib.safeMul(
      stdlib.checkedBigNumberify(
        "./index.rsh:218:12:decimal",
        stdlib.UInt_max,
        "2"
      ),
      v450
    );
    const v663 = stdlib.eq(
      v471,
      stdlib.checkedBigNumberify("./index.rsh:makeEnum", stdlib.UInt_max, "0")
    );
    const v664 = v663 ? v449 : v466;
    stdlib.protect(ctc1, await interact.seeOutcome(v471), {
      at: "./index.rsh:222:24:application",
      fs: [
        "at ./index.rsh:221:7:application call to [unknown function] (defined at: ./index.rsh:221:25:function exp)",
      ],
      msg: "seeOutcome",
      who: "Bob",
    });

    return;
  }
}
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: [],
  },
  appApproval: `ByAVAAEIAiBoKAxQWGAKB7ABBsABEHAFMAMmAwEAAQEAIjUAMRhBBv4qZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQwMQAPWSSELDEAB80mBCwxAAZhJIQcMQABXIQcSRCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEyqvON7AyBjQDIQ9bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBVuyCCOyEDT/sgezQgYUSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSklXACA1/yEIWzX+IQlbNf0hCls1/IG4AVs1+0k1BUlKIls1+iRbNfkhEFs1+IEYWzX3gARwoGWONPoWUDT5FlA0+BZQNPcWULAyBjQDIQ9bDEQ0/zEAEkQ0A1dwIDT5FjT6FlABEkQ0A1eQIDT3FjT4FlABEkQ0+DT7EkEABiM19EIAJTT6NAMhDVsISTXzNPgSQQAGIjXyQgAKIyU08zT7Ek018jTyNfQ09CISQQAUNP4lCBY0/RZQNPwjCBZQNfNCADI09CUSQQAUNP4WNP0lCBZQNPwjCBZQNfJCABM0/iMIFjT9IwgWUDT8IwgWUDXyNPI18zT/NAMhBFs0AyEGWzQDVzAgNPMiWzTzJFs08yEQWzIGNAMhBVtCBFpIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATTRHMjsDIGNAMhDVsPRDT/MQASNANXMCAxABIRRLEisgE0AyEFW7III7IQNP+yB7NCBIZJJAxAASJJgQkMQADLSCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSlcAIDX/IQRbNf4hBls1/VcwIDX8IQhbNfshCVs1+iEKWzX5IQVbNfhXcCA191eQIDX2STUFSSJbNfUkWzX0gASp2U09NPUWUDT0FlCwMgY0AyENWwxENPwxABJEMgY0/Qg18zT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+BZQNPdQNPZQNPUWUDT0FlA08xZQKEsBVwB/ZylLAVd/SWdIIQc1ATIGNQJCA8pIJDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABBf82y6wMgY0AyERWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQVbsggjshA0/7IHs0IDXkgkNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8hBFs1/iEGWzX9VzAgNfwhCFs1+yEJWzX6IQpbNfkhBVs1+Ek1BUlXACA191cgIDX2gASmLsV4NPdQNPZQsDIGNAMhEVsMRDT/MQASRDIGNP0INfU0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPgWUDT3UDT2UDT1FlAoSwFXAH9nKUsBV385Z0ghCzUBMgY1AkICxkklDEABNEkhEgxAAO1JIQ4MQABnSCEMNAESRDQESSISTDQCEhFEKGRJNQNJSVcwIDX/IQhbNf4hCVs1/Uk1BTX8gAQFR7RRNPxQsDT/MQASRDQDVwAgNAMhBFs0AyEGWzT/IyU0/TT+DU0iNP40/Q1NMgY0AyEKW0IBbEghDjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQRbNf4hBls1/VcwIDX8IQhbNfshCVs1+iEKWzX5STUFNfiABFMRNrk0+FCwNP8xABJENP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUChLAVcAaGdIIQw1ATIGNQJCAcwlEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRNbD0SxIrIBNAMhBFuyCCOyEDQDVwAgsgezQgFwSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/gASai5F0sDIGNAMhE1sMRDT/iAGoNANXACA0/zQDIQZbMQAjMgY0/0kIQgBfSIGgjQaIAYgiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAVgyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAN81/zX+Nf01/DX7Nfo1+TT9IxJBABI0+TT6NPs0/CIiIjT+NP9CAByxIrIBJTT6C7III7IQNPw0+TT9IhJNsgezQgCANf81/jX9Nfw1+zX6Nfk1+DX3NP0hFAxBADo0/jT5CDX2NPc0+BZQNPkWUDT6UDT7FlA0/BZQNP0WUDT/FlA09hZQKEsBVwB4Z0gkNQEyBjUCQgBINPc0+BZQNPkWUDT6UDT7FlA0/BZQNP8WUChLAVcAaGdIIQ41ATIGNQJCABwxGSESEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIRQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 200,
  unsupported: [],
  version: 11,
  warnings: [],
};
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v450",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v451",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v450",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v451",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v554",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v555",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v556",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v557",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v647",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v654",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v520",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v521",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v538",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v539",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v554",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v555",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v556",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v557",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v647",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v654",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v520",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v521",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v538",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v539",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002859380380620028598339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6124dc806200037d6000396000f3fe6080604052600436106100bd5760003560e01c80637eea518c11610079578063ab53f2c611610056578063ab53f2c614610184578063ad9fa3d8146101a7578063e00acef1146101ba578063e533a29d146101cd57005b80637eea518c14610149578063832307571461015c5780638d6efe9e1461017157005b806311faee8c146100c65780631e93b0f1146100d9578063273206b8146100fd5780632c10a15914610110578063422eb85c146101235780636da017a01461013657005b366100c457005b005b6100c46100d4366004611d53565b6101e0565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b6100c461010b366004611d88565b610397565b6100c461011e366004611d53565b610651565b6100c4610131366004611d88565b6107e0565b6100c4610144366004611d53565b610a48565b6100c4610157366004611d53565b610c09565b34801561016857600080fd5b506001546100ea565b6100c461017f366004611da4565b610d6c565b34801561019057600080fd5b50610199611177565b6040516100f4929190611db6565b6100c46101b5366004611d53565b611214565b6100c46101c8366004611d53565b6113d4565b6100c46101db366004611d53565b61156c565b6101f0600c6000541460356116c3565b61020a8135158061020357506001548235145b60366116c3565b60008080556002805461021c90611e13565b80601f016020809104026020016040519081016040528092919081815260200182805461024890611e13565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad9190611f00565b90506102c281610180015143101560376116c3565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf33836040516102f3929190611fc3565b60405180910390a1610307341560336116c3565b805161033b906001600160a01b031633146103315760608201516001600160a01b03163314610334565b60015b60346116c3565b80606001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f1935050505015801561037c573d6000803e3d6000fd5b506000808055600181905561039390600290611a94565b5050565b6103a7600a6000541460246116c3565b6103c1813515806103ba57506001548235145b60256116c3565b6000808055600280546103d390611e13565b80601f01602080910402602001604051908101604052809291908181526020018280546103ff90611e13565b801561044c5780601f106104215761010080835404028352916020019161044c565b820191906000526020600020905b81548152906001019060200180831161042f57829003601f168201915b50505050508060200190518101906104649190611ff8565b905061047c6040518060200160405280600081525090565b61048e826101400151431060266116c3565b7f61a975c2eb129c07d71a871df28eb78724f84a0b02b4a03b148b42a7224a9a2833846040516104bf929190612099565b60405180910390a16104d3341560226116c3565b60608201516104ee906001600160a01b0316331460236116c3565b6104fc4383604001516116e9565b816000018181525050610582604051806101a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e080860151908401526101008086015190840152610120808601519084015285810135610140840152858201356101608401528351610180840152600c600055436001559051610626918391016120ca565b6040516020818303038152906040526002908051906020019061064a929190611ace565b5050505050565b61066160016000541460096116c3565b61067b8135158061067457506001548235145b600a6116c3565b60008080556002805461068d90611e13565b80601f01602080910402602001604051908101604052809291908181526020018280546106b990611e13565b80156107065780601f106106db57610100808354040283529160200191610706565b820191906000526020600020905b8154815290600101906020018083116106e957829003601f168201915b505050505080602001905181019061071e9190612175565b905061073181606001514310600b6116c3565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610762929190611fc3565b60405180910390a161077b8160200151341460086116c3565b610783611b52565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526107db8161173c565b505050565b6107f0600860005414601a6116c3565b61080a8135158061080357506001548235145b601b6116c3565b60008080556002805461081c90611e13565b80601f016020809104026020016040519081016040528092919081815260200182805461084890611e13565b80156108955780601f1061086a57610100808354040283529160200191610895565b820191906000526020600020905b81548152906001019060200180831161087857829003601f168201915b50505050508060200190518101906108ad91906121ee565b90506108c56040518060200160405280600081525090565b6108d78261010001514310601c6116c3565b7f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa3384604051610908929190612099565b60405180910390a161091c341560186116c3565b8151610934906001600160a01b0316331460196116c3565b6109424383604001516116e9565b8160000181815250506109ba60405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e0808601519084015285810135610100840152858201356101208401528351610140840152600a60005543600155905161062691839101612277565b610a5860076000541460166116c3565b610a7281351580610a6b57506001548235145b60176116c3565b600080805560028054610a8490611e13565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab090611e13565b8015610afd5780601f10610ad257610100808354040283529160200191610afd565b820191906000526020600020905b815481529060010190602001808311610ae057829003601f168201915b5050505050806020019051810190610b15919061230a565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3383604051610b489291906123c3565b60405180910390a1610b5c341560146116c3565b6060810151610b77906001600160a01b0316331460156116c3565b610b7f611b52565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260a0820151608083015111610be15781608001518260a0015111610bda576001610be4565b6002610be4565b60005b602080830180519290925281514391015260c08301519051604001526107db8161173c565b610c19600160005414600d6116c3565b610c3381351580610c2c57506001548235145b600e6116c3565b600080805560028054610c4590611e13565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7190611e13565b8015610cbe5780601f10610c9357610100808354040283529160200191610cbe565b820191906000526020600020905b815481529060010190602001808311610ca157829003601f168201915b5050505050806020019051810190610cd69190612175565b9050610cea8160600151431015600f6116c3565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610d1b929190611fc3565b60405180910390a1610d2f3415600c6116c3565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561037c573d6000803e3d6000fd5b610d7c600c6000541460306116c3565b610d9681351580610d8f57506001548235145b60316116c3565b600080805560028054610da890611e13565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd490611e13565b8015610e215780601f10610df657610100808354040283529160200191610e21565b820191906000526020600020905b815481529060010190602001808311610e0457829003601f168201915b5050505050806020019051810190610e399190611f00565b9050610e43611b93565b610e55826101800151431060326116c3565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fbca2c6dddde201696f8d31ac09fe37ee7059933539848fce9f3671c7397d16939060c00160405180910390a1610ec83415602c6116c3565b8151610ee0906001600160a01b03163314602d6116c3565b60408051610f2e91610f079190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83610100015114602e6116c3565b6040805160808501356020808301919091526060808701358385015283518084038501815292019092528051910120610120830151610f6f9114602f6116c3565b61016082015160608401351415610f895760018152610fe5565b610f9f83602001600001358361014001516116e9565b6020820181905260608401351415610fbd5760006040820152610fdd565b816101600151816020015114610fd4576001610fd7565b60025b60408201525b604081015181525b805161103757610ffa826080015160026116e9565b6080820180519190915260a083015190516020015260c082015161101f9060016116e9565b608082018051604001919091525160608201526110ed565b80516002141561109057608082015160c08201515260a082015161105c9060026116e9565b8160c0015160200181815250506110788260c0015160016116e9565b60c082018051604001919091525160a08201526110e2565b61109f826080015160016116e9565b60e08201515260a08201516110b59060016116e9565b60e08201516020015260c08201516110ce9060016116e9565b60e082018051604001919091525160a08201525b60a081015160608201525b6110f5611c53565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169381019390935284830180515183860180519190915281518401518151909401939093525181015182519091015280514392019190915260e084015190516080015261117181611848565b50505050565b60006060600054600280805461118c90611e13565b80601f01602080910402602001604051908101604052809291908181526020018280546111b890611e13565b80156112055780601f106111da57610100808354040283529160200191611205565b820191906000526020600020905b8154815290600101906020018083116111e857829003601f168201915b50505050509050915091509091565b61122460066000541460126116c3565b61123e8135158061123757506001548235145b60136116c3565b60008080556002805461125090611e13565b80601f016020809104026020016040519081016040528092919081815260200182805461127c90611e13565b80156112c95780601f1061129e576101008083540402835291602001916112c9565b820191906000526020600020905b8154815290600101906020018083116112ac57829003601f168201915b50505050508060200190518101906112e1919061230a565b90507f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c2136533836040516113149291906123c3565b60405180910390a1611328341560106116c3565b8051611340906001600160a01b0316331460116116c3565b611348611c9d565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c0808501519084015260076000554360015590516113b0918391016123e0565b60405160208183030381529060405260029080519060200190611171929190611ace565b6113e4600a6000541460296116c3565b6113fe813515806113f757506001548235145b602a6116c3565b60008080556002805461141090611e13565b80601f016020809104026020016040519081016040528092919081815260200182805461143c90611e13565b80156114895780601f1061145e57610100808354040283529160200191611489565b820191906000526020600020905b81548152906001019060200180831161146c57829003601f168201915b50505050508060200190518101906114a19190611ff8565b90506114b6816101400151431015602b6116c3565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a33836040516114e7929190611fc3565b60405180910390a16114fb341560276116c3565b805161152f906001600160a01b031633146115255760608201516001600160a01b03163314611528565b60015b60286116c3565b805160e08201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561037c573d6000803e3d6000fd5b61157c600860005414601f6116c3565b6115968135158061158f57506001548235145b60206116c3565b6000808055600280546115a890611e13565b80601f01602080910402602001604051908101604052809291908181526020018280546115d490611e13565b80156116215780601f106115f657610100808354040283529160200191611621565b820191906000526020600020905b81548152906001019060200180831161160457829003601f168201915b505050505080602001905181019061163991906121ee565b905061164e81610100015143101560216116c3565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338360405161167f929190611fc3565b60405180910390a16116933415601d6116c3565b805161033b906001600160a01b031633146116bd5760608201516001600160a01b031633146116c0565b60015b601e5b816103935760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826116f6838261244d565b91508110156117365760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016116e0565b92915050565b602081015151600114156117cd57611752611c53565b81515181516001600160a01b03918216905282516020908101518351820152835160409081015184518201528451606090810151855194169381019390935281840180516000908190528151840181905281518301528286018051909301518151909401939093529051015190516080015261039381611848565b602081015151156117e3578051606001516117e7565b8051515b6001600160a01b03166108fc6118066002846000015160200151611a35565b6040518115909202916000818181858888f1935050505015801561182e573d6000803e3d6000fd5b506000808055600181905561184590600290611a94565b50565b604080516020810190915260008152600382602001516040015110156119ba576118828260200151606001518360000151604001516116e9565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091528251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252808501805151608080860191909152815183015160a0860152815184015160c08601529051015160e0840152835161010084015260086000554360015590516113b09183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b6119c2611c9d565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252808501805151608080860191909152815183015160a08601529051015160c084015260066000554360015590516113b0918391016123e0565b6000811580611a5957508282611a4b8183612465565b9250611a579083612484565b145b6117365760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016116e0565b508054611aa090611e13565b6000825580601f10611ab0575050565b601f0160209004906000526020600020908101906118459190611cec565b828054611ada90611e13565b90600052602060002090601f016020900481019282611afc5760008555611b42565b82601f10611b1557805160ff1916838001178555611b42565b82800160010185558215611b42579182015b82811115611b42578251825591602001919060010190611b27565b50611b4e929150611cec565b5090565b6040518060400160405280611b65611d01565b8152602001611b8e60405180606001604052806000815260200160008152602001600081525090565b905290565b604051806101000160405280600081526020016000815260200160008152602001611bd860405180606001604052806000815260200160008152602001600081525090565b8152602001611c0160405180606001604052806000815260200160008152602001600081525090565b8152602001611c2a60405180606001604052806000815260200160008152602001600081525090565b8152602001611b6560405180606001604052806000815260200160008152602001600081525090565b6040518060400160405280611c66611d01565b8152602001611b8e6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b5b80821115611b4e5760008155600101611ced565b604051806080016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b600060408284031215611d4d57600080fd5b50919050565b600060408284031215611d6557600080fd5b611d6f8383611d3b565b9392505050565b600060608284031215611d4d57600080fd5b600060608284031215611d9a57600080fd5b611d6f8383611d76565b600060a08284031215611d4d57600080fd5b82815260006020604081840152835180604085015260005b81811015611dea57858101830151858201606001528201611dce565b81811115611dfc576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611e2757607f821691505b60208210811415611d4d57634e487b7160e01b600052602260045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611e7a57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610160810167ffffffffffffffff81118282101715611e7a57634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715611e7a57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611efb57600080fd5b919050565b60006101a08284031215611f1357600080fd5b611f1b611e48565b611f2483611ee4565b81526020830151602082015260408301516040820152611f4660608401611ee4565b60608201526080838101519082015260a0808401519082015260c0808401519082015260e080840151908201526101008084015190820152610120808401519082015261014080840151908201526101608084015190820152610180928301519281019290925250919050565b80358015158114611efb57600080fd5b6001600160a01b038316815281356020808301919091526060820190611fea908401611fb3565b151560408301529392505050565b6000610160828403121561200b57600080fd5b612013611e80565b61201c83611ee4565b8152602083015160208201526040830151604082015261203e60608401611ee4565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152508091505092915050565b6001600160a01b038316815260808101611d6f60208301848035825260208082013590830152604090810135910152565b81516001600160a01b031681526101a081016020830151602083015260408301516040830152606083015161210a60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151818401525061018080840151818401525092915050565b60006080828403121561218757600080fd5b6040516080810181811067ffffffffffffffff821117156121b857634e487b7160e01b600052604160045260246000fd5b6040526121c483611ee4565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6000610120828403121561220157600080fd5b612209611eb2565b61221283611ee4565b8152602083015160208201526040830151604082015261223460608401611ee4565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b81516001600160a01b031681526101608101602083015160208301526040830151604083015260608301516122b760608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b600060e0828403121561231c57600080fd5b60405160e0810181811067ffffffffffffffff8211171561234d57634e487b7160e01b600052604160045260246000fd5b60405261235983611ee4565b8152602083015160208201526040830151604082015261237b60608401611ee4565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b803582526123b860208201611fb3565b151560208301525050565b6001600160a01b038316815260608101611d6f60208301846123a8565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b634e487b7160e01b600052601160045260246000fd5b6000821982111561246057612460612437565b500190565b600081600019048311821515161561247f5761247f612437565b500290565b6000826124a157634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212207eb0fc76df81cb35d175301d64653487e2691b68192535d818cb5de73553894f64736f6c634300080c0033`,
  BytecodeLen: 10329,
  Which: `oD`,
  version: 8,
  views: {},
};
export const _stateSourceMap = {
  1: {
    at: "./index.rsh:103:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  2: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./index.rsh:109:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
    ],
    msg: null,
    who: "Module",
  },
  4: {
    at: "./index.rsh:225:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  6: {
    at: "./index.rsh:205:13:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  7: {
    at: "./index.rsh:211:13:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  8: {
    at: "./index.rsh:118:15:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  9: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./index.rsh:139:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
    ],
    msg: null,
    who: "Module",
  },
  10: {
    at: "./index.rsh:142:15:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  11: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./index.rsh:150:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
    ],
    msg: null,
    who: "Module",
  },
  12: {
    at: "./index.rsh:153:15:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  13: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./index.rsh:166:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
    ],
    msg: null,
    who: "Module",
  },
};
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH,
};
export const _Participants = {
  Alice: Alice,
  Bob: Bob,
};
export const _APIs = {};
