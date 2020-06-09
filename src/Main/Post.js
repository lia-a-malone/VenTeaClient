import React, {useState, useEffect} from "react"
import {Modal, ModalHeader, ModalBody, Input, Button, ModalFooter} from "reactstrap"
import APIURL from "../Helpers/environment"
const Post = function (props) {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const [post, setPost] = useState(props.text ? props.text : "")

    const deleteButton = () => {
        {fetch(`${APIURL}/log/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                Authorization : props.sessionToken
            }
        })}
    }

    // const mixButton = () => {
    //     if (props.erase===true)
    //     console.log('Your post has been deleted')
    //     else{
    //     console.log('Your tea has been spilled')
    //     }
    // }

    const handleSubmit = (e) => {
        console.log('handle test')
    } 
    useEffect(() => console.log(props.id), [])

    return (
        
    <div id="postID"
    style={{maxWidth:"300px"}}> {props.text}

    <Button onClick={() => {toggle(); props.setErase(true)}}>Edit</Button>
    <Modal isOpen={modal} toggle={toggle}>
                <br/>
                <ModalHeader toggle={toggle}>Spill the tea..</ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder="What's the tea?" rows={5} value={post} onChange={e => setPost(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle} 
                    onClick={(e) => handleSubmit(e)}>Post</Button>
                    <Button color="secondary" onClick={()=>{toggle(); deleteButton(); props.setlogID(props.id)}}>
                    {props.erase ? "Delete" : "Close"}
                    </Button>
                </ModalFooter>
            </Modal>
            </div>
    )
}

export default Post