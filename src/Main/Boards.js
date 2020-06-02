import React from 'react'
import {Container, Row} from 'reactstrap' //1: import bootstrap grid tools
// import Signup from './Signup'
// import Login from './Login'

const Boards = (props) => {//2: pull in props that will be passed down
    return(
        <Container className={Boards}>
            <Row>
                <p>Community boards go here:</p>
            </Row>
        </Container>
    )
}

export default Boards