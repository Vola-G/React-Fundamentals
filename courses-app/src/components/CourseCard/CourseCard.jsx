import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '../Button/Button';
import Typography from '@material-ui/core/Typography';
import { mockedAddAuthor } from "../../localService/Mock";


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
    const classes = useStyles();
    const autors = [];
    mockedAddAuthor.forEach(author => {
      if (props.authors.includes(author.id)) {
        autors.push(author.name);
      }
    });
    return (
        <Card className={classes.root}>
          <CardContent className={classes.title}>
              <Typography gutterBottom variant="h4" component="h2">
                  {props.title}
              </Typography>
              <Typography variant="body1"  component="p">
                  {props.description}
              </Typography>
            </CardContent>
            <CardContent className={classes.info}>
            <div>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem}>
                <b>Autor:</b> {autors.join(", ")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem}>
                <b>Duration:</b> {props.duration}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h5" className={classes.infoElem}>
                <b>Created:</b> {props.creationDate}
              </Typography>
              </div>
              <div>
              <Button name="Show course" className={classes.btn}/>
              </div>
            </CardContent>
      </Card>
    )
}