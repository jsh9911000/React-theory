/*
    Props: 매개변수. 
*/

//컴포넌트에 어떤 데이터를 어떤 타입으로 전달할 수 있는지 정의하는 인터페이스.
interface Props {
    name : string;
    color : string;
}

interface OptionProps {
    name : string;
    color? : string;    //option props.
}

interface ReadonlyProps {
    /*
        readonly: 값을 한번 정하면 변경할 수 없는 키워드. (읽기 전용)
        이후에 컴포넌트에서 수정하려고 하면 에러가 난다.
    */
    readonly userId : string;   
    name : string;
    age : number; 
}

/*
    2가지 컴포넌트 방식.
*/
//(1)바로 컴토넌트는 export 방식.
export const Hello1 = ({name, color = 'blue'}: Props) => {
    return (
        <div style={{ color }}>Hello {name}</div>
    )
}

//(2)컴포넌트를 만들고 export를 따로 선언하는 방식.
function Hello2 ({name, color}: Props){
    return (
        <div style={{color}}>Hello {name}</div>
    )
}

export const OptionHello = ({name, color = 'green'}: OptionProps) => {
    return (
        <div style={{color}}> Hello {name}</div>
    )
}

/*
    {} : .jsx 또는 .tsx 에서 변수의 값을 꺼내서 사용.
    {{}} : .jsx 또는 .tsx 에서 객체를 직접 전달할 때 사용. style 속성에
*/ 