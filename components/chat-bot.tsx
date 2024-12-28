'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; isUser: boolean; options?: string[]; showFormRedirect?: boolean }[]
  >([
    {
      text: "Hi! I'm Vinay's assistant. How can I help you today?",
      isUser: false,
      options: ['Learn about Vinay', 'Contact Information', 'Job Opportunities', 'Other'],
    },
  ]);
  const [input, setInput] = useState('');
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Set hasBeenSeen to true after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasBeenSeen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (text: string, options?: string[], showFormRedirect = false) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { text, isUser: false, options, showFormRedirect }]);
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    setMessages((prev) => [...prev, { text: option, isUser: true }]);

    if (option === 'Learn about Vinay') {
      addBotMessage(
        'I am Vinay, a passionate Frontend Engineer skilled in React.js, JavaScript, and Data Structures. I have worked on several impactful projects such as AI-based applications and e-commerce platforms.',
        ['What is your experience?', 'What skills do you have?', 'Tell me about your projects']
      );
    } else if (option === 'What is your experience?') {
      addBotMessage(
        'I have 1 year of experience as a Software Developer. I have worked with React.js, Node.js, and MongoDB. I also have a background in AI/ML, especially with LLM generative AI projects.'
      );
    } else if (option === 'What skills do you have?') {
      addBotMessage(
        'I am skilled in React.js, JavaScript, HTML, CSS, Python, SQL, and PL/SQL. I am also well-versed in machine learning frameworks like TensorFlow and Scikit-learn, and I have experience in DevOps and cloud computing.'
      );
    } else if (option === 'Tell me about your projects') {
      addBotMessage(
        'I have worked on a variety of projects, including an AI-based eye disease prediction web app, a doctor booking system, and a museum ticket booking application. I also have hands-on experience in building local e-commerce platforms and web-based services.'
      );
    } else if (option === 'Contact Information') {
      addBotMessage(
        'Here is my contact information:\n\nEmail: vinayambatkar57@gmail.com\nPhone: 9112315687'
      );
    } else if (option === 'Job Opportunities') {
      addBotMessage(
        'I am currently looking for a Frontend Developer role at companies Startup and MNC or Service Base Company. Feel free to reach out if you know any openings!'
      );
    } else if (option === 'Other') {
      addBotMessage(
        'Please fill out the contact form. Provide your details, and I will get back to you shortly.',
        [],
        true
      );
      setIsWaitingForResponse(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);

    if (isWaitingForResponse) {
      const formData = new FormData();
      formData.append('access_key', 'YOUR-WEB3FORMS-ACCESS-KEY');
      formData.append('message', `Contact details provided by user: ${userMessage}`);

      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        addBotMessage('Thank you! Your contact details have been sent. I will connect with you soon.');
      } catch (error) {
        console.error('Failed to send message:', error);
      }

      setIsWaitingForResponse(false);
    } else {
      addBotMessage(
        'Please fill out the contact form. It is powered by Web3 Forms. Provide your details, and I will get back to you shortly.',
        [],
        true
      );
    }
  };

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed bottom-8 right-8 z-40"
      >
        <div className="relative">
          {/* Notification Dot */}
          {!hasBeenSeen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
            />
          )}
          
          {/* Chat Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => {
                setIsOpen((prev) => !prev);
                setHasBeenSeen(true);
              }}
              size="icon"
              className="relative rounded-full w-12 h-12 bg-primary/20 hover:bg-primary/30 backdrop-blur-sm text-white overflow-hidden"
            >
              {/* Ripple Effect */}
              {!hasBeenSeen && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0.5 }}
                  animate={{ 
                    scale: 2,
                    opacity: 0,
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 bg-primary/20 rounded-full"
                />
              )}
              
              {/* Icon with bounce effect */}
              <motion.div
                animate={!hasBeenSeen ? {
                  y: [0, -5, 0],
                  rotate: [0, -10, 10, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
              <span className="sr-only">Toggle chat</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] rounded-2xl border border-primary/10 bg-black/80 backdrop-blur-sm overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-primary/10">
              <h3 className="font-semibold">Chat with me</h3>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20"
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Close chat</span>
              </Button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isUser ? 'bg-primary/20 text-white' : 'bg-primary/10 text-white'
                    }`}
                  >
                    {message.text}
                    {message.options && (
                      <div className="mt-2 space-y-2">
                        {message.options.map((option, idx) => (
                          <Button
                            key={idx}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-sm"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    )}
                    {message.showFormRedirect && (
                      <div className="mt-4">
                        <Button
                          onClick={() => (window.location.href = '#contact')}
                          className="text-sm bg-primary/40 text-white px-4 py-2 rounded"
                        >
                          Fill the Contact Form
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-primary/10">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="bg-black/50"
                />
                <Button type="submit" size="icon" disabled={!input.trim()}>
                  <Send className="w-4 h-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

