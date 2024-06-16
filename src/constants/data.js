/* 
Import in body of module; reorder to top  import/first
모듈을 모두 import하기전에 변수, 상수를 선언하면 발생하는 에러
import 최상단에 작성할것!!!
*/

import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    title: "A web publisher , that constantly , works hard",
    desc: ["UI/UX", "publishing & Front-end & BACK-end", "etc"]
}

export const skillText = [
    {
        title: "포토샵",
        desc: "사진 보정, 합성, 상세페이지, SNS 디자인 등 다양한 실무 디자인을 창의적으로 제작할 수 있습니다."
    },
    {
        title: "일러스트",
        desc: "간단한 캐릭터 디자인, 로고 디자인 등 깔끔하고 돋보이는 벡터 디자인을 제작할 수 있습니다."
    },
    {
        title: "피그마",
        desc: "피그마를 활용한 와이어프레임, 프로토타입제작과 아이디어를 기획하고 웹사이트를 제작할 수 있습니다."
    },
    {
        title: "HTML",
        desc: "웹접근성에 올바르며 모든 사람들이 편하게 이용할 수 있는 HTML 구조를 구성할 수 있습니다."
    },
    {
        title: "CSS",
        desc: "다양한 최신 트렌드 디자인과 애니메이션을 구성하여 JAVASCRIPT와 연동할 수 있는 화려한 디자인을 제작할 수 있습니다."
    },
    {
        title: "JQuery",
        desc: "슬라이드, 메뉴, 스크롤 애니메이션 기능 등 최신 트렌드에 적용된 다양한 동적 기능을 자바스크립트와 제이쿼리로 구현 가능합니다."
    },
    {
        title: "git",
        desc: "git 명령어를 활용한 gitHUB 프로젝트 관리를 진행할 수 있습니다."
    },
    {
        title: "탄탄한 기본기",
        desc: "Html5, CSS3 스킬을 기본으로한 탄탄한 마크업을 지향합니다.다양한 유저를 고려하여 웹 접근성 및 크로스 브라우징에 신경쓰고 있습니다."
    },
    {
        title: "협동과 협력",
        desc: "다양한 위치의 팀원과 협력하여, 더 좋은 결과물을 만드는데 심혈을 기울입니다. 서로간의 원활한 소통을 위해 Figma와 XD 등을 공부하는데 노력합니다."
    },
    {
        title: "포기하지 않는 끈기",
        desc: "풀리지 않는 문제에 대해 끊임없이 고민하고 몰두합니다.포기하지 않고 꾸준히 나아갈 수 있는 끈기를 갖고 있습니다."
    }
]

export const siteText = [
    {
        text: ["renewal", "Site compliant with", "Improved aesthetics"],
        title: "심미성을 개선한 행복은 간장밥 리뉴얼",
        figma: "https://",
        code: "https://github.com/",
        view: "https://",
        info: [
            "기여도 : 개인작업(기획, 디자인, 퍼블리싱)",
            "작업기간 : 40시간/1주",
            "기술스택 : 포토샵, 일러스트, 피그마, HTML, CSS, Javascript, Jquery, git",
        ],
    },
    {
        text: ["make", "site compliant with", "react.js"],
        title: "○○○를 개선한 중미산 천문대 홈페이지 제작",
        figma: "https://",
        code: "https://github.com/",
        view: "https://",
        info: [
            "기여도 : 퍼블리싱 100% + 개발 45%",
            "작업기간 : 2주",
            "기술스택 : 피그마, HTML5/CSS3, jQuery",
        ],
    },
    {
        text: ["make", "site compliant with", "vue.js"],
        title: "○○○를 개선한 워터킹덤 홈페이지 제작",
        figma: "https://",
        code: "https://github.com/",
        view: "https://",
        info: [
            "기여도 : 개인작업(기획, 디자인, 퍼블리싱)",
            "작업기간 : 2주",
            "기술스택 : 피그마, HTML5/CSS3, jQuery",
        ],
    },
    {
        text: ["make", "site compliant with", "next.js"],
        title: "○○○을 이용한 사이트 제작",
        figma: "https://",
        code: "https://github.com/",
        view: "https://",
        info: [
            "site coding",
            "production period : 2일",
            "use stack : HTML5/CSS3, Scss Variable, next.js",
        ],
    },
];

export const portText = [
    {
        num: "01",
        title: "클론코딩",
        desc: "실제 서비스를 따라 만들면서 실무소스의 사용법과 다양한 기법을 익힌 포트폴리오입니다.",
        img: port01,
        code: "https://",
        view: "https://",
        name: "맥도날드",
    },
    {
        num: "02",
        title: "클론코딩",
        desc: "실제 서비스를 따라 만들면서 실무소스의 사용법과 다양한 기법을 익힌 포트폴리오입니다.",
        img: port02,
        code: "https://",
        view: "https://",
        name: "맥도날드",
    },
    {
        num: "03",
        title: "클론코딩",
        desc: "실제 서비스를 따라 만들면서 실무소스의 사용법과 다양한 기법을 익힌 포트폴리오입니다.",
        img: port03,
        code: "https://",
        view: "https://",
        name: "맥도날드",
    },
    {
        num: "04",
        title: "클론코딩",
        desc: "실제 서비스를 따라 만들면서 실무소스의 사용법과 다양한 기법을 익힌 포트폴리오입니다.",
        img: port04,
        code: "https://",
        view: "https://",
        name: "맥도날드",
    },
    {
        num: "05",
        title: "클론코딩",
        desc: "실제 서비스를 따라 만들면서 실무소스의 사용법과 다양한 기법을 익힌 포트폴리오입니다.",
        img: port05,
        code: "https://",
        view: "https://",
        name: "맥도날드",
    },
    {
        num: "06",
        title: "클론코딩",
        desc: "실제 서비스를 따라 만들면서 실무소스의 사용법과 다양한 기법을 익힌 포트폴리오입니다.",
        img: port06,
        code: "https://",
        view: "https://",
        name: "맥도날드",
    },
];

export const contactText = [
    {
        link: "https://open.kakao.com/o/gM7YLzwf",
        title: "KAKAO : eggleee",
    },
    {
        link: "mailto:rani1791@naver.com",
        title: "mail : rani1791@naver.com",
    },
    {
        link: "",
        title: "phone : 010-1234-5678",
    },
];

export const footerText = [
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://",
    },
    {
        title: "Notion",
        desc: "노션에 오시면 더 많은 프로젝트를 볼 수 있습니다.",
        link: "https://",
    },
    {
        title: "velog",
        desc: "벨로그에 오시면 더 많은 정보를 볼 수 있습니다.",
        link: "https://",
    },
];