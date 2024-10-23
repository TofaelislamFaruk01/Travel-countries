import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
       // .then(data=>console.log(data));


    },[])
    return (
        <div>
            <p>Countries detail here</p>
            <p>Total countries : {countries.length}</p>
            {
                countries.map(country=><Country key ={country.cca3} country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;