// components/LiveSearch.js
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
  { title: 'Web Development Bootcamp', type: 'Course', link: '/courses/web-dev' },
  { title: 'Maths Tutoring - Grade 12', type: 'Tutor', link: '/tutoring/maths' },
  { title: 'Intro to Python', type: 'Course', link: '/courses/python' },
  { title: 'Science & Chemistry Help', type: 'Topic', link: '/tutoring/chemistry' },
  { title: 'JavaScript Mastery', type: 'Course', link: '/courses/js' },
];

const fuse = new Fuse(data, {
  keys: ['title', 'type'],
  threshold: 0.3,
});

export default function LiveSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const result = fuse.search(value);
    setResults(result.map((r) => r.item));
  };

  return (
    <div className="position-relative w-100" style={{ maxWidth: '500px' }}>
      <Form.Control
        type="text"
        placeholder="Search courses, tutors, topics..."
        value={query}
        onChange={handleChange}
        className="shadow-sm rounded-pill"
      />
      <AnimatePresence>
        {query && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="position-absolute bg-white border rounded shadow mt-1 z-3 w-100"
          >
            <ListGroup variant="flush">
              {results.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>
                    <strong>{item.title}</strong> <small className="text-muted">({item.type})</small>
                  </span>
                  <Button
                    variant="link"
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    Open
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

