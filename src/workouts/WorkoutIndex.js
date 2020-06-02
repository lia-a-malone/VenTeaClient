import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Auth from "../Auth/AuthForm"
import APIURL from "../Helpers/environment"
// import Workouts from "../workouts"
// import WorkoutCreate from '../workouts/WorkoutCreate'


const WorkoutIndex = (props) => {
    const [workouts, setWorkouts] = useState([])


    const fetchWorkouts = () => {
        fetch(APIURL, {
            method:'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
        .then((logData) => {
            setWorkouts(logData)
        })
    }

    useEffect(() => {
        fetchWorkouts()
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">

                </Col>
                <Col md="9" style={{color: "red", background:"purple"}}>
                    <h2>Welcome to VenTea. This is a supportive community where we come together and help eachother cope with our every day anxiety and life.We share different ways to cope</h2>
                </Col>
                <Col md="9" style={{color: "blue"}}>
                    <Auth></Auth>
                </Col>
            </Row>
        </Container>
        
    )
}

export default WorkoutIndex