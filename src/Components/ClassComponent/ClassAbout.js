import axios from 'axios'
import React from 'react'
// extends is to take property from there and put it to classprofile. 
class ClassAbout extends React.Component{
    // constructor is used pass variable.
    constructor(props){
        super(props)
        //State varriable
        this.state={
            count:0,
            count1:1,
            // we can create here n number of variables in one declaration(not like useState)
            userInfo:{
                name:"LUCZY",
                login:"login Bro"
            }
        }
    }
    // Best placee to make API call.
    async componentDidMount(){
        // Github profile api used
        const response=await axios.get(`https://api.github.com/users/poonamchauhan229`)
        // Now we have to push it to state variable
        this.setState({userInfo:response.data})
    }

    render(){
        return(
            <>
            {/* calling from multiple variable declared */}
            <h2>{this.state.userInfo.name}</h2>
            {/* Calling from props passed in classProfile */}
            <h2>{this.props.name}</h2>

            {/* Calling API Details */}
            <h1>GIT HUB DETAILS</h1>
            <h2><img src={this.state.userInfo.avatar_url} alt=""/></h2>
            <h3>{this.state.userInfo.name}</h3>
            <h4>{this.state.userInfo.login}</h4>
            </>
        )
    }
} 
export default ClassAbout;