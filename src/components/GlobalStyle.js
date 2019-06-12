import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const BREAKPOINT_SMALL = '500px'
export const BREAKPOINT_MEDIUM = '768px'
const LINK_COLOR = '#008AFF'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    font-family: 'Lora', 'Times New Roman', serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.42857143;
    color: #404040;
    position: relative;
    background: #FFF;
    display: flex;
    flex-flow: column;
    height: 100vh;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin-top: 20px;
    margin-bottom: 10px;
    color: inherit;
  }
  h1 {
    font-size: 72px;
    font-weight: 800;
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
  }
  h3 {
    font-size: 24px;
  }
  p {
    line-height: 1.5;
    margin: 20px 0;
  }
  a {
    color: ${LINK_COLOR};
    text-decoration: none;
  }
  a:focus, a:hover {
    text-decoration: underline;
    outline: 0;
  }
  b, strong {
    font-weight: 700;
  }
  hr {
    height: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  blockquote {
    border-left: 5px solid #eee;
    padding-left: 26px;
    margin-left: 0;
    color: #808080;
    font-style: italic;
  }
  .well {
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  }
  .small, small {
    font-size: 16px;
  }
  a.btn {
    color: ${LINK_COLOR};
    font-weight: 600;
    border: 1px solid ${LINK_COLOR};
    border-radius: .25rem;
    background-color: #ffffff;
    padding: 10px 16px;
    font-size: 16px;
    line-height: 1.3333333;

    &:hover {
      background-color: ${LINK_COLOR};
      text-decoration: none;
      color: #ffffff;
    }
  }
  .text-center {
    text-align: center;
  }

  .label {
    padding: 0.2em 0.6em 0.3em;
    color: white;
    font-size: 14px;
    border-radius: 0.25em;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.hackathon {
      background: #d9534f;
    }

    &.meetup {
      background: #5bc0de;
    }
  }
  /* Inline code */
  :not(pre) > code {
    font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
    border-radius: 0.3em;
    background: rgba(255, 229, 100, 0.2);
    color: #1a1a1a;
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
  }
`

export default GlobalStyle
