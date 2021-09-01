

export const countNeighbors = (grid, y,x) => {  
  let liveCount = 0
  const yLen = grid.length
  const xLen = grid[0].length

  // north y  - 1, x
  if (y - 1 >= 0 && grid[y-1][x] === 1) {
    liveCount++
  }

  // north-east y - 1, x + 1
  if (x + 1 < xLen && y - 1 >= 0 && grid[y-1][x+1] === 1) {
    liveCount++
  }

  // east y, x + 1
  if (x + 1 < xLen && grid[y][x+1] === 1) {
    liveCount++
  }

  // south-east y + 1, x + 1
  if (x + 1 < xLen && y + 1 < yLen && grid[y+1][x+1] === 1) {
    liveCount++
  }

  // south y + 1, x
  if (y + 1 < yLen && grid[y+1][x] === 1) {
    liveCount++
  }

  // south-west y + 1, x - 1
  if (y + 1 < yLen && x -1 >= 0 && grid[y+1][x-1] === 1) {
    liveCount++
  }

  // west y, x - 1
  if (x - 1 >=0 && grid[y][x-1] === 1) {
    liveCount++
  }

  // north-west y - 1, x - 1
  if (y - 1 >= 0 && x - 1 >= 0 && grid[y-1][x-1] === 1) {
    liveCount++
  }


  return liveCount
}