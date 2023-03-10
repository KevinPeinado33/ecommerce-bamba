import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/common/data/store'
import { SwipeableDrawer } from '@mui/material'
import { toggleCart } from '@/common/data/slices/ui.slice'
import { CartInfo } from '.'

export const SwipeableCart = () => {

    const dispatch         = useDispatch()
    const { isOpenCart }   = useSelector( (state: RootState) => state.ui )

    const showCartProducts = () => dispatch( toggleCart() )

    return (
        <SwipeableDrawer
            anchor='bottom'
            open={isOpenCart}
            onClose={showCartProducts}
            onOpen={showCartProducts}
        >
            <CartInfo />
        </SwipeableDrawer>
    )
}
