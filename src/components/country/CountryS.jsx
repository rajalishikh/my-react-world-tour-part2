import { useEffect, useState } from "react";
import Countries from "../Countries/Countries";
import './Country.css';


const CountryS = () => {
    const [countries, setCountries] = useState([])
    const [visited, setVisited] = useState([])

    const handleVisited2 = (countryP) => {
        console.log('I will go in afganisthan one day In sha Allah');
        console.log(countryP);
        
    }
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(Response => Response.json())
            .then(data => setCountries(data))
        
}, [])

    return (
        <div>
            
            <p>My country data load </p>
            <p>My country length:{countries.length}</p>
            <div className="div-container">
            {
                countries.map(item =>
                    <Countries key={item.cca2}
                        country={item}
                        handleVisited2={handleVisited2}
                    
                    ></Countries>
                    )
            }
            </div>
            
            
        </div>
    );
};

export default CountryS;