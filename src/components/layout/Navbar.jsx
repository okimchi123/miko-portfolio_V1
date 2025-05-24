import { AlignJustify } from "lucide-react"

export default function NavBar(){
    return(
        <nav className="sticky top-0 flex w-[80%] bg-[#1e1d1c] justify-between py-5">
            <h1 className="font-medium text-[22px]">
                MIKO BASILIO
            </h1>
            <ul className="hidden md:flex md:gap-4 text-[20px]">
                <li>
                    About
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Experience
                </li>
            </ul>
            <AlignJustify color="white" className="md:hidden" />
        </nav>
    )
}