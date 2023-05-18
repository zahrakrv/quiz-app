import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ListButton from '../components/ListButton';
import ButtonCustom from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Data } from '../redux/slices/DataSlice';
import { CircularProgress } from '@mui/material';
import { NEXT, ChangeNumberOfCorrect } from '../redux/slices/DataSlice';
import ModalFinish from '../components/Modal';

import { useState } from 'react';

const QuestionPage = () => {
  // const [AllData, setAlldata] = useState();
  const data = useSelector(Data);
  const dispatch = useDispatch();
  console.log(data);
  //state mmodal
  const [finished, setFinished] = useState(false);
  const [chooseVal, setChooseVal] = useState(-1);
  const [CurrentAnswer, setCurrentAnswer] = useState('');

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        px: '1.5rem',

        '@media (min-width:600px)': {
          px: '2.5rem',
        },
        '@media (min-width:960px)': {
          px: '3rem',
        },
      }}
    >
      {finished && (
        <ModalFinish finished={finished} setFinished={setFinished} />
      )}
      <Box
        component="form"
        // onSubmit={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: '#ffffff',
          width: '100%',
          height: 'fit',
          p: '1.5rem',
          '@media (min-width:600px)': {
            p: '2.5rem',
          },
          '@media (min-width:960px)': {
            p: '3rem',
          },
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.8rem',
        }}
      >
        {data.Alldata?.length > 0 ? (
          <>
            <Typography
              variant="h6"
              sx={{ width: 1, textAlign: 'center', fontWeight: 'bold' }}
            >
              {`Correct Answers is ${data.numberOfQuestions.NumberOfCorrect}/${data.numberOfQuestions.AllQuestion}`}
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: 1, textAlign: 'center', fontWeight: 'bold' }}
            ></Typography>
            <ListButton
              setChooseVal={setChooseVal}
              chooseVal={chooseVal}
              question={data.currentData.question}
              item={data.currentData.items}
              setCurrentAnswer={setCurrentAnswer}

              // ...data.currentData.incorrect_answers,
            />
            <ButtonCustom
              bg={'#da9301'}
              onClick={() => {
                if (data.question + 1 === data.numberOfQuestions.AllQuestion) {
                  setFinished(true);

                  if (CurrentAnswer === data.currentData.correctItem) {
                    dispatch(ChangeNumberOfCorrect());
                  }
                } else {
                  if (chooseVal === -1) {
                    ('');
                  } else {
                    dispatch(NEXT());
                    if (CurrentAnswer === data.currentData.correctItem) {
                      dispatch(ChangeNumberOfCorrect());
                    }
                  }
                }
                setChooseVal(-1);
              }}
              type="button"
              children={'Next Question'}
            />
          </>
        ) : (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
            <Typography>Please wait!</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default QuestionPage;
