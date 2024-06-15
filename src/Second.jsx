import React from 'react'
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div>

      <h1>Second</h1>

      <nav>
        <ul>
          <li><Link to="/a">소개</Link></li>
          <li><Link to="/w">작업물</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Second