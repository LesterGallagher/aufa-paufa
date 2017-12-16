import React, { Component } from 'react';
import grey from './grey.png';
import content from '../content';
export default class ActingPage extends Component {
    render() {
        const videoUrls = content.pages.acting.videos;
        const videos = videoUrls.map((imgF, i) =>
            <figure key={i}>
                <img src={imgF || grey} alt={`Acting Picture ${i + 1}`} />
            </figure>);
        return (
            <article className="acting">
                {videos}
            </article>
        );
    }
}

