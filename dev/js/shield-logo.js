import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#shield-logo",{transformOrigin:"center",fill:"none"});

const logoTL = gsap.timeline();

export function logoAnimation(){

    logoTL.from("#bird",{duration:3, drawSVG:"50% 50%"},"logo-start")
        .from("#tail",{duration:3, drawSVG:"60% 60%"},"logo-start")
        .from(".stripes",{duration:3, drawSVG:"0%"},"logo-start")
        .from("#border",{duration:3, drawSVG:"50% 50%"},"logo-start")
        .to("#border",{duration:2,fill:"#FFF", delay:"-1"})
        .to("#tail",{duration:1,fill:"#FFF", delay:"-1"})
        .to("#bird",{duration:1,fill:"#FFF", delay:"-0.5"})
        .to(".stripes",{duration:1,fill:"#FFF", delay:"-0.5", stagger:".25"})
        .to("#shield-logo",{duration:1,scale:"0.3", x:-100, y:-150});

    return logoTL;
}