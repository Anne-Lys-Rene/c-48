class question{

    constructor(ques, option1, option2, option3, option4, correct){
        this.ques = ques;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.correct = correct;

    }

   

    display(){
      textSize (20);
      text (this.ques, 50, 150);
      text (this.option1, 70, 200);
      text (this.option2, 70, 250);
      text (this.option3, 70, 300);
      text (this.option4, 70, 350);
      a.visible = true;
      b.visible = true;
      c.visible = true;
      d.visible = true;
    }     
    
    
    scoreUpdate(){
        if (mousePressedOver(a)){
          if(this.correct === 1){
            score+= 5;
            gameState += 1;
          }
          else {
            score-= 2;
            gameState += 1;
          }
          console.log("mouseA");
        }
        else if (mousePressedOver(b)){
          if(this.correct === 2){
            score+= 5;
            gameState += 1;
          }
          else {
            score-= 2;
            gameState += 1;
          }
          console.log("mouseB");
        }
        else if (mousePressedOver(c)){
          if(this.correct === 3){
            score+= 5;
            gameState += 1;
          }
          else {
            score-= 2;
            gameState += 1;
          }
          console.log("mouseC");
        }
        else if (mousePressedOver(d)){
          if(this.correct === 4){
            score+= 5;
            gameState += 1;
          }
          else {
            score-= 2;
            gameState += 1;
          }
          console.log("mouseD");
        }
    }
}

