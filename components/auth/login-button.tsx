"use client"

import { useRouter } from "next/navigation"

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean

}

export const ButtonLogin = ({ children, mode = 'redirect', asChild }: LoginButtonProps) => {
    const router = useRouter()
    console.log(router)
    const onClick = () => {
        router.push('/auth/login')
    }
    return <span onClick={onClick} className="text-center cursor-pointer">{children}</span>
}