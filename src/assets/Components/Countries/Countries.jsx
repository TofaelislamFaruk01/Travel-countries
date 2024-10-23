import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"


const Countries = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
       // .then(data=>console.log(data));


    },[])

    const [visitedCountries,setVisitedCountries] = useState([]);

    const handleVisited=(country)=>
    {
        console.log(country);
        const vCountry= [...visitedCountries,country];
        setVisitedCountries(vCountry);
    }

    const [visitedFlags,setVisitedFlags]=useState([]);

    const handleFlags=(country)=>
    {
       // console.log("add this flag");
        const flags= [...visitedFlags , country];
        setVisitedFlags(flags);
        
    }



    return (
        <div>
            <p>Countries detail here</p>
            <p>Total countries : {countries.length}</p>

{/* visited country details */}
            <div>
            <p>visited countries : {visitedCountries.length}</p>
            <ul>
            {
                visitedCountries.map(vCountry=> <li key={vCountry.cca2}>{vCountry.name.common}</li> )
            }
            </ul>
            </div>

            {/* country flags */}
            <div className="VisitedFlags">
                <h3>country flags are -</h3>
                
                    {
                        visitedFlags.map(fCountry => <img key={fCountry.ccn3} src={fCountry.flags.png} alt="" srcset="" /> )
                    }
            
            </div>

            {
                countries.map(country=><Country key ={country.cca3} country={country} handleVisited={handleVisited} handleFlags={handleFlags}></Country>)
            }

           
            
        </div>
    );
};

export default Countries;