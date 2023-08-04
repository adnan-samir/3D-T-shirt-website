import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;

// think of this as react context, whatever we define in here we'll be able to utilize within our intire application. 

// 1. we are going to have flag called intro meaning are we currently on the home page or are we not. 

// we're gonna have our default color which we can use later on.

// isLogoTexture : meaning are we currently displaying the logo on our t-shirt or not.

// isFullTexture, which going to be set as false at the start

// And for the initial of the shirt before we upload any of our own logo or textures , we need to have initials (logoDecal: thats going to be the path going to ./threejs.png ) and full texture shirt decal which is going to ./threejs.png) samething.
