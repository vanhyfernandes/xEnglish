/*
  This function clears an element
  clearElement("myDiv")
  No return
*/
function clearElement(element){
  document.getElementById(element).innerHTML = "";
}

/*
  This function remove an element
  removeElement("myDiv")
  No return
*/
function removeElement(element){
    document.getElementById(element).remove();
}

/*
  This function clears the body
  clearBody()
  No return
*/
function clearBody(){
  document.body.innerHTML = "";
}

/*
  This function sets the bodys's background
  setBodyBackground()
  No return
*/
function setBodyBackground(){
  document.body.style.backgroundImage = "url('images/letters-691842_1920.jpg')";
}

/*
  This function add an element to a div
  addElementToElement("myDiv", button)
  No return
*/
function addElementToElement(father, child){
  document.getElementById(father).appendChild(child);
}


/*
  This function creates a div
  createDiv("myDiv", "content")
  No return
*/
function createDiv(id, className){
  var element = document.createElement("div");
  element.setAttribute("id",id);
  element.setAttribute("class",className);
  document.body.appendChild(element);
}

/*
  This function creates a paragraph
  createParagraph("My paragraph")
  Returns the element created
*/
function createParagraph(text) {
  var element = document.createElement("P");
  var t = document.createTextNode(text);
  element.appendChild(t);
  return element;
}

/*
  This function creates an audio and plays it
  playAudio(sounds/soung.mp4)
  Returns the element created
*/
function playAudio(url){
  var element = document.createElement('audio');
  element.style.display = "none";
  element.src = url;
  element.autoplay = true;
  return element;
}

/*
  This function creates a button
  createButton("Button", "btn")
  Returns the element created
*/
function createButton(text, className){
  console.log("Creating new button: "+ text);
  element = document.createElement("INPUT");
  element.type = "BUTTON";
  element.value = text;
  element.id = text;
  element.classList.add(className);
  element.onclick = function() {
    main(text);
  }
  return element;
}

/*
  This function creates a heading 1
  createHeading1("My heading 1")
  Returns the element created
*/
function createHeading1(text) {
  var element = document.createElement('h1');
  var t = document.createTextNode(text);
  element.appendChild(t);
  return element;
}

/*
  This function creates a heading 2
  createHeading2("My heading 2")
  Returns the element created
*/
function createHeading2(text) {
  var element = document.createElement('h2');
  var t = document.createTextNode(text);
  element.appendChild(t);
  return element;
}

/*
  This function creates an image
  createImage("images/image.jpg")
  Returns the element created
*/
function createImage(source) {
  element.src = source;
  element.style.heigh = '500px';
  element.style.width = '600px';
  return element;
}


/*
  This function creates a link
  createLink("Home","active","#","welcomePage()")
  Returns the element created
*/
function createLink(text,className, href, onclick){
  var element = document.createElement("a");
  var t = document.createTextNode(text);
  element.appendChild(t);
  element.setAttribute("id",text);
  element.setAttribute("class",className);
  element.setAttribute("href",href);
  element.setAttribute("onclick",onclick);
  return element;
}

/*
  This function creates the top menu bar
  topMenuBar()
  No return
*/
function topMenuBar(){
  createDiv("topMenu","topnav");
  addElementToElement("topMenu",createLink("Home","active","#","welcomePage()"));
  addElementToElement("topMenu",createLink("About","active","#","aboutPage()"));
  addElementToElement("topMenu",createLink("Instructions","active","#","instructionsPage()"));
}
