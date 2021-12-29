import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react/cjs/react.development';

 function App() {
     const [values, setValues]= useState({
         firstName: "",
         lastName: "",
         email: ""
     });

     const [submitted, setSubmitted] = useState(false);
     const [valid, setValid] = useState(false);

     const handlefirstNameInputChange = (event) => {
         setValues({...values, firstName: event.target.value})
     }

     const handlelastNameInputChange = (event) => {
        setValues({...values, lasttName: event.target.value})
    }

    const handleemailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true);
        }
        setSubmitted(true);
    }

     return (
         <div className= "form-container">
             <form className="register-form" onSubmit={handlesubmit}>
                 {submitted && valid? <div className="success-message">Success! Thank you for registering</div> : null}
                 <input
                 onChange={handlefirstNameInputChange}
                 value={values.firstName}
                 className="form-field"
                 placeholder="First Name"
                 name="firstName"/>
                 {submitted && !values.firstName ? <span>please enter a first name</span> : null}

                <input
                onChange={handlelastNameInputChange}
                value={values.lastName}
                 className="form-field"
                 placeholder="Last Name"
                 name="lastName"/>
                 {submitted && !values.lastName ? <span>please enter a last name</span> : null}

                <input
                onChange={handleemailInputChange}
                value={values.email}
                 className="form-field"
                 placeholder="Email"
                 name="email"/>
                 {submitted && !values.email ? <span>please enter an email address</span> : null}


                 <button className="form-field" type="submit">Register</button>
             </form> 
        </div>
     )

 }
export default App;