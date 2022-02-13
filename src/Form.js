import React from 'react'

export default function Form(props) {
  
  return (
    <div>
      <form onSubmit={props.submit}>
        <input 
          type="text" 
          placeholder="First Name" 
          onChange={props.handle}
          name="firstName"
          value={props.formData.firstName} 
          />
        <input 
          type="text" 
          placeholder="Last Name" 
          onChange={props.handle}
          name="lastName"
          value={props.formData.lastName} 
          />
          <input 
          type="email" 
          placeholder="Email" 
          onChange={props.handle}
          name="email"
          value={props.formData.email} 
          />
           <textarea 
          placeholder="Comment (Optional)" 
          onChange={props.handle}
          name="comment"
          value={props.formData.comment} 
          />
          <input 
          type="checkbox" 
          onChange={props.handle}
          id="isFriendly"
          checked={props.formData.isFriendly}
          name="isFriendly" 
          />
          <label htmlFor="isFriendly" >Are you Friendly</label><br />
          <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={props.handle}
                    checked={props.formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={props.handle}
                    checked={props.formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={props.handle}
                    checked={props.formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <select 
              id="favColor"
              value={props.formData.favColor}
              name="favColor"
              onChange={props.handle}
              >
                <option value="">Choose One</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select><br />
        <button>Submit</button>
      </form>
      <p>First Name: {props.formData.firstName ? props.formData.firstName : "Enter First Name"}</p>
      <p>Last Name: {props.formData.lastName ? props.formData.lastName : "Enter Last Name"}</p>
      <p>Email: {props.formData.email ? props.formData.email : "Enter Email"}</p>
      <p>Comment: {props.formData.comment ? props.formData.comment : "Your comments"}</p>
    </div>
  );
}