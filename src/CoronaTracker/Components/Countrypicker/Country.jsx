import React ,{useState,useEffect} from "react"
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './Countrypicker.css'
import {countries} from '../../Api'


const Country=({handleChange})=>{
    const [fetchedCountries,setfectchedCountries]=useState([])

    useEffect(()=>{
        const fetchCounries=async()=>{
             setfectchedCountries(await countries())
        }

        fetchCounries()
    },[])

    return(
         <FormControl className={styles.formControl}>
             <NativeSelect default="" onChange={(e)=>handleChange(e.target.value)}>
                 <option value="">global</option>
    { fetchedCountries.map((country,index)=><option value={country} key={index}>{country}</option>)} 
             </NativeSelect>

         </FormControl>
    )
}

export default Country