import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'; // it will manage asynchronous
import Planet from './planet'
const fetchplanets = async() => {
    const res = await fetch('http://swapi.dev/api/planets/')
    return res.json();
}
const Planets = () => {
    const {data, status} = useQuery("planets",fetchplanets); // useQuery manage the all fetching it can call the data and it catch the data and refresh the data in the background
 console.log(data)
    return(
        <div>
            <h2>Planets</h2>
            {status === "loading" && (
                <div>Loading data...</div>
            )}
            {status === "error" && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                <div>
                    {data.results.map(planet => <Planet key={planet.name} planet={planet}/>)}
                </div>
            )}
        </div>
    )
}

export default Planets;