// make array of objects that consist of image and corresponding sound
//when startBtn is clicked: display sceneBtn and soundBtn, remove text overlay, change background to random scene - background should have corresponding sound  
const scenes = [{
    background: '/images/aurora.jpg',
    sound: './sounds/aurora_audio.mp3'
},
{
    background: '/images/beach.jpg',
    sound: './sounds/beach_audio.mp3'
},
{
    background: '/images/canyon.jpg',
    sound: './sounds/canyon_audio.mp3'
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
    sound: './sounds/snow_audio.mp3'   
},
{
    background: '/images/snowfall.jpg' ,
    sound: './sounds/snowfall_audio.mp3'   
},
{
    background: '/images/underwater.jpg' ,
    sound: './sounds/underwater_audio.mp3'   
},
];

const getBackground = document.getElementById('background');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener("click", () => {
    alert("Clicked!");
    changeBackground();
})

function changeBackground() {
    let randNum = Math.floor((Math.random() * scenes.length) + 1);
    console.log(randNum);
    getBackground.style.backgroundImage = `url(${scenes[randNum].background})`;    
    console.log(scenes[randNum].background);
}