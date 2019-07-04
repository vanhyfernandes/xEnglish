var menu = [];

/*
  This function is responsible for creating the menu
  loadMenu()
  No return
*/
function loadMenu(){
  menu = setMenu();
  if(passedLevelTopic.length == 0){
    for(var i=0; i < menu.length; i++){
          addElementToElement("contentDiv",createButton(menu[i],"btn"));
      }
  }
  else{
    for(var i=0; i < menu.length; i++){
      for(var j=0; j < passedLevelTopic.length; j++){
        if(menu[i] == passedLevelTopic[j])
          addElementToElement("contentDiv",createButton(menu[i],"disable"));
        else
          addElementToElement("contentDiv",createButton(menu[i],"btn"));
      }
    }
  }

  addElementToElement("contentDiv",createButton("Exit","btn"));
};

/*
  This function is responsible for set the menu according to the data of the level
  setMenu()
  return an array with the objects of the data level
  i.o:
    ["Verb Tense", "Adjectives"] ...
*/
function setMenu(){
  switch (level) {
    case 1:
      return Object.keys(window.gameLevel1);
    case 2:
      return Object.keys(window.gameLevel2);
    case 3:
      return Object.keys(window.gameLevel3);
  }
}
