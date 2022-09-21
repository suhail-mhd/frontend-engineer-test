import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Modal from "../Components/Modal/Modal";
import "./Home.css";

function Home({value}) {
  console.log(value, "the props is");

  const [data,setData] = useState([]);
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

  useEffect(()=>{
    axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts').then((res)=>{
      // console.log(res.data);
      setData(res.data)
    })
  },[])


  console.log(data);
  return (
    <div>
       <Grid container item md={6} lg={12} sm={12} style={{marginTop:100, marginBottom:100}}>
      

      {
        data.map((obj)=>{
          return(
            <Card key={obj.id} id='card' sx={{ maxWidth: 545 }} style={{marginLeft:'40px',marginTop:'10px',marginBottom:20,width:'400'}}>
            <CardMedia className='CardImg'
              component="img"
              height="250"
              image={obj.thumbnail.small}
              alt="green iguana"
            />
             <span>
                  <a className="button" onClick={dealModal} type="button" >
                    Learn More
                  </a>
                </span>
            
            <CardContent style={{padding:30}}>
            <div style={{marginBottom:6}}>
            <i style={{color:"#3B9AE1", marginRight:3}} class="ri-checkbox-blank-circle-fill"></i>
            <i style={{color:"#FFCB42"}} class="ri-checkbox-blank-circle-fill"></i>
            </div>
              <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"bold"}}>
                {obj.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{marginTop:30, marginBottom:20}}>
                {obj.content}
              </Typography>
            </CardContent>
            <CardContent style={{display:"flex", justifyContent:"space-between", paddingLeft:30, paddingRight:30}}>
              <Typography gutterBottom variant="body2" component="div"  color="text.secondary">
                {obj.author.name} - {obj.author.role}
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

      

      {
        modal && (
            <div className="backdrop">
                 <Modal data={value} dealModal={dealModal}/>
      </div>
        )
     }
          </Card>

          
          )
        })
      }
       

       </Grid>
    </div>
  )
}

export default Home