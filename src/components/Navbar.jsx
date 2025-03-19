import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/logo.png"
import { BsYoutube } from "react-icons/bs"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center  py-4'>
            <div className='flex shrink-0'>
                <img
                    src={logo}
                    alt="logo"
                    width={45}
                    height={45}
                    className="hover:animate-spin"
                />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="/">
                <BsYoutube/>
            </a>
            <a href="/">
                <FaFacebook/>
            </a>
            <a href="/">
                <FaInstagram/>
            </a>
        </div>
        </div>
    )
}

export default Navbar
