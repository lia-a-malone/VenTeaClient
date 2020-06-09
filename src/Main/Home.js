import React, {useEffect} from 'react'
//import {useEffect, useState} from 'react'

 const Home = (props) => {
    //  const explanationText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet porttitor. A pellentesque sit amet porttitor eget. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Faucibus vitae aliquet nec ullamcorper sit. Id neque aliquam vestibulum morbi blandit. Nam at lectus urna duis."

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
         <div class="container">
             <img src="logo.jpg"/>
             <p style={{textAlign: 'center', color:"#319262"}}>
                 Welcome to VenTea! VenTea is a place where you can vent about your days and your anxieties. We are a supportive community that does not judge eachother. You can post private notes or join the Tea Parties and interact with others in the community. VenTea is a safe place where you can open up and be surrounded by positivity and support. Keep calm and spill the tea!
             </p>
             {/* <Post post={post}/> */}
             {/*value on left match component value on right match the text */}
            {/* name of prop={value of prop} */}
         </div>
     )
 }

// explination -usage manual - basic display component


 export default Home