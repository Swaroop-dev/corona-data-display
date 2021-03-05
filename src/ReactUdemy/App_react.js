import React, { Component, Fragment } from 'react'
import Person from './Components/Person.jsx'
import  classes from './App_react.css'
import {Container,Card,Typography,Button,Box,Grid} from '@material-ui/core'



export default class App_react extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:"",
//              age:null,
//              shouldrender:false
//         }
//         this.handleNameChange=this.handleNameChange.bind(this)
    //     this.handleChange=this.handleChange.bind(this)
    //     this.handlingrender=this.handlingrender.bind(this)
    // }

    // handleNameChange=(e)=>{
    //     this.setState({name:e.target.value})
    // }
    // handleChange=(e)=>{
    //     this.setState({age:e.target.value})
        
    // }
    // handlingrender=()=>{
    //     this.setState((prev)=>{
    //         return(
    //             {
    //                 shouldrender:!prev.shouldrender
    //             }
    //         )
    //     })
    // }
    
    // render() {
    //     return (
    //         <div>
    //             <h1>hello every body</h1>
    //             <input
    //              type="Checkbox"
    //              value={this.state.shouldrender}
    //              onChange={this.handlingrender}
    //             />
    //             {
    //                 this.state.shouldrender===true?
    //                 <Person
    //                 name={this.state.name} 
    //                 age={this.state.age}
    //                 handle={this.handleNameChange}
    //                 handleage={this.handleChange}
    //                 /> : null
    //             }
    //         </div>

    //     )
    // }

constructor(props) {
    super(props)

    this.state = {
            person:[

                {
                    id:"asas1",
                    name:"Swaroop",
                    skill:"Reactjs"
                },
                {
                    id:"asas2",
                    name:"Shashank",
                    skill:"laravel framework"
                },
                {
                    id:"asas3",
                    name:"Gagan",
                    skill:"dotnet framework"
                }
            ],
            shouldrender:true
        }       
        // this.handletoggle=this.handletoggle.bind(this)
        // this.handleDelete=this.handleDelete.bind(this)
        // this.handleChange=this.handleChange.bind(this)

    }
    handleDelete=(personIndex)=>{
         const persons=[...this.state.person]
         persons.splice(personIndex,1)
         this.setState({
             person:persons
         })
    }

    
    handleChange=(event,id)=>{
       const p1=this.state.person.findIndex(p=>{
           return p.id===id
       })

       const p2={...this.state.person[p1]}

       p2.name=event.target.value
       const persons={...this.state.person}
       persons[p1]=p2

       this.setState({
           person:persons
       })
    }

    handletoggle=()=>{
        this.setState(prev=>{
            return(
                {
                    shouldrender:!prev.shouldrender
                } 
            )
        })
    }

    render(){
    const personrender=(this.state.person.map((p)=>{
        return (
        <div>
         <Person
         key={p.id}
         name={p.name}
         skills={p.skill}
         handleName={(event)=>this.handleChange(event,p.id)}
         handleClick={this.handleDelete}         
        />        
       </div>
       )   
       }))
    

    const v=(
        <Typography> you have submitted successfully</Typography>
    )   
    const syle={
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue', 
        padding:"8px",
        cursor:"pointer",
    }

    
    const p=(this.state.shouldrender===true?personrender:v) 
        return(
            <Container>
                    <Typography color="textPrimary" display="block" variant="h3">hello welcome to the react app</Typography>
                    <div className={classes.id1} >
                    {p}
                    </div>
                    <Button variant="contained" color="primary" size="large"  onClick={this.handletoggle} >Submit</Button>
            </Container>
        )
        }
    }


