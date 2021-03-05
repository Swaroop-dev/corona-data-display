import React ,{useEffect,useState} from 'react'
import {fetchDailyData} from '../../Api'
import {Line,Bar} from 'react-chartjs-2'
import styles from './Chart.css'



 const Chart=({data:{confirmed,recovered,deaths},country})=>{
     const [dailyData,setDailyData]=useState([])

     useEffect(()=>{
         const fetchDataApi=async()=>{
              const initialDailyData=await fetchDailyData()
              setDailyData(initialDailyData)
         }

        fetchDataApi() 
        },[]
     )

     const barChart=(
         confirmed?
         (
             <Bar
               data={{
                   labels:['Infected','Deaths','Recovered'],
                   datasets:[{
                       label:'People',
                       backgroundColor:[
                           'rgba(0, 0, 255, 0.5)',
                           'rgba(255, 0, 0, 0.5)',
                           'rgba(0, 255, 0, 0.5)',
                       ],
                       data:[confirmed.value,deaths.value,recovered.value]

                   }]
                  
               }}
               options={{
                legend:{display:false},
                title:{display:true,text:`current  state in ${country}`}
                
            }}
             />
         ):null
     )
     
     const lineChart=(
         dailyData.length!==0?(
            <Line 
              data={{
                  labels:dailyData.map(({date})=>date),
                  datasets:[
                    {
                         data:dailyData.map(({confirmed})=>confirmed),
                         label:'Infected',
                         borderColor:'blue',
                         backgroundColor:" rgba(23,67,88,0.2)",
                         fill:true
                    },
                    {
                        data:dailyData.map(({deaths})=>deaths),
                         label:'Deaths',
                         backgroundColor:'rgba(255,0,0,0.5)',
                         borderColor:'red',
                         fill:true
                    }
                ]
              }}
        />
         ):null
     )  

    return(
        <div className={styles.container}>
           {country?barChart:lineChart}
        </div>
    )
     
    }
     
export default Chart
