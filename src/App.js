import React, { Component } from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// pages
import HomePage from './pages/Home';
import ActingPage from './pages/Acting';
import ArtPage from './pages/Art';
import GraphicDesignPage from './pages/GraphicDesign';
import PersonalPage from './pages/Personal';
import PhotographyPage from './pages/Photography';
import ContactPage from './pages/Contact';

class App extends Component {
    render() {
        const routes = [
            { name: 'Home', path: '/', component: HomePage },
            { name: 'Acting', path: '/acting', component: ActingPage },
            { name: 'Art', path: '/art', component: ArtPage },
            { name: 'Graphic Design', path: '/graphic-design', component: GraphicDesignPage },
            { name: 'Personal', path: '/personal', component: PersonalPage },
            { name: 'Photography', path: '/photography', component: PhotographyPage },
            { name: 'Contact', path: '/contact', component: ContactPage },
        ]
        const createRoutes = () =>
            routes.map((route, i) =>
                <Route key={i} exact path={route.path} component={route.component} />);
        const createLinks = () =>
            <ul>{routes.map((route, i) =>
                <li key={i} ><NavLink exact className="link-item" to={route.path}>{route.name}</NavLink></li>)}</ul>;

        return (
            <HashRouter>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">
                            <span className="App-title-text">Eva van der Weide</span>
                        </h1>
                        <nav>
                            {createLinks()}
                        </nav>
                    </header>
                    <main className="container">
                        {createRoutes()}
                    </main>
                </div>
            </HashRouter>
        );
    }
}

export default App;
