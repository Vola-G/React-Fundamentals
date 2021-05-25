import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '../Button/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

import { deleteCourseThunk } from "store/courses/thunk";

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
  
  export function CourseCard({ course, authorsList }) {
    const { title, description, duration, creationDate, id, authors } = course;
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer);
    const classes = useStyles();
    const courseAuthors = [];
    authorsList.forEach(author => {
      if (authors.includes(author.id)) {
        courseAuthors.push(author.name);
      }
    });

    function removeCourse() {
      dispatch(deleteCourseThunk(id))
    }

    return (
        <Card className={classes.root}>
          <CardContent className={classes.title}>
            <Typography gutterBottom variant="h4" component="h2" data-testid="card-title">
                {title}
            </Typography>
            <Typography variant="body1" component="p" data-testid="card-description">
                {description}
            </Typography>
          </CardContent>
          <CardContent className={classes.info}>
            <div>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem} data-testid="card-authors">
                <b>Authors:</b> {courseAuthors.join(", ")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem} data-testid="card-duration">
                <b>Duration:</b> {formatTime(duration)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem} data-testid="card-creationDate">
                <b>Created:</b> {creationDate}
              </Typography>
            </div>
            <div>
            {
              user?.email === "admin@email.com" ?
              <>
                <IconButton color="primary" aria-label="delete course" component="span" onClick={removeCourse}>
                  <Delete />
                </IconButton>
                <Link to={{ pathname: `/courses/update/${id}`, id: id }}>
                  <IconButton color="primary" aria-label="edit course" component="span">
                    <Edit />
                  </IconButton>
                </Link>
              </>
              :
              null //is such a check correct? can i put "null" as alternative condition?
            }
              <Link to={`/courses/${id}`}>
                <Button name="Show course" variant="contained" color="primary" style="action-button"/>
              </Link>
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
    duration: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    authors: PropTypes.array
  }).isRequired,
    authorsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
  })).isRequired,
  deleteCourse: PropTypes.func
}
