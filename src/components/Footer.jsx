import React from "react";

import { footerText } from "../constants/data";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <div>eggleebee</div>
          <div>@eggleebee</div>
        </h2>
        <div className="footer__info">
          {/* <div className="left">
            <div className="title">
              <a href="/second">링크테스트</a>
            </div>
            <p className="desc">설명작성</p>
          </div> */}
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.dsec}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__right">
          &copy; 2024 eggleebee<br />
          이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  )
}

export default Footer;