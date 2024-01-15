import { CheckCircledIcon } from '@radix-ui/react-icons'
interface messageSuccessProps {
    message?: string
}

const MessageSuccess = ({ message }: messageSuccessProps) => {
    if (!message) {
        return null
    }
    return (
        <div className='flex items-center w-full bg-emerald-300/45 px-2 py-1 mt-4 text-sm text-emerald-500 rounded-sm space-x-1'>
            <CheckCircledIcon />
            <p>{message}</p>
        </div>
    )
}

export default MessageSuccess