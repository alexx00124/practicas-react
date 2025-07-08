import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Mi página React + Tailwind</h1>
      </main>
    </>
  );
}


export default App
