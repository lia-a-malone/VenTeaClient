import React, {useEffect} from 'react'
import ttl from "../transtealogo.png"
//import {useEffect, useState} from 'react'
// import Auth from "../Auth/AuthForm"
 const Home = (props) => {


    //  first param = function, second = array to monitor
    useEffect(() => {

        const url = 'http://localhost:3000/home';

        fetch(url, {
            // sending a get request to server
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                // need to set an authorization header before getting games
                'Authorization' : props.tokenProp,
            }
        })

    }, [])

     return (
         <div class="container"
         style={{textAlign:"center"}}>
             <p
             style={{display:"inline-block"}}>
                 <img src={ttl} width="350px" height="350px"/></p>
             <p style={{textAlign: 'center', color:"#319262"}}>
                 Welcome to VenTea! VenTea is a place where you can vent about your days and your anxieties. We are a supportive community that does not judge eachother. You can post private notes or join the Tea Parties and interact with others in the community. VenTea is a safe place where you can open up and be surrounded by positivity and support. Keep calm and spill the tea!
             </p>
            {/* name of prop={value of prop} */}
         </div>
     )
 }

// explination -usage manual - basic display component


 export default Home