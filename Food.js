class Food {
    constructor() {
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage('images/Milk.png');
    }

    display(){

        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock != 0){
            for(var i = 0;i < this.foodStock;i++){
                if(i%10 == 0){
                    x = 80;
                    y =y + 50;
                }
                image(this.image,x,y,50,50);
                x = x +30
            }
        }
    }

    getFoodStock(){
        var getFoodRef = database.ref("Food");
        getFoodRef.on("value", (data)=>{
            this.foodStock = data.val();
        });
        // console.log("hi");
    }

    updateFoodStock(stock){
        database.ref('/').update({
            Food: stock
        });
        // console.log("hi");
    }

    getFeedTime(){
        var timeRef = database.ref("lastFeedTime");
        timeRef.on("value", (timedata)=>{
            this.lastFed = timedata.val();
        });
    }

    updateFeedTime() {
        database.ref('/').update({
            lastFeedTime: hour()
        });
        this.lastFed = hour();
    }

}