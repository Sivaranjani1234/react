import React, {useState} from 'react'
import './App.css'

  function App()
  { 
    const questions=[
    {
      questionText: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
      answerOptions: [
        {answerText:'document.getElementById("demo").innerHTML = "Hello World!";  ', isCorrect: true},
        {answerText:'document.getElement("p").innerHTML = "Hello World!"; ', isCorrect: false},
        {answerText:'document.getElementByName("p").innerHTML = "Hello World!"; ', isCorrect: false},
        {answerText:'#demo.innerHTML = "Hello World!"; ', isCorrect: false},
      ]
    },
    {
      questionText: 'Where is the correct place to insert a JavaScript?',
      answerOptions: [
        {answerText:'Both the <head> section and the <body> section are correct   ', isCorrect: true},
        {answerText:'The <head> section', isCorrect: false},
        {answerText:'The <body> section', isCorrect: false},
        {answerText:'None', isCorrect: false},
      ]
    },
    {
      questionText: 'What is the correct syntax for referring to an external script called "xxx.js"?',
      answerOptions: [
        {answerText:'<script href="xxx.js">  ', isCorrect: false},
        {answerText:'<script src="xxx.js"> ' , isCorrect: true},
        {answerText:'<script name="xxx.js">', isCorrect: false},
        {answerText:'None', isCorrect: false},
      ]
    },
    {
      questionText: 'How do you write "Hello World" in an alert box?',
      answerOptions: [
        {answerText:'msg("Hello World"); ', isCorrect: false},
        {answerText:'alertBox("Hello World");' , isCorrect: false},
        {answerText:'alert("Hello World");  ', isCorrect: true},
        {answerText:'msgBox("Hello World");', isCorrect: false},
      ]
    },
    {
      questionText: 'How to write an IF statement in JavaScript?',
      answerOptions: [
        {answerText:' if i = 5 then', isCorrect: false},
        {answerText:'if (i == 5)  ' , isCorrect: true},
        {answerText:'if i = 5', isCorrect: false},
        {answerText:'if i == 5 then', isCorrect: false},
      ]
    },
    {
      questionText: 'How can you add a comment in a JavaScript?',
      answerOptions: [
        {answerText:' //This is a comment  ', isCorrect: true},
        {answerText:'This is a comment' , isCorrect: false},
        {answerText:'<!--This is a comment-->', isCorrect: false},
      ]
    },
    {
      questionText: 'How do you round the number 7.25, to the nearest integer?',
      answerOptions: [
        {answerText:' round(7.25)  ', isCorrect:false},
        {answerText:'rnd(7.25)' , isCorrect:false},
        {answerText:'Math.round(7.25)  ', isCorrect:true},
      ]
    },
    {
      questionText: 'Which event occurs when the user clicks on an HTML element?',
      answerOptions: [
        {answerText:' onchange', isCorrect: false},
        {answerText:'onmouseclick' , isCorrect: false},
        {answerText:'onmouseover  ', isCorrect: false},
        {answerText:'onclick  ', isCorrect: true},
      ]
    },
    {
      questionText: 'How does a FOR loop start?',
      answerOptions: [
        {answerText:'for (i = 0; i <= 5) ', isCorrect: false},
        {answerText:'for (i <= 5; i++)' , isCorrect: false},
        {answerText:'for (i = 0; i <= 5; i++)   ', isCorrect: true},
        {answerText:'for i = 1 to 5', isCorrect: false},
      ]
    },
    {
      questionText: 'Inside which HTML element do we put the JavaScript?',
      answerOptions: [
        {answerText:'<js>', isCorrect: false},
        {answerText:'<script>  ' , isCorrect: true},
        {answerText:'<scripting>', isCorrect: false},
        {answerText:'<javascript>', isCorrect: false},
      ]
    }
  ]
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState (false)
  const [score, setScore] = useState(0)

  const handleAnswerButtonClick=(isCorrect)=>
    {
     if(isCorrect===true)
      {
        setScore(score+1);
     }
     if(isCorrect===false)
      {
        setScore(score-0.5)
      }
     const nextQuestion = currentQuestion+1;
     if (nextQuestion < questions.length)
      {
        setCurrentQuestion(nextQuestion);
      }
      else{
        setShowScore(true)
      }
  }
  return (
    <> 
       <h1>Quiz</h1>
       <div className='app'>
        {
          showScore === true ? (
            <div className='scorecard'> You Scored {score} out of {questions.length} </div>
          ) : 
          (
            <>
            <div className='questionsec'>
            <div className='questions-count'>
              <span style={{color:"green", fontSize:"30px"}}> {currentQuestion+1} / {questions.length}</span> 
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
            </div>
            <div className='answersec'>
              {questions[currentQuestion].answerOptions.map((answerOptions)=>(
                <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
              ))}
            </div>
            </>
          )
        }
        
       </div>
    </>
  )
}

export default App