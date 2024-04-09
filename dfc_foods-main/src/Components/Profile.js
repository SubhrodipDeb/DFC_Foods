import React from "react"
const year = new Date().getFullYear();
class Profile extends React.Component{
    
    render(){
        return <h2> Created By 
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/subhrodip-deb-2171291a0/" target="_blank">
         &nbsp;<strong>Subhrodip Deb</strong>
      </a>
      <br />
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        &nbsp;&nbsp;DFC<span>&nbsp;Foods</span>
      </strong>
      </h2>;
    }
}

export default Profile;