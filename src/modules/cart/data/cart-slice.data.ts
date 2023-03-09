import { IProduct } from '@/modules/product/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartState } from '../interfaces'

const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateProduct: (state, { payload }: PayloadAction< IProduct >) => {
            state.products.push( payload )
        }
    }
})

export const {
    updateProduct
} = cartSlice.actions

export default cartSlice.reducer
