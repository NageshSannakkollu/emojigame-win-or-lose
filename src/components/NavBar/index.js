// Write your code here.

import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props
  return (
    <nav>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="title">Emoji Game</h1>
        {isGameInProgress && (
          <div>
            <p>Score: {currentScore}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
