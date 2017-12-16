import React, { Component } from 'react';
import grey from './grey.png'
import content from '../content';

export default class ArtPage extends Component {
    render() {
        const imgFiles = content.pages.art.images;
        const imageGallery = [];
        let counter = 0;
        imgFiles.forEach((img, i) => {
            if ((i % 3) === 0) {
                imageGallery.push(<div key={counter++} class="clearfix"></div>);
            }
            imageGallery.push(<figure className="col-4" key={counter++} >
                <img src={img || grey} alt={`Art Picture ${i + 1}`} />
            </figure>);
        });
        return (
            <div className="art">
                {imageGallery}
            </div>
        );

    }
}
