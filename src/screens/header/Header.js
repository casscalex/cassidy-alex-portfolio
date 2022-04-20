import React from 'react'
import './header.css'
import Typed from 'react-typed'

function header() {
  return (
    <div className="main-info">
        <h1>What Am I?</h1>
        <Typed 
            strings={[
                'Student of Computer Science',
                'Also known as',
                'A Front-end Developer',
                'A Back-end Developer',
                'A Full Stack Developer',
                'OR!',
                'A Software Engineer',
                '',
                '',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
        />
    </div>
  )
}

export default header