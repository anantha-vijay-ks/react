import React from "react";
export class ErrorBoundary extends React.Component{
    constructor(props){
        super{props};
        this.state={error: null,errorInfo: null};
    }
    componentDidCatch(error,errorInfo){


        this.setState({
            error
        })
    }
}
