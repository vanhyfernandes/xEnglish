/*
  List with the topics that the user has already passed
*/
var passedLevelTopic = [];

/*
  current topic select by the user
*/
var currentTopic = null;

/*
  Level of the topic that the user are
  each topic is composed by 3 level
*/
var level=1;

/*
  Current question seleted randomely
*/
var currentQuestion = null;

/*
  Id of the questions which the user already answered
*/
var answeredQuestions = [];

/*
  Difficult of the question answered correctly sum up
*/
var score=0;

/*
  The user starts the game with 3 lifes
  Each question answered wrongly, the user looses 1 life
  Each 3 points (score) earned, the users earns 1 life
*/
var lifes=3;


/*
  Question's id that the user answered correctly
*/
var correctAnswers = [];
