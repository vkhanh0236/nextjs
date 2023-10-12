import img from "../../../public/img/logo_2.svg"
import x from '@/components/header/header.module.css'
export default function Header() {
    return (
        <nav className="navbar">
            <div>
                <div>
                    <a className="navbar-brand" href="#"><img src="/img/logo_2.svg" alt="Logo" className="d-inline-block align-text-top" /></a>
                </div>
                <div className={`${x['search']}`}   ><img src="/img/search.svg" alt="Logo" className="d-inline-block align-text-top" /></div>
            </div>
            <div>

            </div>
        </nav>
    )
}