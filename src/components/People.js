import {React,useMemo} from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'; // it will manage asynchronous
import Person from './person'
const fetchpeople = async() => {
    const res = await fetch('http://swapi.dev/api/people/')
    return res.json();
}
const People = () => {
    const {data, status} = useQuery("people",fetchpeople); // useQuery manage the all fetching it can call the data and it catch the data and refresh the data in the background
 console.log('123456',data)
//  const peoplesData = React.memo(() => {
//     console.log('Memo Data',status)
//     return data;
//  },[data]);
    return(
        <div>
            <h2>People</h2>
            {status === "loading" && (
                <div>Loading data...</div>
            )}
            {status === "error" && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                <div>
                    {data.results.map(person => <Person key={person.name} person={person} /> )}
                </div>
            )}
        </div>
    )
}

export default People;