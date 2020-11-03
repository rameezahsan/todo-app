import React, {Component} from 'react'

class addtodo extends Component{

    state={
        content:''
    
    }

    handlechange=(e)=>{
this.setState({
    content: e.target.value
})
}
    handlesubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:""
        })
    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label className="orange-text">add new task..</label>
                    <input type="text" onChange={this.handlechange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}


 export default addtodo