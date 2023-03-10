import { useQuery } from '@tanstack/react-query'

import { AxiosAdapter } from '@/common/adapters'
import { storeApi } from '@/common/apis'
import { IProduct } from '../interfaces'

export const productController = () => {

    const http = new AxiosAdapter( storeApi )

    const query = useQuery(
        ['products'],
        async () => await http.get< IProduct[] >('/products')
    )
    
    return {
        query
    }
    
}
