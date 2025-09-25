import { useState } from "react"

// fix the thinkiniggg logic to automatically scroll down after sending and while thinking
const Chatbot = ({ chatText, setChatText, chatExpand, setChatExpand, history, setHistory}: {chatText: string, setChatText: any, chatExpand: any, setChatExpand: any, history: Array<{}>, setHistory: any})=> {

    const [thinking, setThinking] = useState(false)

    return (
        <div className="chatbox">
        <div className="chatHeader" onClick={() => {
          setChatExpand(!chatExpand)
        }}>
          <div className="left">
            <span>Chat with</span>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 7}}><div style={{width: 8, height: 8, clipPath: 'circle()', background: '#3CC698'}}>·</div>CMBD Support</div>
          </div>
          {chatExpand ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
          
        </div>
        {chatExpand && <hr></hr>}
        <div className="chatContainer" style={{height: chatExpand ? 350 : 0}}>
        <div className="chatDialog">
            {history?.length == 0? 
            <div style={{padding: 20, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-robot"
              viewBox="0 0 16 16"
              
            >
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
            </svg>
            <div style={{fontSize: 14, fontWeight: '600'}}>Send a message to start the chat!</div>
            <div style={{fontSize: 12.5, color: 'grey'}}>You can ask the bot anything about me and it will help to find the relevant information!</div>
            </div>
            : thinking ? 
            <div>
                thinking...
            </div> :
            <div className="messages">
                {
                    history.concat(history).map((item: any, index: number) => {
                        if (!(item?.bot)){
                            return (
                                <div className="meMessage" key={index}>
                                    {item?.message}
                                </div>
                            )
                        }else {
                            return (
                                <div className="botMessage" key={index}>
                                    <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-robot"
              viewBox="0 0 16 16"
              
            >
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
            </svg><div>{item?.message}</div>
                                </div>
                            )
                        }
                    })
                }
            </div>}
        </div>

        <div className="chatFooter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>

<input type="text" value={chatText} onChange={(e) => {
    setChatText(e.target.value)
}} placeholder="Ask something..."/>

<svg style={{cursor: 'pointer', background: chatText.length > 0 ? 'black' : 'white', color: chatText.length > 0 ? 'white' : 'black'}} onClick={() => {
    chatText.length > 0 && setHistory([
        ...history,
        {
            bot: false,
            message: chatText
        }, 
        {
            bot: true, 
            message: "I received your message. Thank you. (Test)"
        }
    ])
    setChatText('')
}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>
        </div>
        </div>
      </div>
    )
}
export default Chatbot