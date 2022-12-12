import { ConstructionRounded } from "@mui/icons-material";
import React,{Component} from "react";
export default class Comment extends React.Component{
Constructor(props){
    super(props)
    this.state={
        likes:0,
    }
}
handleClick=()=>{
    this.setState({
        likes:this.state.likes=1
    })

}
render(){
    return(
        <div>
            {this.state.likes}<or/>
            <button onClick={this.handleClick}>Add likes</button>
        </div>
    )
}

}