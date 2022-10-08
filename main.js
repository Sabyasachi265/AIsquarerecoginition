nosex = 0
nosey = 0

leftwristx = 0;
rightwristx = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background('#054DFE');
    fill('2D4173');
    stroke('DF2FB7');
    square(nosex, nosey, difference);
    document.getElementById("playtext").innerHTML = "width and height of the square are the difference between the x positions of your wrists." + difference + "px"
}

function modelLoaded(){
    console.log("Posenet is working");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " + nosex);
        console.log("nosey = " + nosey);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        console.log("leftwristx = " + leftwristx);
        console.log("rightwristx = " + rightwristx);
        difference = leftwristx - rightwristx;
        console.log(difference);
    }
}