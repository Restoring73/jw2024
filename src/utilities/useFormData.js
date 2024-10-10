import { useState } from 'react';

export const useFormData = (validator = null, values = {}) => {
  const [state, setState] = useState(() => ({
    values,
    errors: {}
  }));

  const change = (evt) => {
    const { id, value } = evt.target;
    const error = validator ? validator(id, value) : '';
    evt.target.setCustomValidity(error);

    const updatedValues = { ...state.values, [id]: value };
    const updatedErrors = { ...state.errors, [id]: error };
    const hasError = Object.values(updatedErrors).some(x => x !== '');

    setState(hasError ? { values: updatedValues, errors: updatedErrors } : { values: updatedValues });
  };

  return [state, change];
};
