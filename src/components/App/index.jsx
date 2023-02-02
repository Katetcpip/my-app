import { useState } from 'react';
import './App.css';
import Button from 'components/Button'

function App() {

const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen bg-green-50 flex justify-center items-center flex-col'>
        <h1 className='font-bold text-3xl text-center'>Counter</h1>
        <p className='font-bold text-9xl text-center mt-12'>{count}</p>
        <div className='flex justify-center mt-12'>  
            <Button title="Вычесть -1" changeCount={() => setCount(count-1)}/>
            <Button title="Прибавить +1" changeCount={() => setCount(count+1)}/>
        </div>
    </div>
  );
}

export default App;
