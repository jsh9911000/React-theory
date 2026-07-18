import { useContext } from "react";
import { UserContext } from "./Context";

export const ContextHello = () => {
    
    const name = useContext(UserContext);

    return (
        <div>
            Hello {name}
        </div>
    );
}