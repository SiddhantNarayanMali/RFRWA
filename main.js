function preload()
{}
function setup()
{
    Canvas = createCanvas(400,400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
    Ml5 = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wgTi8Nmaf/model.json",ModelL);
}
function draw()
{
    Ml5.classify(Video, result)
    
}
function result(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("member").innerHTML = results[0].label;
        document.getElementById("member").innerHTML = results[0].confidence.toFixed(3);
        
    }
    
}