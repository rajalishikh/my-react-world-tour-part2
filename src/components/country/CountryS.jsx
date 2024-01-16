import { useEffect, useState } from "react";
import Countries from "../Countries/Countries";


const CountryS = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(Response => Response.json())
            .then(data => setCountries(data))
        
}, [])

    return (
        <div>
            <p>My country data load </p>
            <p>My country length:{countries.length}</p>
            {
                countries.map(item =>
                    <Countries key={item.cca2} country={item}></Countries>
                    )
            }
            
            
        </div>
    );
};

export default CountryS;