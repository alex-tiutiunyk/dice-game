import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

interface RadiosProps {
  setRadio: (value: string) => void;
}

const Radios = ({ setRadio }: RadiosProps) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRadio((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl sx={{ marginBottom: 5 }}>
      <RadioGroup row name='threshold' onChange={handleCheck} defaultValue='under'>
        <FormControlLabel
          value='under'
          control={<Radio color='secondary' />}
          label='Under'
          labelPlacement='start'
        />
        <FormControlLabel
          value='over'
          control={<Radio color='secondary' />}
          label='Over'
          labelPlacement='start'
        />
      </RadioGroup>
    </FormControl>
  );
};

export default React.memo(Radios);
