import { AppDispatch }        from '@/common/data/store'
import { showToast }          from '@/common/utils'
import { IProduct, Category } from '@/modules/product/interfaces/products.interface'

import { updateProduct }      from '../data/cart-slice.data'

export const updateProductUseCase = () => (dispatch: AppDispatch) => {

    const product: IProduct = {
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: Category.Electronics,
        image: '',
        rating: undefined
    }

    dispatch( updateProduct( product ) )

    showToast({
        message: 'Producto agregado al carrito.',
        type   : 'info'
    })
    
}
