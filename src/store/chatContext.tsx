import { createContext, useState } from "react";

export const ChatContext = createContext({
  chatExpand: false,
  setChatExpand: (_: boolean) => {},
  chat: true,
  setChat: (_: boolean) => {},
});

export const ChatProvider = ({ children }: any) => {
  const [chatExpand, setChatExpand] = useState(false);
  const [chat, setChat] = useState(true);


  return (
    <ChatContext.Provider value={{ chatExpand, setChatExpand, chat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
};