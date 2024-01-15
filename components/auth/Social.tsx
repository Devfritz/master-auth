import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { GitHubLogoIcon, } from "@radix-ui/react-icons"


const Social = () => {
    return (
        <div className="w-full flex items-center gap-x-2 mt-4">
            <Button variant="outline" size="lg">
                <FcGoogle />
            </Button>
            <Button variant="outline" size="lg">
                <GitHubLogoIcon />
            </Button>
        </div>
    )
}

export default Social