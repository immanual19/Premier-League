import React, { useEffect, useState } from 'react';
import ClubList from '../ClubList/ClubList';
import Header from '../Header/Header';
//import './Home.css';
const Home = () => {

    const [clubs,setClubs]=useState([]);
    useEffect(()=>{
        const url='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setClubs(data.teams))
    },[])
    return (
        <div>
            <Header></Header>
            <div className="row">

            {
                clubs.map(club=><ClubList club={club}></ClubList>)
            }

            </div>
        </div>
    );
};

export default Home;