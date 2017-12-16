import React, { Component } from 'react';
import grey from './grey.png';
import content from '../content';
export default class ActingPage extends Component {
    render() {
        const videoUrls = content.pages.acting.videos;
        const text = content.pages.acting.text;
        const videos = videoUrls.map((url, i) =>
            <video key={i} controls src={url}>
                Your browser does not support the video tag.
            </video>);
        return (
            <div className="acting">
                <section className="text">
                    {text}
                </section>
                <section className="videos">
                    {videos}
                </section>
            </div>
        );
    }
}

