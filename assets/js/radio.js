
var array = ['musique/estienne goigoux/Forum du sale.mp3', 'musique/benj tissot/Ce genre de choses.opus', 'musique/44/5_2.mp3', "musique/evan rabenasolo/Hymne d'Alibabed.opus", 'musique/anh-vu/Direction Comète - Scooby Radio.opus', 'musique/anh-vu/The beginning.mp3', 'musique/pierre rakotondrafara/LoFi Land.opus', "musique/44/Hymne À L'amour.mp3", 'musique/anh-vu/Premier Contact.opus', 'musique/anh-vu/Forum _ Talent day - Scooby Radio.opus', 'musique/evan rabenasolo/Forum Organisé.mp3', 'musique/benj tissot/AliRapBed.opus', 'musique/44/La Baleine (prod. Rewayde) (mix. Anh-Vu).mp3', 'musique/benj tissot/Âge Bizarre.opus', 'musique/anh-vu/vulf.opus', 'musique/anh-vu/Experiment.mp3', 'musique/benj tissot/Bob Parker.opus'] ;
array =shuffle(array);
var radiobtn = document.getElementById('radiobtn');
var audio = document.getElementById('radio_temporaire');
var titre =document.getElementById('title');
var i=0
	
var started = 0


radiobtn.onclick =function startRadio(){
	
	if(started == 0){
	started = 1
	
	
	
	
	audio.pause();
	audio.load();
	audio.play();
	settxt();
	radiobtn.innerHTML = "ENJOY !"
	var tags = audio.getAllTags('http://giss.tv:8000/costaparana881.mp3');
    alert(tags.artist + " - " + tags.title + ", " + tags.album);

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