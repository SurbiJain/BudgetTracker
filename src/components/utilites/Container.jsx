import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import TotalBalance from '../budget/TotalBalance'


const Container = ({children}) => {
  return (
    <>
    <TotalBalance/>
    <div className="flex flex-col  mt-3  rounded-t-lg bg-white  m-auto min-w-96  p-4">
     <Navbar/>
    
      {children}
      <div className='flex-end'>
      <Footer/>
      </div>
    </div>
    </>
  )
}

export default Container