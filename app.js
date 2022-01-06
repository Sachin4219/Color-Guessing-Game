	
var c1,c2,c3,i,elements;
var colors=[];
var div;
var col=Math.floor(Math.random()*6);
var container=document.getElementById('container');
var winmessage = document.querySelector(".winning-message");

function win(){

			for(i=0;i<elements;i++)
			{
				var element = document.querySelectorAll('#container div')[i];
				element.style.visibility="visible";
				element.style.background= colors[col];
			}
		winmessage.innerText="Congrats You guessed it right";
	}

	for(i=0;i<elements;i++){
			div = document.querySelectorAll('#container div')[i];
			div.classList.add('el');
			div.addEventListener("click",function(){
			
	if (this.style.background == colors[col])
		{ 
		win(); }
	else{
		this.style.visibility="hidden";
		}
	});
		}
	function start(){
		winmessage.innerText="";
		var lev=document.getElementById('level').value;
		if(lev==="Hard")
			elements = 6;
		else
			elements = 3;
		
		for(i=0;i<elements;i++)
		{
			div = document.querySelectorAll('#container div')[i];
			div.style.visibility="visible";
		}
		document.querySelector('#header-2 #color').innerText="";
		colors=[];

		for(i=0;i<elements;i++)
		{
			var element = document.querySelectorAll('#container div')[i];
			
			if(lev==="Hard"){
				c1=(Math.floor(Math.random()*120) + Math.floor(Math.random()*80)).toString();
				c2=(Math.floor(Math.random()*120) + Math.floor(Math.random()*80)).toString();
				c3=(Math.floor(Math.random()*120) + Math.floor(Math.random()*80)).toString();
			}
				
			else{
			c1=Math.floor(Math.random()*256).toString();
			c2=Math.floor(Math.random()*256).toString();
			c3=Math.floor(Math.random()*256).toString();
			}

			colors.push("rgb("+c1+", "+c2+", "+c3+")");
			element.style.background = "rgb("+c1+","+c2+","+c3+")";
		}	
        col=Math.floor(Math.random()*elements);
		document.querySelector("#header-2 #color").innerText=colors[col];
}
