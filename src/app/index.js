import React from 'react';
import { render } from 'react-dom';

import {Main} from './components/Main';
import {User} from './components/User';

class App extends React.Component{
    render(){
        return(
            <div className='container'>
                <Main />
                <User />
            </div>
        )
    }
}
render(<App/>, window.document.getElementById('app'));