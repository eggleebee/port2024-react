import React from 'react'
import about from '../assets/img/about.jpg'
import { introText } from '../constants/data'

console.log(introText)
console.log(introText.title)
console.log(introText.title.length)
console.log(introText.title[0])

for (const item of introText.title) {
  console.log(item)
}

let str = introText.title
console.log(str)
let words = str.split(',' , 3)
console.log(words)

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">
          {words[0]}<br/>
          {words[1]}<br/>
          {words[2]}
        </h2>
        <div className="intro__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro__text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={about} />
          </div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  )
}

export default Intro