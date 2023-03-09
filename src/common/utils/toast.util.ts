import { toast } from 'react-toastify'

const TIME_DURATION = 5000

interface Props {
    message: string
    type   : TypeToast
}

type TypeToast = 
    | 'info'
    | 'success' 
    | 'error' 
    | 'warning' 
    | 'default'

export const showToast = ({ message, type }: Props) => {
    return toast(message, {
        type           : type as 'info',
        position       : toast.POSITION.TOP_RIGHT,
        autoClose      : TIME_DURATION,
        hideProgressBar: false,
        closeOnClick   : true,
        pauseOnHover   : true,
        draggable      : true,
        progress       : undefined,
        theme          : 'dark',
    })
}
