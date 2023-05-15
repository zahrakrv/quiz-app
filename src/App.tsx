import { useState } from 'react';
import AutoCompele from './components/Select';
import Form from './layout/Form';
import Button from './components/Button';
import QuestionPage from './layout/QuestionPage';
import THEMEprovider from './assets/MUI/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <THEMEprovider>
        {/* <Form /> */}
        <RouterProvider router={router}>
          {/* <QuestionPage /> */}
        </RouterProvider>
      </THEMEprovider>
    </>
  );
}

export default App;
