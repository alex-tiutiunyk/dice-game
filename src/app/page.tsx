'use client';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IPlayData } from '@/interfaces';
import { Box, Button, Container, Typography } from '@mui/material';
import ResultsTable from '@/components/ResultsTable';
import Result from '@/components/Result';
import Radios from '@/components/Radios';
import Alerts from '@/components/Alerts';
import SliderComponent from '@/components/SliderComponent';

export default function Home() {
  const [result, setResult] = React.useState<number>(0);
  const [radio, setRadio] = React.useState<string>('under');
  const [data, setData] = React.useState<IPlayData[]>([]);
  const [isWon, setIsWon] = React.useState<boolean>(false);
  const [isLost, setIsLost] = React.useState<boolean>(false);
  const [lostState, setLostState] = React.useState<'higher' | 'lower' | null>(null);

  const initialRangeValue = 20;
  const [range, setRange] = React.useState<number>(initialRangeValue);

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

  return (
    <>
      <Container maxWidth={false}>
        <Container maxWidth='sm' disableGutters sx={{ paddingTop: '16px' }}>
          <Alerts isWon={isWon} isLost={isLost} lostState={lostState} />
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
            <Result result={result} />
            <Radios setRadio={setRadio} />
            <SliderComponent range={range} setRange={setRange} />
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
