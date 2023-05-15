import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ListButton from '../components/ListButton';
import ButtonCustom from '../components/Button';

const QuestionPage = () => {
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
        <Typography
          variant="h6"
          sx={{ width: 1, textAlign: 'center', fontWeight: 'bold' }}
        >
          Correct Answers is 0/4
        </Typography>
        <Typography
          variant="h6"
          sx={{ width: 1, textAlign: 'center', fontWeight: 'bold' }}
        >
          Why this is happend in japan ? which one in correct
          aswer?????????????/
        </Typography>
        <ListButton />
        <ButtonCustom
          bg={'#da9301'}
          onClick={() => {
            ('');
          }}
          type="submit"
          children={'Next Question'}
        />
      </Box>
    </Container>
  );
};

export default QuestionPage;
