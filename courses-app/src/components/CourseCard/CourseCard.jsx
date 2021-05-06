import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '../Button/Button';
import Typography from '@material-ui/core/Typography';

import { deleteCourse } from "store/courses/actionCreators";

import { makeStyles } from '@material-ui/core/styles';
import { formatTime } from '../../utils';

import "./CourseCard.css";


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
    }

  }));
  
function CourseCard({ course, authorsList, deleteCourse}) {
    const { title, description, duration, creationDate, id, authors } = course;
    const classes = useStyles();
    const courseAuthors = [];
    authorsList.forEach(author => {
      if (authors.includes(author.id)) {
        courseAuthors.push(author.name);
      }
    });

    function removeCourse() {
      deleteCourse(id)
    }

    return (
        <Card className={classes.root}>
          <CardContent className={classes.title}>
            <Typography gutterBottom variant="h4" component="h2">
                {title}
            </Typography>
            <Typography variant="body1"  component="p">
                {description}
            </Typography>
          </CardContent>
          <CardContent className={classes.info}>
            <div>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem}>
                <b>Authors:</b> {courseAuthors.join(", ")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem}>
                <b>Duration:</b> {formatTime(duration)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem}>
                <b>Created:</b> {creationDate}
              </Typography>
            </div>
            <div>
              <Link to={`/courses/${id}`}>
                <Button name="Show course" variant="contained" color="primary" style="action-button"/>
              </Link>
              <Button name="Delete course" variant="contained" color="primary" onClick={removeCourse} />
            </div>
          </CardContent>
      </Card>
    )
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    creationDate: PropTypes.string,
    duration: PropTypes.number,
    authors: PropTypes.array
  }).isRequired,
    authorsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
  })).isRequired,
  deleteCourse: PropTypes.func.isRequired
}

export default connect(null, {deleteCourse})(CourseCard)
