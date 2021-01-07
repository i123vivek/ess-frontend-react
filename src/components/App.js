import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navigation />

                        <Route path="/" exact component={Home} />
                        {/* <Route path ="/streams/new" exact component= {StreamCreate} />
                        <Route path ="/streams/edit" exact component= {StreamEdit} />
                        <Route path ="/streams/delete" exact component= {StreamDelete} />
                        <Route path ="/streams/show" exact component= {StreamShow} /> */}
                        <div className="container-fluid">Hello vivek</div>
                    </div>
                </BrowserRouter>
                {/* <Navigation /> */}
                {/* <Home /> */}

            </div>


        );
    }
}

export default App;