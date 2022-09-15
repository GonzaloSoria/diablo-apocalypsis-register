import { gsap } from "gsap";

const content = document.getElementById('content');
const title = document.getElementById('hero-title');
const subtitle = document.getElementById('hero-subtitle');
const copy = document.getElementById('hero-copy');
const cta = document.getElementById('hero-cta');
const succes_message = document.getElementById('succes_form_message');

const tl = gsap.timeline();
tl.addLabel('frame1');
tl.from(content, {duration: 1, opacity: 0}, 'frame1+=.5');
tl.from([title, subtitle, copy], {duration: .5, opacity: 0, y: 10, stagger: .5}, 'frame1+=1.8');
tl.to(cta, {duration: .2, opacity: 1}, 'frame1+=2.5');

export const form_succes = (form_sent_succesfully) => {
    if(form_sent_succesfully) {
        tl.to(succes_message, {duration: 1, opacity: 1});
    };
};


