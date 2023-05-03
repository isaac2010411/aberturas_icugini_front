import { useTable, usePagination } from 'react-table'
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
// import RecordNotFound from '../RecordNotFound/RecordNotFound'

const ReactTable = ({ columns, data, action }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  )

  return (
    <>
      <TableContainer component={Paper}>
        {action && (
          <Grid container justifyContent='end' alignItems='center' style={{ padding: '15px' }}>
            <Grid item>{action}</Grid>
          </Grid>
        )}
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)
              return (
                <TableRow hover {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {data && data.length > 10 && (
          <Grid
            container
            className='pagination'
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: '15px',
            }}
          >
            <Grid item>
              <Button variant='contained' color='secondary' onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'Anterior'}
              </Button>
            </Grid>
            <Grid item>
              <FormControl size='small'>
                <Select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value))
                  }}
                >
                  {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                    <MenuItem key={pageSize} value={pageSize}>
                      Ver {pageSize}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Button variant='contained' color='secondary' onClick={() => nextPage()} disabled={!canNextPage}>
                {'Siguiente'}
              </Button>
            </Grid>
          </Grid>
        )}
      </TableContainer>
    </>
  )
}

function CustomReactTable({ action, data, columns }) {
  return (
    <>
      {!data.length ? (
        <Grid container direction='row' justifyContent='space-around' alignItems='center'>
          {/* <RecordNotFound /> */}
        </Grid>
      ) : (
        <ReactTable columns={columns} data={data} action={action} />
      )}
    </>
  )
}

export default CustomReactTable
