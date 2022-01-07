	
var c1,c2,c3,i,elements;
var colors=[];
var div;
var col;
var winmessage = document.querySelector('.win-message');
var container=document.getElementById('container');
var level=document.getElementById('level');


function setup(){
	winmessage.innerText="";
	for(i=0;i<6;i++){
		div = document.querySelectorAll('#container div')[i];
		div.addEventListener("click",function(){
			if (this.style.background == colors[col])
				win(); 
			else
				this.style.visibility="hidden";
		});
	}
}
setup();


	
	

function start(){
	for(i=0;i<6;i++){
		div = document.querySelectorAll('#container div')[i];
		div.style.visibility="hidden";
	}

	colors=[];
	winmessage.innerText="";
	if(level.value==="Hard")
		elements = 6;
	else
		elements = 3;

	col = Math.floor(Math.random()*elements);
	for(i=0;i<elements;i++){
		div = document.querySelectorAll('#container div')[i];
		div.style.visibility="visible";
	}
	document.querySelector('#header-2 #color').innerText="";

	for(i=0;i<elements;i++){
		var element = document.querySelectorAll('#container div')[i];
		if(level.value==="Hard"){
			c1=(Math.floor(Math.random()*120) + Math.floor(Math.random()*80)).toString();
			c2=(Math.floor(Math.random()*120) + Math.floor(Math.random()*80)).toString();
			c3=(Math.floor(Math.random()*120) + Math.floor(Math.random()*80)).toString();
		}
			
		else{
		c1=Math.floor(Math.random()*256).toString();
		c2=Math.floor(Math.random()*256).toString();
		c3=Math.floor(Math.random()*256).toString(); }

		colors.push("rgb("+c1+", "+c2+", "+c3+")");
		element.style.background = "rgb("+c1+","+c2+","+c3+")";
	}	
    col=Math.floor(Math.random()*elements);
	document.querySelector("#header-2 #color").innerText=colors[col];
}

function win(){

	for(i=0;i<elements;i++){
		var element = document.querySelectorAll('#container div')[i];
		element.style.visibility="visible";
		element.style.background= colors[col];
	}
	winmessage.innerText="Congrats You guessed it right";
}
