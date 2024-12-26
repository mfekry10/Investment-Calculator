import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"


function App() {

  const[userInput, setUserInput]= useState({
    initialInvestment:1000,
    annualInvestment:200,
    expectedReturn:6,
    duration:10
  })

  const inputValid = userInput.duration > 0 ;

function handleChange(inputIdentifier , newValue){
    setUserInput( (prevUserInput)=>{
         return{
              ...prevUserInput,
              [inputIdentifier] : +newValue 
         }

    })
}


  return(
    <>
      <Header />
      <UserInput UserInput={userInput} onChangeInput={handleChange} />
      { !inputValid && <p className="center">Please Enter Duration greater than zero</p>}
      { inputValid && <Results data={userInput}/> }
    </>
  )
 
}

export default App
