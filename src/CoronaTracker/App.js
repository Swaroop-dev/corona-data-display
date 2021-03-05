import React, { Component } from 'react'
import  styles from  './App.css'
import {fetchdata} from './Api'
import {Chart,Country,Cards} from './Components'
import coronaImage from './images/Screenshot_2020-08-07 image png (PNG Image, 370 × 82 pixels).png'

export default class App extends Component {
    state={
        country:'',
        data:{},
    }    
     
    
    async componentDidMount(){
       const fetchedData=await fetchdata()
    
       this.setState({data:fetchedData})
    }

    handleCountryChange=async(country)=>{
        const fetchedData=await fetchdata(country)

        this.setState({data:fetchedData,country:country})
        console.log(this.state.data)
       
    }
    

    render() {
        const {data,country}=this.state
        return (
            <div className={styles.container}>
                <img  className={styles.img} src={coronaImage} alt="Current situation across the globe due to Coronavirus"/>
                <Cards data={data}/>
                <Country handleChange={this.handleCountryChange}/>
                <Chart  data={data} country={country}/>
            </div>
        )
    }
}
