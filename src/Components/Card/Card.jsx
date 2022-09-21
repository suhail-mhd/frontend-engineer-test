import React from "react";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./card.css"

const Cards = ({value}) => {
  console.log(value, "the props is");
  const {title, content, thumbnail, author } = value;

  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);

  const date = new Date(1606311631)
  const dateString = new Date(date * 1000).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });


  const dealSwitch = ()=>{
setState(!state);

  };
  const dealModal = ()=>{
setModal(!modal);
  }
  // console.log("thedatestringisgivenbelow",dateString);

  return (
    <Grid container item md={6} lg={12} sm={12} style={{marginTop:100, marginBottom:100}}>
    <div className="card">
            <Card id='card' sx={{ maxWidth: 545 }} style={{marginLeft:'40px',marginTop:'10px',marginBottom:20,width:'400'}}>
            <CardMedia className='CardImg'
              component="img"
              height="250"
              image={thumbnail.small}
              alt="green iguana"
            />
             <span>
                  <a className="button" onClick={dealModal} type="button" >
                    Learn More
                  </a>
                </span>
            
            <CardContent style={{padding:30}}>
            <div style={{marginBottom:6}}>
            <i style={{color:"#3B9AE1", marginRight:3}} className="ri-checkbox-blank-circle-fill"></i>
            <i style={{color:"#FFCB42"}} className="ri-checkbox-blank-circle-fill"></i>
            </div>
              <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"bold"}}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{marginTop:30, marginBottom:20}}>
                {content}
              </Typography>
            </CardContent>
            <CardContent style={{display:"flex", justifyContent:"space-between", paddingLeft:30, paddingRight:30}}>
              <Typography gutterBottom variant="body2" component="div"  color="text.secondary">
                {author.name} - {author.role}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dateString}
              </Typography>
            </CardContent>
            <div className="learn-more">
        <a className="button" type="button">
          Learn more
        </a>
      </div>
      
          </Card>

          
      
       

       

      <div className="learn-more">
        <a className="button" type="button">
          Learn more
        </a>
      </div>

     
     {
        modal && (
            <div className="backdrop-Landing">
                 <Modal value={value} dealModal={dealModal}/>
      </div>
        )
     }
       
    </div>
    </Grid>
  );
};

export default Cards;