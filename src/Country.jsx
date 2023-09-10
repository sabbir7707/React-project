import { useState } from 'react';
import './country.css'
const Country = ({country,  handleclickcountry ,hadaleVisitedFlig}) => {
 
    const {name,flags ,population, area, cca3} = country;
   const [visited , setvisited] = useState(false)
   const handleclick =() =>
   {
    setvisited(!visited);
   }
   /* console.log( handleclickcountry); */
  



    
    return (
        <div className= {`country ${visited? 'visited' :'non-visited'}`}>
            <h4 style={{ color: visited?'purple':'red'}}>Name:{name?.common}</h4>
            <img src={flags.png} alt="" />
            <p> Population:{population}</p>
            <p> Area:{area}</p>
            <p>code: {cca3}</p>
            <button onClick={ () => handleclickcountry(country)}> Mark visited</button>
            <button onClick={()=>hadaleVisitedFlig(country.flags.png)}>Add flig</button>
            <br />
            <button onClick={handleclick} >{visited ? 'vissited':'going'}</button>
           {/*  {visited && 'i have visited countary.'} */}
           {visited ? 'i have visited countary.':'i wante to  visit'}
        </div>
    );
};

export default Country;


