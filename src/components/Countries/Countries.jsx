import '.\\Country.css';
const Countries = ({ country }) => {
   
  
    console.log(country)
    const { name,flags } = country;
   
    return (
        <div className='country'>
            <p>My country name  is{name?.common} </p>
            <img src={flags.png} alt="It is a country a image " srcSet="" />
            
        </div>
    );
};

export default Countries;