/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    isGameInProgress: true,
    clickedEmojisList: [],
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickOnEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiIsPresent = clickedEmojisList.includes(id)
    const clickedEmojisListLength = clickedEmojisList.length

    if (isEmojiIsPresent) {
      this.finishGameAndSetTopScore(clickedEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderClickedEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    console.log(shuffledEmojisList)
    return (
      <ul className="emoji-items-list">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickOnEmoji={this.clickOnEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, clickedEmojisList, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          isGameInProgress={isGameInProgress}
          topScore={topScore}
          currentScore={clickedEmojisList.length}
        />
        <div>
          {isGameInProgress
            ? this.renderClickedEmojisList()
            : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
