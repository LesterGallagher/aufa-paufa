import content from './oldcontent';
import * as ris from 'request-image-size';
const requestImageInfo = ris.default;
const imageInfoPromises = [];
const pages = content.pages;

console.log(requestImageInfo);
for (const key in pages) {
    if (content.pages.hasOwnProperty(key)) {
        const element = content.pages[key];
        if (element['images']) {
            element.images.forEach((url, i) => {
                if (url) {
                    imageInfoPromises.push(requestImageInfo(url)
                        .then(info => {
                            let { width, height } = info;
                            // if (width > 266.6666) {
                            //     const factor = 266.6666 / width;
                            //     width *= factor;
                            //     height *= factor;
                            // }
                            // if (height > 400) {
                            //     const factor = 400 / height;
                            //     width *= factor;
                            //     height *= factor;
                            // }
                            // // round
                            // width = Math.round(width * 10000) / 10000;
                            // height = Math.round(height * 10000) / 10000;
                            element.images[i] = {
                                width,
                                height,
                                url
                            };
                        })
                        .catch(error => {
                            console.error(error);
                            throw Error("Stop");
                        }));
                }
            });
        }
    }
}

Promise.all(imageInfoPromises)
    .then(() => {
        console.log('done\n', JSON.stringify(pages, null,2 ));
    })
    .catch(err => {
        console.error('promise failed');
    })




