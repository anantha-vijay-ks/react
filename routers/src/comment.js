import { ConstructionRounded } from "@mui/icons-material";
import React,{Component} from "react";
export default class Comment extends React.Component{
Constructor(props){
    super(props)
    this.state={
        comments:0,
    }
}
handleClick=()=>{
    this.setState({
        comments:this.state.comments=1
    })

}
render(){
    return(
        <div>
            {this.state.comments}<or/>
            <button onClick={this.handleClick}>Add Comment</button>
        </div>
    )
}

}