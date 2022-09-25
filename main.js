noseX=0
noseY=0
differenc=0
leftWristX=0
rightWristX=0
function setup() {
    video = createCapture(VIDEO)
    video.size(550,500)

    canvas = createCanvas(500,450)
    canvas.position(800,125)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function draw() {
    background("#5cccff")
    document.getElementById("font_size").innerHTML=" font size of the text is "+differenc+"px"
    fill("pink")
    stroke("orange")
 text("Beggars can't be choosers...",noseX,noseY)
 textSize(differenc)
}
function modelLoaded() {
    console.log("PoseNet Is Initialized!")
}
function gotPoses(results) 
{
    if(results.length>0)
    {
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    console.log("nosex="+noseX)
    console.log("nosey="+noseY)
    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x

    differenc= floor(leftWristX-rightWristX)
    console.log("leftwristx="+leftWristX)
    console.log("rightwristx="+rightWristX)
    }
}