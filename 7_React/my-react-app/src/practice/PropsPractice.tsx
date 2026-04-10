// UserInfoContainer는 부모 컴포넌트입니다.
// UserInfoContainer에서 useState를 통해 선언한 상태값과 함수를  UserInfo로 전달하세요.
// 선언할 사용자 정보 : {name : '홍길동', age : 30, hobby : ['코딩','게임']}

// UserInfoProps는 부모컴포넌트에서 전달하는 props의 type입니다.
// UserInfo컴포넌트에서는 부모컴포넌트로부터 전달받은 상태값을 렌더링합니다.
// UserInfo 함수에서 정보 변경 버튼 클릭시 부모컴포넌트에서 작성한 데이터를 다음 데이터로 변경하세요
// 변경할 사용자 정보 : {name : '학생이름', age : 학생나이, hobby : ['취미1','취미2']}

import React, { useState } from 'react';


interface UserInfoProps {
}

export default function UserInfoContainer() {
    const [???, ???]: useState([
        {name : '홍길동', age : 30, hobby : ['코딩','게임']}
    ])
  
  return (
    <div>      
      <UserInfo />
    </div>
  );
}


function UserInfo(??: UserInfoProps) {
  const handleChangeName = () => {
     
  }
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>사용자 정보</h2>
      <h3>이름: </h3>
      <h3>나이: </h3>
      <h3>취미: </h3>
     <button onClick={handleChangeName}>정보 변경변경</button>
    </div>
  );
}

// /practice
//  - BoardContainer.tsx 
//    - BoardList.tsx
//    - BoardInsert.tsx
//    - BoardSearch.tsx
//    - boardMockUp.ts

// boardMockUp의 배열데이터를 export하여 자식 컴포넌트들에 list와 setList를 전달하시오.

import { useState } from 'react';
import { boardList } from './boardMockUp';  
import BoardList from './3. UseStatePractice1';
import BoardRegister from './4. UseStatePractice2';
import BoardSearch from './5. UseStatePractice3';

function BoardContainer(){

  // #1. state선언
  // - BoardList, BoardRegister, BoardSearch의매개변수를확인하여필요한 state를
  //   선언하세요.
  // - 사용할데이터의 초기값은 boardMockUp의 boardList를 사용하세요.

  // #2. props구현
  //  - props문법을 통해 컴포넌트들에 필요한 데이터를 전달하세요.
  //  - 각 컴포넌트의 필요한 데이터는 아래 문제들을 확인하여 파악하세요.
  return(
    <div>
      <BoardList />
      <BoardRegister />
      <BoardSearch />
    </div>
  )
}


export default BoardContainer;

import React from 'react';
import { boardList } from './boardMockUp';  

function BoardList({list, setList}: {list: typeof boardList, setList: React.Dispatch<React.SetStateAction<typeof boardList>>}) {
  // #3. 정렬 함수 구현
  // - 작성일 기준 오름차순/내림차순 해주는 함수를 구현하세요.
  const sortByDateAsc;
  const sortByDateDesc;

  // #2. 삭제함수 구현
  //  - 게시글 번호를 인자로 받아 게시글을 삭제하는 함수를 구현하세요.
  const boardDelete;  
  
  return (
    <div>
      <h2>실습문제 2 : 게시판 목록</h2>
        <div style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={sortByDateAsc}>작성일 오름차순 정렬</button>
            <button onClick={sortByDateDesc}>작성일 내림차순 정렬</button>
          </div>
        </div>
        <table className='list-table'>
          <thead>
            <tr >
              <th style={{ width : "10%" }}>번호</th>
              <th style={{ width : "40%" }}>제목</th>
              <th style={{ width : "20%" }}>작성자</th>
              <th style={{ width : "20%" }}>작성일</th>
              <th style={{ width : "10%" }}>삭제</th>
            </tr>
          </thead>
          <tbody>
            {  
              // #1 데이터 바인딩.  
              //  - props로 전달받은 배열데이터를 바인딩하세요
              //  - 구현 화면은 아래이미지를 참고하세요.(완벽히 똑같지 않아도 ok)
              //  - 렌더링 성능향상을 위해 key값을 설정하세요
            }
          </tbody>
        </table>
    </div>
  );
}

export default BoardList;
