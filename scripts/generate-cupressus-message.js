const fs = require("fs");

const cupressusses = [
  "Cupressus amoena K.Koch",
  "Cupressus arizonica Greene",
  "Cupressus bakeri Jeps.",
  "Cupressus balfouriana Lemoine ex Gordon",
  "Cupressus breviramis F. Muell.",
  "Cupressus cashmeriana Royle ex Carrière",
  "Cupressus chengiana S.Y.Hu",
  "Cupressus duclouxiana Hickel",
  "Cupressus dupreziana A.Camus",
  "Cupressus elegans Lavallée",
  "Cupressus ericoides Ravenscr.",
  "Cupressus funebris Endl.",
  "Cupressus gigantea W.C.Cheng & L.K.Fu",
  "Cupressus goveniana Gordon",
  "Cupressus guadalupensis S.Watson",
  "Cupressus × hickelii A.Camus",
  "Cupressus × hybrida A.Camus",
  "Cupressus × leylandii A.B.Jacks. & Dallim.",
  "Cupressus × loritiensis Demoly",
  "Cupressus lusitanica Mill.",
  "Cupressus macnabiana A.Murray bis",
  "Cupressus macrocarpa Hartw.",
  "Cupressus madeirensis T.E.Bowdich",
  "Cupressus nivea Gordon",
  "Cupressus nootkatensis D.Don",
  "Cupressus × notabilis",
  "Cupressus × ovensii",
  "Cupressus religiosa Lavallée",
  "Cupressus sargentii Jeps.",
  "Cupressus sempervirens L.",
  "Cupressus thuia Targ. Tozz.",
  "Cupressus tonkinensis Silba",
  "Cupressus torulosa D.Don",
  "Cupressus torulosa D. Don ex Lamb.",
  "Cupressus torulosis Griff.",
  "Cupressus ugelii Hort. ex Lavallée",
  "Cupressus vietnamensis",
];

const goAways = [
  "beauty",
  "bed",
  "bed down",
  "bunk",
  "bye-byes",
  "catch a wink",
  "catch forty winks",
  "catnap",
  "cease",
  "conk out",
  "cop some z's",
  "count",
  "crash",
  "dead",
  "delayed sleep phase pattern",
  "desist",
  "doze",
  "dream",
  "drift off",
  "drop",
  "drop off",
  "drowse",
  "end",
  "fall asleep",
  "fall out",
  "flake",
  "flop",
  "give a rest",
  "halt",
  "hibernate",
  "hit the hay",
  "hit the sack",
  "hypnotic",
  "knock sb sideways/for six",
  "languish",
  "leave alone",
  "leave off",
  "let up",
  "lie",
  "lie by",
  "nap",
  "nod",
  "nod off",
  "oversleep",
  "quit",
  "relax",
  "repose",
  "rest",
  "retire",
  "sack out",
  "siesta",
  "sleep",
  "sleep lightly",
  "slumber",
  "snooze",
  "snore",
  "sparko",
  "spell",
  "take forty winks",
  "yawn",
  "you may rest",
  "Z, z",
];

let message = `🌲 Dear ${
  cupressusses[Math.floor(Math.random() * cupressusses.length)]
}, ${goAways[Math.floor(Math.random() * goAways.length)]}!`;

fs.writeFileSync("./scripts/cupressus-message", message);
