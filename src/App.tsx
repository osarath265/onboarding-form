
import { createContext } from 'react'
import './App.css'
import { Form } from './components/Form'
import { FormInput } from './components/FormInput'
import { Step } from './types/step'
import { MyContextProvider } from './Provider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormStep } from './components/FormStep'
import { FormChipInput } from './components/FormChipInput'
import { Summary } from './components/Summary'
import { FormCheckInput } from './components/FormCheckInput'



// This can be obtained from an api as well in future
export const Steps : Step[] = [
  {
      heading : "Welcome!",
      question : "How should we call you ?",
      content : <FormInput name = "name" placeholder = "Name"/>
  },
  {
      heading : "Hi! {name}",
      question : "What are your expertise",
      content : <FormCheckInput name = "expertise" placeholder = "Expertise"  categories = {["lifestyle", "fashion", "food"]}/>
  },
  {
      heading : "One last thing",
      question : "Have you collaborated with brands in the past",
      content : <FormChipInput name="collaborators" placeholder = "Collaborators"></FormChipInput>
  },
]


export const MyContext = createContext({});



function App() {



  return (
    <>
      <MyContextProvider>
      <Router>
        <Routes>
      <Route path="/home" element={<Form  steps={Steps}/>} />
      <Route path="/home/:step" element={<FormStep steps={Steps}/>} />
      <Route path="home/summary" element={<Summary />} />
      </Routes>
        </Router>
      </MyContextProvider>
    </>


  )
}

export default App
