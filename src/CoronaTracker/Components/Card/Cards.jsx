import React from "react"
import { Card,
         CardContent,
         Typography ,
         Grid
        } from '@material-ui/core'
import  Countup from "react-countup"
import cx from 'classnames'
import styles from  './Card.css'

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    
   
  if(!confirmed){
    return(
      <h1>loading......</h1>
             
    )
  }

  return(
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3}  className={cx(styles.card,styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom><b>confirmed</b></Typography>
              <Typography variant="h5">
                <Countup
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
                />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of confirmed  cases of COVID-19</Typography>
            </CardContent>
          </Grid>
           <Grid item component={Card}xs={12} md={3}  className={cx(styles.card,styles.deaths)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom><b>deaths</b></Typography>
              <Typography variant="h5">
              <Countup
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
                />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of deaths cases of COVID-19</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3}  className={cx(styles.card,styles.recovered)} >
            <CardContent>
  <Typography color="textSecondary" gutterBottom><b>recovered</b></Typography>
              <Typography variant="h5">
              <Countup
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
                />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
            </CardContent>
          </Grid> 
        </Grid>
      </div>
  )
}
export  default Cards;