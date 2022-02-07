function sound_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("link",modleready);
}

function modleready(){
    classifier.classify(gotresults);
}

function gotresults(){
    console.log("abcdef");
}