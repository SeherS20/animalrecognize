function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OLWyWxPnB/model.json", modelReady)
}

function modelReady() {
    classifier.classify(gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else {
        console.log(results)
        random_number_R = Math.floor(Math.random() * 255)+1
        random_number_G = Math.floor(Math.random() * 255)+1
        random_number_B = Math.floor(Math.random() * 255)+1
        document.getElementById("result_label").style.color = "rgb("+random_number_R+" , "+random_number_G+" , "+random_number_B+")"
        document.getElementById("accuracy_label").style.color = "rgb("+random_number_R+" , "+random_number_G+" , "+random_number_B+")"
        
        document.getElementById("result_label").innerHTML = "I can hear the sound of " + results[0].label
        document.getElementById("accuracy_label").innerHTML = "I am " + (results[0].confidence * 100).toFixed(2) + "% sure!" 

        pic = document.getElementById("sound")

        if(results[0].label == "Background Noise"){
            pic.src = 'ear.png';
        }
        else if(results[0].label == "cat"){
            pic.src = 'cat ears.png';
        }
        else if(results[0].label == "dog"){
            pic.src = 'DOGGO.png';
        }
        else if(results[0].label == "human"){
            pic.src = 'human.png';
        }
    }


}