 import React, { Component } from 'react'
 import useFetchJobs from './useFetchJobs'
 import {Container} from "react-bootstrap"

 
 //base_url='https://jobs.github.com/positions.json'

 
 export default function App_git() {

    const {jobs,loading,error}=useFetchJobs()
     return (
         <Container>
             {loading && <h1>loading...</h1>}
             {error && <h1>error!! try refreshing...</h1>}
             <h1>{jobs.length}</h1>
         </Container>
     )
 }
 

 