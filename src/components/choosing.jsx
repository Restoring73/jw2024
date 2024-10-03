import { useState, useEffect } from 'react';

const choices = ['Fall', 'Spring', 'Winter'];

const Chooser = ({ selectedTerm, setSelectedTerm }) => {
  const [choice, setChoice] = useState(choices.indexOf(selectedTerm));

  const nextChoice = () => {
    const newChoice = (choice + 1) % choices.length;
    setChoice(newChoice);
    setSelectedTerm(choices[newChoice]);
  };

  useEffect(() => {
    setSelectedTerm(choices[choice]);
  }, [choice, setSelectedTerm]);

  return (
    <button onClick={nextChoice}>
      {choices[choice]}
    </button>
  );
};

export default Chooser;
