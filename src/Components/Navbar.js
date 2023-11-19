import { Link } from "react-router-dom";

const Navbar=()=>{
        const navBarStyle={
            display:"flex",
            justifyContent:"space-between",
            padding:"8px"
        }
       
        return(
            <>
             {/* // inline styling */}
            <div style={{color:"white",height:"40px",width:"100%",backgroundColor:"black",marginBottom:"1%"}}>
    
               <div style={navBarStyle}>
                    <div>
                        <Link to='/'>MovieFlix</Link>
                    </div>
                    <div>
                        <Link to='/addcolor'>Add Color</Link>
                    </div>
                    <div>
                        <Link to='/addmovie'>Add Movie</Link>
                    </div>
                </div> 
            </div>
            </>
        )
    }
    export default Navbar;