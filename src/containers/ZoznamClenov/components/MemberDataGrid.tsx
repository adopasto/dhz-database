import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react';
import { mockedMemberColumns, mockedMemberRow } from '../../../utils';

// TODO:
    // step 1: scrollable horizontally - all columns visible + style table!
    // step 2: no horizontal scroll, hiding of the columns + display hiddne in expanded row + collapse icon

    // STYLE TABLE:
    // FILTER
    //ACTION TOOLBAR -> VISIBILITY if more columns will be implemented, EXPORT DATA, FILTERING BY NAME/ search - targeting whatever-> https://mui.com/x/react-data-grid/filtering/quick-filter/
    // SORTING
    // ADD/REMOVE ROW
    // MEMOIZE DATA
    // step2. implement selection of row -> possibility to open modal and see member details instead of having specific page for the  member


// TODO !!!! -> eslint stopped working after data grid package changes - maybe because of peer dependecies
export const DataGridTable: React.FC = () => {
// const VISIBLE_FIELDS = ['id', 'name', 'date', 'rank', 'age', 'address'];

  
  return (
    <Box sx={{ height: 500, width:'50vw' }}>
      <DataGrid
       columns={mockedMemberColumns}
         initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterValues: ['ab'],
            },
          },
        }}
        rows={mockedMemberRow}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        pageSizeOptions={[5, 10, 25]}
    //    slots={{ toolbar: GridToolbar }} -- full toolbar - hide columns, style of the table, filters- overkill, export
      />
    </Box>
//     <Box sx={{ height: 400, width: 1 }}>
//       <DataGrid
//         rows={mockedData}
//         columns={columns}
//         pageSizeOptions={[5, 10, 25]}
//     //    slots={{ toolbar: GridToolbar }} -- full toolbar - hide columns, style of the table, filters- overkill, export
//       initialState={{
//     filter: {
//       filterModel: {
//         items: [],
//         quickFilterValues: ['quick', 'filter'],
//       },
//     },
//   }}  
//       />
//     </Box>
  );
};
