// import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import axios from 'axios';

import { ParametersTitle } from "../../components/ParametersTitle/ParametersTitle";
import Button from '../Button/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1200,
      marginTop: theme.spacing(5),
      padding: "20px",
      display: 'flex',
    },
    title: {
      width: "70%"
    },
    info: {
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between"
    },
    infoElem: {
      margin: "10px 0",
      textAlign: "end"
    },

  }));

export const CourseInfo = ({ courses }) => {
    const classes = useStyles();
    // const [course, setCourse] = useState();
    // const loginData = JSON.parse(window.localStorage.getItem("currentUser"));
    // const token = loginData.token;
    // const { id } = useParams();

    // useEffect(()=>{
    //     const fetchData = async () => {
    //     const options = {
    //         method: 'GET',
    //         headers: { 
    //             'accept': '*/*'
    //             // 'Authorization': {token} 
    //         },
    //         url: `http://localhost:3000/courses/${id}`
    //     };
    //     try {
    //       const result = await axios(options);
    //       setCourse(result.data.result);
    //       console.log("FETCH RESULT", result)
    //     } catch(error) {
    //       console.log("ERROR", error)
    //     }
    //   }
    //   fetchData();
    // }, [])

    function handleBack() {
        return <Redirect to='/courses' />
    }

    // const index = courses.findIndex(course => course.id === id);
    // const course = courses[index];
    return (
        // {isLoading ? (<p>Loading </p>) : (<p> Pew</p>)}
        <div className={"container-center"}>
            <div className={"nav-container"}>
                <Button 
                    name="Back to courses" 
                    color="primary" 
                    onClick={handleBack}
                    icon={<ArrowBackIosIcon/>}/>
            </div>
            <div className={"course-title"} >
                <ParametersTitle 
                    title={courses.title}
                    variant="h1" 
                    component="h1"/>
            </div>
            <div className={"course-info_container"}>
                <div className={"course-info_description"}>
                    <Typography variant="body1"  component="p">
                        {/* {course.description} */}
                    </Typography>
                </div>
                <div className={"course-info_params"}>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="h5" 
                        className={classes.infoElem}>
                        <b>Authors:</b>
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="h5" 
                        className={classes.infoElem}>
                        {/* <b>Duration:</b> {course.duration} */}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="h5" 
                        className={classes.infoElem}>
                        {/* <b>Created:</b> {course.creationDate} */}
                    </Typography>
                </div>
            </div>
        </div>
    );
}
