import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard'
import fetchQuizQuestions from './services/quiz'
import { Wrapper, GlobalStyle } from './App.styles'

function App() {
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(0)
  const [userAnswered, setUserAnswered] = useState(-1)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [questions, setQuestions] = useState<questions>([])
  const showWhenLoading = { display: loading ? '' : 'none' }
  const hideWhenLoading = { display: loading ? 'none' : '' }


  const newGame = async () => {
    setLoading(true)
    const newQuestions = await fetchQuizQuestions()
    setQuestions(newQuestions)
    setGameStarted(true)
    setUserAnswered(-1)
    setScore(0)
    setCurrentQuestion(0)
    setLoading(false)
  }

  const updateScore = (num: number, correct: boolean) => {
    if (correct) {
      setScore(score + 1)
    }
    setUserAnswered(num)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setUserAnswered(-1)
    }
  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>ERU Quiz</h1>
      <button onClick={newGame}>New Game</button>
      <h2 >Score: {score}</h2>
      {gameStarted && <h2>Question: {currentQuestion + 1}/{questions.length}</h2>}
      <h1 style={showWhenLoading}>Loading...</h1>
      <div style={hideWhenLoading}>
        {gameStarted && <QuestionCard
          options={questions[currentQuestion].options}
          userAnswered={userAnswered}
          updateScore={updateScore}
          questionText={questions[currentQuestion].questionText}
          correct={questions[currentQuestion].correct}
          incorrect={questions[currentQuestion].incorrect} />}
      </div>
      {currentQuestion < questions.length - 1 && gameStarted && <button onClick={nextQuestion}>Next Question</button>}
    </Wrapper>
    </>
  );
}

export default App;
