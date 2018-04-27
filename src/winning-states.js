import flattenDeep from 'lodash/flattenDeep'

const winners = [
  [
    [1, 0],
    [0, 1]
  ],
  [
    [0, 1],
    [1, 0]
  ],
  [
    [0, 0],
    [1, 1]
  ],
  [
    [1, 0],
    [1, 0]
  ],
  [
    [1, 1],
    [0, 0]
  ],
  [
    [0, 1],
    [0, 1]
  ]
]

// console.log(flattenDeep([[1,0],[1,1]]))
export default winners.map(x => {
  return flattenDeep(x)
})
