import { Alert, Box, Typography } from '@mui/material';
import React from 'react';

interface AlertsProps {
  isWon: boolean;
  isLost: boolean;
  lostState: string | null;
}

const Alerts = ({ isWon, isLost, lostState }: AlertsProps) => {
  return (
    <>
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
    </>
  );
};

export default React.memo(Alerts);
