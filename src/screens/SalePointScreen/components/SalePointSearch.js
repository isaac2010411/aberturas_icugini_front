import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { AppContext } from '../../../contexts/AppContext'
import { useContext } from 'react'

export default function SalePiontSearch() {
  const { searchSalePointList, setSearchSalePointList } = useContext(AppContext)
  return (
    <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Buscar producto'
        inputProps={{ 'aria-label': 'Buscar producto' }}
        value={searchSalePointList}
        onChange={(e)=>setSearchSalePointList(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
