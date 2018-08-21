import React from 'react';

function Hero(props){
    return (<img className="heroStyle" src={props.hero} alt={props.alts}/>)
}

export default Hero;