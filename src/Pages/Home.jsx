import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Card from "../Components/Card/Card";
// import Grid from '@mui/material/Grid';

const Home = () => {
  const [theData, setTheData] = useState([]);

  useEffect(() => {
    const findData = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
        );
        setTheData(response.data);
        console.log("axios response is this", response.data);
    
     
      } catch (err) {
        console.log(err);
      }
    };

    findData();
  }, []);

  const cardData = theData.map((data) => {
    return <Card key={data.id} value={data} />;
    
  });

 

console.log("data obtained after mapping",cardData);
  return (
    <div className="container">
      <div className="grid">
      {/* <Grid container item md={6} lg={12} sm={12} style={{marginTop:100, marginBottom:100}}> */}
        {/* mapping of the data should be here */}
        {cardData}
        {/* </Grid> */}
      </div>
    </div>
  );
};

export default Home;