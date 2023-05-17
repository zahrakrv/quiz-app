import { Typography } from '@mui/material';
import ButtonCustom from '../components/Button';
import Select from '../components/Select';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
// import { useForm } from 'react-hook-form';
import { Inputs } from '../types/Type';
import { submit, FormSubmit } from '../redux/slices/form.slice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { INIT } from '../redux/slices/DataSlice';
import { useSelector, useDispatch } from 'react-redux';

//yup
const registerSchema = yup.object().shape({
  number: yup
    .number()
    .typeError('please write number')
    .min(1, 'the minimum number is 1 question')
    .max(11, 'the maximum number is 10 questions')
    .required('number of questions is required'),
  category: yup.string().required('please select one of categories'),
  difficulty: yup.string().required('please select one of difficulties'),
});

const Form = () => {
  const formValue = useSelector(FormSubmit);

  console.log(formValue);
  const dispatch = useDispatch();
  const {
    // for error
    register,
    // submit
    handleSubmit,
    // empty form
    reset,
    control,
    // error
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(registerSchema),
    // defaultValues: {
    //   number: 0,
    //   category: '',
    //   difficulty: '',
    // },
    mode: 'onChange',
    delayError: 1000,
  });
  const navigate = useNavigate();
  const onSubmit = (data: Inputs) => {
    console.log(data);
    axios(
      `https://opentdb.com/api.php?amount=${data.number}&category=${data.category}&difficulty=${data.difficulty}&token=cce360c9eae295bd30812d851cd94e79d939df0570a89ba8858852df25ebcd6f`
    ).then((res) => dispatch(INIT(res.data.results)));
    navigate('/questions');
    // dispatch(
    //   submit({
    //     number: data.number,
    //     category: data.category,
    //     difficulty: data.difficulty,
    //   })
    // );
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 absolute top-24 left-1/2 -translate-x-1/2"
      >
        <Typography variant="h2" gutterBottom>
          Setup Quiz
        </Typography>
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              error={errors.number ? true : false}
              label="Outlined"
              variant="outlined"
              sx={{ width: 1 }}
              type="number"
              {...register('number')}
              helperText={errors.number?.message}
            />
          )}
        />
        <Select
          labelText={'select Difficulty'}
          optionsArr={[
            { value: '', label: 'Default' },
            { value: 'easy', label: 'easy' },
            { value: 'medium', label: 'medium' },
            { value: 'hard', label: 'hard' },
          ]}
          label={'Difficulty'}
          errors={errors}
          name={'difficulty'}
          register={register}
          control={control}
          showError="difficulty is required"
        />
        <Select
          labelText={'select Category'}
          optionsArr={[
            { value: '', label: 'Default' },
            { value: 25, label: 'Art' },
            { value: 27, label: 'Animals' },
            { value: 21, label: 'Sports' },
          ]}
          label={'category'}
          errors={errors}
          name={'category'}
          register={register}
          control={control}
          showError="category is required"
        />
        <ButtonCustom
          bg={'#da9301'}
          onClick={() => {
            ('');
          }}
          type="submit"
          children={'Start'}
        />
      </Box>
    </>
  );
};

export default Form;
