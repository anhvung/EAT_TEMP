
var array = ["musique/evan rabenasolo/Hymne d'Alibabed.opus", 'musique/anh-vu/vulf.opus', 'musique/benj tissot/Bob Parker.opus', 'musique/44/La Baleine (prod. Rewayde) (mix. Anh-Vu).mp3', 'musique/estienne goigoux/Forum du sale.mp3', 'musique/mathieu_serandour/Présentation Snax.mp3', 'musique/quentin ravaux/Stockholm.ogg', 'musique/anh-vu/The beginning.mp3', 'musique/evan rabenasolo/Forum Organisé.mp3', 'musique/benj tissot/Ce genre de choses.opus', 'musique/benj tissot/Âge Bizarre.opus', 'musique/benj tissot/AliRapBed.opus', 'musique/anh-vu/Experiment.mp3', 'musique/44/5_2.mp3', 'musique/anh-vu/Premier Contact.opus', 'musique/anh-vu/Direction Comète - Scooby Radio.opus', 'musique/anh-vu/Forum _ Talent day - Scooby Radio.opus', 'musique/mathieu_serandour/Martin Révisions.mp3', 'musique/anh-vu/Lost Summer.opus', 'musique/pierre rakotondrafara/Le Sanglier.ogg', 'musique/pierre rakotondrafara/LoFi Land.opus', "musique/44/Hymne À L'amour.mp3"] ;
array =shuffle(array);
var radiobtn = document.getElementById('radiobtn');
var audio = document.getElementById('radio_temporaire');
var titre =document.getElementById('title');
var i=0
	
var started = 0
audio.addEventListener('ended', function(){
	audio.pause();



	if (i < array.length-1){
		i=i+1;
		audio.setAttribute('src',array[i]);
		audio.pause();
		audio.load();
		audio.play();
		settxt();
	}
	else{
		array =shuffle(array);
		i=0
		audio.setAttribute('src',array[i]);
		audio.pause();
		audio.load();
		audio.play();
		settxt();
	}

});
radiobtn.onclick =function startRadio(){
	
	if(started == 0){
	started = 1
	array =shuffle(array);
	
	audio.setAttribute('src', array[i]);
	
	audio.pause();
	audio.load();
	audio.play();
	settxt();
	radiobtn.innerHTML = "ENJOY !"

	}
	else{

		radiobtn.innerHTML = "Arrête de spam le bouton ! "
	}
	


}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}
console.log(array)
return array;
}
function settxt(){
	var str = array[i]
	titre.innerHTML = "<strong>Vous écoutez : </strong>"+str.substring(str.lastIndexOf('/')+1,str.lastIndexOf('.'));
	startbreathing();


}

function startbreathing(){
titre.classList.add("breathing_title");

}