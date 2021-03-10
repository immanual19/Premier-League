import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetail.css';
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
const ClubDetail = () => {
    const {idTeam}=useParams();
    const [club,setClub]=useState([{}]);
    //console.log(idTeam);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setClub(data.teams))
    },[])

    console.log(club[0]);
    const {strTeam, intFormedYear, strGender,strTeamBadge,strCountry}=club[0];
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
            <img style={{height: '150px', padding:'100px 0px 0px 550px'}} src={strTeamBadge} alt=""/>
            </div>
            <div className="card">
            <div className="second-card club-summary">
            <h1>{strTeam}</h1>
            <h6>Founded: {intFormedYear}</h6>
            <h6>Country: {strCountry}</h6>
            <h6>Sport Type: Football</h6>
            <h6>Gender: {strGender}</h6>
            </div>

            <div className="second-card second-card-image">
            <img style={{width:'420px', height:'270px'}} src={cardImage} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default ClubDetail;