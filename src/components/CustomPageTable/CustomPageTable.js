import { Grid } from '@mui/material'
import Page from '../../components/Page/Page'

const CustomPageTable = ({ children, pageName }) => {
  return (
    <Page title={pageName}>
      <Grid
        container
        rowSpacing={1}
        justifyContent='center'
        direction='row'
        alignItems='center'
        style={{ padding: '15px 15px 100px 15px' }}
      >
        <Grid item xs={12} md={10}>
          {children}
        </Grid>
      </Grid>
    </Page>
  )
}

export default CustomPageTable
