import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Navigate } from 'react-router-dom';
import { RESET } from '../redux/slices/DataSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Data } from '../redux/slices/DataSlice';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalFinish({ finished, setFinished }: any) {
  const data = useSelector(Data);
  //   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setFinished(true);
  const handleClose = () => {
    setFinished(false);
    // const navigate = useNavigate();
    // navigate('/');
  };
  const totalPercent =
    (data.numberOfQuestions.NumberOfCorrect /
      data.numberOfQuestions.AllQuestion) *
    100;
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={finished}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={finished}>
          <Box sx={style}>
            <Typography
              className="font-bold text-center text-3xl"
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Congrats!
            </Typography>
            <Typography
              className="text-2xl text-gray-600 text-center mt-2"
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              {`You answered ${totalPercent}% ${
                totalPercent < 50 ? 'You need more practice' : 'exelent!'
              }`}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Link to="/">
                {' '}
                <span
                  className="flex bg-[#da9301] w-max rounded p-2 mx-auto items-center justify-center"
                  onClick={() => {
                    dispatch(RESET());
                    handleClose();
                  }}
                >
                  Do you want to play Again??
                </span>
              </Link>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
////////////////////////////
// import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
// import { RESET } from '../redux/slices/DataSlice';
// import { useSelector, useDispatch } from 'react-redux';

// const style = {
//   position: 'absolute' as const,
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// تابعی برای مخلوط کردن آرایه‌ها به صورت رندوم
// function shuffleArray(array: any[]) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// export default function ModalFinish({ finished, setFinished }: any) {
//   const [correctAnswersCount, setCorrectAnswersCount] = React.useState(0);
//   const handleOpen = () => setFinished(true);
//   const handleClose = () => setFinished(false);
//   const dispatch = useDispatch();

//   // گرفتن وضعیت سوال و گزینه‌ها از Redux
//   const { question, options, correctAnswer } = useSelector(
//     (state: any) => state.data
//   );

//   // مخلوط کردن گزینه‌ها
//   const shuffledOptions = shuffleArray(options);

//   // اضافه کردن شمارنده به تعداد گزینه‌های صحیح
//   const handleAnswerClick = (option: string) => {
//     if (option === correctAnswer) {
//       setCorrectAnswersCount((prevCount) => prevCount + 1);
//     }
//   };

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={finished}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={finished}>
//           <Box sx={style}>
//             <Typography id="transition-modal-title" variant="h6" component="h2">
//               Congrats!
//             </Typography>
//             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//               <Link to="/">
//                 {' '}
//                 <span
//                   onClick={() => {
//                     dispatch(RESET());
//                   }}
//                 >
//                   play Again??
//                 </span>
//               </Link>
//             </Typography>
//             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//               Correct Answers: {correctAnswersCount}
//             </Typography>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }
