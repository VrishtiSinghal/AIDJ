song1="";
song2="";
function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,500,400);
}
leftX=0;
leftY=0;
rightX=0;
rightY=0;

function modelLoaded(){
    console.log('Posenet is initialized')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftX=results[0].pose.leftWrist.x;
        rightX=results[0].pose.rightWrist.x;
        leftY=results[0].pose.leftWrist.y;
        rightY=results[0].pose.rightWrist.y;
        console.log("Left Wrist X = "+leftX+"; Left Wrist Y = "+leftY);
        console.log("Right Wrist X = "+rightX+"; Right Wrist Y = "+rightY);
    }
}