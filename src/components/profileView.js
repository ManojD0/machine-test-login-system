import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import '../assets/style.css';
import { store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";


import ReactNotifications from "react-notifications-component";
class profileView extends Component {
    constructor(props) {
        super(props);
  
         this.state = {
            redirect:localStorage.getItem("id"),
            profiledatas:[],
            image: null
          };

   

    }



    componentDidMount() {
      this.item()
    }

  
item=()=>{
    fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    .then(json =>
        //  console.log("yiytiyui",json.data)
         this.setState({profiledatas:json.data })
         )
}
 
    handleLogOut = () => {
        localStorage.clear();
        this.setState({ redirect: '' });
      };
      profileView =() =>{
        this.props.history.push("/ProfileView");
      }

      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };


      onSubmit=()=>{
    
        let username = this.state.image;
      

    
  
       
            
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
              var urlencoded = new URLSearchParams();
              urlencoded.append("username", username);
            
        
              var requestOptions = {
                method: "PUT",
                headers: myHeaders,
                body: urlencoded,
                redirect: "follow",
              };
        
              fetch(`https://reqres.in/api/users/2`, requestOptions)
                .then((response) => response.text())
                .then(async (response) => {
                  const data = JSON.parse(response);
                  console.log("jnupoiplj",data)
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
                 
                })
           
    
 
 
       
}

updateView=()=>{
this.props.history.push("/Update-View");}
    render() {
        var fruits = [];
        fruits.push(this.state.profiledatas);
        console.log("jljhl",this.state.profiledatas)
        return this.state.redirect == "QpwL5tke4Pnpja7X4" ? (
          <div>
            <div>
              <div className="main">
                <h1>
                  Welcome Profile View Page.....!{" "}
                  <span
                    style={{ color: "green", fontWeight: "bold" }}
                    onClick={this.updateView}
                  >
                    {" "}
                    Update View
                  </span>{" "}
                  |
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    onClick={this.handleLogOut}
                  >
                    LogOut
                  </span>{" "}
                  |
                </h1>

                {fruits.map((item) => {
                  return (
                    <ul className="cards">
                      <li className="cards_item">
                        <div className="card">
                          <div className="card_image">
                            <img src={item.avatar} style={{ width: "285px" }} />
                          </div>
                          <div className="card_content">
                            <h2 className="card_title">{item.email}</h2>

                            <p className="card_text">
                              Demo of pixel perfect pure CSS simple responsive
                              card grid layout
                            </p>
                            <button className="btn card_btn">
                              {" "}
                              {item.first_name} &nbsp;{item.last_name}
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <h3 className="made_by">Made with ♡</h3>
            </div>
          </div>
        ) : (
          <Redirect
            push
            to={{
              pathname: "/",
            }}
          />
        );
    }
}


export default profileView;