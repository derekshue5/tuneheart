//REFERENCES:
//Rotation animation: Basic Animations by Mozilla Developer Guide
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
//Palette array/color implementation: Generative Art with Node.JS and Canvas by Matt Deslauriers
// https://mattdesl.svbtle.com/generative-art-with-nodejs-and-canvas
//Lightning reference: Lightning by Bálint
//https://codepen.io/mcdorli/pen/rLrQZq
//Psychedelic Circle code
//https://www.youtube.com/watch?v=yq2au9EfeRQ
//Raining Particles
//https://www.youtube.com/watch?v=nrJh8-Ixnu8 
//Basics + button
//https://www.youtube.com/watch?v=lPVZYS4fvco
//Play button / music
//https://www.youtube.com/watch?v=xu3y6lKD6kY

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var context2 = canvas.getContext("2d");
var twopi = 2 * Math.PI;

var songname = "";
var requested = false;
var times = 0;
var currentNum = 0;

console.log("test");

//BUTTON AND SOUND
function _(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_folder = "./";
	var audio_ext = ".mp3";
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;


    //songname = playingtrack;
	var trackbox = _("trackbox");
	var tracks = {
	    "telepatia":["telepatia", "telepatia"],
        "BlindingLights":["BlindingLights", "BlindingLights"],
        "Summer":["Summer", "Summer"]
		
	};
    var getRandomSong = () => tracks[~~(Math.random() * tracks.length)];

	for(var track in tracks){
		var tb = document.createElement("div");
		var pb = document.createElement("button");
		var tn = document.createElement("div");
		tb.className = "trackbar";
		pb.className = "playbutton";
		tn.className = "trackname";
		tn.innerHTML = audio_index+". "+tracks[track][0];
		pb.id = tracks[track][1];
		pb.addEventListener("click", switchTrack);
		tb.appendChild(pb);
		tb.appendChild(tn);
		trackbox.appendChild(tb);
		audio_index++;
    console.log("yes");
	}
	audio.addEventListener("ended",function(){
		// playingtrack = "";
        // songname = playingtrack;
		// is_playing = false;
        console.log("song over");
        currentNum++;
        audio.src = audio_folder+Object.keys(tracks)[currentNum]+audio_ext;
        audio.play();
        playingtrack = Object.keys(tracks)[currentNum];
        songname = playingtrack;
	});
	function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				//_(playingtrack).style.background = "url(images/ak_playbtn.png)";
			   // event.target.style.background = "url(images/ak_pausebtn.png)";
                //songname = tracks[track][0];
			    audio.src = audio_folder+event.target.id+audio_ext;
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				//event.target.style.background = "url(images/ak_playbtn.png)";
			}
		} else {
			is_playing = true;
			//event.target.style.background = "url(images/ak_pausebtn.png)";
			if(playingtrack != event.target.id){
				audio.src = audio_folder+event.target.id+audio_ext;
			}
	        audio.play();
		}
		playingtrack = event.target.id;
        songname = playingtrack;
        
        if(times == 0) {
            requestAnimationFrame(loop);
            times++;
        }

        // if(songname == "BlindingLights"){
        //     cancelAnimationFrame(telepatia);
        //     requestAnimationFrame(BlindingLights);
        // }
        // if(songname == "telepatia"){
        //     cancelAnimationFrame(BlindingLights);
        //     requestAnimationFrame(telepatia);
        // }
        console.log(songname);
	}
}
window.addEventListener("load", audioApp);


//LIGHTNING VARIABLES
var size = canvas.width * 2.5;
var c = document.getElementById("canvas");
c.width = size;
c.height = size;
var ctx = c.getContext("2d");
var center = {x: size / 2, y: -50};
var minSegmentHeight = 1;
var roughness = 2;
var groundHeight = size + 200;
var color = "hsl(180, 80%, 80%)";
var maxDifference = size / 5;
ctx.globalCompositeOperation = "lighter";
ctx.strokeStyle = color;
ctx.shadowColor = color;
ctx.fillStyle = color;
ctx.fillRect(0, 0, size, size);
ctx.fillStyle = "hsla(0, 0%, 10%, 0.2)";


//STAR VARIABLES
const COLOR_SPACE = "black";
const COLOR_STARS = "white";
var STAR_NUM = 200; // number of stars in the starfield
var STAR_SIZE = 0.025; // max star size as a fraction of screen width
var STAR_SPEED = 0.15; // fraction of screen width per second

var stars = [];
var starSpeed = STAR_SPEED * canvas.width;
var xv = starSpeed * randomSign() * Math.random();
// Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
for (let i = 0; i < STAR_NUM; i++) {
  let speedMult = Math.random() * 1.5 + 0.5;
  stars[i] = {
  r: Math.random() * STAR_SIZE * canvas.width / 2,
  x: Math.floor(Math.random() * canvas.width * 2),
  y: Math.floor(Math.random() * canvas.height),
xv: xv * speedMult,
  yv: yv * speedMult
    }
}




//add more combinations / "infinite" combos for songs.


canvas.height = window.outerHeight;
canvas.width = window.outerWidth;
document.body.appendChild(canvas);

context.globalAlpha = 0.5;

var pPurpOrng = ["#300030","#480048","#601848","#C04848","#F07241"];
var pBlues = ["#D1E751","#FFFFFF","#000000","#4DBCE9","#26ADE4"];
var pGreens = ["#3A111C","#574951","#83988E","#BCDEA5","#E6F9BC"];
var pOgWht = ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900"];
var pStrawberry =  ["#FE4365","#FC9D9A","#F9CDAD","#C8C8A9","#83AF9B"];
var pBloodMoon = ["#ECD078","#D95B43","#C02942","#542437","#53777A"];
var pFiesta= ["#556270","#4ECDC4","#C7F464","#FF6B6B","#C44D58"];
var pAcademy = ["#774F38","#E08E79","#F1D4AF","#ECE5CE","#C5E0DC"];
var pEmerald = ["#E8DDCB","#CDB380","#036564","#033649","#031634"];
var pQuince = ["#490A3D","#BD1550","#E97F02","#F8CA00","#8A9B0F"];
var pEmerald2= ["#594F4F","#547980","#45ADA8","#9DE0AD","#E5FCC2"];
var pFire= ["#00A0B0","#6A4A3C","#CC333F","#EB6841","#EDC951"];
var pHeaven= ["#E94E77","#D68189","#C6A49A","#C6E5D9","#F4EAD5"];
var pAether = ["#D9CEB2","#948C75","#D5DED9","#7A6A53","#99B2B7"];
var pEmo= ["#EFFFCD","#DCE9BE","#555152","#2E2633","#99173C"];
var p911 = ["#3FB8AF","#7FC7AF","#DAD8A7","#FF9E9D","#FF3D7F"];
var pSea = ["#343838","#005F6B","#008C9E","#00B4CC","#00DFFC"];
var pStone = ["#413E4A","#73626E","#B38184","#F0B49E","#F7E4BE"];
var pFire2= ["#99B898","#FECEA8","#FF847C","#E84A5F","#2A363B"];
var pSun= ["#FF4E50","#FC913A","#F9D423","#EDE574","#E1F5C4"];
var pQuetzal = ["#554236","#F77825","#D3CE3D","#F1EFA5","#60B99A"];
var pNeon = ["#00A8C6","#40C0CB","#F9F2E7","#AEE239","#8FBE00"];



var genre = "none";
var bpm; 
var valence; 
var danceability = 0; 
var energy = 0; 

var gm = 1;
var fc = 0; //frame counter
var palette;







var song = songname;
var design = "";

if(song == ""){
    genre = "edm";
    bpm = 0;
    valence = 0;
    danceability = 0;
    energy = 0;

}
if(song == "Summer"){
  genre = "edm";
  design = "rotating";
  bpm = 128;
  valence = 8.45;
  danceability = 5.96;
  energy = 8.56;
}

if(song == "BlindingLights"){
  bpm = 172;
  design = "lightning";
  danceability = 5.1;
  energy = 7.3;
  valence = 3.3;
}

if(song == "telepatia"){
  genre = "rnb";
  design = "rain";
  bpm = 84;
  valence = 5.53;
  danceability = 6.53;
  energy = 5.3;
}

if(song == "Summertime Sadness"){
  bpm = 127;
  valence = 1.1;
  energy = 8.1;
  danceability = 5.72;
}


if(song == "Starboy"){
  bpm = 187;
  valence = 4.86;
  danceability = 6.79;
  energy = 5.87;
}

if(song == "good 4 u"){
  bpm = 167;
  danceability = 5.63;
  energy = 6.64;
  valence = 6.88;
  
}


if(song == "Hold On We're Going Home"){
  genre = "rnb";
  bpm = 101;
  valence = 2.87;
  danceability = 7.76;
  energy = 4.13;
}


if(song == "Diamonds"){
  bpm = 92;
  valence = 3.93;
  energy = 7.1;
  danceability = 5.64;
}







if(bpm > 150){
  bpm = bpm/2;
}





var red = 255;
var green = 255;
var blue = 255;


if(valence <= 2){
  palette = pAether;

}else if(valence > 2 && valence <= 4){
  palette = pSea;
  
} else if(valence > 4 && valence <=6){
  palette = pQuetzal;
  
}else if(valence > 6 && valence <= 8){
  palette = pSun;

}else if(valence > 8 && valence <= 10){
  palette = pAcademy;
}



let particlesArray = [];
let particlesArray2 = [];
var timeDelta, timeLast = 0;

generateParticles(101);
canvas.height = innerHeight;
canvas.width = innerWidth;
//requestAnimationFrame(loop);




//ANIMATION LOOP
function loop(timeNow) {
song = songname;
if(song == "Summer"){
    genre = "edm";
    bpm = 128;
    design = "rotating";
    valence = 8.45;
    danceability = 5.96;
    energy = 8.56;
  }
  
  if(song == "BlindingLights"){
    ctx.strokeStyle = red;
    ctx.shadowStyle = red;
    bpm = 172;
    design = "lightning";
    danceability = 5.1;
    energy = 7.3;
    valence = 3.3;
  }
  
  if(song == "telepatia"){
    genre = "rnb";
    bpm = 84;
    design = "rain"
    valence = 5.53;
    danceability = 6.53;
    energy = 5.3;
  }
  
  if(song == "Summertime Sadness"){
    bpm = 127;
    design = "rotating"
    valence = 1.1;
    energy = 8.1;
    danceability = 5.72;
  }
  
  
  if(song == "Starboy"){
    bpm = 187;
    valence = 4.86;
    danceability = 6.79;
    energy = 5.87;
  }
  
  if(song == "good 4 u"){
    bpm = 167;
    danceability = 5.63;
    energy = 6.64;
    valence = 6.88;
    
  }
  
  
  if(song == "Hold On We're Going Home"){
    genre = "rnb";
    bpm = 101;
    valence = 2.87;
    danceability = 7.76;
    energy = 4.13;
  }
  
  
  if(song == "Diamonds"){
    bpm = 92;
    valence = 3.93;
    energy = 7.1;
    danceability = 5.64;
  }
  
  
  
  if(bpm > 150){
    bpm = bpm/2;
  }
  
  
  
  
  
  var red = 255;
  var green = 255;
  var blue = 255;
  
  
  if(valence <= 2){
    palette = pAether;
  
  }else if(valence > 2 && valence <= 4){
    palette = pSea;
    
  } else if(valence > 4 && valence <=6){
    palette = pQuetzal;
    
  }else if(valence > 6 && valence <= 8){
    palette = pSun;
  
  }else if(valence > 8 && valence <= 10){
    palette = pAcademy;
  }
  
  
  for(var i = 0; i < bpm * .98; i++){
    fc++;
  }
  //console.log(fc);
  if(design == "lightning"){
    ctx.lineWidth = 1;
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
  }else if (design == "rotating"){
    particlesArray.forEach((particle) => particle.rotate());
    particlesArray2.forEach((particle2) => particle2.rotate());
    //ctx.globalCompositeOperation = "source-over";

  }
  else if (design == "rain"){
    //STARS

    timeDelta = timeNow - timeLast;
    timeLast = timeNow;
    // // space background
    // context.fillStyle = COLOR_SPACE;
    // context.fillRect(0, 0, canvas.width, canvas.height);
    // draw the stars
    context.fillStyle = COLOR_STARS;
    for (let i = 0; i < STAR_NUM; i++) {
        context.beginPath();
        context.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        context.fill();

        // update the star's x position
        stars[i].x += stars[i].xv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].x < 0 - stars[i].r) {
        stars[i].x = canvas.width + stars[i].r;
        } else if (stars[i].x > canvas.width + stars[i].r) {
                    stars[i].x = 0 - stars[i].r;
        }
                
        // update the star's y position
        stars[i].y += stars[i].yv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].y < 0 - stars[i].r) {
        stars[i].y = canvas.height + stars[i].r;
        } else if (stars[i].y > canvas.height + stars[i].r) {
            stars[i].y = 0 - stars[i].r;
                }
        }

  }


  
  
    
  //BACKGROUND

  if(valence > 4 && valence <= 6){
    context2.fillStyle = `rgb(
    ${Math.floor(150 -20 * gm)},
    ${Math.floor(50 - 20 * gm)},
    ${Math.floor(170 +20 * gm)}, 0.05)`;
    //pink: 255,20,147
    //gold: 255,215,0
    context2.fillRect(0, 0, canvas.width, canvas.height);
} else if(valence > 2 && valence <=4){
    context2.fillStyle = `rgb(
    ${Math.floor(10 + 10* gm)},
    ${Math.floor(1 + 1 * gm)},
    ${Math.floor(180 - 20 * gm)}, 0.05)`;
    //pink: 255,20,147
    //gold: 255,215,0
    context2.fillRect(0, 0, canvas.width, canvas.height);
}else if(valence > 6 && valence <= 8){
      context2.fillStyle = `rgb(
      ${Math.floor(255)},
      ${Math.floor(20 + 50 * gm)},
      ${Math.floor(147 - 20 * gm)}, 0.05)`;
      //pink: 255,20,147
      //gold: 255,215,0
      context2.fillRect(0, 0, canvas.width, canvas.height);  
}else if(valence > 8 && valence <= 10){
    context2.fillStyle = `rgb(
    ${Math.floor(150 + 25 * gm)},
    ${Math.floor(250 - 20 * gm)},
    ${Math.floor(150 - 20 * gm)}, 0.08)`;
    //pink: 255,20,147
    //gold: 255,215,0
    context2.fillRect(0, 0, canvas.width, canvas.height);
}else{
    context2.fillStyle = `rgb(
    ${Math.floor(0 + 10 * gm)},
    ${Math.floor(0 + 10 * gm)},
    ${Math.floor(20 +20 * gm)}, 0.05)`;
    //pink: 255,20,147
    //gold: 255,215,0
    context2.fillRect(0, 0, canvas.width, canvas.height);
}

//LIGHTNING
  if(design == "lightning"){
      ctx.globalCompositeOperation = "lighter";
      ctx.shadowBlur = 1.5 * gm;
      //ctx.globalCompositeOperation = "lighter";
      var lightning = createLightning();
      ctx.beginPath();
      for (var i = 0; i < lightning.length; i++) {
        ctx.lineTo(lightning[i].x, lightning[i].y);
      }
      ctx.stroke();
  }else{
    ctx.globalCompositeOperation = "source-over";
  }
  


 // if(fc > 1800/bpm){
  //   gm = 2;
  // }
  if(fc >= 3600){
    fc = 0;
    gm = 20;
  }
  if(gm > 1){
    gm -= 1;
  }
  //console.log(bpm);
  


  //CENTER ELLIPSE
  if(valence <= 2){
    context2.fillStyle = 'white';
    context2.shadowColor = "white";  
  }else if(valence > 4 && valence <= 6){
    context2.shadowColor = "pink";    
    context2.fillStyle = 'white';
  } else if(valence > 2 && valence <=4){
    context2.fillStyle = 'yellow';
    context2.shadowColor = "red";    
  }else if(valence > 6 && valence <= 8){
    context2.fillStyle = 'white';
    context2.shadowColor = "pink";  
  }else if(valence > 8 && valence <= 10){
    context2.fillStyle = 'white';
    context2.shadowColor = "yellow";
  }

  context2.beginPath();
  if(danceability > 7 && danceability <= 10){
    context2.shadowBlur = gm + 10;
    context2.ellipse(canvas.width/2, canvas.height/2, 150 + gm * 2, 150 + gm * 2, Math.PI / 4, 0, 2* Math.PI);
  }else if(danceability > 4 && danceability <= 7){
    context2.shadowBlur = gm + 10;
    context2.ellipse(canvas.width/2, canvas.height/2, 150 + gm, 150 + gm, Math.PI / 4, 0, 2* Math.PI);
  }else{
    context2.shadowBlur = gm + 20;
    context2.ellipse(canvas.width/2, canvas.height/2, 150, 150, Math.PI / 4, 0, 2* Math.PI);
  }
  context2.fill();

  
  
 

  
 

    
    
 
  //var randRGB = (Math.random() * 5) + 95;
  requestAnimationFrame(loop);


    
}




function generateParticles(amount) {
  var counter = 0;
  for (let i = 0; i < amount-1; i++) {
    particlesArray[i] = new Particle(
      innerWidth / 2,
      innerHeight / 2,
      4,
      palette[Math.ceil(Math.random() * 4)],
      0.02
    );

    particlesArray2[i] = new Particle2(
      innerWidth / 2,
      innerHeight / 2,
      4,
      palette[Math.ceil(Math.random() * 4)],
      0.02
    );

    counter++;
  }

}





function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}




function createLightning() {

  var segmentHeight = groundHeight - center.y;
  var lightning = [];
  lightning.push({x: center.x, y: center.y});
  lightning.push({x: Math.random() * (size - 20) + 50, y: groundHeight + (Math.random() - 0.9) * 50});
  var currDiff = maxDifference;
  while (segmentHeight > minSegmentHeight) {
    var newSegments = [];
    for (var i = 0; i < lightning.length - 1; i++) {
      var start = lightning[i];
      var end = lightning[i + 1];
      var midX = (start.x + end.x) / 2;
      var newX = midX + (Math.random() * 2 - 1) * currDiff;
      newSegments.push(start, {x: newX, y: (start.y + end.y) / 2});
    }
    
    newSegments.push(lightning.pop());
    lightning = newSegments;
    
    currDiff /= roughness;
    segmentHeight /= 2;
  }
  return lightning;
}

function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
    this.x = x;
    this.y = y;
    this.particleTrailWidth = particleTrailWidth;
    this.strokeColor = strokeColor;
    this.theta = Math.random() * Math.PI * 2;
    this.rotateSpeed = rotateSpeed * (bpm / 60);
    this.t = Math.random() * 400;
  
    this.rotate = () => {
      const ls = {
        x: this.x,
        y: this.y,
      };
      this.theta += this.rotateSpeed * gm/6;
      this.x = canvas.width/2 + Math.cos(this.theta) * this.t * 5;
      this.y = canvas.height/2 + Math.sin(this.theta) * this.t * 2;
      context.beginPath();
      context.lineWidth = this.particleTrailWidth * 2 * (1.1 + gm/10);
      context.moveTo(ls.x, ls.y);
      context.lineTo(this.x, this.y);
      context.stroke();
      //context.strokeStyle = this.strokeColor;
      //context2.fill();
  
    };
  }
  
  function Particle2(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
    this.x = x;
    this.y = y;
    this.particleTrailWidth = particleTrailWidth;
    this.strokeColor = strokeColor;
    this.theta = Math.random() * Math.PI * 2;
    this.rotateSpeed = rotateSpeed;
    this.t = Math.random() * 400;
  
    this.rotate = () => {
      
      const ls = {
        x: this.x,
        y: this.y,
      };
      this.theta += this.rotateSpeed;
      this.x = canvas.width/2 + Math.cos(this.theta) * this.t * 5;
      this.y = canvas.height/2 + Math.sin(this.theta) * this.t * 2;
      context2.beginPath();
      context2.lineWidth = this.particleTrailWidth * 2 * (1.1 + gm/10);
      context2.moveTo(ls.x, ls.y);
      context2.lineTo(this.x, this.y);
      context2.stroke();
      context2.strokeStyle = this.strokeColor;
      //context2.strokeStyle = this.strokeColor;
      //context2.fill();
      
  
    };
  }

