import { useCallback }          from 'react'

import { store }                from '@/common/data/store'
import { updateProductUseCase } from '../usecases/update-product.usecase'

export const cartController = () => {
    
    const updateProduct = useCallback(() => {
        store.dispatch( updateProductUseCase() )
    }, [])

    return {
        updateProduct
    }

}