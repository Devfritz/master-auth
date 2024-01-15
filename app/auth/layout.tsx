export default function layout({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col items-center justify-center bg-sky-600 h-screen">
        {children}
    </div>
}