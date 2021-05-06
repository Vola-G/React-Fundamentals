import { useParams, Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { ParametersTitle } from "../../components/ParametersTitle/ParametersTitle";
import Button from '../Button/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import "./CourseInfo.css"

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

const CourseInfo = ({ courses, authorsList }) => {
    if(!courses && !authorsList) {
        return;
    }
    const { courseId } = useParams();
    const classes = useStyles();
    const currentCourse = courses.find(course => course.id === courseId);
    const { id, title, description, creationDate, duration, authors } = currentCourse;
    const courseAuthors = [];
    authorsList.forEach(author => {
      if (authors.includes(author.id)) {
        courseAuthors.push(author.name);
      }
    });

    return (
        <div className={"container-center"}>
            <div className={"nav-container"}>
                <Link to="/courses">
                    <Button 
                        name="Back to courses" 
                        color="primary" 
                        icon={<ArrowBackIosIcon/>}/>
                </Link>
            </div>
            <div className={"course-title"} >
                <ParametersTitle 
                    title={title}
                    color="primary"
                    variant="h2" 
                    component="h2"/>
            </div>
            <div className={"course-info_container"}>
                <div className={"course-info_description"}>
                    <Typography variant="body1"  component="p">
                        {description}
                    </Typography>
                </div>
                <div className={"course-info_params"}>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="h5" 
                        className={classes.infoElem}>
                        <b>ID:</b> {id}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="h5" 
                        className={classes.infoElem}>
                        <b>Duration:</b> {duration}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="h5" 
                        className={classes.infoElem}>
                        <b>Created:</b> {creationDate}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="h5" 
                        className={classes.infoElem}>
                        <b>Authors:</b> {courseAuthors.join(", ")}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

CourseInfo.propTypes = {
    courses: PropTypes.object,
    authorsList: PropTypes.object,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    creationDate: PropTypes.string,
    duration: PropTypes.number,
    authors: PropTypes.string
}

function mapStateToProps(state) {
    const { courses } = state.coursesReducer
    const { authors: authorsList } = state.authorsReducer
    return { courses, authorsList }
}

export default connect(mapStateToProps)(CourseInfo)
