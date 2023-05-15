import { Typography } from '@mui/material';
import ButtonCustom from '../components/Button';
import Select from '../components/Select';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { Inputs } from '../types/Type';
import { useSelector, useDispatch } from 'react-redux';
import { submit, FormSubmit } from '../redux/slices/form.slice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  const formValue = useSelector(FormSubmit);

  console.log(formValue);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    // delayError: 1000,
  });
  const navigate = useNavigate();
  const onSubmit = (data: Inputs) => {
    navigate('/questions');
    axios.get(`${formValue.url}`).then((res) => {
      console.log(res);
    });
    dispatch(
      submit({
        number: data.number,
        category: data.category,
        difficulty: data.difficulty,
      })
    );
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
        <TextField
          id="outlined-basic"
          error={errors.number ? true : false}
          label="Outlined"
          variant="outlined"
          sx={{ width: 1 }}
          type="number"
          {...register('number', { required: true })}
          helperText={errors.number && 'number is required'}
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
