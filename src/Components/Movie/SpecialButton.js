import { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Badge from '@mui/material/Badge';


const SpecialButton=()=>{
    const [like,setLike]=useState(0)                         
    const [dislike,setdislike]=useState(0)
    return(
        <>

        <IconButton aria-label="add to favorites" onClick={()=>{setLike(like+1)}}>
        <Badge badgeContent={like} color="primary" sx={{m:0.5}}>
        <FavoriteIcon color="success" />
            </Badge>
        </IconButton>

        <IconButton aria-label="share" onClick={()=>{setdislike(dislike+1)}}>
        <Badge badgeContent={dislike} color="primary" sx={{m:0.5}}>
        <ThumbDownOffAltIcon color="error" />
            </Badge>
        </IconButton>


            {/* <button onClick={()=>{setLike(like+1)}}>👍{like}</button>  
            <button style={{marginLeft:"6px"}}onClick={()=>{setdislike(dislike+1)}}>👎{dislike}</button> */}
        </>
    )
}
export default SpecialButton;