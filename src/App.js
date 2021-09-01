import {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
  border: 1px red solid;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const drawPoint = (ctx, x, y) => {
  ctx.fillStyle = 'black'
  ctx.fillRect(x*10, y* 10, 10 ,10)
}

const App = () => {

  const canvasRef = useRef()
  const [game, setGame] = useState([])

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    
 
  }, [])




  return (
  <Container>
    <h1>Hey there</h1>
    <Canvas ref={canvasRef} width="800" height="600">

    </Canvas>
  </Container>)
}

export default App