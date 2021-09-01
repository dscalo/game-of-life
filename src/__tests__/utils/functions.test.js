import {countLiveNeighbors, getCellState} from '../../utils/functions'

describe('countLiveNeighbors', () => {
  let grid = []

  let fullGrid = [
    [1,1,1], 
    [1,1,1], 
    [1,1,1]
  ]

  beforeEach(() => {
    grid = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ]
  }) 

  it('should return a count of 0 if there are no live neighbors', () => {
    const results = countLiveNeighbors(grid, 1, 1)
    expect(results).toEqual(0)
  })

  it.each([
    ['north', 0,1],
    ['north-east', 0,2],
    ['east', 1,2],
    ['south-east', 2,2],
    ['south', 2,1],
    ['south-west', 2,0],
    ['west', 1,0],
    ['north-west', 0,0],
  ])('should return a count of 1 when a live neighbor is found %s of target', (_,y,x) => {
    grid[y][x] = 1
    const results = countLiveNeighbors(grid,1,1)
    expect(results).toEqual(1)
  })

  it('should return a count of 8, if all the neighbors are live', () => {
    const results = countLiveNeighbors(fullGrid,1,1)
    expect(results).toEqual(8)
  })

  it.each([
    ['north-east', 0,2],
    ['south-east', 2,2],
    ['south-west', 2,0],
    ['north-west', 0,0],
  ])('should return a count of 3, if all the neighbors are live and the target is in the %s corner', (_,y,x) => {
    const results = countLiveNeighbors(fullGrid,y,x)
    expect(results).toEqual(3)
  })

  it.each([
    ['north', 0,1],
    ['east', 1,2],
    ['south', 2,1],
    ['west', 1,0],
  ])('should return a count of 3, if all the neighbors are live and the target is in the %s end', (_,y,x) => {
    const results = countLiveNeighbors(fullGrid,y,x)
    expect(results).toEqual(5)
  })
})

describe('getCellState', () => {
  it.each([
    [1,2],
    [1,3],
    [0,3]
  ])('should return 1 when the cell state is %s and the liveNeighbor count is %s', (state, neighbors) => {
    const result = getCellState(state,neighbors)
    expect(result).toEqual(1)
  })

  it.each([
    [1,1],
    [1,0],
    [1,4],
    [1,5],
    [1,6],
    [1,7],
    [1,8],
    [1,1],
    [0,0],
    [0,1],
    [0,2],
    [0,4],
    [0,5],
    [0,6],
    [0,7],
    [0,8],
  ])('should return 0 when the cell state is %s and the liveNeighbor count is %s', (state, neighbors) => {
    const result = getCellState(state,neighbors)
    expect(result).toEqual(0)
  })
})