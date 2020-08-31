import React from 'react';

import "./style.css"

class Form extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
           userName: '',
           userEmail: '',
           userGender : '',
           userPhone : '',
           userPassword : '',
         }
    }



    onNameChange = (event) => {
        this.setState({
            userName : event.target.value
        })
    }
    onEmailChange = (event) => {
        this.setState({
            userEmail : event.target.value
        })
    }
    onPhoneChange = (event) => {
        this.setState({
            userPhone : event.target.value
        })
    }
    onGenderChange = (event) => {
        this.setState({
            userGender : event.target.value
        })
    }
    onPasswordChange = (event) => {
        this.setState({
            userPassword : event.target.value
        })
      }
    onSubmit = () => {

        if(this.state.userPhone === '' || this.state.userPhone.length !==10)
        {window.alert("Invild phone number");
         return;
        }
        window.alert(`
        Name : ${this.state.userName},
        Email : ${this.state.userEmail},
        Phone : ${this.state.userPhone},
        Gender : ${this.state.userGender},
        Password : ${this.state.userPassword},
        `);

        this.clearFormFields()
    }

    clearFormFields = () => {

        this.setState(
            {
                userName: '',
                userEmail: '',
                userGender : '',
                userPhone : '',
                userPassword : '',
            }
        )
    }

    render = () =>{
        
        return(

          <div className = "form-cont">  
          <p  className  = "title"> ----- User Form------- </p>
          
          <input 
          onChange = {this.onNameChange}
          value ={ this.state.userName}
          className = "input-style" type = "text" placeholder = "Enter your name"/>

          <input
          onChange = {this.onEmailChange}
          value ={ this.state.userEmail}
          className = "input-style" type = "email" placeholder = "Enter your email"/>

          <input
          onChange = {this.onPhoneChange}
          value ={ this.state.userPhone}
          className = "input-style" type = "text" placeholder = "Enter your phone number"/>
          
          <select
          onChange = {this.onGenderChange}
          value ={ this.state.userGender}
          className = "input-style">   
          <option value  = "Male" className = "input-style" >Male</option>
          <option value  = "Female"className = "input-style" >FeMale</option>    
          </select>

          <input
          onChange = {this.onPasswordChange}
          value ={ this.state.userPassword}
          className = "input-style" type = "password" placeholder = "Enter your Password"/>         
          
          <button onClick = {this.onSubmit} className = "submit-btn"> Submit </button>

          </div>
         )

    }
}

export default Form;