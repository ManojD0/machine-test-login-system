import React, { Component } from 'react';
import '../../src/assets/style.css';
import { store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";


import ReactNotifications from "react-notifications-component";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isUsername: false,
            isPassword: false,
          };

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      onSubmit = (e) => {
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;

        if(password==='cityslicka'){
         
            var pass=password;
        }
        else{
       
            var pass='';
        }
        //  {username !== '' && password !== '' ? (this.props.history.push('/admin_dashboard')) : ''}
    
        if (username == "") {
          this.setState({ isUsername: true });
        } else {
          this.setState({ isUsername: false });
        }
        if (password == "") {
          this.setState({ isPassword: true });
        } else {
          this.setState({ isPassword: false });
        }
    
        if (username !== "") {
          if (password !== "") {
            
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
              var urlencoded = new URLSearchParams();
              urlencoded.append("username", username.toString());
              urlencoded.append("password", pass.toString());
        
              var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: urlencoded,
                redirect: "follow",
              };
        
              fetch(`https://reqres.in/api/login`, requestOptions)
                .then((response) => response.text())
                .then(async (response) => {
                  const data = JSON.parse(response);
                  console.log("jnlj",data)
                  if (data.token=== 'QpwL5tke4Pnpja7X4') {


   store.addNotification({
                        title: "GREAT!",
                        message: "Welcome to React App ",
                        type: "success",
                        container: "top-right",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                          duration: 3000,
                          // onScreen: true
                        },
                        onRemoval: () => {
                          this.props.history.push("/Home");
                          localStorage.setItem("id", data.token);
                        },
                      })
// alert("log")



                    // console.log(data);
                    // localStorage.setItem("id", data.id);
                    // localStorage.setItem("position", data.position);
                    // localStorage.setItem("name", data.name);
                    // if (data.position === "admin" || data.position === "operation"  ) {
                    //   this.setState({ isPasswordMatch: false });
                    //   store.addNotification({
                    //     title: "GREAT!",
                    //     message: "Welcome to PSA Transport ",
                    //     type: "success",
                    //     container: "top-right",
                    //     animationIn: ["animated", "fadeIn"],
                    //     animationOut: ["animated", "fadeOut"],
                    //     dismiss: {
                    //       duration: 3000,
                    //       // onScreen: true
                    //     },
                    //     onRemoval: () => {
                    //       this.props.history.push("/admin_dashboard");
                    //     },
                    //   })
                    // } else if(data.position === "Client" || data.position === "client"){
                    //   this.setState({ isPasswordMatch: false });
                    //   store.addNotification({
                    //     title: "GREAT!",
                    //     message: "Welcome to PSA Transport ",
                    //     type: "success",
                    //     container: "top-right",
                    //     animationIn: ["animated", "fadeIn"],
                    //     animationOut: ["animated", "fadeOut"],
                    //     dismiss: {
                    //       duration: 3000,
                    //       // onScreen: true
                    //     },
                    //     onRemoval: () => {
                    //       this.props.history.push("/client_Operation_dashboard");
                    //     },
                    //   })
                    // } 
                    // else {
                    //   this.setState({ isPasswordMatch: false });
                    //   store.addNotification({
                    //     title: "GREAT!",
                    //     message: "Welcome to PSA Transport ",
                    //     type: "success",
                    //     container: "top-right",
                    //     animationIn: ["animated", "fadeIn"],
                    //     animationOut: ["animated", "fadeOut"],
                    //     dismiss: {
                    //       duration: 3000,
                    //       // onScreen: true
                    //     },
                    //     onRemoval: () => {
                    //     //  this.props.history.push("/outfordelivery");
    
                    //      this.props.history.push("/DriverDashboard");
                    //     },
                    //   })
                    // }
                  }else {
                    
                    store.addNotification({
                      title: "CHECK ONCE!",
                      message: "Username or password is incorrect ",
                      type: "danger",
                      container: "bottom-right",
                      animationIn: ["animated", "fadeIn"],
                      animationOut: ["animated", "fadeOut"],
                      dismiss: {
                        duration: 3000,
                        // onScreen: true
                      },
                    });
                  }
                  //  else {
                  //   // this.setState({ loginCredentialsValidation: true });
                  // }
                  console.log('response',response)
                })
                .catch((error) => console.log("error", error));
    
          }
        }
      }
    render() {
        return (
            <div>
                  <ReactNotifications />
{/*  Request me for a signup form or any type of help  */}
<div className="login-form">    
  <form  method="post"   onSubmit={this.onSubmit}>
    <div className="avatar"><i className="material-icons"></i></div>
    <h4 className="modal-title">Login to Your Account</h4>
    <div className="form-group">
      <input
       type="text" 
       className="form-control" 
       placeholder="Username" 
       required="required" 
       
       id
       name="username"
    //    value={this.state.username}
       defaultValue={this.state.username}
       onChange={this.handleInput}
       
       />
    </div>
    <div className="form-group">
      <input
       type="password" 
       className="form-control"
        placeholder="Password" 
        required="required"

        id
        placeholder="Password"
        name="password"
        // value={this.state.password}
        onChange={this.handleInput}
        defaultValue={this.state.password}

        />
    </div>
    <div className="form-group small clearfix">
      <label className="checkbox-inline"><input type="checkbox" /> Remember me</label>
      <a href="#" className="forgot-link">Forgot Password?</a>
    </div> 
    <input 
    type="submit"
     className="btn btn-primary btn-block btn-lg"
     
      id="usr"
      />              
  </form>			
  <div className="text-center small">Don't have an account? <a href="#">Sign up</a></div>
</div>

            </div>
        );
    }
}



export default index;