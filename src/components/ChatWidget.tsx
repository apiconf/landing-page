import { useEffect, useRef, useState } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatWidget = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState(null);
    const [showChat, setShowChat] = useState(false);

    const messagesEndRef = useRef(null);
    const CHATBOT_URL = 'https://chat.apiconf.net/';
    const API_URL = 'https://chat.apiconf.net/api/v1/agents/chat';

    const predefinedQuestions = [
        "Who are the keynote speakers ?",
        "What is the conference schedule?",
        "How do I get to the venue?",
    ];

    const getOrCreateId = (key) => {
        if (typeof window === 'undefined') return null;
        let id = localStorage.getItem(key);
        if (!id) {
            id = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
            localStorage.setItem(key, id);
        }
        return id;
    };

    const userId = getOrCreateId('apiconf_user_id');
    const sessionId = getOrCreateId('apiconf_session_id');

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleDirectChat = async (messageToSend) => {
        if (!messageToSend.trim()) return;

        const userMessage = {
            text: messageToSend,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);
        setError(null);
        setShowChat(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: messageToSend,
                    user_id: userId,
                    session_id: sessionId,
                }),
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const result = await response.json();

            const botMessage = {
                text: result.data.response,
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };

            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error('Error fetching chat response:', error);
            setError('Sorry, I seem to be having trouble connecting. Please try again later.');

            const errorMessage = {
                text: 'Sorry, I seem to be having trouble connecting. Please try again later.',
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };

            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleQuestionClick = (question) => {
        handleDirectChat(question);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            handleDirectChat(inputMessage);
            setInputMessage('');
        }
    };

    const handleOpenFullChat = (question) => {
        const encodedQuestion = encodeURIComponent(question);
        window.open(`${CHATBOT_URL}?message=${encodedQuestion}`, '_blank');
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const clearChat = () => {
        setMessages([]);
        setError(null);
        setShowChat(false);
        // Generate new session ID for fresh start
        if (typeof window !== 'undefined') {
            const newSessionId = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
            localStorage.setItem('apiconf_session_id', newSessionId);
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={toggleModal}
                    className="w-14 h-14 bg-dark-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                >
                    {isModalOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    )}
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed bottom-24 right-6 z-[999999] w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center justify-between text-black p-4">
                        <div>
                            <h3 className="font-semibold text-lg">Chat with Ndu</h3>
                            <p className="text-sm opacity-90">How can i help you today?</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleOpenFullChat('')}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                                title="Open full chat"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </button>
                            {messages.length > 0 && (
                                <button
                                    onClick={clearChat}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                    title="Clear chat"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="p-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
                        {/* Chat Messages */}
                        {showChat && (
                            <div className="mb-4 max-h-64 overflow-y-auto">
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                                    >
                                        <div
                                            className={`inline-block max-w-xs px-3 py-2 rounded-lg text-sm ${msg.sender === 'user'
                                                    ? 'bg-dark-purple text-white'
                                                    : 'bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            <div className="prose prose-sm break-words text-left">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {msg.text}
                                                </ReactMarkdown>
                                            </div>
                                            <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-purple-200' : 'text-gray-500'}`}>
                                                {msg.timestamp}
                                            </div>
                                        </div>
                                    </div>
                                ))}


                                {isTyping && (
                                    <div className="mb-3 text-left">
                                        <div className="inline-block bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                                            <div className="flex items-center space-x-2">
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                                <span className="text-xs">Ndu is typing...</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {error && (
                                    <div className="mb-3 text-center">
                                        <div className="bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded-lg text-sm">
                                            {error}
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        )}

                        {/* Quick Questions */}
                        {!showChat && (
                            <div className="mb-4">
                                <p className="text-sm font-medium text-gray-700 mb-3">Quick questions:</p>
                                <div className="space-y-2">
                                    {predefinedQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuestionClick(question)}
                                            className="w-full text-center rounded-[320px] bg-dark-purple p-3 text-sm text-white transition-colors duration-200 hover:opacity-90"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Separator */}
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    {showChat ? 'continue chatting' : 'or ask anything'}
                                </span>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="space-y-3">
                            <textarea
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your question here..."
                                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                rows={3}
                                disabled={isTyping}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleInputSubmit(e);
                                    }
                                }}
                            />
                            <div className="flex space-x-2">
                                <button
                                    onClick={handleInputSubmit}
                                    disabled={!inputMessage.trim() || isTyping}
                                    className="flex-1 bg-dark-purple rounded-[320px] text-white py-2 px-4 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Send Message
                                </button>
                                <button
                                    onClick={() => handleOpenFullChat(inputMessage)}
                                    className="bg-gray-200 rounded-[320px] text-gray-700 py-2 px-4 font-medium transition-all duration-200 hover:bg-gray-300"
                                    title="Open in full chat"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 text-center">
                        <p className="text-xs text-gray-500">
                            Powered by APICONF Agent
                        </p>
                    </div>
                </div>
            )}

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 z-40"
                    onClick={toggleModal}
                />
            )}
        </>
    );
};

export default ChatWidget;