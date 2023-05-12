import React from 'react'
import './MessageList.jsx'


function MessageList() {
    const [messages, setMessages] = React.useState([])

    React.useEffect(
        () => {
            fetch('https://pager-b230f-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
            .then(response => response.json())
            .then(data => {
                let messageList =[]
                for (let key in data) {
                    messageList.push(data[key])
                }
                setMessages(messageList)
            });
        }, []
    )
    console.log(messages);
  return (
    <div>
        Message List
        {
            messages.length > 0 && messages.map(
                ( message, index) => {
                    return (
                        <div key={index}>
                            <p>{message.userMessage}</p>
                            <p>{message.userName}</p>
                        </div>
                    )
                }
            )
        }
    </div>
  )
}

export default MessageList
