/*
  This function selects a question randomly
  getQuestion(topicArray)
  No return
*/
function getQuestion(topicArray){
  var random = Math.floor(Math.random()*topicArray.length);
  for(var j=0;j<window.correctAnswers.length;j++){
    if(topicArray[random].id == window.correctAnswers[j]){
        random = Math.floor(Math.random()*topicArray.length);
        j=0
        console.log("here");
      }
  }
  currentQuestion = topicArray[random];
}

/*
  This function gets the level according to the topic selected
  getTopicDataByLevel()
  return i.o: [
    {
      id: "vt1/1",
      question: ["She ____ (be) a beutiful woman!"],
      answer: ["is"],
      options: ["are","be","is","am"],
      difficult: 1
    },
    {
      id: "vt1/2",
      question: ["Maria ____ (drive) her kids to football practise every Monday."],
      answer: ["drives"],
      options: ["drive","drove","driven","drives"],
      difficult: 2
    }
  ]
*/
function getTopicDataByLevel(){
    switch (level) {
      case 1:
        return window.gameLevel1[currentTopic];
      case 2:
        return window.gameLevel2[currentTopic];
      case 3:
        return window.gameLevel3[currentTopic];
    }
}

/*
  This function verifys if the answers given by the user are correct or wrong
  verifyAnswer("are")
  No return
*/
function verifyAnswer(answer){
  if(window.currentQuestion.answer == answer){
    correctAnswers.push(currentQuestion.id);
    window.score = window.score + window.currentQuestion.difficult;

    //Each 3 points, the user earn one life
    if(score>=3){
      lifes++;
      score=0;
    }

    switch (verifyLevel()) {
      default:
        main('Correct Answer');
        break;

      case 1:
        main('Final');
        break;

      case 2:
        main('Finish Topic Level');
        break;

      case 3:
        main('Next Level');
        break;
    }

  } else {
    lifes--;
    if(verifyLifes())
      main('Game Over');
    else
      main('Wrong Answer');
  }
}


/*
  This function verifys if the user still have lifes to continue the game
  verifyLifes()
  returns 1 if the lifes == 0
*/
function verifyLifes(){
  if(lifes == 0)
    return 1;
  return 0;
}


/*
  This function verifys if the user finished the Level
  verifyLevel()
  If level == 4 then the user finished the questions for the current topic
*/
function verifyLevel(){

  if(window.correctAnswers.length == getTopicDataByLevel().length){
    level++;
    correctAnswers = [];
    score = 0;
    console.log("here");
    if(level == 4){
      level=1;
      passedLevelTopic.push(currentTopic);
      if(passedLevelTopic == menu){
        return 1;
      } else {
        return 2;
      }
    }
    return 3;
  }
}

/*
  This function creates the div with informations about the game
  createInformationDiv()
  No return
*/
function createInformationDiv(){
  createDiv("informationDiv","content");
  addElementToElement("informationDiv",createHeading1("Level: "+level+" - Lifes: "+lifes));
}
