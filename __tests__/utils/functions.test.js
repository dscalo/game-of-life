import {countNeighbors} from '../../utils/functions'

describe('countNeighbors', () => {
  let grid = []

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
})