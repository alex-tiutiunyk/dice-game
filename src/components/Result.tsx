import { Box } from '@mui/material';
import React from 'react';

interface ResultProps {
  result: number;
}

const Result = ({ result }: ResultProps) => {
  return (
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
  );
};

export default React.memo(Result);
