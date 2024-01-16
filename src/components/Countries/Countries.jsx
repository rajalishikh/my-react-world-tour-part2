import { useState } from 'react';
import '.\\Country.css';
const Countries = ({ country }) => {
   
  
    console.log(country)
    const [visited, setVisited] = useState(false);
    const handleVisited = ()=>{
        setVisited(!visited);

    }
    const { name,flags,population,cca2} = country;
   
    return (
        <div className={`country ${visited?'visited':'non-visited'}`}>
           
            <img src={flags.png} alt="It is a country a image " srcSet="" />
            <p>My country name  is{name?.common} </p>
            <p>population of my country is {population}</p>
            <p>The code of my country is {cca2}</p>
            <button onClick={handleVisited}>{visited?'Visited':'going' }</button>
            {
                visited ?'I  am  visited this country ':'I want to visited this country '
            }
            
        </div>
    );
};

export default Countries;