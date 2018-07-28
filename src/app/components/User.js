import React from 'react';

export class User extends React.Component {
    render(){
        return(
            <div className='container'>
            <h1>The User Page</h1>
            User Name: {this.props.initialUserName}
            </div>
        )
    }
}