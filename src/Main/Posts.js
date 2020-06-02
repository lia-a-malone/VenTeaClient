import React from 'react'
import APIURL from "../Helpers/environment"
// show:
// title
// content
// cope

// this will be a display component, accepts props

// const styles = {
// }

const url=`http://localhost:3000/myposts`
const Post = (props) => {
    return(
        <div>
            <h2 style={{background: "black", color:"Pink", textAlign: "center"}}>Hello</h2>
            <hr />
            <ul>
                <li className="title">Title: {props.title}</li>
                <li className="content">Content: {props.content}</li>
                {/* <li className="cope">Coping Mechanisms: props{.cope}</li> */}
            </ul>
            {/* {
                props.game.standaloneTitle ? <p>Stand Alone</p> : <div />
            } */}
        </div>
    )

}

// using styles obj Build two 'classes' for styles, and style the list GamesListItem. Using the style prop, style two tags individually



export default Post