'use client';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IPlayData } from '@/interfaces';
import {
  Alert,
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
import ResultsTable from '@/components/ResultsTable';

export default function Home() {
  const [result, setResult] = React.useState<number>(0);
  const [radio, setRadio] = React.useState<string>('under');
  const [data, setData] = React.useState<IPlayData[]>([]);
  const [isWon, setIsWon] = React.useState<boolean>(false);
  const [isLost, setIsLost] = React.useState<boolean>(false);
  const [lostState, setLostState] = React.useState<'higher' | 'lower' | null>(null);

  const initialRangeValue = 20;
  const [range, setRange] = React.useState<number>(initialRangeValue);
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

  const startPlay = (): void => {
    const newNumber: number = Math.floor(Math.random() * 100 + 1);
    const date: string = new Date().toISOString();
    const regEx: RegExp = /(?<=T)(\S+)(?=\.)/g;
    const time: string = date.match(regEx)![0];
    let isOk: boolean;

    if ((radio === 'under' && newNumber < range) || (radio === 'over' && newNumber > range)) {
      isOk = true;
      setIsWon(true);
      setIsLost(false);
    } else {
      isOk = false;
      setIsLost(true);
      setIsWon(false);
      if (radio === 'under') setLostState('higher');
      if (radio === 'over') setLostState('lower');
    }

    const newElement: IPlayData = {
      id: uuidv4(),
      time,
      radio,
      range,
      result: newNumber,
      isOk,
    };

    if (data.length > 9) {
      const filteredData: IPlayData[] = data.filter((_, i) => i < 9);
      setData([newElement, ...filteredData]);
    } else {
      setData([newElement, ...data]);
    }

    setResult(newNumber);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRadio((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Container maxWidth={false}>
        <Container maxWidth='sm' disableGutters sx={{ paddingTop: '16px' }}>
          {isWon && (
            <Box sx={{ minHeight: 72 }}>
              <Alert variant='filled' severity='success'>
                You won
              </Alert>
            </Box>
          )}
          {isLost && (
            <Box sx={{ minHeight: 72 }}>
              <Alert variant='filled' severity='error' sx={{ fontSize: 14 }}>
                <Typography sx={{ fontSize: 16 }}>You lost</Typography>
                Number was {lostState}
              </Alert>
            </Box>
          )}
          <Box
            textAlign='center'
            sx={{
              maxWidth: 300,
              paddingTop: '21px',
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
            <Box sx={{ marginBottom: 3 }}>
              <Slider
                value={range}
                min={1}
                max={100}
                onChange={handleChange}
                aria-label='Always visible'
                marks={marks}
                color='secondary'
                valueLabelDisplay='on'
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  variant='body2'
                  onClick={() => setRange(1)}
                  sx={{ cursor: 'pointer', fontSize: 18 }}
                >
                  0
                </Typography>
                <Typography
                  variant='body2'
                  onClick={() => setRange(100)}
                  sx={{ cursor: 'pointer', fontSize: 18 }}
                >
                  100
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={startPlay}
              variant='contained'
              color='secondary'
              size='large'
              fullWidth
            >
              Play
            </Button>
          </Box>
          {data.length ? (
            <ResultsTable data={data} />
          ) : (
            <Typography textAlign='center'>Start to Play</Typography>
          )}
        </Container>
      </Container>
    </>
  );
}
