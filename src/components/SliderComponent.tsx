import { Box, Slider, Typography } from '@mui/material';
import React from 'react';

interface SliderComponentProps {
  range: number;
  setRange: (value: number) => void;
}

const SliderComponent = ({ range, setRange }: SliderComponentProps) => {
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

  return (
    <>
      <Box sx={{ marginBottom: '14px' }}>
        <Slider
          value={range}
          min={1}
          max={100}
          onChange={handleChange}
          aria-label='Always visible'
          marks={marks}
          color='secondary'
          valueLabelDisplay='on'
          size='small'
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '5px' }}>
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

export default React.memo(SliderComponent);
