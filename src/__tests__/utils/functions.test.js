import {countNeighbors} from '../../utils/functions'

describe('countNeighbors', () => {
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
    const results = countNeighbors(grid, 1, 1)
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
  ])('should return a count of 1 when a live nighbor is found %s of target', (_,y,x) => {
    grid[y][x] = 1
    const results = countNeighbors(grid,1,1)
    expect(results).toEqual(1)
  })

  it('should return a count of 8, if all the nighbors are live', () => {
    const results = countNeighbors(fullGrid,1,1)
    expect(results).toEqual(8)
  })

  it.each([
    ['north-east', 0,2],
    ['south-east', 2,2],
    ['south-west', 2,0],
    ['north-west', 0,0],
  ])('should return a count of 3, if all the nighbors are live and the target is in the %s corner', (_,y,x) => {
    const results = countNeighbors(fullGrid,y,x)
    expect(results).toEqual(3)
  })

  it.each([
    ['north', 0,1],
    ['east', 1,2],
    ['south', 2,1],
    ['west', 1,0],
  ])('should return a count of 3, if all the nighbors are live and the target is in the %s end', (_,y,x) => {
    const results = countNeighbors(fullGrid,y,x)
    expect(results).toEqual(5)
  })
})