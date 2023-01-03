import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [data, setData] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    setData(formData);
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <h4>Form using react-hook-form - <a href="https://www.cluemediator.com/" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h4>
    <div>
      <label>Name</label>
      <input
        placeholder='Name'
        {...register('name')}
      />
    </div>
    <div>
      <label>Email</label>
      <input
        placeholder='Email'
        {...register('email')}
      />
    </div>
    <div>
      <label>Website</label>
      <input
        placeholder='Website'
        {...register('website')}
      />
    </div>
    <div>
      <button>Submit</button>
    </div>
    {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
  </form>
}

export default App;