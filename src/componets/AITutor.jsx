// components/AITutorModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function AITutorModal({ show, handleClose }) {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input) return;
    const newMessage = { role: 'user', text: input };
    setConversation((prev) => [...prev, newMessage]);
    setLoading(true);

    // Replace with your actual endpoint or OpenAI call
    const res = await fetch('/api/ai-tutor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setConversation((prev) => [...prev, { role: 'bot', text: data.reply }]);
    setInput('');
    setLoading(false);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>👩‍🏫 Quorvex AI Tutor</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        {conversation.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mb-2 p-2 rounded ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-light'}`}
          >
            <strong>{msg.role === 'user' ? 'You' : 'Tutor'}:</strong> {msg.text}
          </motion.div>
        ))}
        {loading && <p><em>Typing...</em></p>}
      </Modal.Body>
      <Modal.Footer>
        <Form.Control
          type="text"
          placeholder="Ask me anything about coding, math, science..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
        />
        <Button onClick={handleAsk} disabled={loading}>Ask</Button>
      </Modal.Footer>
    </Modal>
  );
}
