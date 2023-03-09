import { AxiosError, AxiosInstance } from 'axios'

import { HttpAdapter } from '../interfaces'

export class AxiosAdapter implements HttpAdapter {
    
    private axios: AxiosInstance

    constructor(
        http: AxiosInstance
    ) {
        this.axios = http
    }
    
    async get< T > ( url: string ): Promise< T > {
        try {

            const { data } = await this.axios.get< T >( url )
            return data

        } catch ( error: any | AxiosError< T > ) {
            throw new Error(error.message)
        }
    }

    async post< T >(url: string, body: T): Promise< T > {
        try {

            const { data } = await this.axios.post< T >( url, body )
            return data

        } catch ( error: any | AxiosError< T > ) {
            throw new Error(error.message)
        }
    }

    async put< T >(url: string, body: T): Promise< T > {
        try {

            const { data } = await this.axios.put< T >( url, body )
            return data

        } catch ( error: any | AxiosError< T > ) {
            throw new Error(error.message)
        }
    }

    async delete< T >(url: string): Promise< T > {
        try {

            const { data } = await this.axios.get< T >( url )
            return data

        } catch ( error: any | AxiosError< T > ) {
            throw new Error(error.message)
        }
    }
}
