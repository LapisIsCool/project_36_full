//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var milkBottle;
var feedButton;
var addFoodButton;
var fedTime;
var lastFed;
var foodObj;

function preload(){
  //load images here
  
  normDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(550, 500);

  dog = createSprite(350,350);
  dog.addImage("normalDog",normDog);
  dog.scale = .3;

  foodObj = new Food();

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(() => {addFoods()});

  
  foodObj.getFeedTime();
  readStock();
  
}

function draw() { 
  background(46, 139, 87);
  readStock();
  foodObj.display();
  //VIRTUAL PET- 1
  // if(keyWentDown(UP_ARROW)){
  //   writeStock(foodS);
  //   dog.addImage("happyDog",happyDog);
  //}

  drawSprites();
  //add styles here

  //VIRTUAL PET- 1
  // textSize(20);
  // fill(0);
  // stroke(0);
  // text("Press up arrow key to feed Phineas",100,50)
  // text("food stock left" + foodS,100,100);

  //VIRTUAL PET- 2
  fill(255,255,254);
  textSize(15);
  if (foodObj.lastFed >= 12){
    text("last feed : "+ foodObj.lastFed%12 + "pm", 350,30);
  } else if (foodObj.lastFed == 0){
    text("last feed : 12 am", 350,30);
  } else  {
    text("last feed : " + foodObj.lastFed + "am", 350,30);
  }

}

function readStock(){
  foodObj.getFoodStock();
}

function feedDog(){
  foodObj.updateFoodStock(foodObj.foodStock-1);
  foodObj.updateFeedTime();
}

function addFoods(){
  console.log(foodObj.foodStock);
  foodObj.updateFoodStock(foodObj.foodStock + 1);
}