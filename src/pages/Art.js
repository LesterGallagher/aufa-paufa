import React, { Component } from 'react';
import grey from './grey.png'
import content from '../content';

export default class ArtPage extends Component {
    render() {
        const imgFiles = content.pages.art.images;
        const images = imgFiles.map((img, i) =>
            <figure className="col-4" key={i} >
                <img src={img || grey} alt={`Art Picture ${i + 1}`} />
            </figure>);
        return (
            <article className="art">
                {images}
            </article>
        );

    }
}
