import { Typography } from '@mui/material'

import { StoreLayout } from '@/common/components/layouts'
import { productController } from '@/modules/product/controllers'
import { FullScreenLoading } from '@/common/components/ui'
import { ProductList } from '@/modules/product/components'
import { SwipeableCart } from '@/modules/cart/components'

const HomePage = () => {

  const { query } = productController()

  if ( query.isError ) return (<h2>{`${ query.error }`}</h2>)

  return (
    <StoreLayout
      title='Home - productos'
      pageDescription='Encuentre los mejores productos en nuestras tiendas'
    >
      <Typography variant='h1' component='h1' >Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }} >Todos los productos</Typography>

      {
         query.isFetching
           ? <FullScreenLoading />
           : <ProductList products={ query.data! } />
      }

      <SwipeableCart />
      
    </StoreLayout>
  )
}

export default HomePage