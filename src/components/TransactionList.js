import React from 'react'

const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list"> 
        <li className="minus">
            cash <span>-400</span><button className='delete-btn'>x</button>
        </li>
      </ul>
    </div>
  )
}

export default TransactionList
