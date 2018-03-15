class Jukebox {
	constructor(audio) {
		this.song = audio;
		this.songs = ['BEYONCE', 'FERGIE', 'DIDDY', 'FLEX', 'HOV', 'WIZ'];
		this.currentSongIndex = 0;
	}
	play() {
		this.song.setAttribute('src', 'mp3s/' + this.songs[this.currentSongIndex] + '.mp3');
		this.song.play();
	}
	pause() {
		this.song.pause();
	}
	stop() {
		this.song.pause();
		this.song.currentTime = 0;
	}
	next() {
		this.currentSongIndex++;
		this.currentSongIndex %= this.songs.length;
		this.song.setAttribute('src', this.songs[this.currentSongIndex]);
		this.play();
	}
	getSongName() {
		return this.songs[this.currentSongIndex];
	}
	timeFormat() {
		var time = this.song.duration;
		var mins = Math.floor(time / 60);
		var secs = Math.floor(time - mins * 60);
		if (secs <= 9) secs = '0' + secs;
		var playedTime = this.song.currentTime;
		var ptMins = Math.floor(playedTime / 60);
		var ptSecs = Math.floor(playedTime - ptMins * 60);
		if (ptSecs <= 9) ptSecs = '0' + ptSecs;
		return ptMins + ':' + ptSecs + '/' + mins + ':' + secs;
	}
}
var audio = document.getElementById('myAudio');
var jukebox = new Jukebox(audio);
var play = document.getElementById('play');
play.addEventListener('click', function() {
	jukebox.play();
});
var pause = document.getElementById('pause');
pause.addEventListener('click', function() {
	jukebox.pause();
});
var stop = document.getElementById('stop');
stop.addEventListener('click', function() {
	jukebox.stop();
});
var next = document.getElementById('next');
next.addEventListener('click', function() {
	jukebox.next();
});
var display = document.getElementById('display');
audio.addEventListener('play', function() {
	display.innerText = jukebox.getSongName();
});
var time = document.getElementById('time');
audio.addEventListener('timeupdate', function() {
	time.innerText = jukebox.timeFormat();
});
audio.addEventListener("ended", function() {
	next();
});


function PlaySound(soundobj) {
	var thissound = document.getElementById('myAudio');
	thissound.play();
}

function StopSound(soundobj) {
	var thissound = document.getElementById('myAudio');
	thissound.pause();
	thissound.currentTime = 0;
}






////////input own file info below 
var $audio = $('#myAudio');
$('input').on('change', function(e) {
	var target = e.currentTarget;
	var file = target.files[0];
	var reader = new FileReader();


	if (target.files && file) {
		var reader = new FileReader();
		reader.onload = function(e) {
			$audio.attr('src', e.target.result);
			//$audio.play();
		}

		reader.readAsDataURL(file);
	}
});

$(document).ready(function() {
	$("#play-bt").click(function() {
		$("#audio-player")[0].play();
	})

	$("#stop-bt").click(function() {
		$("#audio-player")[0].pause();
		$("#audio-player")[0].currentTime = 0;
	})
})
var playing = true;

$('#myAudio').on('playing', function() {
	playing = true;
	// disable button/link
});
$('#myAudio').on('ended', function() {
	playing = false;
	// enable button/link
});
