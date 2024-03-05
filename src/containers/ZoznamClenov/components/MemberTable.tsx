import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';
import React from 'react';
import { mockedMemberRow } from '../../../utils';

const StyledTableCell = styled(TableCell)`
  && {
    font-weight: bold;
    font-style: italic;
  }
`;

const columns = ['ID', 'Name', 'Date', 'Rank', 'Age', 'Address'];

const MemberTable: React.FC = () => {
    // TODO:
    // step 1: scrollable horizontally - all columns visible + style table!
    // step 2: no horizontal scroll, hiding of the columns + display hiddne in expanded row + collapse icon

    // STYLE TABLE:
    // FILTER
    //ACTION TOOLBAR -> VISIBILITY if more columns will be implemented, EXPORT DATA, FILTERING BY NAME/ search - targeting whatever-> https://mui.com/x/react-data-grid/filtering/quick-filter/
    // SORTING
    // ADD/REMOVE ROW
    // MEMOIZE DATA


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedRow, setSelectedRow] = React.useState<number | null>(null);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (rowIndex: number) => {
    setSelectedRow(selectedRow === rowIndex ? null : rowIndex);
  };

  return  (
    <TableContainer component={Paper}>
 <Table sx={{ minWidth: 650 }} aria-label="Member table" stickyHeader> 
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? mockedMemberRow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : mockedMemberRow
          ).map((row, rowIndex) => (
            <React.Fragment key={row.id}>
              <TableRow onClick={() => handleRowClick(rowIndex)} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.rank}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={selectedRow === rowIndex} timeout="auto" unmountOnExit>
                    <div>
                      {columns.map((column) => (
                        <StyledTableCell key={column} align="left">
                          {column}: {row[column.toLowerCase() as keyof Member]}
                        </StyledTableCell>
                      ))}
                    </div>
                  </Collapse>
                </TableCell>
              </TableRow> */}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={mockedMemberRow.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default MemberTable;
