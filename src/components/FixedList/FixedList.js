import { DataGrid } from '@mui/x-data-grid'

export default function FixedList({ columns, rows }) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      autoHeight
      disableExtendRowFullWidth={false}
      density='compact'
      sx={{
        minHeight: 275,
        boxShadow: 2,
      }}
    />
  )
}
