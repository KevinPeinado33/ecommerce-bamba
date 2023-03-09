import { Typography } from '@mui/material'

import { StoreLayout } from '@/common/components/layouts'

const HomePage = () => {
  return (
    <StoreLayout
      title='Home - productos'
      pageDescription='Encuentre los mejores productos en nuestras tiendas'
    >
      <Typography variant='h1' component='h1' >Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }} >Todos los productos</Typography>
    </StoreLayout>
  )
}

export default HomePage