import React, { Component } from 'react'

import CharComponent from './CharComponent'

export default class Inputcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state={
            name:"",
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    handleChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleDelete=(index)=>{
        const p=this.state.name.split('')
        p.splice(index,1)
        const updated=p.join('')
        this.setState({name:updated})
    }
    
    render() {
        const style={
            margin:"20px",
            padding:"20px",
            boxShadow:"0,2px,2px #eeeee"
        }
        const charlist=(
            this.state.name.length>0?
            this.state.name.split('').forEach((e,index)=><CharComponent key={index} char={e} Delete={this.handleDelete(index)}/>)
            :null)
    
        return (
            <div style={style}>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                
                {charlist}
            </div>
        )
    }
}

