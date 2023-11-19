const ColorBox=({color})=>{
    console.log(color)
    
    const divStyle={
        height:"20px",
        width:"250px",
        marginBottom:"10px",
        backgroundColor:color,
        marginLeft:"100px"
    }
    return(
        <div style={divStyle}

        ></div>
    )
}
export default ColorBox;