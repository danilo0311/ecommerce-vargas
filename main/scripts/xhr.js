import {landingSlider} from './slider.js';

const XHR = new XMLHttpRequest();

window.loadFile = () => {
    XHR.open('GET', 'landing-page.html');
    XHR.onreadystatechange = () => {
        if (XHR.readyState === XMLHttpRequest.DONE) {
            let status = XHR.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                document.getElementsByClassName('body-wrapper')[0].innerHTML=XHR.responseText;
                landingSlider();
            }
        }
    }
    XHR.send();
}