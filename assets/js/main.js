$(document).ready(function(){

  $('.header-slider-pic').slick({
    dots: true,
    arrows: true,
  });

  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-bottom'
  });
  $('.slider-bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
});


var video = document.querySelector('#video-pic');
var playIcon = document.querySelector('#play-icon');
var playButton = document.getElementById("play-pause");


// console.log(video.controls);

// var playState = true;
playIcon.addEventListener('click', ()=>{
  if(video.paused){
    video.play();
    video.setAttribute('controls','true'); 
    playIcon.style.display = "none";
  }
})



var videoAds = document.querySelector('#video-ads');
var playAdsIcon = document.querySelector('#play-ads-icon');


// console.log(video.controls);

// var playState = true;
playAdsIcon.addEventListener('click', ()=>{
  if(videoAds.paused){
    videoAds.play();
    videoAds.setAttribute('controls','true'); 
    playAdsIcon.style.display = "none";
  }
})


