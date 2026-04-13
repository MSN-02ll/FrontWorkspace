// UserInfoContainer는 부모 컴포넌트입니다.
// UserInfoContainer에서 useState를 통해 선언한 상태값과 함수를  UserInfo로 전달하세요.
// 선언할 사용자 정보 : {name : '홍길동', age : 30, hobby : ['코딩','게임']}

// UserInfoProps는 부모컴포넌트에서 전달하는 props의 type입니다.
// UserInfo컴포넌트에서는 부모컴포넌트로부터 전달받은 상태값을 렌더링합니다.
// UserInfo 함수에서 정보 변경 버튼 클릭시 부모컴포넌트에서 작성한 데이터를 다음 데이터로 변경하세요
// 변경할 사용자 정보 : {name : '학생이름', age : 학생나이, hobby : ['취미1','취미2']}

import React, { useState } from 'react';

interface User {
    name: string, 
    age: number, 
    hobby: string[]
  }
interface UserInfoProps {
  user : User
  setUser : (user: User) => void

}

export default function UserInfoContainer() {
    const [user, setUser]= useState<User>(
      {name : '홍길동', 
      age : 30, 
      hobby : ['코딩','게임']}
    );
  
  return (
    <div>      
      <UserInfo user={user} setUser={setUser}/>
    </div>
  );
}


function UserInfo({user, setUser}: UserInfoProps) {
  const handleChangeName = () => {
    setUser({
      name: '박영우',
      age: 4,
      hobby : ['시창작', '소설창작']
    });
     
  }
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>사용자 정보</h2>
      <h3>이름: {user.name}</h3>
      <h3>나이: {user.age}</h3>
      <h3>취미: {user.hobby.toString()}</h3>
     <button onClick={handleChangeName}>정보 변경변경</button>
    </div>
  );
}









