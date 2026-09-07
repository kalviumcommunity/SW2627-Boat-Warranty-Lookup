"use client";

import { useState } from "react";

type Message = {
  id: number;
  text: string;
};

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <main className="page chat-page">
      <section className="chat-container">

        {/* HEADER */}

        <div className="chat-header">
          <div>
            <span className="hero-label">
              LIVE SUPPORT
            </span>

            <h1>
              Chat with us
            </h1>
          </div>

          <span className="online-status">
            ● Online
          </span>
        </div>

        {/* MESSAGES */}

        <div className="chat-messages">

          {messages.length === 0 ? (
            <div className="chat-empty">

              <span>◉</span>

              <h2>
                How can we help?
              </h2>

              <p>
                Send us a message and our support team
                will assist you.
              </p>

            </div>
          ) : (
            messages.map((item) => (
              <div
                className="chat-message"
                key={item.id}
              >
                {item.text}
              </div>
            ))
          )}

        </div>

        {/* INPUT */}

        <form
          className="chat-input"
          onSubmit={sendMessage}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />

          <button
            type="submit"
            className="primary-btn"
          >
            Send
          </button>
        </form>

      </section>
    </main>
  );
}