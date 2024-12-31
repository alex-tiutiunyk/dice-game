import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IPlayData } from '@/interfaces';

interface ResultsTableProps {
  data: IPlayData[];
}

const ResultsTable = ({ data }: ResultsTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Guess</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.time}</TableCell>
              <TableCell>
                {item.radio} {item.range}
              </TableCell>
              <TableCell sx={item.isOk ? { color: 'green' } : { color: 'red' }}>
                {item.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(ResultsTable);
