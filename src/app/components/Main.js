import React from 'react';

export class Main extends React.Component{

    render(){
        
        return(
            <div className='container'>
                <h1>The Main Page</h1>
                <button onClick={()=>this.props.changeUserName('Arielle')} className='btn btn-primary'>Change the Username</button>
            </div>
        );
    }
}