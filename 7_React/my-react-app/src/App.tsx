import { useState } from 'react'
import './App.css'
// import { Component } from './01_react_basic/01.Component'
// import { ParentComponent } from './01_react_basic/02.PropsAndState'
import ArrayDataBinding from './01_react_basic/03.ArrayBinding'
import UserInfoContainer from './practice/PropsPractice'
import BoardContainer from './practice/2.BoardContainer'
import ObjectBinding from './01_react_basic/04.ObjectBinding'
import ModuleCss from './01_react_basic/05.ModuleCss'
import UseEffectHook from './02_react_advanced/01_UseEffectHook'
import OptimizationHook from './02_react_advanced/02_Optimization'
import SingUpForm from './02_react_advanced/03_CustomHook'
import ModuleCssPractice from './practice/3.CSS Styling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Component/>
      <ParentComponent/> 
      <ArrayDataBinding/>
      <UserInfoContainer />
      
      <ObjectBinding/>
      <ModuleCss/>
      <BoardContainer />
      <UseEffectHook />
      <OptimizationHook />
      <SingUpForm/>*/}
      <ModuleCssPractice/>
    </>
  )
}

export default App
