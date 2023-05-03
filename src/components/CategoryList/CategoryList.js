import { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Tabs, Tab, Box } from '@mui/material'
import { AppContext } from '../../contexts/AppContext'
import styles from './styles/categoryListStyles'

const useStyles = makeStyles(styles)

export default function CategotyList() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const [categories, setCategories] = useState([])

  const { productGetAllData, loadingProductGetAll } = useContext(AppContext)

  useEffect(() => {
    if (productGetAllData) {
      setCategories((prev) => [...prev, ...productGetAllData.categories])
    }
  }, [productGetAllData])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      {loadingProductGetAll ? (
        <div />
      ) : (
        <Tabs
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
          indicatorColor='secondary'
          style={{
            backgroundColor: 'white',
            margin: '1.1rem 0 1rem 0',
            borderRadius: '13px',
          }}
          aria-label='scrollable auto tabs example'
        >
          {categories.map((category) => (
            <Tab key={category._id} className={classes.indicator} label={category.name} />
          ))}
        </Tabs>
      )}
    </Box>
  )
}
