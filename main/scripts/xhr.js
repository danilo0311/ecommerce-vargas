import {landingSlider} from './slider.js';

let url = null;
const XHR = new XMLHttpRequest();
let status = XHR.status;

window.loadLandingPage = () => {
    XHR.open('GET','landing-page.html');
    XHR.onreadystatechange = () => {
        if (XHR.readyState == XMLHttpRequest.DONE) {
           if (status === 0 || (status >= 200 && status < 400)) {
               document.getElementsByClassName('body-wrapper')[0].innerHTML=XHR.responseText;
               landingSlider();
               setUrl();
               categoryButtonHandler();
           }
        }
    }
    XHR.send();
}

window.loadFile = () => {
    XHR.open('GET', setUrl());
    XHR.onreadystatechange = () => {
        if (XHR.readyState === XMLHttpRequest.DONE) {
            if (status === 0 || (status >= 200 && status < 400)) {
                console.log(setUrl());
                switch (setUrl()) {
                    case 'contact.html':
                    document.getElementsByClassName('contact-wrapper')[0].style.display="flex";
                    document.getElementsByClassName('contact-wrapper')[0].innerHTML=XHR.responseText;
                        break;
                
                    default:
                        break;
                }
            }
        }
    }
    XHR.send();
}

window.setUrl =() => {
    document.getElementById('contact-button').onclick = () => {url = "contact.html", loadFile()}
    return url;
}
