// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickOnEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const clickedOnEmoji = () => {
    clickOnEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={clickedOnEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
