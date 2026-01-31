import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="min-h-screen flex items-center justify-center bg-black">
      <h1 className="text-5xl font-bold text-blue-500">
        Tailwind CSS v4 Working 🚀
      </h1>
    </div>
    </>
  )
}

export default App
