var playIcons = document.querySelectorAll('.play-video-gallery-icon');
var videos = document.querySelectorAll('.video-gallery-video');
playIcons.forEach((icon, index)=>{
  icon.addEventListener('click',()=>{
    var nextVideo = icon.nextElementSibling;
    nextVideo.play();
    nextVideo.setAttribute('controls', 'true');
    icon.style.display = "none";
  })
})