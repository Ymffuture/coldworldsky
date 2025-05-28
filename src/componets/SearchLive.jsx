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
  { title: 'Data Structures & Algorithms', type: 'Course', link: '/courses/dsa' },
  { title: 'SAT & NBT Prep Program', type: 'Service', link: '/services/sat-prep' },
  { title: 'Advanced Calculus Tutoring', type: 'Tutor', link: '/tutoring/calculus' },
  { title: 'UI/UX Design Fundamentals', type: 'Course', link: '/courses/uiux' },
  { title: 'Mobile App Development with React Native', type: 'Course', link: '/courses/react-native' },
  { title: 'Career Coaching: Tech & IT Jobs', type: 'Service', link: '/services/career-coaching' },
  { title: 'Cybersecurity Essentials', type: 'Course', link: '/courses/cybersecurity' },
  { title: 'Physics for Grade 10-12', type: 'Tutor', link: '/tutoring/physics' },
  { title: 'HTML, CSS & TailwindCSS Crash Course', type: 'Course', link: '/courses/html-css-tailwind' },
  { title: 'What is AI in Education?', type: 'Topic', link: '/topics/ai-in-education' },
  { title: 'Study Tips for High School Learners', type: 'Topic', link: '/topics/study-tips' },
  { title: 'Moya App Setup for Students', type: 'Topic', link: '/topics/moya-app' },
  { title: 'Free Coding Workshop – July 2025', type: 'Event', link: '/events/free-coding-workshop' },
  { title: 'Quorvex Institute Orientation 2025', type: 'Event', link: '/events/orientation' }
];

const fuse = new Fuse(data, {
  keys: ['title', 'type'],
  threshold: 0.6,
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
        className="shadow-sm rounded-2"
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

