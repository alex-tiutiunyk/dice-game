import { Box, Slider, Typography } from '@mui/material';
import React from 'react';

const SliderComponent = () => {
  const [range, setRange] = React.useState<number>(20);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setRange(newValue as number);
  };
  const marks = [
    { value: 1 },
    { value: 20 },
    { value: 40 },
    { value: 60 },
    { value: 80 },
    { value: 100 },
  ];
  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <>
      <Box sx={{ marginBottom: 3 }}>
        <Slider
          value={range}
          min={1}
          max={100}
          onChange={handleChange}
          aria-label='Always visible'
          getAriaValueText={valuetext}
          marks={marks}
          color='secondary'
          valueLabelDisplay='on'
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='body2' onClick={() => setRange(1)} sx={{ cursor: 'pointer' }}>
            0
          </Typography>
          <Typography variant='body2' onClick={() => setRange(100)} sx={{ cursor: 'pointer' }}>
            100
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SliderComponent;
