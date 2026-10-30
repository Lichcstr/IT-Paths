const button = document.querySelector(".settings");
const video = document.querySelector(".local-video");
const youtube = document.querySelector(".youtube-video");

let isYoutube = true;

const youtubeSrc = youtube.src;

button.addEventListener("click", function() {

    isYoutube = !isYoutube;

    video.style.display = isYoutube ? "none" : "block";
    youtube.style.display = isYoutube ? "block" : "none";

    youtube.src = isYoutube ? youtubeSrc : "about:blank";

});