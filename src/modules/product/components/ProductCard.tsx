import { FC, useState } from 'react'
import NextLink from 'next/link'
import { 
    Grid, 
    Card, 
    CardActionArea, 
    CardMedia, 
    Box, 
    Typography, 
    Link
} from '@mui/material'

import { IProduct } from '../interfaces'

interface Props {
    product: IProduct
}

export const ProductCard: FC< Props > = ({ product }) => {

    const [ isHovered, setIsHovered ]         = useState(false)
    const [ isImageLoaded, setIsImageLoaded ] = useState(false)

    /* const productImage = useMemo(() => {
        return isHovered
                    ? `/products/${product.images[1]}`
                    : `/products/${product.images[0]}`
    }, [ isHovered, product.images ]) */
    
    return (
        <Grid 
            onMouseEnter={ () => setIsHovered( true ) }
            onMouseLeave={ () => setIsHovered( false ) }
            item 
            xs={6}
            sm={4}
        >
                
            <Card>
                <NextLink 
                    href={`/product/${ product.id }`} 
                    passHref 
                    legacyBehavior 
                    prefetch={ false } 
                >
                    <Link>
                        <CardActionArea>
                            {/* <Chip
                                color='secondary'
                                label='No hay disponibles'
                                sx={{
                                    position: 'absolute',
                                    zIndex: 99,
                                    top: '10px',
                                    left: '10px'
                                }}
                            /> */}
                            <CardMedia
                                component='img'
                                className='fadeIn'
                                image={ product.image }
                                alt={ product.title }
                                onLoad={ () => setIsImageLoaded( true ) }
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>

            <Box 
                sx={{ 
                    mt: 1, 
                    display: isImageLoaded ? 'block' : 'none' 
                }} 
                className='fadeIn' 
            >
                <Typography fontWeight={ 700 } >{ product.title }</Typography>
                <Typography fontWeight={ 500 } >{ `s/. ${product.price}` }</Typography>
            </Box>
            
        </Grid>
    )
}
