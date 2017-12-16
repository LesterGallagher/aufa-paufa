import React, { Component, Dimensions } from 'react';
import ImageLayout from '../ImageLayout';
import grey from './grey.png'
import content from '../content';
import windowSize from 'react-window-size';

export default class GraphicDesignPage extends Component {
    render() {
        const imgFiles = content.pages.graphicDesign.images;
        const cols = 3;
        const containerWidth = 760;
        const containerColRatio = containerWidth / cols;
        const colWidth = Math.min(containerColRatio, (window.innerWidth - 50) / cols);
        return (
            <div className="graphic-design">
                <ImageLayout items={imgFiles} columnWidth={colWidth} columns={cols} gutter={8} />
            </div>
        );
    }
}
