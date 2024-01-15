interface HeaderProps {
   label: string,
}

const Header = ({ label }: HeaderProps) => {
   return (
      <div className="w-full flex flex-col gap-y-4 items-center">
         <h1 className="text-2xl">🔐 Auth</h1>
         <p className="text-black">{label}</p>
      </div>
   )
}

export default Header