import { useEffect, useRef, useState } from "react";
import SocialLinks from "@/components/common/SocialLinks";
import { loadChatbase } from "@/lib/chatbase";

const replies = [
  "Got it, thanks!",
  "Sure, let me check that.",
  "This is just a demo reply 🙂",
  "Noted — anything else?",
  "Okay!",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { who: "bot", text: "Hi! This is a dummy chat demo 👋" },
    { who: "bot", text: "Type anything and hit send." },
  ]);
  const bodyRef = useRef(null);

  useEffect(() => {
    loadChatbase();
  }, []);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  const send = () => {
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { who: "user", text: value }]);
    setText("");
    setTimeout(() => {
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setMessages((m) => [...m, { who: "bot", text: reply }]);
    }, 500);
  };

  return (
    <>
    <SocialLinks>
      <button className="chat-toggle" id="toggleBtn" aria-label="Open chat" onClick={() => setOpen(!open)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
  </SocialLinks>

      <div className={`chat-window${open ? " open" : ""}`} id="chatWindow">
        <div className="chat-header">
          <div>
            Support
            <span className="status">Online (demo)</span>
          </div>
          <button id="closeBtn" aria-label="Close chat" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <div className="chat-body" id="chatBody" ref={bodyRef}>
          {messages.map((m, i) => (
            <div className={`msg ${m.who}`} key={i}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            id="msgInput"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button id="sendBtn" onClick={send}>
            Send
          </button>
        </div>
      </div>

      <SocialLinks />
    </>
  );
}
