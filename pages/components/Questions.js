import React from 'react';
import UntitledQuestion from './UntitledQuestion';

const Questions = ({ formField, setFormField }) => {
  return (
    <>
      {Array.isArray(formField) ? (
        formField.map((e, key) => {
          return (
            <UntitledQuestion key={key} formField={formField} setFormField={setFormField} id={e.id} />
          )
        })
      ) : (
        // Handle the case when formField is not an array or is undefined
        <div>No questions available</div>
      )}
    </>
  );
};

export default Questions;
