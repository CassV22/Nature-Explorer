// make array of objects that consist of image and corresponding sound
//when startBtn is clicked: display sceneBtn and soundBtn, remove text overlay, change background to random scene - background should have corresponding sound  
const scenes = [{
    background: '/images/aurora.jpg',
    sound: '/sounds/aurora_audio.mp3'
},
{
    background: '/images/beach.jpg',
    sound: '/sounds/beach_audio.mp3'
},
{
    background: '/images/canyon.jpg',
    sound: '/sounds/canyon_audio.mp3'
},
{
    background: '/images/cropland.jpg'    
},
{
    background: '/images/flowers.jpg'    
},
{
    background: '/images/fruits.jpg'    
},
{
    background: '/images/lake.jpg'    
},
{
    background: '/images/night_mountain.jpg'    
},
{
    background: '/images/ocean_sharks.jpg'    
},
{
    background: '/images/snow.jpg' ,
    sound: '/sounds/snow_audio.mp3'   
},
{
    background: '/images/snowfall.jpg' ,
    sound: '/sounds/snowfall_audio.mp3'   
},
{
    background: '/images/underwater.jpg' ,
    sound: '/sounds/underwater_audio.mp3'   
},
];

const getBackground = document.getElementById('background');
const startBtn = document.getElementById('startBtn');
const starterOverlay = document.getElementById('text_overlay');

const sceneBtn = document.getElementById('sceneBtn');
const soundBtn = document.getElementById('soundBtn');

//transition from starter screen
startBtn.addEventListener("click", () => {
    alert("Clicked!");
    changeBackground();
})

function changeBackground() {
    let randNum = Math.floor((Math.random() * scenes.length) + 1);
    console.log(randNum);
    // let scene = scenes[randNum];
    // console.log(scene);
    getBackground.style.backgroundImage = `url(${scenes[randNum].background})`;    
    console.log(scenes[randNum].background);
    console.log(typeof(scenes[randNum])); //this is an object
    //remove overlay and change buttons display to show
    if (starterOverlay.style.visibility === "hidden") {
        starterOverlay.style.visibility = "visible";
    } else {
        starterOverlay.style.visibility = "hidden";
    } 
    
    
    sceneBtn.style.visibility = "visible";
    soundBtn.style.visibility = "visible";

    return randNum;
}

sceneBtn.addEventListener("click", () => {   
    let randNum = Math.floor((Math.random() * scenes.length) + 1);
    console.log(randNum);
    getBackground.style.backgroundImage = `url(${scenes[randNum].background})`;    
    console.log(scenes[randNum].background);    
});

soundBtn.addEventListener("click", () => {
    // randNum is not getting passed in correctly; for this, it is undefined
    //something about the way this is written is incorrect; always returns false
    if (scenes[randNum].hasOwnProperty("sound")) {
        //if that scene object has a sound property, play sound
        let audio = new Audio(scenes[randNum].sound);
        console.log(audio)
    } else {
        alert("Sorry, this scene does not have audio!");
    }
});