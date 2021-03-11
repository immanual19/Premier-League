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
const ClubDetail = () => {
    const {idTeam}=useParams();
    const [club,setClub]=useState([{}]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setClub(data.teams))
    },[idTeam])

    const {strTeam, intFormedYear, strGender,strCountry,strDescriptionEN,strSport,strYoutube,strFacebook,strTwitter,strTeamBanner}=club[0];
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
        <div style={{backgroundColor:'DarkSlateBlue'}}>
            <div className="row">
            <img className="club-banner" src={strTeamBanner} alt=""/>
            </div>
            <div className="team-summary-card bg-primary">
            <div className="row d-flex align-items-center">
            <div className="col-md-5">
            <h1>{strTeam}</h1><br/>
            <h6><img className="icon" src={founded} alt=""/> Founded: {intFormedYear}</h6>
            <h6> <img className="icon"  src={country} alt=""/> Country: {strCountry}</h6>
            <h6> <img className="icon"  src={sporttype} alt=""/> Sport Type: {strSport}</h6>
            <h6> <img className="icon"  src={gender} alt=""/> Gender: {strGender}</h6>
            </div>
            <div className="col-md-7">
            <img className="card-image" src={cardImage} alt=""/>
            </div>
            </div>
            </div>
            <p className="team-summary-card" style={{textAlign:'justify', color: 'white'}}>{strDescriptionEN}</p>
            <div className="footer-icon-div">
            <a target="_blank" rel="noreferrer" href={facebookLink}><img className="footer-icon" src={facebook} alt=""/></a>
            <a target="_blank" rel="noreferrer" href={twitterLink}><img className="footer-icon" src={twitter} alt=""/></a>
            <a target="_blank" rel="noreferrer" href={youtubeLink}><img className="footer-icon" src={youtube} alt=""/></a>
            </div>
        </div>
    );
};

export default ClubDetail;