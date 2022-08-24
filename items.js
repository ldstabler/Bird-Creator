let ITM = [
  [ // hats
    { f: '00', p: v(0,0),    s: v(1,1), n: "default"  ,t:'hats'},
    { f: '1a', p: v(7,-7),   s: v(3,3), n: "cardinal" ,t:'hats'},
    { f: '4a', p: v(20,-16), s: v(2,3), n: "parrot"   ,t:'hats'},
    { f: '1d', p: v(12,-14), s: v(3,3), n: "paper"    ,t:'hats'},
    { f: '4c', p: v(16,-3),  s: v(2,2), n: "bow"      ,t:'hats'},
    { f: '4e', p: v(24,-15), s: v(2,2), n: "party"    ,t:'hats'},
    { f: '6c', p: v(20,-8),  s: v(2,2), n: "top"      ,t:'hats'},
    { f: '6e', p: v(20,-7),  s: v(2,2), n: "cap"      ,t:'hats'},
    { f: '79', p: v(12,-28), s: v(3,4), n: "witch"    ,t:'hats'},
    { f: '8c', p: v(3,-12),  s: v(4,3), n: "cowboy"   ,t:'hats'},
    { f: '65', p: v(2,-13),  s: v(4,3), n: "sombrero" ,t:'hats'}
  ],
  [ // tails
    { f: '32', p: v(-34,35), s: v(3,3), n: "default"  ,t:'tail'},
    { f: '00', p: v(-66,33), s: v(5,3), n: "parrot"   ,t:'tail'},
    { f: '64', p: v(-1,35),  s: v(1,3), n: "kiwi"     ,t:'tail'}
  ],
  [ // eyes
    { f: '0f', p: v(32,13),  s: v(1,1), n: "normal"   ,t:'eyes'},
    { f: '0a', p: v(32,13),  s: v(1,1), n: "sad"      ,t:'eyes'},
    { f: '0b', p: v(32,13),  s: v(1,1), n: "surprised",t:'eyes'},
    { f: '0c', p: v(32,13),  s: v(1,1), n: "angry"    ,t:'eyes'},
    { f: '0d', p: v(32,13),  s: v(1,1), n: "uwu"      ,t:'eyes'},
    { f: '0e', p: v(32,13),  s: v(1,1), n: "closed"   ,t:'eyes'}
  ],
  [ // beak
    { f: '80', p: v(50,13),  s: v(1,1), n: "sparrow"  ,t:'beak'},
    { f: '81', p: v(48,8),   s: v(2,1), n: "crow"     ,t:'beak'},
    { f: '83', p: v(48,11),  s: v(1,1), n: "finch"    ,t:'beak'},
    { f: '95', p: v(42,4),   s: v(2,2), n: "parrot"   ,t:'beak'},
    { f: '60', p: v(44,7),   s: v(3,1), n: "humming"  ,t:'beak'},
    { f: '70', p: v(48,14),  s: v(4,1), n: "kiwi"     ,t:'beak'},
    { f: '90', p: v(34,-11), s: v(5,3), n: "tucan"    ,t:'beak'}
  ]

]

let ITMlst = [
  [200, 201, 202, 203, 204, 205, 206, 216, 217, 218, 219],
  [233, 232, 234],
  [15, 10, 11, 12, 13, 14],
  [248, 249, 250, 251, 252, 253, 254]
]

function v(x,y) {
  if(typeof x !== 'undefined') return {x:x,y:y};
  else return {x:0,y:0};
}
