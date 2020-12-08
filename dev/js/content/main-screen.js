import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#return",{alpha:0});
gsap.set("#errors",{alpha:0});
gsap.set("#round-button-blue",{alpha:0,transformOrigin:"center"});
gsap.set(".targets",{transformOrigin:"center"});
gsap.set(".glows",{transformOrigin:"center"});
gsap.set("#zephyr-icon-map",{transformOrigin:"center"});

const mainscreenTL = gsap.timeline();

export function mainscreenAnimation(){
    mainscreenTL.from(".flavor-text-appear",{duration:1,scaleX:0},"flavor")
            .from("#top-line",{duration:1,drawSVG:0},"flavor")
            .from("#zephyr-corner-stroke",{duration:2, drawSVG:"50% 50%"})
            .from("#zephyr-corner-stroke",{duration:1,scale:4, x:300, y:-400})
            .from(".panel",{duration:2,drawSVG:"0",stagger:.1})
            .from(".panel-text",{duration:1,scaleX:0}, "zephyr-appear")
            .from("#zephyr-corner-fill",{duration:2,alpha:0}, "zephyr-appear")
            .from("#inhuman-profile",{duration:2,drawSVG:0},"zephyr-appear")
            .from("#target-info-text",{duration:2,scaleX:0}, "zephyr-appear")
            .from(".zephyr-lines",{duration:2,drawSVG:0,stagger:0.25},"zephyr-appear")
            .from(".zephyr-box",{duration:2,drawSVG:0,stagger:0.25},"zephyr-appear")
            .from(".text-type-in",{duration:1,scaleX:0,stagger:0.2}, "zephyr-appear")
            .from(".decorations",{duration:2,alpha:0}, "zephyr-appear")
            .from("#bottom-line",{duration:1,drawSVG:0},"zephyr-appear")
            .from("#round-button",{duration:1,drawSVG:"0"},"zephyr-appear")
            .from("#dashboard",{duration:.5,scaleX:0},"zephyr-appear")
            .from("#world-map",{duration:2,alpha:0,delay:"-1.5"})
            .from("#zephyr-icon-map",{scale:0,duration:1,delay:"-1"})
            .fromTo(".targets",{scale:0},{scale:1,duration:1,stagger:0.2,delay:"-2"})
            // .fromTo(".targets",{alpha:1},{alpha:0.5,duration:1,stagger:0.2,repeat:5},"targets-animation")
            .fromTo(".glows",{alpha:0,scale:1},{alpha:0.5,scale:3,duration:0.8,stagger:0.2,repeat:5,yoyo:true},"targets-animation")
            .from("#play-button-fill",{duration:1,alpha:0,delay:"-12"},"music")
            .from("#play-button-stroke",{duration:1,drawSVG:0,delay:"-12"})
            .from("#song-title",{duration:.5,scaleX:0,delay:"-11"})
            .from("#song-artist",{duration:.5,scaleX:0,delay:"-10.5"});
            // .fromTo("#round-button-blue",{drawsvg:"0"},{alpha:0,duration:1,drawsvg:"20 50",repeat:3})

    return mainscreenTL;
}