import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.set("#round-button-blue",{transformOrigin:"center",rotation:"270"});
gsap.set("#round-button",{transformOrigin:"center",rotation:"270"});
gsap.set(".targets",{transformOrigin:"center"});
gsap.set(".glows",{transformOrigin:"center"});
gsap.set("#zephyr-icon-map",{transformOrigin:"center"});
gsap.set(".dashboard-text",{transformOrigin:"center"});
gsap.set(".panel-text",{transformOrigin:"center"});

const mainscreenTL = gsap.timeline();

export function mainscreenAnimation(){
    mainscreenTL.from(".flavor-text-appear",{duration:0.5,scaleX:0},"flavor")
            .from("#top-line",{duration:1,drawSVG:0},"flavor")
            .from("#zephyr-corner-stroke",{duration:2, drawSVG:"50% 50%"})
            .from("#zephyr-corner-stroke",{duration:1,scale:4, x:300, y:-400})
            .from(".panel",{duration:2,drawSVG:"0",stagger:.1})
            .from(".panel-text",{duration:1,scaleY:0}, "zephyr-appear")
            .from("#zephyr-corner-fill",{duration:2,alpha:0}, "zephyr-appear")
            .from("#inhuman-profile",{duration:2,drawSVG:0},"zephyr-appear")
            .from("#target-info-text",{duration:2,scaleX:0}, "zephyr-appear")
            .from(".zephyr-lines",{duration:2,drawSVG:0,stagger:0.25},"zephyr-appear")
            .from(".zephyr-box",{duration:2,drawSVG:0,stagger:0.25},"zephyr-appear")
            .from(".text-type-in",{duration:1,scaleY:0,stagger:0.2}, "zephyr-appear")
            .from(".decorations",{duration:2,alpha:0}, "zephyr-appear")
            .from("#bottom-line",{duration:1,drawSVG:0},"zephyr-appear")
            .from("#round-button",{duration:1,drawSVG:"0"},"zephyr-appear")
            .from("#dashboard",{duration:.5,scaleY:0},"zephyr-appear")
            .from("#world-map",{duration:2,alpha:0,delay:"-1.5"})
            .from("#zephyr-icon-map",{scale:0,duration:1,delay:"-1"})
            .fromTo(".targets",{scale:0},{scale:1,duration:1,stagger:0.2,delay:"-2"})
            // .fromTo(".targets",{alpha:1},{alpha:0.5,duration:1,stagger:0.2,repeat:5},"targets-animation")
            .fromTo(".glows",{alpha:0,scale:1},{alpha:0.5,scale:3,duration:0.5,stagger:0.2,repeat:5,yoyo:true},"targets-animation")
            .from("#play-button-fill",{duration:1,alpha:0},"targets-animation")
            .from("#play-button-stroke",{duration:1,drawSVG:0},"targets-animation")
            .from("#song-title",{duration:.5,scaleX:0},"targets-animation")
            .from("#song-artist",{duration:.5,scaleX:0},"targets-animation")
            .fromTo("#round-button-blue",{strokeWidth:0},{duration:.5,strokeWidth:7,yoyo:true,repeat:8},"-=5","button-animation")
            .fromTo("#dashboard",{fill:"#FFF"},{duration:.5,ease:"none",fill:"#4AA8CC",yoyo:true,repeat:8},"-=5","button-animation");

    return mainscreenTL;
}