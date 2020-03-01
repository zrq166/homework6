var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
	console.log("Play Video");
} 

function pauseVid() {
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate*=0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime + 60 > video.duration) {
		video.currentTime = 0;
		video.playbackRate = 1;
	} else {
		video.currentTime = video.currentTime + 60;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if(video.muted){
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML="Mute";
		video.muted=false;
	}
  	else{
		console.log("Muted");
		document.querySelector("#mute").innerHTML="Unmute";
		video.muted=true;

	}

  	

}

function changeVolume() {
	video.volume=document.querySelector("#volumeSlider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is "+video.volume*100+"%");
}
       

function gray() {
	video.className = "grayscale";
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color") 
}
