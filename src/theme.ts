import { createTheme } from '@mui/material';
import type { } from '@mui/x-data-grid/themeAugmentation';

export const theme = createTheme({
  components: {
    // Use `MuiDataGrid` on DataGrid ->just example -> TODO: customize 
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'grey',
        },
      },
    },
  },
});