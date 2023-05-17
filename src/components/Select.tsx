import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Controller } from 'react-hook-form';

interface Props {
  label: string;
  optionsArr: any;
  register: any;
  showError: string;
  name: string;
  errors: any;
  labelText: string;
  control: any;
}
function Select({
  label,
  optionsArr,
  register,
  showError,
  name,
  errors,
  control,
  labelText,
}: Props) {
  // console.log(errors);
  const options = optionsArr;
  return (
    <Box sx={{ width: 1 }}>
      <Typography sx={{ paddingBottom: '10px' }} variant="body1">
        {' '}
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        rules={{
          required: 'Please enter something',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-select-currency"
            select
            // defaultValue=""
            sx={{ width: 1, padding: '0px' }}
            {...register(name)}
            error={errors[name] ? true : false}
            helperText={errors[name]?.message}
          >
            {options.map((option: any) => (
              <MenuItem
                sx={{ paddingY: '2px' }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>
  );
}

export default Select;

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// type AutoCompeleType = {
//   label: string;
//   optionsArr: string[];
//   labelText: string;
//   errors: Inputs;
//   name: string;
// };

// const Select = ({
//   label,
//   labelText,
//   optionsArr,
//   errors,
//   name,
//   register,
// }: AutoCompeleType) => {
//   const options = optionsArr;
//   const [value, setValue] = React.useState<string | null>(options[0]);
//   return (
//     <div>
//       <label>{label}</label>
//       <div>
//         {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div> */}
//         <br />
//         <Autocomplete
//           value={value}
//           onChange={(event: any, newValue: string | null) => {
//             setValue(newValue);
//           }}
//           id="controllable-states-demo"
//           options={options}
//           sx={{ width: 300 }}
//           renderInput={(params) => <TextField {...params} label={label} />}
//         />
//       </div>
//     </div>
//   );
// };

// export default Select;
