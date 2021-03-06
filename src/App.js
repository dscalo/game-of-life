import {useRef,  useState} from 'react'
import styled from 'styled-components'

import {processStep, createGrid } from './utils/functions'

const X_LENGTH = 800
const Y_LENGTH = 600

const Canvas = styled.canvas`
  border: 1px red solid;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const drawPoint = (ctx, y, x) => {  
  ctx.fillRect(x * 10, y * 10, 10 ,10)
}

const drawGrid = (ctx, grid) => {
  ctx.clearRect(0,0,X_LENGTH, Y_LENGTH)
  ctx.fillStyle = 'black'

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        drawPoint(ctx,y,x)
      }
    }
  }
}

const App = () => {

  const canvasRef = useRef()
  const [grid, setGrid] = useState(createGrid(Y_LENGTH / 10, X_LENGTH / 10))
  const [intervalId, setIntervalId] = useState()

  const handleStart = () => {  
    let curGrid = grid
    const id = setInterval(() => {
      const newGrid = processStep(curGrid)
    
      setGrid(newGrid)
      drawGrid(canvasRef.current.getContext('2d'), newGrid)
      curGrid = newGrid

    }, 500)
    setIntervalId(id)
  }

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
      return
    }    
  }

  const handleCanvasClick = event => {
    if(intervalId) {
      return
    }

    const rect = canvasRef.current.getBoundingClientRect()  
    const x = Math.floor((event.clientX - rect.left) / 10)
    const y = Math.floor((event.clientY - rect.top) / 10)
      
    grid[y][x] = grid[y][x] === 0 ? 1 : 0
    setGrid(grid)
    drawGrid(canvasRef.current.getContext('2d'),grid)    
  }

  return (
  <Container>
    <h1>Conway's Game of Life</h1>
    <Canvas 
      onClick={handleCanvasClick} 
      ref={canvasRef} 
      width={`${X_LENGTH}`} 
      height={`${Y_LENGTH}`}>
        Browser not supported!
    </Canvas>
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  </Container>)
}

export default App