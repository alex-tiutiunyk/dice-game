'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from '@mui/material';
import styles from './page.module.css';

export default function Home() {
  const [result, setResult] = React.useState<number>(0);

  const initialRangeValue = 20;
  const marks = [
    { value: 1 },
    { value: 20 },
    { value: 40 },
    { value: 60 },
    { value: 80 },
    { value: 100 },
  ];
  const [range, setRange] = React.useState<number>(initialRangeValue);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setRange(newValue as number);
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const startPlay = (): void => {
    const newNumber: number = Math.floor(Math.random() * 100 + 1);

    setResult(newNumber);
  };

  return (
    <Container maxWidth={false}>
      <Container maxWidth='sm' disableGutters>
        <Box
          textAlign='center'
          sx={{
            width: 300,
            paddingTop: '37px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 7,
          }}
        >
          <Box
            sx={{
              height: 200,
              lineHeight: '200px',
              fontSize: 96,
              backgroundColor: 'rgba(var(--stb-black) / 0.04)',
              borderRadius: 1,
              marginBottom: 3,
            }}
          >
            {result}
          </Box>
          <FormControl sx={{ marginBottom: 5 }}>
            <RadioGroup row name='threshold'>
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
          <Box sx={{ marginBottom: 3 }}>
            <Slider
              value={range}
              min={1}
              max={100}
              onChange={handleChange}
              aria-label='Always visible'
              defaultValue={initialRangeValue}
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
          <Button onClick={startPlay} variant='contained' color='secondary' size='large' fullWidth>
            Play
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
