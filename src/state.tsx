/*
    state: 컴포넌트 안에서 관리하며, 값이 변경되면 화면이 다시 랜더링되는 동적인 값.
    ex) 버튼 클릭 >> 이벤트 발생 >> state 변경 >> 화면 다시 랜더링

    [현재값, 변경 함수] = useState();
    useState(): 초기값 설정 하는 훅. 즉, 현재 값에 들어가는 초기값.
    변경 함수: 현재값을 변경해주는 함수.
*/

import { useState } from "react";

function StateExample1() {
    //count라는 state 생성. 초기값은 0.
    const [count, setCount ] = useState(0);

    return (
        <div>
            <h1>현재 숫자 : {count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
        </div>
    )
}

export const StateExample2 = () => {
    const [message, setMessage] = useState<string>("");

    const onGreet = () => {
        setMessage("안녕하세요");
    }
    
    const onCring = () => {
        setMessage("엉엉 울어요.");
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={onGreet}>인사하기</button>
            <button onClick={onCring}>울기</button>
        </div>
    )
}