import AITutorModal from './components/AITutorModal';
import { useState } from 'react';

export default function Page() {
  const [showTutor, setShowTutor] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setShowTutor(true)}>
        Open AI Tutor 💡
      </Button>
      <AITutorModal show={showTutor} handleClose={() => setShowTutor(false)} />
    </>
  );
}
