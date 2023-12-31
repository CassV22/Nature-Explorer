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

//can't take randNum out because it needs to change each time btn is clicked;
//could make randNum a function and call it or can make return of changeBackground input for soundBtn

function changeBackground() {
    let randNum = Math.floor((Math.random() * scenes.length) + 1);
    console.log(randNum);
    
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
}

sceneBtn.addEventListener("click", () => {   
    let randNum = Math.floor((Math.random() * scenes.length) + 1);
    console.log(randNum);
    getBackground.style.backgroundImage = `url(${scenes[randNum].background})`;    
    console.log(scenes[randNum].background);   
    return randNum;     
});

soundBtn.addEventListener("click", (randNum) => {   
    console.log(randNum);
    if (scenes[randNum].hasOwnProperty("sound")) {
        //if that scene object has a sound property, play sound
        let audio = new Audio(scenes[randNum].sound); //this might need to be a string template literal
        console.log(audio)
    } else {
        alert("Sorry, this scene does not have audio!");
    }
});