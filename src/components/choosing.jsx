import { useState, useEffect } from 'react';

const choices = ['Fall', 'Spring', 'Winter'];

const Chooser = ({ setSelectedTerm }) => {
  const [choice, setChoice] = useState(0);

  const nextChoice = () => {
    setChoice((choice + 1) % choices.length);
  };

  useEffect(() => {
    setSelectedTerm(choices[choice]);
  }, [choice, setSelectedTerm]);

  return (
    <button onClick={nextChoice}>{choices[choice]}</button>
  );
};

export default Chooser;

