import React from 'react'
import ReactDOM from 'react-dom/client'
import NavFooter from './NavFooter';

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className='flex-container footer'>
      {/* <small id="copywrite">All rights reserved © MMO-Radio {currentDate}</small> */}
      <NavFooter />
    </footer>
  )

}