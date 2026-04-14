import { useContext } from "react";
import { myContext } from "./Context";


export default function Children3(){
    const {userInfo, setUserInfo} = useContext(myContext);

    return(
        <>
            <h1>Child3</h1>
            <button onClick={() => {
                setUserInfo({name:'영우', age:5})
            }}>정보 변경
                {userInfo.name} ::: {userInfo.age}
            </button>
        </>
    )
}