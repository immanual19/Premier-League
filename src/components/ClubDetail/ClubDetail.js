import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetail.css';
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
import founded from '../../Icon/founded.png';
import country from '../../Icon/country.png';
import sporttype from '../../Icon/sporttype.png';
import gender from '../../Icon/gender.png';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const ClubDetail = () => {
    const {idTeam}=useParams();
    const [club,setClub]=useState([{}]);
    //console.log(idTeam);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setClub(data.teams))
    },[idTeam])

    console.log(club[0]);
    const {strTeam, intFormedYear, strGender,strTeamBadge,strCountry,strDescriptionEN,strSport,strYoutube,strFacebook,strTwitter,strTeamBanner}=club[0];
    const facebookLink='https://'+strFacebook;
    const youtubeLink='https://'+strYoutube;
    const twitterLink='https://'+strTwitter;
    let cardImage;
    if(strGender==='Male')
    {
        cardImage=male;
    }
    else
    {
        cardImage=female;
    }
    return (
        <div>
            <div className="second-header">
            <img style={{height: '250px', padding:'75px 0px 0px 650px'}} src={strTeamBadge} alt=""/>
            </div>
            <div className="middle-part">
            <div className="row align-items-center">
            <div style={{padding:'25px', borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}} className="col-md-5 bg-primary">
            <h1 style={{paddingLeft:'3px'}}>{strTeam}</h1>
            <h3><img style={{height:'25px', width:'25px'}} src={founded} alt=""/> Founded: {intFormedYear}</h3>
            <h6> <img style={{height:'25px', width:'25px'}}  src={country} alt=""/> Country: {strCountry}</h6>
            <h6> <img style={{height:'25px', width:'25px'}}  src={sporttype} alt=""/> Sport Type: {strSport}</h6>
            <h6> <img style={{height:'25px', width:'25px'}}  src={gender} alt=""/> Gender: {strGender}</h6>
            </div>
            <div style={{height:'245px', borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}} className="col-md-7 bg-primary">
            <img style={{width:'420px',float:'right'}} src={cardImage} alt=""/>
            </div>
            </div>
            <p style={{textAlign:'justify'}}>{strDescriptionEN}</p>
            </div>
            <div className="footer-icon">
<a target="_blank" href={facebookLink}><img style={{height:'25px', width:'25px'}} src={facebook} alt=""/></a>
<a target="_blank" href={twitterLink}><img style={{height:'25px', width:'25px'}} src={twitter} alt=""/></a>
<a target="_blank" href={youtubeLink}><img style={{height:'25px', width:'25px'}} src={youtube} alt=""/></a>
            </div>
        </div>
    );
};

export default ClubDetail;