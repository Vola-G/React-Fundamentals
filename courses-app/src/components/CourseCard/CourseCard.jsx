import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '../Button/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { formatTime } from '../../utils';


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
  
export default function CourseCard(props) {
    const { title, description, duration, creationDate, id } = props.course;
    const classes = useStyles();
    const courseAuthors = [];
    props.authors.forEach(author => {
      if (props.course.authors.includes(author.id)) {
        courseAuthors.push(author.name);
      }
    });

    function showCourse() {
      return;
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
                <Button name="Show course" variant="contained" color="primary" onClick={showCourse} className={classes.btn}/>
              </Link>
            </div>
          </CardContent>
      </Card>
    )
}

CourseCard.propTypes = {
  course: PropTypes.object,
  authors: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  creationDate: PropTypes.string,
  id: PropTypes.string
}
