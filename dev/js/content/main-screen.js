import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#return",{alpha:0});
gsap.set("#errors",{alpha:0});
gsap.set("#zephyr-icon-map",{transformOrigin:"center"})

const mainscreenTL = gsap.timeline();

export function mainscreenAnimation(){
    mainscreenTL.from(".flavor-text-appear",{duration:1,scaleX:0},"flavor")
            .from("#top-line",{duration:1,drawSVG:0},"flavor")
            .from("#zephyr-corner-stroke",{duration:2, drawSVG:"50% 50%"})
            .from("#zephyr-corner-stroke",{duration:1,scale:4, x:300, y:-400})
            .from(".panel",{duration:2,drawSVG:"0"})
            .from(".panel-text",{duration:1,scaleX:0}, "zephyr-appear")
            .from("#zephyr-corner-fill",{duration:2,alpha:0}, "zephyr-appear")
            .from("#inhuman-profile",{duration:2,drawSVG:0},"zephyr-appear")
            .from("#target-info-text",{duration:2,scaleX:0}, "zephyr-appear")
            .from(".zephyr-lines",{duration:2,drawSVG:0,stagger:0.25},"zephyr-appear")
            .from(".zephyr-box",{duration:2,drawSVG:0,stagger:0.25},"zephyr-appear")
            .from(".text-type-in",{duration:2,scaleX:0,stagger:0.25}, "zephyr-appear")
            .from(".decorations",{duration:2,alpha:0}, "zephyr-appear")
            .from("#world-map",{duration:2,alpha:0,delay:"-1.5"})
            .from("#zephyr-icon-map",{scale:0,duration:1,delay:"-1"})
            .fromTo(".targets",{scale:0},{scale:1,duration:1,stagger:0.2,delay:"-2"})
            .fromTo(".targets",{alpha:1},{alpha:0,duration:1,stagger:0.2,repeat:5})
            .from("#play-button-fill",{duration:1,alpha:0,delay:"-12"},"music")
            .from("#play-button-stroke",{duration:1,drawSVG:0,delay:"-12"})
            .from("#song-title",{duration:1,scaleX:0,delay:"-11"})
            .from("#song-artist",{duration:1,scaleX:0,delay:"-10"})
            .from("#bottom-line",{duration:1,drawSVG:0,delay:"-9"})
            .from("#round-button",{duration:1,drawSVG:"0",delay:"-8"})
            .from("#round-button-blue",{duration:1,drawSVG:"0",delay:"-7"})
            .from("#dashboard",{duration:1,scaleX:0,delay:"-7"});

    return mainscreenTL;
}