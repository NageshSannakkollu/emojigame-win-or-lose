// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = isWon ? 'You Won' : 'You lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  return (
    <div className="win-or-lose-container">
      <div className="score-details">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} alt="win or lose" className="win-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
