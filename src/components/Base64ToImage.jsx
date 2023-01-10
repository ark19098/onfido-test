import React from 'react'
import base64ToImage from 'base64-to-image';

import {encode, decode} from 'node-base64-image';

// var base64Str = "Add valid base64 str";
// var path ='./images';
// var optionalObj = {'fileName': 'imageFileName', 'type':'png'};

    // base64ToImage(base64Str,path,optionalObj); 

// var imageInfo = base64ToImage(base64Str,path,optionalObj);

const url = 'https://th.bing.com/th/id/R.b2d5805b0d8158cd630c83a65d084fa8?rik=3vR4BLIDSFFjZg&riu=http%3a%2f%2ftop10tale.com%2fwp-content%2fuploads%2f2016%2f03%2fhd-flower-images-3.jpg&ehk=OuDccKR0K0ztD%2fULk1SPbXjYOqZUIbPzNGnBE51EY5o%3d&risl=&pid=ImgRaw&r=0';
const options = {
  string: true,
  headers: {
    "User-Agent": "my-app"
  }
};

// writing to file named 'example.jpg'
// const image = await encode(url, options);
// await decode(image, { fname: 'example', ext: 'jpg' });

// writing to a sub-directory
// after creating a directory called 'photos'
const image = await encode(url, options);
await decode(image, { fname: './photos/example', ext: 'jpg' });

export default function Base64ToImage() {
  return (
    <div>
      
    </div>
  )
}
