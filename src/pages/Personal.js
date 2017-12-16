import React, { Component } from 'react';
import grey from './grey.png';
import './Personal.css';
import content from '../content';

export default class PersonalPage extends Component {
    render() {
        const image = content.pages.personal.image;
        const text = content.pages.personal.text;
        return (
            <article className="personal">
                <figure>
                    <img src={image || grey} alt="Personal Picture" />
                </figure>
                <p>
                    {text || 'Sorry There\'s nothing here'}
                </p>
            </article>
        );
    }
}