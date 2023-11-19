import { useState } from "react";
import ColorBox from "./ColorBox";

const AddColor=()=>{
    // state variable for color updation on input
    const [colorVal,setColorVal]=useState("green")
    // state variable to get color and store in array(colorList) when button press
    const [colorList,setColorList]=useState([colorVal])
    console.log(colorList)


    const inputStyle={
        backgroundColor:colorVal,
        margin:"30px 5px 0px 100px",
        height:"20px",
        borderRadius:"10%",
        width:"18-px"
    }

    return(
        <>
        <div style={{marginBottom:"10px"}}>
            <input type="text" value={colorVal} style={inputStyle} 
            onChange={(e)=>setColorVal(e.target.value)}/>
{/* here color value is stored in (spreadcolorList) array */}
            <button onClick={()=>{setColorList([...colorList,colorVal])}}>Add Color</button>

        </div>

{/* passing array details using map to another item to Display */}
    {  //here color is props passing.Because it is array not object(no key to use spread operator (...element) )
        colorList.map((element,index)=> <ColorBox color={element} key={index}/>)
                            // index given to avoid error of (unique key for child)
    }
    </>
    )
}
export default AddColor;