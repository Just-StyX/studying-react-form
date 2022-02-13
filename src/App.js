import React from "react";
import Form from './Form'
import SignUpForm from "./SignUpForm"
import "./style.css";

export default function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  })

  const handleClick = (e) => {
      const {name, value, type, checked} = e.target

      setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }))
  }
  const handleSubmit = (e) => {
     e.preventDefault()

     console.log(formData)
  }
  return (
    <div>
      <SignUpForm />
      {/*<Form formData={formData} handle={handleClick} submit={handleSubmit}/>*/}
    </div>
  );
}
