import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import EditIcon from '@mui/icons-material/Edit';
import Badge from '@mui/material/Badge';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpecialButton from './SpecialButton';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';



export default function MovieCardMUI({name,poster,rating,summary,id,deleteButton,editButton,AddItem}) {
  const [expanded, setExpanded] = React.useState(false);

  const [show,setShow]=useState(false)
  // const [btnText,setBtnText]=useState(<ExpandMoreRoundedIcon/>)

  const navigate=useNavigate()
 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name.slice(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={()=>navigate(`/movies/${id}`)}>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={<span style={{color:rating>8? "green":"red"}}>{rating}</span>}
      />
      <CardMedia
        component="img"
        height="194"
        image={poster}
        alt="Paella dish"
      />
       <CardActions disableSpacing>

        {/* like and dislike Button imported */}
          <SpecialButton/>

        {/* Edit buuton imported from moviesection */}
        {editButton}

        {/* Delete button imported from moviesection */}
        {deleteButton}

        {/* Redux store button */}
        {AddItem}

        {/* summary and toggleButton */}
        <IconButton aria-label="settings"
        onClick={()=>{
          setShow(!show)
          // btnText==<ExpandMoreRoundedIcon/>? setBtnText(<ExpandLessRoundedIcon/>):setBtnText(<ExpandMoreRoundedIcon/>)
          }} >{show?<ExpandMoreRoundedIcon/>:<ExpandLessRoundedIcon/>}
            
          </IconButton>

      </CardActions>

      {/* Summary */}

      {show && <p className="movieSummary">{summary}</p>}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}


