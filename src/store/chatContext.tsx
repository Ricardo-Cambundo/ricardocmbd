import { createContext, useState } from "react";

export const ChatContext = createContext({
  chatExpand: false,
  setChatExpand: (_: boolean) => {},
});

export const ChatProvider = ({ children }: any) => {
  const [chatExpand, setChatExpand] = useState(false);

  return (
    <ChatContext.Provider value={{ chatExpand, setChatExpand }}>
      {children}
    </ChatContext.Provider>
  );
};