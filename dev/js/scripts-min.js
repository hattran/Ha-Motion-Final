import{gsap}from"gsap";import{logoAnimation}from"./shield-logo.js";import{mainscreenAnimation}from"./content/main-screen.js";import{dashboardAnimation}from"./content/dashboard.js";import{malfunction}from"./content/dashboard.js";import{logoTwist}from"./shield-logo.js";var audio=document.getElementById("audio");playMusic();const mainTL=gsap.timeline();function playMusic(){audio.play()}mainTL.add(logoAnimation()).add(mainscreenAnimation()).add(dashboardAnimation()).add(malfunction()).add(logoTwist());