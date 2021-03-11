import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ClubList.css';
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from "react-router-dom";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
const ClubList = (props) => {
    const classes = useStyles();
    const {strTeamBadge,strTeam,idTeam,strSport}=props.club;
    const history=useHistory();
    const handleClick=(idTeam)=>{
        const url=`/about/${idTeam}`;
        history.push(url);
    }
    return (
      <div className="team-card">
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="350"
          image={strTeamBadge}
          title="Football Club"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"><div style={{textAlign: 'center'}}>{strTeam}</div></Typography>
          <Typography gutterBottom variant="h5" component="h2"><div style={{textAlign: 'center'}}>Sports type: {strSport}</div></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
      <Router><Link to={`/about/${idTeam}`}><Button onClick={()=>handleClick(idTeam)} variant="contained" color="secondary">Explore<FontAwesomeIcon icon={faArrowRight}/></Button></Link></Router>
      </CardActions>
    </Card>
    </div>
    );
};

export default ClubList;