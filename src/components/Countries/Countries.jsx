import '.\\Country.css';
const Countries = ({ country }) => {
   
  
    console.log(country)
    const { name,flags,population,cca2} = country;
   
    return (
        <div className='country'>
           
            <img src={flags.png} alt="It is a country a image " srcSet="" />
            <p>My country name  is{name?.common} </p>
            <p>population of my country is {population}</p>
            <p>The code of my country is { cca2}</p>
            
        </div>
    );
};

export default Countries;