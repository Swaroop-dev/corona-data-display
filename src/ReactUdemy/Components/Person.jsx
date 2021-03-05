import React from 'react'
import classes from  './Person.css'
import {Input,Card,Typography} from '@material-ui/core'



export const Person=({name,skills,handleName,handleClick})=>{
    

   return(
       <Card  className={classes.container1}>
          <Input 
           type="text"
           value={name}
           onChange={handleName}
          />

          <Typography variant="h5" color="textSecondary" onClick={handleClick}>hai iam {name}</Typography>
          <h5> i have got {skills}</h5>
          
          </Card>
   )
}
export default Person


