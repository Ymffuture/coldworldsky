import AITutorModal from './AITutor';
import { useState } from 'react';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap';
export default function Page() {
  const [showTutor, setShowTutor] = useState(false);

  return (
    <>
      <Button variant="info mb-4" onClick={() => setShowTutor(true)}>
        AI Tutor 💡
      </Button>
      <AITutorModal show={showTutor} handleClose={() => setShowTutor(false)} />
    </>
  );
}
