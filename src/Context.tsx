/*
    Context 
    여러 컴포넌트에서 공통으로 필요한 정보를 한 곳에 두고 사용하는 기능.
*/
import { createContext } from "react";

//UserContext라는 Context 생성.
export const UserContext = createContext<string>("");

