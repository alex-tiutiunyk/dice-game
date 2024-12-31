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
              <TableCell sx={{ padding: '6px 16px 5px' }}>{item.time}</TableCell>
              <TableCell sx={{ padding: '6px 16px 5px' }}>
                {item.radio} {item.range}
              </TableCell>
              <TableCell
                sx={
                  item.isOk
                    ? { color: 'green', padding: '6px 16px 5px' }
                    : { color: 'red', padding: '6px 16px 5px' }
                }
              >
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
