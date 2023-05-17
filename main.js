function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OLWyWxPnB/model.json", modelReady)
}

function modelReady() {
    classifier.classify(gotResult)
}