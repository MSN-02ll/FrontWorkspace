import { useState } from "react";

export default function ArrayDataBinding(){
    const [fruits, setFruits] = useState([
        {id:1, name: 'apple'},
        {id:2, name: 'banana'}, 
        {id:3, name: 'cherry'}
    ]);

    const addFruit = () => {
        /**
         *  #3 배열에 데이터 추가후 렌더링
         */
        const newFruit = {id:4, name: 'orange'};
        fruits.push(newFruit);

        // setFruits(fruits);

        // 배열데이터 추가시, 반드시 새로운배열을 선언해줘야
        // 변경사항이 있음을 감지한다. (주소값 체크)
        setFruits([...fruits,newFruit]);


    }

    return (
        <div>
            <h1>ArrayDataBinding</h1>
            <h2>FruitList</h2>
            <ul>
                {
                    /**
                     *  #1 배열데이터 바인딩
                     *  map()
                     *  - 배열의 각 요소에 대해 함수를 호출하여 새로운 요소로
                     *  변경하여 봔한하는 함수
                     *  - 리액트에서는 JSX배열만 화면상에 바인딩이 가능하므로
                     *  배열의 각 요소를 JSX요소로 변환해줘야 한다. 
                     *  - JSX에서는 for, if, while등의 예약어를 사용할 수 없다.
                     */
                    // 변수를 가지고 있는 메서드를 호출하는 것만 가능
                    fruits.map((fruit)=>(
                        /**
                         *  #2 key
                         *   - 배열의 요소를 식별하는 유니크 값
                         *   - key값이 있어야 리액트가 변경요소를 추적할 수 있다.
                         *   - 효율적인 렌더링을 위해서는 필수로 추가해야하는 값.
                         */
                        <li>{fruit.id} - {fruit.name}</li>
                    ))
                }
            </ul>
            <button onClick={addFruit}>과일추가</button>
        </div>
    )
}