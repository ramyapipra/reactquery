import logo from './logo.svg';
import './App.css';
import UserForm from './components/Form'
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People'
import { useState } from 'react';
import styled from 'styled-components'
import ReactMemo from './components/reactmemo'
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


function App() {
  const [page,setPage] = useState("planets")
  return (
    <div className="App">
      <Title>Star Wars info</Title>
      <UserForm />
      <ReactMemo />
      <Navbar setPage={setPage}/>
  
  <div className='content'>
  <QueryClientProvider client={queryClient}>
       
  
 {page === "planets" ? <Planets /> : <People/>}
 </QueryClientProvider>
  </div>
  
    </div>
  );
}

export default App;
