import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Buttontype } from '../types/Type';

const ColorButton = styled(Button)<ButtonProps>(({ theme, bg }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: bg,
  '&:hover': {
    backgroundColor: bg,
  },
}));

export default function ButtonCustom({
  bg,
  onClick,
  children,
  type,
  className,
}: Buttontype) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton
        bg={bg}
        variant="contained"
        onClick={onClick}
        className={className}
        type={type}
      >
        {children}
      </ColorButton>
    </Stack>
  );
}
