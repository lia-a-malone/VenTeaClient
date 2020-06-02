import React from "react"
import "./Profile.css"

const profile = (props) => {
    function openForm() {
        document.getElementById("myForm").style.display = "block"
    }
    function closeForm() {
        document.getElementById("myForm").style.display = "none"
    }
return(
<div className="body">
    THIS IS THE PROFILE JS PAGE
    {/* <div className="newDiv"> */}
    <div className="form-popup" id="myForm">
        <form action="/action_page.php" className="form-container">
            <h1>Tea Time</h1>
            <label for="title"><b>Title</b></label>
            <input type="text"  name="Title" required></input>
            <label for="description"><b>Spill the tea...</b></label>
            <input type="text"  name="Tea" required></input>
            <label for="cope"><b>How I cope...</b></label>
            <input type="text" placeholder="Optional" name="cope"></input>
            <button type="submit" class="btn">Post</button>
            <button type="button" className="btn close" onClick="closeForm()">Close</button>
        </form>
    {/* <button className="newpost"
    style={{color:"orange"}}>
        New Post
    </button> */}
        {/* id="popup" onClick="div_show()" */}
    {/* <div className="post">
        <div className="edit">Edit</div>
        <div className="delete">delete</div>
    </div> */}
    </div>
</div>
)
}
export default profile