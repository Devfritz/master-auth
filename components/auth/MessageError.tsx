import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
interface messageErrorProps {
    message?: string
}

const MessageError = ({ message }: messageErrorProps) => {
    if (!message) {
        return null
    }
    return (
        <div className='flex items-center w-full bg-destructive/20 px-2 py-1 mt-4 text-destructive rounded-sm text-sm space-x-1'>
            <ExclamationTriangleIcon />
            <p>{message}</p>
        </div>
    )
}

export default MessageError