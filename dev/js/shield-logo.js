import {gsap} from "gsap";

gsap.set("#shield-logo",{fill:"none"});

const logoTL = gsap.timeline();


export function logoAnimation(){

    logoTL.to("#bird",{drawSVG:"100%"});

    return logoTL;
}