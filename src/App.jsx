import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div className='w-full h-screen flex justify-center relative' style={{ backgroundColor: color }}>
        <div className='bg-amber-300 w-50 absolute top-10'>
          <input type="text" placeholder='Enter A Color' className='outline-0'  onChange={(e)=>{
            setColor(e.target.value)
          }}/>
        </div>

        {/* buttons */}
        <div className='flex px-4 py-2 bg-white align-baseline justify-center self-end w-full'>
          <button className='bg-green-500 px-4 py-3 rounded-xl shadow-black mx-1 text-white' onClick={() => { setColor("green") }}>Green</button>
          <button className='bg-blue-500 px-4 py-3 rounded-xl shadow-black mx-1  text-white' onClick={() => { setColor("blue") }}>Blue</button>
          <button className='bg-red-400 px-4 py-3 rounded-xl shadow-black mx-1  text-white' onClick={() => { setColor("red") }}>Red</button>
          <button className='bg-yellow-300 px-4 py-3 rounded-xl shadow-black mx-1  text-white' onClick={() => { setColor("yellow") }}>Yelow</button>
          <button className='bg-purple-500 px-4 py-3 rounded-xl shadow-black mx-1  text-white' onClick={() => { setColor("purple") }}>Purple</button>
        </div>
      </div>
    </>
  )
}

export default App
