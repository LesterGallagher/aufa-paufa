import React, { Component } from 'react';
import grey from './grey.png';
import content from '../content';

export default class HomePage extends Component {
    render() {
        const image = content.pages.home.image;
        return (
            <div className="home">
                <figure>
                    <img src={image || grey} alt="Home Image" className="home-image" />
                </figure>
            </div>
        );
    }
}

