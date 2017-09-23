/**
 * Created by mac on 2017/9/23.
 */
import React from 'react';

import ReactDOM from 'react-dom';


import ToDoApp from '.components/ToDoApp';

class App extends React.Component {
    render(){ // Every react component has a render method.
        return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
            <div>
            Hello World
        </div>
    );
    }
}


ReactDOM.render(<ToDoApp />, document.getElementById('app'));