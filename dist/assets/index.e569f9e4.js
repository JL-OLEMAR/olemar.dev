var ze=Object.defineProperty,Ce=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var ne=(e,i,n)=>i in e?ze(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,A=(e,i)=>{for(var n in i||(i={}))te.call(i,n)&&ne(e,n,i[n]);if(U)for(var n of U(i))ie.call(i,n)&&ne(e,n,i[n]);return e},O=(e,i)=>Ce(e,Ne(i));var re=(e,i)=>{var n={};for(var o in e)te.call(e,o)&&i.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&U)for(var o of U(e))i.indexOf(o)<0&&ie.call(e,o)&&(n[o]=e[o]);return n};import{s as Se,r as c,U as M,W as Ie,C as h,a as s,L as b,j as F,R as oe,u as Pe,b as ae,c as je,H as v,i as Le,d as H,B as X,F as Ue,e as Ae,S as Me,f as _e}from"./vendor.807660e0.js";const Be=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};Be();var Ee={projects:[],posts:[],pinnedMessages:[],icons:[],author:{}},se=Se({projectId:"42ldtbyz",dataset:"production",apiVersion:"2019-01-29",useCdn:!0});const Te=()=>{const[e,i]=c.exports.useState(Ee);return c.exports.useEffect(()=>{se.fetch(`{
          'projects': *[_type == 'project'] {
            _id,
            name,
            'slug': slug.current,
            description,
            codeUrl,
            previewUrl,
            'images': images[]{
              _key,
              'url': asset->url,
            },
            'stack': stack[]{
              _key,
              name,
              'icon': icon.asset->url,
            },
            about,
          },
          'posts': *[_type == 'post'] {
            _id,
            title,
            'slug': slug.current,
            description,
            'cover': cover.asset->url,
            'tags': tags[]->{
              _id,
              name,
            },
            publishedAt,
            body,
          },
          'pinnedMessages': *[_type == 'pinnedMessage'] {
            page,
            message,
          },
          'icons': *[_type == 'asset' && type == 'Icons'][0].assets {
            alt,
            'url': asset->url,
          },
          'author': *[_type == 'author'][0] {
            'image': {
              'alt': image.alt,
              'url': image.asset->url,
            },
            'cv': cv.asset->url,
            bio,
          },
        }`).then(n=>{i(O(A({},e),{projects:n.projects,posts:n.posts,pinnedMessages:n.pinnedMessages,icons:n.icons,author:n.author}))}).catch(n=>console.error(n))},[]),{state:e,setState:i}},$={purples:["rgb(196, 53, 232)","rgba(196, 53, 232, 0.5)","rgba(196, 53, 232, 0.2)","#74108d","#4f0b60"],whites:["rgb(255, 255, 255)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.4)"],blacks:["rgb(0, 0, 0)","rgba(0, 0, 0, 0.9)","rgba(0, 0, 0, 0.6)","#1a1a1a","#262626"],greys:["#333333","#808080","#b3b3b3"],blues:["#1da1f2","#0077b5"]},Ye={colors:A({primary:$.purples[0],secondary:$.purples[1],tertiary:$.purples[2],white:$.whites[0],black:$.blacks[0],twitter:$.blues[0],linkedin:$.blues[1]},$),fonts:{primary:"'Saira', sans-serif"},sizes:{xl:"2.5em",l:"1.5em",m:"1.125em",n:"1em",s:"0.9em",xs:"0.75em",xxs:"0.6em"}},Oe=M`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`,Fe=M`
  0% {
    transform: translateY(200%);
  }

  100% {
    transform: translateY(0);
  }
`,He=M`
  0% {
    width: 0;
    height: 0;
    top: 36px;
    left: 36px;
    opacity: 1;
  }

  100% {
    width: 72px;
    height: 72px;
    top: 0;
    left: 0;
    opacity: 0;
  }
`,Xe=M`
  0% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Je=Ie`
  ::selection {
    background: ${({theme:e})=>e.colors.secondary};
    color: ${({theme:e})=>e.colors.white};
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    font-family: ${({theme:e})=>e.fonts.primary};
    color: ${({theme:e})=>e.colors.white};
    background: ${({theme:e})=>e.colors.black};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ol {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }

  .overflow--hidden {
    overflow: hidden;
  }

  .link--decoration {
    position: relative;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.white};

    &::before, &::after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 3px;
      left: 0;
    }

    &::before {
      background: ${({theme:e})=>e.colors.whites[2]};
    }

    &::after {
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 300ms ease-out;
      background: ${({theme:e})=>e.colors.white};
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  .fadeIn {
    animation: ${Oe} 800ms ease-in forwards;
  }

  .slideUp {
    animation: ${Fe} 800ms cubic-bezier(0.04, 0.86, 1, 0.99) forwards;
  }

  .delay-1 {
    animation-delay: 100ms;
  }

  .duration-1 {
    animation-duration: 100ms;
  }

  .delay-2 {
    animation-delay: 200ms;
  }

  .duration-2 {
    animation-duration: 200ms;
  }

  .delay-3 {
    animation-delay: 300ms;
  }

  .duration-3 {
    animation-duration: 300ms;
  }

  .delay-4 {
    animation-delay: 400ms;
  }

  .duration-4 {
    animation-duration: 400ms;
  }

  .delay-5 {
    animation-delay: 500ms;
  }

  .duration-5 {
    animation-duration:  500ms;
  }

  .delay-6 {
    animation-delay: 600ms;
  }

  .duration-6 {
    animation-duration: 600ms;
  }

  .delay-7 {
    animation-delay: 700ms;
  }

  .duration-7 {
    animation-duration: 700ms;
  }

  .delay-8 {
    animation-delay: 800ms;
  }

  @media screen and (max-width: 1023px) {
    div.header--visible {
      transform: translateY(0px)
    }
  }

  @media screen and (min-width: 1024px) {
    ::-webkit-scrollbar {
      width: .4em;
    }

    ::-webkit-scrollbar-track {
      background: ${({theme:e})=>e.colors.black};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({theme:e})=>e.colors.whites[2]};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({theme:e})=>e.colors.white};
    }
  }
`,L=(e,i)=>h`
    position: ${e};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${i};
  `,Re=s.div`
  background: linear-gradient(
    to bottom,
    ${({theme:e})=>e.colors.secondary},
    transparent
  );
  ${L("absolute",-100)};
`,w=s.div`
  width: 100%;
  max-width: 850px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`,De=s.div`
  backdrop-filter: blur(20px);
  background: ${({theme:e})=>e.colors.blacks[2]};
  ${L("fixed",20)};
`,g=(e,i,n)=>h`
    font-size: ${e};
    font-weight: ${i};
    color: ${n};
  `,z=(e,i="center")=>h`
    display: flex;
    align-items: center;
    ${e}: ${i};
  `,le=s.li`
  display: grid;
  grid-template-columns: 15px 1fr;
  align-items: center;
  column-gap: 20px;

  img {
    width: 15px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 20px 1fr;

    img {
      width: 20px;
    }
  }
`,u=s.span`
  display: grid;
  width: 15px;
  margin-left: 10px;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  overflow-x: hidden;

  img {
    transform: translateX(-30px);
    transition: transform 300ms ease-out;
  }
`,Ge=s.ul`
  img {
    margin-left: 0;
    transition: all 300ms ease-out;
  }

  span {
    margin-left: 20px;
  }

  && ${u} {
    margin-left: 0;
  }
`,C=s.main`
  ${({isHome:e})=>e?h`
          grid-area: 1 / auto / 2 / auto;
          align-self: center;

          @media screen and (min-width: 1024px) {
            grid-area: 1 / main-start / 2 / main-end;
          }
        `:h`
          grid-area: 3 / auto / 4 / auto;

          @media screen and (min-width: 1024px) {
            grid-area: 3 / main-start / 4 / main-end;
          }
        `}
`,Ze=s.div`
  height: 70px;
  position: fixed;
  top: 0;
  transform: translateY(-70px);
  transition: all 300ms ease-out;
  width: 100%;
  z-index: 10;

  ${({isBlack:e})=>e&&h`
      background: ${({theme:i})=>i.colors.black};
    `}

  @media screen and (min-width: 1024px) {
    display: none;
`,de=s.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    height: 70px;
    padding-left: 20px;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    transition: all 300ms ease-out;
    transform: translateY(-70px);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    grid-area: 1 / margin1-start / 2 / margin2-end;
  }
`,We=s(b)`
  ${({theme:e})=>g(e.sizes.m,600,e.colors.white)}

  @media screen and (min-width: 1024px) {
    position: fixed;
    top: 55px;
    z-index: 10;
  }
`,Ke=s.div`
  @media screen and (min-width: 1024px) {
    grid-area: 1 / margin3-start / 2 / margin4-end;
  }
`,qe=s.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    height: 70px;
    padding-right: 20px;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    transition: all 300ms ease-out;
    transform: translateY(-70px);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`,Ve=s.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  position: relative;
  z-index: 30;
  outline: none;
  cursor: pointer;

  i {
    display: inline-block;
    width: 100%;
    height: 3px;
    position: absolute;
    transition: all 400ms ease-out;
    background: ${({theme:e})=>e.colors.white};

    &:first-child {
      top: 15px;
    }

    &:nth-child(2) {
      width: 37.5px;
      top: 23.5px;
      left: 6.25px;
    }

    &:last-child {
      width: 25px;
      bottom: 15px;
      left: 12.5px;
    }
  }

  &.active {
    i {
      background: ${({theme:e})=>e.colors.primary};

      &:first-child {
        top: 25px;
        transform: rotateZ(-45deg);
      }

      &:nth-child(2) {
        opacity: 0;
        transform: translateX(100px);
      }

      &:last-child {
        width: 100%;
        bottom: 22px;
        left: 0;
        transform: rotateZ(45deg);
        box-shadow: 0 0 2px ${({theme:e})=>e.colors.black};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 60px;
    height: 60px;
    position: fixed;
    top: 40px;

    i {
      width: 100%;

      &:first-child {
        top: 20px;
      }

      &:nth-child(2) {
        width: 45px;
        top: 28.5px;
        left: 7.5px;
      }

      &:last-child {
        width: 30px;
        bottom: 20px;
        left: 15px;
      }
    }

    &.active {
      i {
        &:first-child {
          top: 30px;
        }

        &:last-child {
          width: 100%;
          bottom: 27px;
          left: 0;
        }
      }
    }
  }
`,Qe=s.nav`
  display: ${({menu:e})=>e?"flex":"none"};
  user-select: none;

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    grid-area: auto / margin1-start / auto / margin4-end;
  }
`,et=s.div`
  padding-right: 30px;
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  z-index: 30;
  text-align: right;
  overflow-y: auto;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    transform: translateY(200%);
  }

  @media screen and (min-width: 1024px) {
    padding-right: 80px;
    top: 120px;
    right: unset;
  }
`,N=s.div`
  display: block;
  width: 25px;
  height: 30px;
  position: relative;
  outline: none;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    transform-origin: left;
    transition: all 300ms ease-out;
    background: ${({theme:e})=>e.colors.white};
  }

  &::before {
    top: 15px;
    transform: rotateZ(-45deg);
  }

  &::after {
    bottom: 14px;
    transform: rotateZ(45deg);
  }

  &:hover::before {
    transform: rotateZ(-60deg);
  }

  &:hover::after {
    transform: rotateZ(60deg);
  }

  &.active::before,
  &.active::after {
    transform: rotateZ(0deg);
  }

  &.go-back::before,
  &.go-back::after {
    transform: translate(-200%);
    opacity: 0;
  }

  @media screen and (min-width: 1024px) {
    ${de} & {
      width: 35px;
      position: fixed;
      top: 55px;
      z-index: 10;
    }
  }
`,J=s.section`
  display: grid;
  row-gap: 40px;
  opacity: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`,_=s.article`
  display: grid;
  row-gap: 20px;
  color: ${({theme:e})=>e.colors.whites[1]};

  div {
    display: inherit;
    row-gap: inherit;
  }

  h2 {
    margin: 20px 0 0;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.white};

    &:first-child {
      margin: 0;
    }
  }

  ul {
    display: grid;
    row-gap: 5px;
  }

  p {
    margin: 0;
  }

  a {
    display: inline-flex;
    align-items: center;

    img {
      width: 15px;
    }

    &:hover .link--decoration::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    &:hover img {
      transform: translateX(0);
    }

    & ${u} {
      margin-left: 5px;
    }

    & > img {
      opacity: 0.4;
    }

    &:hover > img {
      opacity: 1;
    }
  }

  strong {
    color: ${({theme:e})=>e.colors.white};
  }
`,P=s.section`
  grid-area: 1 / auto / 2 / auto;

  ${({center:e})=>e&&h`
      text-align: center;
    `}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    grid-area: 1 / margin2-start / 2 / margin3-end;
    font-size: 20px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.tertiary};
  }

  ${({aboutTitleContainer:e})=>e&&h`
      @media screen and (min-width: 1024px) {
        grid-area: 1 / main-start / 2 / main-end;
        border: none;
      }
    `}
`,S=s.div`
  margin: 25px 0 40px;
  overflow-y: hidden;

  h1 {
    margin: 0;
    line-height: 1.2em;
    text-shadow: 0 0 2px ${({theme:e})=>e.colors.primary};
    transform: translateY(200%);
    ${g(({theme:e})=>e.sizes.xl,500)};
  }

  h3 {
    margin: 0;
    line-height: 1.2em;
    text-shadow: 0 0 2px ${({theme:e})=>e.colors.primary};
    transform: translateY(200%);
    ${g(({theme:e})=>e.sizes.l,500)};
  }

  @media screen and (min-width: 1024px) {
    margin: 40px 0;
  }

  ${({aboutTitle:e})=>e&&h`
      @media screen and (min-width: 1024px) {
        padding: 0;
        margin: 40px 0 10px;
      }
    `}
`,tt=s.div`
  @media screen and (max-width: 1023px) {
    padding-top: 70px;
  }

  ${({isHome:e})=>e?h`
          display: grid;
          height: 100vh;
          grid-template-rows: 1fr auto;

          @media screen and (min-width: 1024px) {
            max-width: 1900px;
            margin: 0 auto;
            position: relative;
            grid-template-columns:
              [margin1-start] 100px [margin1-end margin2-start] 100px [margin2-end main-start] minmax(
                auto,
                850px
              )
              [main-end margin3-start] 100px [margin3-end margin4-start] 100px [margin4-end];
            justify-content: center;
            ${L("fixed")};
          }
        `:h`
          display: grid;
          width: 100%;
          min-height: 100vh;
          grid-template-rows: repeat(2, auto) 1fr auto;

          @media screen and (min-width: 1024px) {
            max-width: 1900px;
            margin: 0 auto;
            position: relative;
            grid-template-columns:
              [margin1-start] 100px [margin1-end margin2-start] 100px [margin2-end main-start] minmax(
                auto,
                850px
              )
              [main-end margin3-start] 100px [margin3-end margin4-start] 100px [margin4-end];
            justify-content: center;
          }
        `}
`,it=s.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    grid-column: margin2-start / margin3-end;
    border-left: 1px solid ${({theme:e})=>e.colors.tertiary};
    border-right: 1px solid ${({theme:e})=>e.colors.tertiary};
    ${L("absolute",-10)};
  }
`,ce=s(b)`
  display: inline-flex;
  padding: 0 5px;
  margin-right: 5px;
  position: relative;
  z-index: 10;
  color: ${({theme:e})=>e.colors.black};
  background: ${({theme:e})=>e.colors.white};

  span:last-child {
    font-weight: 500;
  }
`,nt=s.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  background: ${({theme:e})=>e.colors.black};
`,rt=s.div`
  width: 80px;
  height: 80px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: ${He} 1000ms cubic-bezier(0, 0.2, 0.8, 1) infinite;
    border: 4px solid ${({theme:e})=>e.colors.white};
  }

  &::after {
    animation-delay: -500ms;
  }
`,t=F.exports.jsx,a=F.exports.jsxs,x=F.exports.Fragment,ot=()=>t(nt,{children:t(rt,{})}),m=oe.createContext({}),at=({children:e})=>{const i=Te(),n=Object.keys(i.state.projects).length;return t(x,{children:n>0?t(m.Provider,{value:i,children:e}):t(ot,{})})},R=oe.createContext({}),st=({children:e})=>{const[i,n]=c.exports.useState(!1);return t(R.Provider,{value:{menu:i,setMenu:n},children:e})},lt=()=>{const[e,i]=c.exports.useState(!0),[n,o]=c.exports.useState(!1);return c.exports.useEffect(()=>{let r=window.pageYOffset;window.addEventListener("scroll",()=>{const l=window.pageYOffset;r>l?(i(!0),o(!0),l===0&&o(!1)):i(!1),r=l})},[]),{header:e,background:n}},pe=s.ul`
  ${({theme:e})=>g(e.sizes.l,600)}

  a {
    color: ${({theme:e})=>e.colors.white};

    img {
      margin-left: 10px;
      opacity: 0.4;
    }

    &:hover img {
      opacity: 1;
    }
  }

  img {
    transition: opacity 300ms ease-out;
  }
`,I=s.li`
  margin: 0 0 15px;
  overflow: hidden;
`,me=({children:e,handleClick:i,isFooter:n})=>{const{state:{icons:o}}=c.exports.useContext(m),r=o.find(l=>l.alt==="Arrow");return a(pe,{children:[t(I,{children:a(b,{to:"/portfolio",onClick:i,className:`slideUp ${n?"delay-6":"duration-3"}`,children:["Portfolio ",t("img",{src:r.url,alt:r.alt})]})}),t(I,{children:a(b,{to:"/blog",onClick:i,className:`slideUp ${n?"delay-6":"duration-3 delay-1"}`,children:["Blog ",t("img",{src:r.url,alt:r.alt})]})}),t(I,{children:a(b,{to:"/about",onClick:i,className:`slideUp ${n?"delay-6":"duration-3 delay-2"}`,children:["About me ",t("img",{src:r.url,alt:r.alt})]})}),t(I,{children:a("a",{href:"mailto:joseluis19963@gmail.com",target:"_blank",rel:"noreferrer",className:`slideUp ${n?"delay-6":"duration-3 delay-3"}`,children:["Contact ",t("img",{src:r.url,alt:r.alt})]})}),e]})},he=s.ul`
  ${({theme:e})=>g(e.sizes.m,600)}

  span {
    overflow-x: hidden;
  }
`,B=s(I)`
  a {
    transition: color 300ms ease-out;
  }

  &:first-child a {
    color: ${({theme:e})=>e.colors.twitter};
  }

  &:nth-child(2) a {
    color: ${({theme:e})=>e.colors.white};
  }

  &:last-child a {
    color: ${({theme:e})=>e.colors.linkedin};
  }

  a:hover {
    color: ${({theme:e})=>e.colors.white};
  }

  a:hover img {
    transform: translateX(0);
  }
`,ge=({isFooter:e})=>{const{state:i}=c.exports.useContext(m),{icons:n}=i,o=n.find(p=>p.alt==="External Link"),r=n.find(p=>p.alt==="Twitter"),l=n.find(p=>p.alt==="GitHub"),d=n.find(p=>p.alt==="LinkedIn");return a(he,{children:[t(B,{children:a("a",{href:"https://twitter.com/Joseluisolemar",target:"_blank",rel:"noreferrer",className:`slideUp ${e?"delay-6":"duration-3 delay-5"}`,children:[t("span",{children:"Twitter"}),a(u,{children:[t("img",{src:o.url,alt:o.alt}),t("img",{src:r.url,alt:r.alt})]})]})}),t(B,{children:a("a",{href:"https://github.com/JL-OLEMAR",target:"_blank",rel:"noreferrer",className:`slideUp ${e?"":"duration-3"} delay-6`,children:[t("span",{children:"GitHub"}),a(u,{children:[t("img",{src:o.url,alt:o.alt}),t("img",{src:l.url,alt:l.alt})]})]})}),t(B,{children:a("a",{href:"https://www.linkedin.com/in/jose-luis-olemar-velasquez",target:"_blank",rel:"noreferrer",className:`slideUp ${e?"delay-6":"duration-3 delay-7"}`,children:[t("span",{children:"LinkedIn"}),a(u,{children:[t("img",{src:o.url,alt:o.alt}),t("img",{src:d.url,alt:d.alt})]})]})})]})},dt=({hasArrow:e})=>{const{menu:i,setMenu:n}=c.exports.useContext(R),{state:o}=c.exports.useContext(m),{author:{cv:r},icons:l}=o,[d,p]=c.exports.useState(!1),y=c.exports.useRef(d);y.current=d;const[f,K]=c.exports.useState(!1),E=c.exports.useRef(f);E.current=f;const q=Pe(),{pathname:$e}=ae(),{header:T,background:ke}=lt(),Y=()=>{n(!i),document.getElementById("root").classList.toggle("overflow--hidden")},V=()=>{p(!d),setTimeout(()=>{y.current&&K(!E.current)},300),setTimeout(()=>{$e.includes("/portfolio")?q.push("/portfolio"):q.push("/blog")},600),setTimeout(()=>{p(!y.current),K(!E.current)},700)},Q=l.find(ee=>ee.alt==="Arrow");return a(x,{children:[t(Ze,{className:T?"header--visible":"",isBlack:ke}),t(de,{className:T?"header--visible":"",children:e?t(N,{onClick:V,onKeyPress:V,role:"button",tabIndex:"0","aria-label":"Go Back",className:`fadeIn ${d?"active":""} ${f?"go-back":""}`}):t(We,{to:"/",className:"fadeIn",children:"<Jos\xE9 Olemar />"})}),t(Ke,{children:t(qe,{className:T?"header--visible":"",children:a(Ve,{onClick:Y,onKeyPress:Y,role:"button",tabIndex:"0","aria-label":"Toggle Menu",className:`fadeIn ${i?"active":""}`,children:[t("i",{}),t("i",{}),t("i",{})]})})}),t(Qe,{menu:i,children:a(et,{children:[t(me,{handleClick:Y,children:t(I,{children:a("a",{href:`${r}?dl`,className:"slideUp duration-3 delay-4",children:["Download CV ",t("img",{src:Q.url,alt:Q.alt})]})})}),t(ge,{})]})})]})},ct=s.footer`
  padding: 50px 0 20px;
  grid-area: 4 / auto / -1 / auto;

  ${pe} {
    font-size: ${({theme:e})=>e.sizes.s};

    img {
      margin-left: 5px;
    }

    @media screen and (min-width: 850px) {
      display: flex;

      ${I} {
        margin: 0 20px 0 0;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  ${he} {
    text-align: right;
    font-size: ${({theme:e})=>e.sizes.s};

    @media screen and (min-width: 850px) {
      display: flex;

      ${B} {
        margin: 0 0 0 20px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  ${u} {
    width: 10px;
    height: 10px;
    margin-left: 5px;
    column-gap: 10px;

    img {
      transform: translateX(-20px);
    }
  }

  img {
    width: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1024px) {
    grid-area: 4 / main-start / -1 / main-end;
    font-size: 18px;

    img {
      width: 12px;
    }

    ${u} {
      width: 12px;
      height: 12px;
      column-gap: 12px;

      img {
        transform: translateX(-24px);
      }
    }
  }

  ${({isPost:e})=>e&&h`
      @media screen and (max-width: 1023px) {
        margin-bottom: 60px;
      }
    `}
`,pt=s.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;

  a {
    display: inline-flex;
    align-items: center;
    transform: translateY(200%);
  }
`,mt=s.div`
  display: grid;
  margin-top: 40px;
  text-align: center;
  overflow-y: hidden;
  color: ${({theme:e})=>e.colors.whites[1]};

  span:first-child {
    transform: translateY(200%);
    font-size: ${({theme:e})=>e.sizes.xs};
    ${z("justify-content")};
  }

  span:last-child {
    transform: translateY(200%);
    font-size: ${({theme:e})=>e.sizes.xxs};
  }

  img {
    margin-left: 5px;
  }
`,ht=({isPost:e})=>{const i=new Date,{state:{icons:n}}=c.exports.useContext(m),o=n.find(r=>r.alt==="Heart");return t(ct,{isPost:e,children:a(w,{children:[a(pt,{children:[t(me,{isFooter:!0}),t(ge,{isFooter:!0})]}),a(mt,{children:[a("span",{className:"slideUp delay-6",children:["Made with ",t("img",{src:o.url,alt:o.alt})]}),a("span",{className:"slideUp delay-6",children:["\xA9 ",i.getFullYear()," Jos\xE9 Olemar."]})]})]})})},gt=({children:e,hasArrow:i,isHome:n,isPost:o})=>{const{menu:r}=c.exports.useContext(R);return t(x,{children:a(tt,{isHome:n,children:[r&&t(De,{}),t(it,{}),t(dt,{hasArrow:i}),e,!n&&t(ht,{isPost:o})]})})},ut=e=>{const[i,n]=c.exports.useState(0);return{slide:i,nextSlide:()=>i===e.length-1?n(0):n(i+1),prevSlide:()=>n(i===0?e.length-1:i-1),handleDotClick:d=>n(d)}},xt=s.div`
  height: 100%;

  ${N} {
    width: 15px;

    &:before,
    &:after {
      height: 2px;
      box-shadow: none;
      background: ${({theme:e})=>e.colors.greys[2]};
    }

    @media screen and (min-width: 768px) {
      width: 25px;
    }
  }
`,ft=s.div`
  height: 100%;

  img {
    display: none;
  }

  img:nth-child(${({slideIndex:e})=>e}) {
    display: block;
  }
`,ue=s.button`
  display: flex;
  width: 30%;
  height: 100%;
  padding: 0 10px;
  align-items: center;
  position: absolute;
  top: 0;
  opacity: 0.2;
  transition: opacity 300ms ease-out;
  cursor: pointer;

  &.prev {
    background: linear-gradient(
      to right,
      ${({theme:e})=>e.colors.blacks[1]},
      transparent
    );
  }

  &.next {
    justify-content: flex-end;
    right: 0;
    background: linear-gradient(
      to left,
      ${({theme:e})=>e.colors.blacks[1]},
      transparent
    );

    ${N} {
      transform: rotateY(180deg);
    }
  }

  &:hover {
    opacity: 1;
  }

  &:hover ${N}::before {
    transform: rotateZ(-60deg);
  }

  &:hover ${N}::after {
    transform: rotateZ(60deg);
  }

  @media screen and (min-width: 850px) {
    padding: 0 20px;
  }
`,wt=s.div`
  margin-top: 20px;
  display: grid;
  grid-template: 15px / repeat(3, 15px);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  justify-items: center;

  div {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    outline: 0;
    transition: all 100ms ease-in;
    cursor: pointer;
    background: ${({theme:e})=>e.colors.greys[0]};

    &:hover {
      height: 12px;
      width: 12px;
      background: ${({theme:e})=>e.colors.greys[1]};
    }

    &.active {
      height: 15px;
      width: 15px;
      background: ${({theme:e})=>e.colors.greys[2]};
    }
  }
`,bt=({images:e})=>{const{slide:i,prevSlide:n,nextSlide:o,handleDotClick:r}=ut(e);return a(xt,{children:[t(ft,{slideIndex:i+1,children:e.map(l=>t("img",{src:l.url,alt:"Project Preview",className:"fadeIn duration-2"},l._key))}),t(ue,{className:"prev",onClick:n,"aria-label":"Previous Slide",children:t(N,{})}),t(ue,{className:"next",onClick:o,"aria-label":"Next Slide",children:t(N,{})}),t(wt,{children:e.map((l,d)=>t("div",{onClick:()=>r(d),onKeyPress:()=>r(d),role:"button",tabIndex:"0","aria-label":"Change Slide",className:i===d?"active":""},l._key))})]})},D=s.div`
  width: 100%;
  height: 200px;
  backdrop-filter: blur(3px);
  opacity: 0;
  transition: all 300ms ease-out;
  cursor: pointer;
  background: ${({theme:e})=>e.colors.blacks[1]};
  ${z("justify-content")};

  & > div {
    ${z("flex-direction","column")};
  }

  a {
    margin-bottom: 20px;
    ${g(({theme:e})=>e.sizes.n,600,({theme:e})=>e.colors.white)};
    ${z()};

    span {
      overflow-x: hidden;
    }

    & > img {
      opacity: 0.5;
      margin-left: 10px;
      transition: opacity 300ms;
    }

    &:last-child {
      margin: 30px 0 0;
      ${g(({theme:e})=>e.sizes.s,400,({theme:e})=>e.colors.primary)};

      img {
        width: 12px;
        margin-left: 5px;
      }
    }

    &:hover ${u} img {
      transform: translateX(0);
    }

    &:hover > img {
      opacity: 1;
    }
  }

  @media screen and (min-width: 400px) {
    height: 270px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;

    ${u} {
      width: 20px;
      height: 20px;
      column-gap: 20px;

      img {
        transform: translateX(-40px);
      }
    }

    img {
      width: 20px;
    }

    a:last-child img {
      width: 15px;
    }
  }
`,yt=s.div`
  width: 100%;
  max-width: 400px;
  height: 225px;
  overflow-y: hidden;
  border: 1px solid ${({theme:e})=>e.colors.greys[0]};

  &:hover ${D} {
    opacity: 1;
    transform: translateY(-200px);
  }

  @media screen and (min-width: 400px) {
    height: 295px;

    &:hover ${D} {
      transform: translateY(-270px);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    max-width: unset;
  }

  ${({isCarousel:e})=>e&&h`
      height: 260px;
      margin: 0 auto;
      margin-bottom: 40px;
      opacity: 0;
      border: 0;

      @media screen and (min-width: 400px) {
        height: 330px;
      }

      @media screen and (min-width: 600px) {
        height: 440px;
        max-width: unset;
      }

      @media screen and (min-width: 768px) {
        height: 540px;
      }

      @media screen and (min-width: 850px) {
        height: 595px;
      }

      @media screen and (min-width: 1024px) {
        height: 440px;
      }

      @media screen and (min-width: 1100px) {
        height: 540px;
      }

      @media screen and (min-width: 1240px) {
        height: 595px;
      }
    `}
`,vt=s.div`
  height: 25px;
  position: relative;
  background: ${({theme:e})=>e.colors.greys[0]};
  ${z("justify-content")};

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5px;
    position: absolute;
    left: 5px;
  }

  span {
    user-select: none;
    ${g(({theme:e})=>e.sizes.xs,500)};
  }
`,xe=s.div`
  width: 100%;
  height: 200px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 400px) {
    height: 270px;
  }

  ${({isCarousel:e})=>e&&h`
      position: relative;
      border: 1px solid ${({theme:i})=>i.colors.greys[0]};

      @media screen and (min-width: 600px) {
        height: 380px;
      }

      @media screen and (min-width: 768px) {
        height: 470px;
      }

      @media screen and (min-width: 850px) {
        height: 535px;
      }

      @media screen and (min-width: 1024px) {
        height: 370px;
      }

      @media screen and (min-width: 1100px) {
        height: 470px;
      }

      @media screen and (min-width: 1240px) {
        height: 535px;
      }
    `}
`,fe=({project:e,children:i,isCarousel:n})=>{const{name:o,images:r}=e;return a(yt,{isCarousel:n,className:n?"fadeIn delay-6":"",children:[a(vt,{children:[a("div",{children:[t("svg",{width:"10",height:"10",children:t("circle",{cx:"5",cy:"5",r:"5",fill:"#FF5F57"})}),t("svg",{width:"10",height:"10",children:t("circle",{cx:"5",cy:"5",r:"5",fill:"#FFBD2E"})}),t("svg",{width:"10",height:"10",children:t("circle",{cx:"5",cy:"5",r:"5",fill:"#28CA41"})})]}),t("span",{children:o})]}),n?t(xe,{isCarousel:!0,children:t(bt,{images:r})}):t(xe,{children:t("img",{src:r[0].url,alt:o})}),i]})},$t=({project:e})=>{const{state:{icons:i}}=c.exports.useContext(m),n=i.find(f=>f.alt==="Arrow"),o=i.find(f=>f.alt==="PurpleArrow"),r=i.find(f=>f.alt==="External Link"),l=i.find(f=>f.alt==="GitHub"),{codeUrl:d,previewUrl:p,slug:y}=e;return t(fe,{project:e,children:t(D,{children:a("div",{children:[a("a",{href:d,target:"_blank",rel:"noreferrer",children:[t("span",{children:"Code"}),a(u,{children:[t("img",{src:r.url,alt:r.alt}),t("img",{src:l.url,alt:l.alt})]})]}),a("a",{href:p,target:"_blank",rel:"noreferrer",children:["Live Preview",t("img",{src:n.url,alt:n.alt})]}),a(b,{to:`portfolio/${y}`,children:["Learn more..."," ",t("img",{src:o.url,alt:o.alt})]})]})})})},kt=s.section`
  display: grid;
  gap: 20px;
  justify-content: center;
  opacity: 0;

  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
  }
`,zt=({projects:e})=>t(C,{children:t(w,{children:t(kt,{className:"fadeIn delay-6",children:e&&e.map(i=>t($t,{project:i},i._id))})})}),we=s.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -10;
  background: url('${({coverImage:e})=>e}') center;
  background-size: cover;
  transition: transform 300ms ease-out;
`,Ct=s.div`
  min-height: 250px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.greys[0]};

  &:hover ${we} {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    height: 300px;
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`,Nt=s.div`
  display: flex;
  height: 100%;
  padding: 15px;
  flex-direction: column;
  backdrop-filter: blur(3px);
  color: ${({theme:e})=>e.colors.white};
  background: ${({theme:e})=>e.colors.blacks[1]};

  h2 {
    margin: 0;
    ${({theme:e})=>g(e.sizes.l,600)};
  }

  span {
    font-size: ${({theme:e})=>e.sizes.xs};
  }

  p {
    margin: 10px 0;
    ${({theme:e})=>g(e.sizes.n,null,e.colors.whites[1])};
  }

  div {
    margin-top: auto;
  }
`,St=s(b)`
  color: ${({theme:e})=>e.colors.white};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`,It=({post:e})=>{const{title:i,slug:n,description:o,cover:r,tags:l,publishedAt:d}=e,p={month:"long",day:"numeric",year:"numeric",timeZone:"UTC"};return a(Ct,{children:[t(we,{coverImage:r}),a(Nt,{children:[t(St,{to:`/blog/${n}`,children:t("h2",{children:i})}),t("span",{children:new Date(d).toLocaleDateString("en-US",p)}),t("p",{children:o}),t("div",{children:l.map(y=>a(ce,{to:`/blog/tag/${y.name.toLowerCase()}`,children:[t("span",{children:"#"}),t("span",{children:y.name})]},y._id))})]})]})},Pt=s.section`
  display: grid;
  row-gap: 20px;
  opacity: 0;
`,be=({posts:e})=>t(C,{children:t(w,{children:t(Pt,{className:"fadeIn delay-6",children:e&&e.map(i=>t(It,{post:i},i._id))})})}),ye=s.section`
  margin-bottom: 40px;
  grid-area: 2 / auto / 3 / auto;
  overflow-y: hidden;

  p {
    margin: 0;
    transform: translateY(200%);
    font-size: ${({theme:e})=>e.sizes.n};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    margin: 30px 0 40px;
    grid-area: 2 / main-start / 3 / main-end;
    font-size: 20px;
  }
`,j=({message:e,isAbout:i})=>t(ye,{children:t(w,{children:t("p",{className:`slideUp ${i?"delay-4":"delay-2"}`,children:e})})}),jt=s.div`
  display: none;
  place-items: center;
  text-align: center;
  font-weight: 500;
  user-select: none;
  opacity: 0;
  backdrop-filter: blur(20px);
  background: ${({theme:e})=>e.colors.blacks[2]};
  ${L("fixed",40)};

  span {
    display: inline-block;
    transform: translateY(200%);
    font-size: ${({theme:e})=>e.sizes.xl};
  }

  &.active {
    display: grid;
    animation: ${Xe} 2400ms forwards;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`,Lt=()=>{const e=c.exports.useRef(null),i=c.exports.useRef(null),[n,o]=c.exports.useState(!1);return c.exports.useEffect(()=>{const r=["Welcome back! \u{1F604}","Hello again! \u{1F44B}","It's good to see you again! \u{1F648}"];document.addEventListener("visibilitychange",()=>{const l=document.visibilityState==="visible",d=Math.round(Math.random()*(r.length-1));l?(i.current.innerText=r[d],o(!n),setTimeout(()=>{e.current.classList.remove("active"),i.current.classList.remove("slideUp")},2400)):(i.current.innerText="",o(!1))})},[]),t(jt,{ref:e,className:`${n?"active":""}`,children:t("div",{className:"overflow--hidden",children:t("span",{ref:i,className:`${n?"slideUp":""}`})})})},Ut=()=>{const{pathname:e}=ae();return c.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null},k=l=>{var d=l,{component:e,hasArrow:i,isHome:n,isPost:o}=d,r=re(d,["component","hasArrow","isHome","isPost"]);return t(je,O(A({},r),{render:()=>t(gt,{hasArrow:i,isHome:n,isPost:o,children:t(e,{})})}))},At=s.div`
  text-align: center;

  & > img {
    width: 150px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;

    & > img {
      width: 200px;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;

    & > img {
      width: 250px;
    }
  }
`,Mt=s.div`
  margin: 25px 0 10px;

  h1 {
    margin: 0;
    line-height: 1.2em;
    transform: translateY(200%);
    ${g(({theme:e})=>e.sizes.xl,500)}
  }
`,_t=s.div`
  margin: 0 0 30px;

  p {
    margin: 0;
    transform: translateY(200%);
    font-size: ${({theme:e})=>e.sizes.m};
  }
`,Bt=s(b)`
  display: inline-block;
  transform: translateY(200%);
  font-size: ${({theme:e})=>e.sizes.s};
  color: ${({theme:e})=>e.colors.primary};

  img {
    margin-left: 5px;
    vertical-align: middle;
    opacity: 0.4;
    transition: opacity 300ms ease-out;
  }

  &:hover img {
    opacity: 1;
  }
`,Et=s.footer`
  padding: 40px 0;
  text-align: center;
  color: ${({theme:e})=>e.colors.whites[1]};

  p {
    margin: 0;
    transform: translateY(200%);
    font-size: ${({theme:e})=>e.sizes.s};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    grid-area: 2 / main-start / -1 / main-end;
    font-size: 20px;
  }
`,Tt=()=>{const{state:{author:{image:e},icons:i}}=c.exports.useContext(m),n=i.find(o=>o.alt==="PurpleArrow");return a(x,{children:[t(v,{children:t("title",{children:"Jos\xE9 Olemar"})}),t(C,{isHome:!0,children:t(w,{children:a(At,{children:[t("img",{src:e.url,alt:e.alt,className:"fadeIn"}),t(Mt,{className:"overflow--hidden",children:t("h1",{className:"slideUp",children:"Hi, I'm Jos\xE9 Olemar"})}),t(_t,{className:"overflow--hidden",children:t("p",{className:"slideUp delay-2",children:"I like creating things with web technologies."})}),t("div",{className:"overflow--hidden",children:a(Bt,{className:"slideUp delay-4",to:"/portfolio",children:["See the latest projects I've been working on"," ",t("img",{src:n.url,alt:n.alt})]})})]})})}),t(Et,{children:t(w,{children:t("div",{className:"overflow--hidden",children:a("p",{className:"slideUp delay-6",children:["You can follow me on"," ",t("a",{href:"https://twitter.com/Joseluisolemar",target:"_blank",rel:"noreferrer",className:"link--decoration",children:"Twitter"})," ","and"," ",t("a",{href:"https://github.com/JL-OLEMAR",target:"_blank",rel:"noreferrer",className:"link--decoration",children:"GitHub"}),". Also, here's my"," ",t("a",{href:"https://www.linkedin.com/in/jose-luis-olemar-velasquez",target:"_blank",rel:"noreferrer",className:"link--decoration",children:"LinkedIn"})," ","and my"," ",t("a",{href:"mailto:joseluis19963@gmail.com",target:"_blank",rel:"noreferrer",className:"link--decoration",children:"Email"}),"."]})})})})]})},Yt=()=>{const{state:{pinnedMessages:e,projects:i}}=c.exports.useContext(m),{message:n}=e.find(o=>o.page==="Portfolio");return a(x,{children:[t(v,{children:t("title",{children:"Portfolio - Jos\xE9 Olemar"})}),t(P,{center:!0,children:t(S,{children:t("h1",{className:"slideUp",children:"Portfolio"})})}),t(j,{message:n}),t(zt,{projects:i})]})},Ot=Le(se),G=e=>Ot.image(e),Z=()=>{const{state:{icons:e}}=c.exports.useContext(m),i=e.find(n=>n.alt==="External Link");return{types:{linkList:({node:n})=>{const{items:o}=n;return t(Ge,{children:o.map(r=>t("li",{children:a("a",{href:r.href,target:"_blank",rel:"noreferrer",children:[a(u,{children:[t("img",{src:i.url,alt:i.alt}),t("img",{src:G(r.icon),alt:r.text})]}),t("span",{className:"link--decoration",children:r.text})]})},r._key))})},iconList:({node:n})=>{const{items:o}=n;return t("ul",{children:o.map(r=>a(le,{children:[t("img",{src:G(r.icon),alt:r.text}),t("span",{children:r.text})]},r._key))})}},marks:{link:({mark:n,children:o})=>{const{href:r}=n;return t("a",{href:r,target:"_blank",rel:"noreferrer",className:"link--decoration",children:o})},iconLink:({mark:n,children:o})=>{const{href:r,icon:l}=n;return a("a",{href:r,target:"_blank",rel:"noreferrer",children:[t("span",{className:"link--decoration",children:o}),a(u,{children:[t("img",{src:i.url,alt:i.alt}),t("img",{src:G(l),alt:o})]})]})},internalUrl:({mark:n,children:o})=>{const{href:r}=n;return t(b,{to:r,className:"link--decoration",children:o})}}}},Ft=s.div`
  display: grid;
  height: 100%;
  padding: 0 20px;
  place-items: center;
`,Ht=s.div`
  text-align: center;
  opacity: 0;

  h1 {
    margin: 0;
    font-size: ${({theme:e})=>e.sizes.xl};
    text-shadow: 0 0 2px ${({theme:e})=>e.colors.primary};
  }

  h2 {
    margin: 0;
    font-size: ${({theme:e})=>e.sizes.l};
  }

  p {
    margin: 0;
    font-size: ${({theme:e})=>e.sizes.n};
  }

  a {
    height: 50px;
    width: 250px;
    margin: 40px auto 0;
    border-radius: 20px;
    transform: rotateX(15deg);
    transition: all 200ms;
    background: ${({theme:e})=>e.colors.purples[3]};
    border-bottom: 6px solid ${({theme:e})=>e.colors.purples[4]};
    ${z("justify-content")};
    ${g(({theme:e})=>e.sizes.n,500,({theme:e})=>e.colors.white)};

    img {
      margin-left: 5px;
    }

    &:hover {
      border-width: 3px;
      transform: rotateX(20deg);
    }

    &:active {
      border-width: 0;
      transform: rotateX(25deg);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`,W=()=>{const{state:{icons:e}}=c.exports.useContext(m),i=e.find(n=>n.alt==="Arrow");return a(x,{children:[t(v,{children:t("title",{children:"Page Not Found - Jos\xE9 Olemar"})}),t(C,{children:t(Ft,{children:a(Ht,{className:"fadeIn delay-2",children:[t("h1",{children:"404"}),t("h2",{children:"There's nothing here..."}),t("p",{children:"...the page you're looking for was not found or maybe never existed."}),a(b,{to:"/",children:["Back to Home ",t("img",{src:i.url,alt:i.alt})]})]})})})]})},Xt=s.div`
  display: grid;
  margin-bottom: 40px;
  gap: 10px;
  opacity: 0;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`,ve=s.a`
  height: 50px;
  width: 100%;
  border-radius: 20px;
  transform: rotateX(15deg);
  transition: all 200ms;
  background: ${({theme:e})=>e.colors.blacks[3]};
  border-bottom: 6px solid ${({theme:e})=>e.colors.blacks[4]};
  ${z("justify-content")};
  ${g(({theme:e})=>e.sizes.n,500,({theme:e})=>e.colors.white)};

  img {
    margin-left: 5px;
  }

  &:hover {
    border-width: 3px;
    transform: rotateX(20deg);
  }

  &:active {
    border-width: 0;
    transform: rotateX(25deg);
  }
`,Jt=s(ve)`
  background: ${({theme:e})=>e.colors.purples[3]};
  border-bottom: 6px solid ${({theme:e})=>e.colors.purples[4]};
`,Rt=()=>{const{state:{projects:e,icons:i}}=c.exports.useContext(m),{slug:n}=H(),o=Z(),r=e.find(p=>p.slug===n),l=i.find(p=>p.alt==="Arrow"),d=i.find(p=>p.alt==="GitHub");return r?a(x,{children:[t(v,{children:a("title",{children:[r.name," - Jos\xE9 Olemar"]})}),t(P,{center:!0,children:t(S,{children:t("h1",{className:"slideUp",children:r.name})})}),t(j,{message:r.description}),t(C,{children:a(w,{children:[a(Xt,{className:"fadeIn delay-6",children:[a(ve,{href:r.codeUrl,target:"_blank",rel:"noreferrer",children:["Code ",t("img",{src:d.url,alt:d.alt})]}),a(Jt,{href:r.previewUrl,target:"_blank",rel:"noreferrer",children:["Live Preview ",t("img",{src:l.url,alt:l.alt})]})]}),t(fe,{project:r,isCarousel:!0}),a(J,{className:"fadeIn delay-6",children:[a(_,{children:[t("h2",{children:"About"}),t(X,{blocks:r.about,serializers:o})]}),a(_,{children:[t("h2",{children:"Technologies"}),t("ul",{children:r.stack.map(p=>a(le,{children:[t("img",{src:p.icon,alt:p.name}),t("span",{children:p.name})]},p._key))})]})]})]})})]}):t(W,{})},Dt=()=>{const{state:{pinnedMessages:e,posts:i}}=c.exports.useContext(m),{message:n}=e.find(o=>o.page==="Blog");return a(x,{children:[t(v,{children:t("title",{children:"Blog - Jos\xE9 Olemar"})}),t(P,{center:!0,children:t(S,{children:t("h1",{className:"slideUp",children:"Blog"})})}),t(j,{message:n}),t(be,{posts:i})]})},Gt=s.div`
  margin-bottom: 40px;

  & ${S} {
    margin-bottom: 0;
  }

  & ${ye} {
    margin: 10px 0 20px;

    div {
      padding: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-area: 1 / main-start / 2 / main-end;
  }
`,Zt=s.div`
  padding-top: 50%;
  background: url('${({coverImage:e})=>e}') center;
  background-size: cover;
  opacity: 0;
`,Wt=s.div`
  display: grid;
  row-gap: 5px;
  overflow-y: hidden;

  a {
    transform: translateY(200%);
  }

  & > span {
    transform: translateY(300%);
  }

  span {
    font-size: ${({theme:e})=>e.sizes.xs};
  }
`;s.aside`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    grid-area: auto / margin3-start / auto / margin4-end;
  }

  div {
    position: fixed;
    bottom: 70px;
    transform: translateY(200%);
    background: ${({theme:e})=>e.colors.black};

    @media screen and (max-width: 1023px) {
      display: flex;
      height: 60px;
      align-items: center;
      justify-content: space-between;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
    }
  }

  a {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    transition: border-color 300ms ease-out;
    border: 1px solid ${({theme:e})=>e.colors.greys[0]};

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -10;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 300ms ease-out;
      background: ${({theme:e})=>e.colors.white};
    }

    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }

    &:hover {
      border-color: ${({theme:e})=>e.colors.white};
    }

    @media screen and (min-width: 1024px) {
      width: 60px;
      height: 60px;
      border-color: ${({theme:e})=>e.colors.tertiary};
    }
  }

  img {
    width: 20px;
    height: 20px;
  }
`;const Kt=()=>{const{state:{posts:e}}=c.exports.useContext(m),{slug:i}=H(),n=Z(),o=e.find(l=>l.slug===i),r={month:"long",day:"numeric",year:"numeric",timeZone:"UTC"};return o?a(x,{children:[t(v,{children:a("title",{children:[o.title," - Jos\xE9 Olemar"]})}),a(Gt,{children:[t(Zt,{coverImage:o.cover,className:"fadeIn"}),t(w,{children:a(P,{aboutTitleContainer:!0,children:[t(S,{aboutTitle:!0,children:t("h1",{className:"slideUp",children:o.title})}),t(j,{message:o.description}),a(Wt,{children:[t("span",{className:"slideUp delay-4",children:new Date(o.publishedAt).toLocaleDateString("en-US",r)}),t("div",{children:o.tags.map(l=>a(ce,{to:`/blog/tag/${l.name.toLowerCase()}`,className:"slideUp delay-4",children:[t("span",{children:"#"}),t("span",{children:l.name})]},l._id))})]})]})})]}),t(C,{children:t(w,{children:t(J,{className:"fadeIn delay-6",children:t(_,{children:t(X,{blocks:o.body,serializers:n})})})})})]}):t(W,{})},qt=()=>{const{state:{pinnedMessages:e,posts:i}}=c.exports.useContext(m),{slug:n}=H(),{message:o}=e.find(d=>d.page==="Blog"),r=i.filter(d=>d.tags.some(p=>p.name.toLowerCase()===n)),{name:l}=r[0].tags.find(d=>d.name.toLowerCase()===n);return a(x,{children:[t(v,{children:a("title",{children:["#",l," - Jos\xE9 Olemar"]})}),t(P,{center:!0,children:t(S,{children:a("h1",{className:"slideUp",children:[t("span",{children:"#"}),t("span",{children:l})]})})}),t(j,{message:o}),t(be,{posts:r})]})},Vt=()=>{const{state:{pinnedMessages:e,author:{bio:i}}}=c.exports.useContext(m),n=Z(),{message:o}=e.find(r=>r.page==="About");return a(x,{children:[t(v,{children:t("title",{children:"About me - Jos\xE9 Olemar"})}),t(P,{aboutTitleContainer:!0,children:t(w,{children:a(S,{aboutTitle:!0,children:[t("div",{className:"overflow--hidden",children:t("h3",{className:"slideUp",children:"About me"})}),t("div",{className:"overflow--hidden",children:t("h1",{className:"slideUp delay-2",children:"Jos\xE9 Olemar"})})]})})}),t(j,{message:o,isAbout:!0}),t(C,{children:t(w,{children:t(J,{className:"fadeIn delay-8",children:t(_,{children:t(X,{blocks:i,serializers:n})})})})})]})},Qt=()=>t(x,{children:t(Ue,{theme:Ye,children:t(at,{children:t(st,{children:a(Ae,{children:[t(Je,{}),t(Re,{}),t(Lt,{}),t(Ut,{}),a(Me,{children:[t(k,{exact:!0,path:"/",component:Tt,isHome:!0}),t(k,{exact:!0,path:"/portfolio",component:Yt}),t(k,{exact:!0,path:"/portfolio/:slug",component:Rt,hasArrow:!0}),t(k,{exact:!0,path:"/blog",component:Dt}),t(k,{exact:!0,path:"/blog/:slug",component:Kt,hasArrow:!0,isPost:!0}),t(k,{exact:!0,path:"/blog/tag/:slug",component:qt}),t(k,{exact:!0,path:"/about",component:Vt}),t(k,{component:W})]})]})})})})});_e.render(t(Qt,{}),document.getElementById("root"));
