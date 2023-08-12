import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div className="list-row-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="name">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div>
        <button
          data-testid="delete"
          className="button"
          type="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
