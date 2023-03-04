import React from 'react'

export const Footer = () => {

    const year = new Date();

  return (
    <footer className='footer'>Portafolio BlackCoder &copy; {year.getFullYear()}</footer>
  )
}
