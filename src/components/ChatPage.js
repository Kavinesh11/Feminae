import React, { useState, useEffect, useRef } from 'react';
import { Send, Smile, Paperclip } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import { motion } from 'framer-motion'; // Add animations
import './ChatPage.css';
import Button from "./ui/button"; // Adjust the relative path based on folder structure
import { ChevronRight } from "lucide-react";


const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to the chat!", sender: 'system' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);

      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: `You said: ${inputMessage}`,
          sender: 'ai',
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);

      setInputMessage('');
      setShowEmojiPicker(false);
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setInputMessage((prev) => prev + emojiObject.emoji);
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <header className="chat-header shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="flex items-center space-x-4">
          <motion.div
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            AI
          </motion.div>
          <h2 className="text-xl font-semibold">Feminah Personalized Assistant</h2>
        </div>
      </header>

      {/* Messages Container */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`
                max-w-[70%] p-4 rounded-lg shadow-lg
                ${msg.sender === 'user' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-gray-200 text-black'}
                ${msg.sender === 'system' ? 'text-center italic' : ''}
              `}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-20 right-4 z-50"
        >
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </motion.div>
      )}

      {/* Input Area */}
      <div className="chat-input">
        
        <button className="text-gray-500 hover:text-blue-500 transition">
          <Paperclip size={24} />
        </button>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          className="flex-grow p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button variant="outline" size="icon" onClick={sendMessage}>
  <ChevronRight />
</Button>

      </div>
    </div>
  );
};

export default ChatPage;
