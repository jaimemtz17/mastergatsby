import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if number and convert -- avoids error
    const { value } = e.target;
    setValues({
      ...values,
      [e.target.name]: e.target.type === 'number' ? parseInt(value) : value,
    });
  }

  return { values, updateValue };
}
