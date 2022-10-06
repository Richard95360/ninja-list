import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";


const NavBar = () => {
    const router = useRouter()
    return ( 
        <nav className="active">
            <div className="logo">
            <Image src="/logo.png"  width="128" height="77" />
            </div>
            <Link href="/"><a className={router.pathname === '/' ? 'active' : ''}>Home</a></Link>
            <Link href="/about"><a  className={router.pathname === '/about' ? 'active' : ''}>About</a></Link>
            <Link href="/ninjas/"><a  className={router.pathname === '/ninjas' ? 'active' : ''}>Ninja Listing</a></Link>
        </nav>

     );
}
 
export default NavBar;