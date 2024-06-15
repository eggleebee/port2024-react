import React from 'react'
import { Link } from "react-router-dom";


const FirstPage = () => {
  return (
    <div>
      <h1>FirstPage</h1>

      <nav>
        <ul>
          <li><Link to="/about">소개 페이지</Link></li>
          <li><Link to="/works">작업물 페이지</Link></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default FirstPage