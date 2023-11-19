

import React from 'react'
import ClassAbout from './ClassAbout'
// extends is to take property from there and put it to classprofile. 
class Classprofile extends React.Component{
    // constructor is used pass variable.
    constructor(){
        super()
        //State varriable
        this.state={
            count:0,
            count1:1
        }
    }

    render(){
        return(
            <>
            <h1>Count:{this.state.count}Hello Every</h1>
            <h2>Count1:{this.state.count1}Hello</h2>
            <button onClick={()=>{
// we cannot directly mutate our state.The method to update or mutate state is given below

                this.setState({
                    count:(this.state.count+1),
                    count1:(this.state.count1+2)
                })

            }}>Incre-Count</button>
            <ClassAbout name="Guvi"/>
            </>
        )
    }
}
export default Classprofile;