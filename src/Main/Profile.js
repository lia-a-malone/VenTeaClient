import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, Row, Col} from 'reactstrap';
import APIURL from "../Helpers/environment"
// import { logDOM } from '@testing-library/react';
import Post from './Post';

const Profile = (props) => {

    // const postID = document.getElementById("postID").readOnly=true;


    const [description, setDescription] = useState('');
    const [posts, setPosts] = useState([]);
    const [erase, setErase] = useState(false)
    const allPosts = () => {
        console.log("All posts", props.sessionToken)
    fetch(`${APIURL}/log/allposts`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            "Authorization" : props.sessionToken
        }
    }) .then (res => res.json())
    .then (data => {
        console.log(data)
        setPosts(data)
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Your tea has been spilled')

        fetch(`${APIURL}/log/newpost`, {
            method: 'POST',
            body: JSON.stringify({
                text: description
            }),
            headers: {
                'Content-Type' : 'application/json',
                "Authorization" : props.sessionToken

            }
        })
        .then(data => data.json())
        .then(userData => {
            console.log(userData);

            props.token(userData.sessionToken)
        })
        .catch(err => console.warn(err))
        allPosts()
    }
    // useEffect(() => setTimeout(allPosts, 500), [])

    //NEW POST MODAL
    const {
    //   buttonLabel,
    teaPot,
      className
    } = props;
  
    const [newPost, setNewPost] = useState(false);
    const [onClose, setOnClose] = useState(true);
    const [logID, setlogID] = useState(0);
    const mixButton = () => {
        if (erase===true)
        {fetch(`${APIURL}/log/${logID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                Authorization : props.sessionToken
            }
        })}
        else{
        console.log('Your tea has been spilled')
        }
    }
    const toggle = () => setNewPost(!newPost);
    // const changeOnClose = e => {
    //     let value = e.target.value;
    //     setOnClose(JSON.parse(value));
    // }
  
    return (
        <div>
            <h1
            style={{textAlign:"center", color:"#50CF90"}}>
                Welcome back!
            </h1>
                <h2
                style={{textAlign:"center", color:"#49B680"}}>My Tea Pot</h2>

            {/* NEW POST MODAL */}
            <Form onSubmit={(e) => e.preventDefault()}
            style={{fontSize:"20px", textAlign:"center"}}>
                {/* <h2>something here</h2> */}
                <Button color="lightBlue" onClick={()=>{toggle (); setErase(false)}}
                style={{color:"#17A25D", fontSize:"25px"}}>New Post</Button>
            </Form>
            <Modal isOpen={newPost} toggle={toggle} className={className} onClose={onClose}>
                <br/>
                <ModalHeader toggle={toggle}>Spill the tea..</ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder="What's the tea?" rows={5} value={description} onChange={e => setDescription(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle} 
                    onClick={(e) => handleSubmit(e)}>Post</Button>
                    <Button color="secondary" onClick={()=>{mixButton (); toggle(); setDescription("") }}>Close</Button>
                </ModalFooter>
            </Modal>
            <div>
            <br/>
{/* MY POSTS MODAL */}
                <Row>{posts.map((post,index) => {
                    return(
                       <Col md='7'>
                       <Post text={post.text} handleSubmit={handleSubmit}
                        erase={erase} setErase={setErase} mixButton={mixButton} setlogID={setlogID} id={post.id} key={index}
                        />                        
                        </Col>
                    )
                })}
                </Row>
            </div>
        </div>
    );
}

export default Profile

// CLEAR THE TEXT FIELD WHEN BUTTON IS PRESSED : PLAY WITH WHICH "POST" IT GOES TO!
// {()=>{toggle(); setDescription("")}} 