import React from 'react';
import GradeDetails from './GradeDetails';
import GradeForm from './GradeForm';

function GradeContainer({categories: {data, initialState, header}}) {
  return (
    <>
      <GradeForm initialState={initialState} data={data} header={header}/>
      <GradeDetails categories={data}/>
      </>
  )
}

export default GradeContainer;