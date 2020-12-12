import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import '../assets/style.css';
class updatePage extends Component {
    constructor(props) {
        super(props);
  
         this.state = {
            redirect:localStorage.getItem("id"),
            listdata:[],
            username: "",
            password: "",
          };

   

    }



    componentDidMount() {
   
      let username='janet'
      let email='janet.weaver@reqres.in'
     
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
            var urlencoded = new URLSearchParams();
            urlencoded.append("username", username.toString());
            urlencoded.append("email", email.toString());
      
            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: urlencoded,
              redirect: "follow",
            };
      
            fetch(`https://reqres.in/api/users/2`, requestOptions)
              .then((response) => response.text())
              .then(async (response) => {
                const data = JSON.parse(response);
                console.log("hjkgjjnlj",data)
                this.setState({listdata: data})
              })
  
   
             
    }

 
 
    handleLogOut = () => {
        localStorage.clear();
        this.setState({ redirect: '' });
      };


 profileView =() =>{
      this.props.history.push("/Profile-View");
        }

updateView = () =>{
        this.props.history.push("/Update-View");
      }

    render() {
        var datas = [];
        datas.push(this.state.listdata);
 
        return this.state.redirect == "QpwL5tke4Pnpja7X4" ? (
          <div>
            <div>
              <div className="main">
                <h1>
                  Welcome....Update View!{" "}
                  <span
                    style={{ color: "green", fontWeight: "bold" }}
                    onClick={this.profileView}
                  >
                    Profile View{" "}
                  </span>
                  |{" "}
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
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">username</th>
                      <th scope="col">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datas &&
                      datas.map((item) => {
                        return (
                          <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
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



export default updatePage;