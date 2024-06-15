import React from 'react'
import { skillText } from '../constants/data'

const Skill = () => {
  return (
    <section id="skill">
      <div className="slkll__inner">
        <h2 className="skill__title">
          Gil-Dong Hong<span>나의 도전</span>
          <p>
            "우선 해보자"<br />
            <span>
              라는 마음가짐으로 도전하고 있습니다.<br />
              커뮤니케이션이 가능하며<br />
              긍정적인 마인드를 지니고 있습니다.
            </span>
          </p>
        </h2>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill