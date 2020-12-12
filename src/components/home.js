import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import '../assets/style.css';
class home extends Component {
    constructor(props) {
        super(props);
  
         this.state = {
            redirect:localStorage.getItem("id")
          };

   

    }



    componentDidMount() {
//         var lastname = localStorage.getItem("id");
// alert(lastname)
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
        return (


            
          this.state.redirect=='QpwL5tke4Pnpja7X4' ? (
            <div >
           <div>
           

  <div className="main">
    <h1>Welcome....!          <span 
    style={{color:"green",fontWeight:"bold"}} 
    onClick={this.profileView}
    >Profile View </span>| <span  style={{color:"green",fontWeight:"bold"}}  onClick={this.updateView}> Update View</span> | 
    
    
    <span style={{color:"red",fontWeight:"bold"}}
    onClick={this.handleLogOut}
    
    >
        
        
        
        LogOut
    
    </span> |
    
    </h1>
    <ul className="cards">
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://picsum.photos/500/300/?image=14" /></div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://picsum.photos/500/300/?image=17" /></div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <h3 className="made_by">Made with ♡</h3>
</div>

          </div>
          
          ) : 
         
        
        <Redirect
        push
        to={{
          pathname: "/",
        }}
      />
         
        );
    }
}

home.propTypes = {

};

export default home;