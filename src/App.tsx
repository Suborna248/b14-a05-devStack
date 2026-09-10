
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import DevStacksTech from './components/DevStacks/DevStacksTech'
import Navbar from './components/Navbar/Navbar'
import type { DevStackType } from './Type/DevStackType'

const fetchStacks = async ():Promise<DevStackType[]>=>{
  const res =  await fetch("/devStack.json");
  const data = await res.json();
  return data;

}

function App() {
  const [devStackPromise] =useState(()=>fetchStacks())

  return (
    
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<p>Loading...</p>}>
      <DevStacksTech devStackPromise={devStackPromise}></DevStacksTech>
    </Suspense>
     
    </>
  )
}

export default App
