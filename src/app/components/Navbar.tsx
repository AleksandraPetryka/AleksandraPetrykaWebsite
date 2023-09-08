import '../globals.css'
import './navbar.css'
import Link from 'next/link'
import Image from "next/image"
import sunIcon from "../../images/sun-icon.png"
import moonIcon from "../../images/moon-icon.png"
import rocketIcon from "../../images/rocket.png"
export default async function Navbar() {
    // const [themeDark, setTheme] = useState(false);
    // const icon = themeDark === false ? moonIcon : sunIcon;
  return (
      <header>
        <Link href='./'>
            <Image src={rocketIcon} alt="rocket-icon" className='rocket' />
            <h1 className='title'>Aleksandra Petryka</h1>
        </Link>
        <nav>
          <Link href="/" className="nav-link">Desktop</Link>
            <Link href="/about" className="nav-link">About</Link>
          <Link href="/portfolio" className="nav-link">Portfolio</Link>
            <button><Image src={sunIcon} alt="light-mode" className="theme-icon" /></button>
        </nav>
      </header>
  )
}