import { useEffect, useState } from "react";


import Country from "./Country";
import './contaries.css'

const Contaries = () => {
    const [contaries ,setcontaries] =useState([])
     const [visitedcountary , setvisitedcountary]=useState([])

     /* recap img ar jarno  */
     const [visitadflig , setvisitedimg] = useState([])


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcontaries(data))
    },[])

     const handleclickcountry = country =>{
        console.log('add this to your visited countary');
        console.log(country); 
            const newvisitedcountary =  [...visitedcountary,country];
            setvisitedcountary(newvisitedcountary);

     }

     const hadaleVisitedFlig = flag =>
     {
      console.log('falg addeing');
      const newvisitedflig = [...visitadflig,flag];
      setvisitedimg(newvisitedflig);
     }

     //remove item  from an arry in a state

    return (
        <div >
            <h3>countries:{contaries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>Visited countary: {visitedcountary.length}</h5>
                <ul>
                   {
                    visitedcountary.map(country => <li key={country.cca3}>
                      { country.name.common}
                    </li>)
                   }
                </ul>
            </div>
            <div className="flag-container">
                {
              visitadflig.map((flag, idx ) => <img  key={idx} src={flag}></img> )
                }
            </div>
            {/* dispalay contaryes */}
           
          <div className="country-container">
          {
                contaries.map(country => <Country
                key={country.cca3} 
                handleclickcountry = { handleclickcountry}
                hadaleVisitedFlig ={hadaleVisitedFlig}
                 country={country}></Country>)
            }
          </div>

        </div>
    );
};

export default Contaries;
