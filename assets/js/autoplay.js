var pause=true;
var radio=new Audio("https://radio.rezel.net/radio/8000/radio.mp3?1608637803");
var first=true
var title="";
var space ="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
var infos="<i>"+space+"Info 1 : Nouvelle publication de Mathieu Sérandour - Martin Révisions "+space+"Info 2 : A venir, une nouvelle section campagnes.</i>";



var width = $('#scroll_text').width();
var start_pos = $('#display').width();
var end_pos = -width;

function refresh() {
		   $.getJSON('https://radio.rezel.net/api/nowplaying/eat', function(data) {
		title=data.now_playing.song.text;

		title= ("<strong>Playing : "+title+"</strong>"+infos).replaceAll(" ", "&nbsp;");
		document.getElementById("scroll_text").innerHTML =title;

		//document.getElementById("scroll_text").style.width = getTextWidth(title, "bold 20px Source Sans Pro")-2*getTextWidth(space, "bold 20px Source Sans Pro")+ 'px';

		document.getElementById("scroll_text").style.width = getTextWidth(document.getElementById("scroll_text").innerText, "bold 20px Source Sans Pro")+'px';
		
 	
    
		});
	width = $('#scroll_text').width();
		start_pos = $('#display').width();
		end_pos = -width;
    setTimeout(refresh, 10000);
    // ...
}

// initial call, or just call refresh directly
refresh();

function play_pause()	{
	if (pause){
		document.getElementById("play_button").src="images/pause.png";
		pause=false;
		if(first){
			radio.play();
		}
		
		radio.volume = 1.0;
	}
		
	else{
		document.getElementById("play_button").src="images/play.png";
		pause=true;
		radio.volume = 0;

	}

	
}

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

function marquee(a, b) {


function scroll() {
    if (b.position().left <= -width) {
        b.css('left', start_pos);
        scroll();
        
    }
    else {
        time=20000; // Increase or decrease speed by changing value 10000
        b.animate({
            'left': -1.01*width
        }, time, 'linear', function() {
            scroll();
        });
         
    }
}

b.css({
    'width': width,
    'left': start_pos
});
scroll(a, b);
                         // on mouse over
} 		

$(document).ready(function() {
    marquee($('#display'), $('#scroll_text'));  //Enter name of container element & marquee element
});