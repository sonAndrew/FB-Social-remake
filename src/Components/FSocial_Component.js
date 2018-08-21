import React, { Component } from 'react';

import './Styles/SocialStyles.css';

import heroImg from './Images/apple-b-w-brick-wall.jpg';
// import avatarImg from './Images/wolf-face.jpg';

import HeroImg from './HeroImage';
import Avatar from './Avatar';
import UserName from './UserName';
import UserInfo from './UserInfo';

// const jData = '../Data.json';
const randomUser = 'https://randomuser.me/api/1.2/';

class Social extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []

        };

    }

    componentDidMount(){
        fetch(randomUser)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.results
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }

        )
    }
    render(){
        const { error, isLoaded, items } = this.state;
        if(error){
            return <div>Error: {error}</div>;
        } else if(!isLoaded){
            return <div>Loading. . .</div>;
        } else {
            return(
                <div className="container">
                    <HeroImg hero={heroImg} alts="Hero Image" />
                    {items.map(item => (
                        <div style={{display: 'flex'}} key={item.contain}>
                            <Avatar key={item.picture} avatar={item.picture.thumbnail} alts="Avatar Image" />
                            <UserName key={item.name} username={item.name.first + " " + item.name.last} />
                        </div>
                       
                    ))}
                    {items.map(item => (
                        <div key={item.infoContain} className="infoContainer" >
                            <div key={item.space} style={{color: 'white', width: '165px'}} ></div>
                            <UserInfo 
                                key={item.infoComp}
                                job="Software Developer"
                                school="Self Taught"
                                city={item.location.city}
                                state={item.location.state}
                            />
                        </div>
                    ))}

                </div>
            )
        }
         
        // return(
        //     <div className="container">
        //         <HeroImg hero={heroImg} alts="Hero Image" />
        //         <Avatar avatar={avatarImg} alts="Avatar Image" />
        //         <UserName username="Atsui-yo" />
        //         <div className="infoContainer" >
        //             <div style={{color: 'white', width: '165px'}} ></div>
        //             <UserInfo 
        //                 job="Software Developer"
        //                 school="Self Taught"
        //                 city="Charleston"
        //                 state="South Carolina"
        //                 country="U.S.A" 
        //             />
        //         </div>
                
        //     </div>
        // )
    }
}

export default Social;