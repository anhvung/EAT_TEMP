// player

var allPlayers = document.querySelectorAll('.player')
var vmusic = null




for (const coucou of allPlayers) {
	(function(coucou){
		var music = coucou.querySelector(':scope .music-box > .music-element')
		const parentsource=coucou.querySelector(':scope .music-box > .music-element > source')
		vmusic = music

		const source=parentsource.getAttribute("src");
		music.load();
		var playBtn = coucou.querySelector(':scope .music-box > .play')

		var seekbar = coucou.querySelector(':scope .music-box > .seekbar')
		var currentTime = coucou.querySelector(':scope .music-box > .current-time')
		var duration = coucou.querySelector(':scope .music-box> .duration')



		playBtn.onclick = function handlePlay() {

			if (music.paused) {

				music.play();

				vmusic = music
				playBtn.className = 'pause'
				playBtn.innerHTML = '<i class="material-icons">pause</i>'
			} else {
				music.pause();
				playBtn.className = 'play'
				playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
			}
			music.addEventListener('ended', function () {
				playBtn.className = 'play'
				playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
				music.currentTime = 0

				music.pause();
			});

		}
		function handlePlay() {
			if (music.paused) {
				music.play();
				vmusic = music
				playBtn.className = 'pause'
				playBtn.innerHTML = '<i class="material-icons">pause</i>'
			} else {
				music.pause();
				playBtn.className = 'play'
				playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
			}
			music.addEventListener('ended', function () {
				playBtn.className = 'play'
				playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
				music.currentTime = 0

			});
		}

		vmusic.onloadeddata = function () {
			seekbar.max = music.duration
			var ds = "0"+parseInt(music.duration % 60)
			var dm =  parseInt((music.duration / 60) % 60)
			duration.innerHTML = dm + ':' + ds.slice(-2);

		}
		music.onloadeddata = function () {
			seekbar.max = music.duration
			var ds = "0"+ parseInt(music.duration % 60)
			var dm = parseInt((music.duration / 60) % 60)
			duration.innerHTML = dm + ':' + ds.slice(-2);

		}
		music.ontimeupdate = function () { 
			seekbar.value = music.currentTime
			
			
		}
		seekbar.oninput =handleSeekBar = function () { music.currentTime = seekbar.value }
		music.addEventListener('timeupdate', function () {
			var cs = "0"+parseInt(music.currentTime % 60)
			var cm =  parseInt((music.currentTime / 60) % 60)
			currentTime.innerHTML = cm + ':' +  cs.slice(-2);
		}, false)


			// like
			var favIcon = coucou.querySelector(':scope .btn-box >.favorite')
			favIcon.classList.toggle('active')
			var liked = 0;
			favIcon.onclick=function handleFavorite() {
				favIcon.classList.toggle('active');
				if(liked == 0){
					liked = 1
					alert("moi aussi je t'aime")
				}else{
					liked = 0
				}
			}


			// repeat
			var repIcon = coucou.querySelector(':scope .btn-box > .repeat')

			repIcon.onclick=function handleRepeat() {
				if (music.loop == true) {
					music.loop = false
					repIcon.classList.toggle('active')
				}
				else {
					music.loop = true
					repIcon.classList.toggle('active')
				}
			}

			
			coucou.querySelector(':scope .btn-box > .repeat')
			repIcon.onclick=function handleRepeat() {
				if (music.loop == true) {
					music.loop = false
					repIcon.classList.toggle('active')
				}
				else {
					music.loop = true
					repIcon.classList.toggle('active')
				}
			}
			// volume
			var volIcon = coucou.querySelector(':scope .btn-box > .volume')
			var volBox = coucou.querySelector(':scope > .volume-box')
			var volumeRange = coucou.querySelector(':scope .volume-box> .volume-range')
			var volumeDown = coucou.querySelector(':scope .volume-box > .volume-down')
			var volumeUp = coucou.querySelector(':scope .volume-box > .volume-up')

			volIcon.onclick=function handleVolume() {
				volIcon.classList.toggle('active')
				volBox.classList.toggle('active')
			}
			function handleVolume() {
				volIcon.classList.toggle('active')
				volBox.classList.toggle('active')
			}

			volumeDown.addEventListener('click', handleVolumeDown);
			volumeUp.addEventListener('click', handleVolumeUp);

			volumeDown.onclick=function handleVolumeDown() {
				volumeRange.value = Number(volumeRange.value) - 20
				music.volume = volumeRange.value / 100
			}
			function handleVolumeDown() {
				volumeRange.value = Number(volumeRange.value) - 20
				music.volume = volumeRange.value / 100
			}
			volumeUp.onclick=function handleVolumeUp() {
				volumeRange.value = Number(volumeRange.value) + 20
				music.volume = volumeRange.value / 100
			}
			function handleVolumeUp() {
				volumeRange.value = Number(volumeRange.value) + 20
				music.volume = volumeRange.value / 100
			}




			var imagepop =  coucou.querySelector(':scope .cover > .img_cover')
				var textvisible=0
				var pop = coucou.querySelector(':scope .popup ')
				imagepop.onclick = function myFunction() {


					if(textvisible==0){
						textvisible=1
						pop.classList.remove("hide");
						pop.classList.add("show");
					}
					else{
						textvisible=0
						pop.classList.remove("show");
						pop.classList.add("hide");
					}
				}

				pop.onclick = function myFunction() {


					if(textvisible==1){
						textvisible=0
						pop.classList.remove("show");
						pop.classList.add("hide");
					}

				}






		})(coucou);

	}




	


