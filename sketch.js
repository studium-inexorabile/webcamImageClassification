let mobilenet, video, label, prob;

function modelReady(){
    console.log('Model is ready!')
    mobilenet.predict(gotResults)
}

function gotResults(err, results) {
    if(err){
        console.log(err)
    }else{
        console.log(results)
        label = results[0].label;
        prob = results[0].confidence;
        mobilenet.predict(gotResults)
    }
}


function setup() {
    createCanvas(640, 480, P2D);
    video = createCapture(VIDEO)
    video.hide();
    background(0);

    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw(){
    background(0);
    image(video, 0, 0)
    fill(255);
    textSize(32);
    text(label + " - " + prob, 10, height - 20)
}