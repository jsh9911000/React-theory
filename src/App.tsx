import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
//CSS-in-JS 라이브러리 Emotion.
import styled, { type StyledComponent } from '@emotion/styled';
import {Hello1, OptionHello } from "./Hello";   //여러 개를 보내는 named export 방식은 중괄호를 사용.
import { UserContext } from "./Context";
import { ContextHello } from "./ContextHello";

//Emotion 방식으로 버튼에 CSS 입히기.
const Container = styled.div `
  text-align: center;
`;

const Header = styled.div `
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img `
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;

const Button = styled.button `
  background: blue;
  color: white;
  padding: 10px;
`;

//main.tsx에 보내줄 App 함수. return 시 소괄호 사용.
/*
function App() {

  return (
    <Container>
      <Header> 
      </Header>
      <Button>버튼</Button>
    </Container>
  )
}
*/

//테그 안에서 props를 전달.
/*
function App() {
  return (
    <div>
      <Hello1 name={'jack'} color={'red'}></Hello1>
      <OptionHello name={'john'}></OptionHello>
    </div>
  )
}
*/

function App() {
  return (
    <UserContext.Provider value="jack">
      
      {/* props를 전달하지 않아도 된다. */}
      {/* Provider 하위에 있는 컴포넌트들은 "jack"을 사용할 수 있다. */}
      <ContextHello />

    </UserContext.Provider>
  )
}

//App 컴포넌트를 다른 파일에서도 사용할 수 있게 내보낸다. 그렇기 때문에 main.tsx에서 import해서 사용할 수 있다.
export default App
