import { Typography, Grid, CardContent, Divider, Box, Button } from '@mui/material'

export const CartInfo = () => {
    return (
        <div
            style={{ marginBottom: 20  }}
        >
            <Typography 
                variant='h1' 
                component='h1'
                style={{ margin: 15  }}
            >
                Productos en el carrito
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={7} >
                    {/* <CardList editable /> */}
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Grid className='summary-card' >
                        <CardContent>
                            <Typography variant='h2'>Orden</Typography>
                            <Divider sx={{ my: 1 }} />

                            {/* <OrderSummary /> */}

                            <Box sx={{ mt: 3 }} >
                                <Button
                                    href='/checkout/address'
                                    color='secondary'
                                    className='circular-btn'
                                    fullWidth
                                >
                                    Checkout
                                </Button>
                            </Box>

                        </CardContent>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
