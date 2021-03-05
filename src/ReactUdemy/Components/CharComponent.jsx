import React from 'react'
import {Card,Typography} from '@material-ui/core'

export default function CharComponent({char,Delete}) {

    const styles={
        display: 'block',
        margin:'20px',
        textAlign: 'center'
        
    }
    return (
        // <div style={styles} onClick={Delete}>
        //     {char}
        // </div>
        <Card>
            <Typography>{char}</Typography>
        </Card>
    )
}
