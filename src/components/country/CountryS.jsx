import { useEffect, useState } from "react";


const CountryS = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(Response => Response.json())
            .then(data => console.log(data))
        
}, [])

    return (
        <div>
            <p>My country data load </p>
            
            
        </div>
    );
};

export default CountryS;