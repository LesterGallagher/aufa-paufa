import React, { Component } from 'react';
import grey from './grey.png'
import content from '../content';

export default class GraphicDesignPage extends Component {
    render() {
        const imgFiles = content.pages.graphicDesign.images;
        const images = imgFiles.map((img, i) =>
            <figure className="col-4" key={i} >
                <img src={img || grey} alt={`Graphic Design Picture ${i + 1}`} />
            </figure>);
        return (
            <article className="graphic-design">
                {images}
            </article>
        );
    }
}
