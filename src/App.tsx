
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import DevStacksTech from './components/DevStacks/DevStacksTech'
import Navbar from './components/Navbar/Navbar'
import type { DevStackType } from './Type/DevStackType'
import Footer from './components/Footer/Footer'
import Spinner from './components/LoadSpinner/Spinner'

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
    <Suspense fallback={<Spinner></Spinner>}>
      <DevStacksTech devStackPromise={devStackPromise}></DevStacksTech>
    </Suspense> 

    <Footer></Footer>
     
    </>
  )
}

export default App
