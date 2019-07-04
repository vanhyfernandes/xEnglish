/*
  This function is responsable to get all button actions and gives the respective page
  main("Start")
  No return
*/
function main(text){
    switch (text) {
      case 'Start':
        selectTopicPage();
        break;

      case 'Verb Tense': case 'Preposition': case 'Pronouns': case 'Adjectives': case 'Conditionals': case 'Phasal Verbs':
        console.log("Selected Topic: " + text);
        currentTopic = text;
        questionPage();
        break;

      case 'Exit':
        exitPage();
        break;

      case 'Instructions':
        instructionsPage();
        break;

      case 'Continue':
        questionPage();
        break;

      case 'Next Topic':
        selectTopicPage();
        break;

      case 'Next Level':
        nextLevelPage();
        break;

      case 'Wrong Answer':
        wrongAnswerPage();
        break;

      case 'Correct Answer':
        correctAnswerPage();
        break;

      case 'Finish Topic Level':
        finishTopicLevelPage();
        break;

      // Winner
      case 'Final':
        finalPage();
        break;

      // No more lifes
      case 'Game Over':
        gameOverPage();
        break;

      // Any question option
      default:
        verifyAnswer(text);
        break;
    }
}

/*
  This function generates the question page
  questionPage()
  No return
*/
function questionPage(){
  setUpPage(2);
  getQuestion(getTopicDataByLevel());
  addElementToElement("contentDiv",createHeading2(currentQuestion.question));
  for(var i=0;i<currentQuestion.options.length;i++){
    addElementToElement("contentDiv",createButton(window.currentQuestion.options[i],"btn"));
  }
}

/*
  This function generates the welcome page
  welcomePage()
  No return
*/
function welcomePage(){
  setUpPage(1);
  addElementToElement("contentDiv",createHeading1("Welcome to xEnglish!"));
  addElementToElement("contentDiv",createHeading2("Let's improve your English"));
  addElementToElement("contentDiv",createButton("Start","btn"));
}

/*
  This function generates the topic page
  selectTopicPage()
  No return
*/
function selectTopicPage(){
  setUpPage(1);
  addElementToElement("contentDiv",createHeading1("Select the topic"));
  loadMenu();
}

/*
  This function generates the correct answer page
  correctAnswerPage()
  No return
*/
function correctAnswerPage(){
  setUpPage(1);
  addElementToElement("contentDiv",createHeading1("Congratulations =)"));
  addElementToElement("contentDiv",createHeading1("You have given the correct answer!!"));
  addElementToElement("contentDiv",createButton("Continue","btn"));
  addElementToElement("contentDiv",createButton("Exit","btn"));
}

/*
  This function generates the wrong wrongAnswerPage page
  wrongAnswerPage()
  No return
*/
function wrongAnswerPage(){
  setUpPage(1);
  addElementToElement("contentDiv",createHeading1("Sorry =("));
  addElementToElement("contentDiv",createHeading1("Incorrect answer!!"));
  addElementToElement("contentDiv",createHeading2("Correct answer: " + currentQuestion.answer));
  addElementToElement("contentDiv",createButton("Continue","btn"));
  addElementToElement("contentDiv",createButton("Exit","btn"));
}

/*
  This function generates the exit page
  exitPage()
  No return
*/
function exitPage(){
  setUpPage(1);
  addElementToElement("contentDiv",createHeading1("Thanks for playing!!"));
}

/*
  This function generates the next level page
  nextLevelPage()
  No return
*/
function nextLevelPage(){
  setUpPage(1);
  addElementToElement("contentDiv",playAudio("sounds/applause.mp3"));
  addElementToElement("contentDiv",createHeading1("Congratulations =)"));
  addElementToElement("contentDiv",createHeading1("You have passed to the next level!"));
  addElementToElement("contentDiv",createButton("Continue","btn"));
  addElementToElement("contentDiv",createButton("Exit","btn"));
}

/*
  This function generates a page for the finish of the topic questions
  finishTopicLevelPage()
  No return
*/
function finishTopicLevelPage(){
  setUpPage(1);
  playAudio("sounds/applause.mp3");
  addElementToElement("contentDiv",createHeading1("Congratulations =)"));
  addElementToElement("contentDiv",createHeading1("You have finished all this topic leves!!"));
  addElementToElement("contentDiv",createButton("Next Topic","btn"));
  addElementToElement("contentDiv",createButton("Exit","btn"));
}

/*
  This function generates a page when the user has answered all questions for
  all topics
  finalPage()
  No return
*/
function finalPage(){
  setUpPage(1);
  playAudio("sounds/applause.mp3");
  addElementToElement("contentDiv",createHeading1("Congratulations =)"));
  addElementToElement("contentDiv",createHeading1("You are the champion !!!"));
  addElementToElement("contentDiv",createHeading1("You have answered correctly all questions !!"));
  addElementToElement("contentDiv",createHeading1("Thanks for playing !"));
}

/*
  This function generates a game over page
  gameOverPage()
  No return
*/
function gameOverPage(){
  setUpPage(1);
  addElementToElement("contentDiv",createHeading1("Game Over ..."));
}

/*
  This function set up the page and create the divs
  setUpPage(type)
  Type 1 -> no information div
  Type 2 -> with information div
  No return
*/
function setUpPage(type){
  var info = document.getElementById('informationDiv');
  if(info && type == 1){
      removeElement('informationDiv');
  } else if(type == 2){
    if(!info)
      createInformationDiv();
    var div = document.getElementById('contentDiv');
    div.parentNode.insertBefore(document.getElementById('informationDiv'),div);
  }
  clearElement("contentDiv");
}

/*
  This function generates the about page
  aboutPage()
  No return
*/
function aboutPage(){
  setUpPage(1);
  addElementToElement("contentDiv",createHeading1("About xEnglish!"));
  addElementToElement("contentDiv",createParagraph("As English is the most popular language spoken in the world, many people have difficulties during the process of learning. It has a different structure comparing to other languages, such as Chinese for example, which make this process onerous. "));
  addElementToElement("contentDiv",createParagraph("xEnglish! was created from this obstacle to allow students to enhance their knowledge in the English language. xEnglish! can help non-English speakers to get fluency on the language and understand its structure in a funny way. In the other hand, native speakers can improve their insight by using the app. It helps users grammatically considering the following topics:"));
  addElementToElement("contentDiv",createParagraph("- Verb Tense"));
  addElementToElement("contentDiv",createParagraph("- Prepositions"));
  addElementToElement("contentDiv",createParagraph("- Pronouns"));
  addElementToElement("contentDiv",createParagraph("- Adjectives"));
  addElementToElement("contentDiv",createParagraph("- Conditionals"));
  addElementToElement("contentDiv",createParagraph("- Phrasal Verbs"));

  addElementToElement("contentDiv",createHeading1("Legal"));

  addElementToElement("contentDiv",createHeading2("Pixabay License"));
  addElementToElement("contentDiv",createParagraph("This is a human-readable summary of the Pixabay License (read the full text)."));
  addElementToElement("contentDiv",createParagraph("You can use all images and videos published on Pixabay for free (except as set out below). You may use them for commercial and non-commercial purposes, in altered and unaltered form. You don't need to ask permission from or provide credit to the image author or Pixabay, although it is appreciated when possible."));
  addElementToElement("contentDiv",createParagraph("What is not allowed?"));
  addElementToElement("contentDiv",createParagraph("This section only applies to image users and not to the appropriate image authors."));
  addElementToElement("contentDiv",createParagraph("Do not redistribute images or videos on other stock photo or wallpaper platforms."));
  addElementToElement("contentDiv",createParagraph("Identifiable people may not appear in a bad light or in a way that is offensive."));
  addElementToElement("contentDiv",createParagraph("Don't imply endorsement of your product by the image author or depicted persons or brands."));
  addElementToElement("contentDiv",createParagraph("Don't sell unamended or unaltered copies of an image or video, e.g. don't sell it as a stock photo, poster, print or on a physical product, without adding any value."));
  addElementToElement("contentDiv",createParagraph("Brands, products, and people in images and videos."));
  addElementToElement("contentDiv",createParagraph("Please note that some of the things depicted in the images and videos - such as identifiable people or logos - may have other rights such as copyright or trademarks that require consent or a license from a third party."));
  addElementToElement("contentDiv",createParagraph("background - https://pixabay.com/photos/letters-numbers-blocks-alphabet-691842/"));

  addElementToElement("contentDiv",createHeading2("Free Sound Effect"));
  addElementToElement("contentDiv",createParagraph("What You Can Do With Our Sounds"));
  addElementToElement("contentDiv",createParagraph("Add them to any feature film, video, website, Flash animation, podcast, instructional DVD, computer games...."));
  addElementToElement("contentDiv",createParagraph("You can use our sounds for almost anything you can think of. No recurring royalties, no hidden costs, no submitting cue sheets."));
  addElementToElement("contentDiv",createParagraph("Add them to any software program, web application or computer game"));
  addElementToElement("contentDiv",createParagraph("You just need to make sure the sounds are part of the app or game and not distributed as a separate sounds effects directory."));
  addElementToElement("contentDiv",createParagraph("Use them in any theatre performance, art gallery, museum, performance piece"));
  addElementToElement("contentDiv",createParagraph("You can use these sounds in any type of live performance."));
  addElementToElement("contentDiv",createParagraph("What You Cannot Do With Our Sounds"));
  addElementToElement("contentDiv",createParagraph("You cannot resell these sounds as sound effects individually or in a collection"));
  addElementToElement("contentDiv",createParagraph("They can be incorporated into your project and the resulting product can be sold but not the sounds by themselves."));
  addElementToElement("contentDiv",createParagraph("You cannot repurpose these sounds for resale as ringtones or any other sound effect type product"));
  addElementToElement("contentDiv",createParagraph("You cannot buy our sounds and then sell them as something else like a ringtone and you cannot combine our sounds and resell them as sound effects."));
  addElementToElement("contentDiv",createParagraph("You cannot post them on a website for visitors to download."));
  addElementToElement("contentDiv",createParagraph("You can use the sounds as background sounds for your website but you cannot post a link so that your visitors can download and use the sounds."));
  addElementToElement("contentDiv",createParagraph("You cannot take our sounds and create an audio CD using only our sounds."));
  addElementToElement("contentDiv",createParagraph("For example, you can use our Rain Forest Ambience to loop behind your yoga instructional video that includes a voice-over but you cannot create a Rain Forest Ambience audio CD using only our sound and resell them."));
  addElementToElement("contentDiv",createParagraph("applause.mp3 - https://www.freesoundeffects.com/free-sounds/applause-10033/"));
}

/*
  This function generates the instructions page
  instructionsPage()
  No return
*/
function instructionsPage(){
  setUpPage(1);
  addElementToElement("contentDiv",createHeading1("Instructions"));
  addElementToElement("contentDiv",createParagraph("The goal of the game is finish all topics questions. "));
  addElementToElement("contentDiv",createParagraph("The user starts the game with 3 lifes"));
  addElementToElement("contentDiv",createParagraph("Each question answered wrongly, the user looses 1 life"));
  addElementToElement("contentDiv",createParagraph("Each 3 points (score) earned, the user earns 1 life"));
  addElementToElement("contentDiv",createParagraph("The user only pass level when answer correctly all questions for the current level"));
}
