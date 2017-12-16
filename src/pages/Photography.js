import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import grey from './grey.png'
import content from '../content';

export default class PhotographyPage extends Component {
    render() {
        const imgFiles = content.pages.photography.images;
        const cols = 3;
        const containerWidth = 760;
        const containerColRatio = containerWidth / cols;
        const colWidth = Math.min(containerColRatio, (window.innerWidth - 50) / cols);
        return (
            <div className="photography" >
                <ImageLayout items={imgFiles} columnWidth={colWidth} columns={cols} gutter={8} />
            </div>
        );
    }
    
}
