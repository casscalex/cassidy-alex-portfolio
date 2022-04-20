import React from 'react'
import './aboutMe.css'
import person from '../../images/cassidy.png'

function AboutMe() {
  return (
    <div className="about_container" id='about-me'>
        <div>
            <img src={person} alt='my headshot'/>
        </div>
        <div className="about_text">
            <h1>ABOUT ME</h1>
            <p>I'm baby unicorn austin disrupt mustache deep v art party. Kitsch subway tile disrupt blue bottle palo santo ramps. Chartreuse small batch williamsburg, bicycle rights kale chips tumeric artisan. Cardigan marfa butcher tofu glossier. Chia craft beer yuccie sustainable retro green juice cornhole single-origin coffee tattooed readymade church-key blue bottle neutra literally pinterest. Man bun +1 next level bitters, kitsch kale chips franzen semiotics lumbersexual.</p>
        </div>
    </div>
  )
}

export default AboutMe