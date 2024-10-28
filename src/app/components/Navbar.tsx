import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const NAVLINKS = [
    {
        name: "Home",
        href: "#"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Experience",
        href: "#experience"
    },
    {
        name: "Projects",
        href: "#projects"
    },
]

const SOCIALS = [
    {
        icon: <IoMdMail />,
        href: "mailto:m.boateng0000@gmail.com"
    },
    {
        icon: <FaGithub />,
        href: "https://github.com/mickBoat00?tab=repositories"
    },
    {
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/michael-boateng-4376a0168/"
    },
]

export default function Navbar() {
    return <nav className="justify-end sm:container mx-auto font-extrabold flex w-full gap-2 p-4">
        <a href="#" className="hidden sm:block mr-2 whitespace-nowrap">Michael Boateng</a>

        <div className="hidden sm:flex w-full justify-between">
            <div className="flex gap-4">
                {
                    NAVLINKS.map((navlink) => (
                        <a key={navlink.name} href={navlink.href} className="hover:text-greenbright">{navlink.name}</a>
                    ))
                }
            </div>

            <div className=" flex justify-end gap-4">
                {
                    SOCIALS.map((social) => (
                        <a key={social.href} href={social.href} target="_blank" className="text-xl hover:text-greenbright">
                            {social.icon}
                        </a>
                    ))
                }
            </div> 
        </div>

        <div className="flex gap-4 sm:hidden">
            {
                SOCIALS.map((social) => (
                    <a key={social.href} href={social.href} target="_blank" className="text-xl hover:text-greenbright">
                        {social.icon}
                    </a>
                ))
            }
        </div> 


    </nav>
}