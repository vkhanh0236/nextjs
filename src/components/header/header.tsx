'use client'
import x from '@/components/header/header.module.css'
import IconNavbar from '../CustomerIconNavbar'
export default function Header() {
    return (
        <nav className={`navbar ${x.headerP}`} style={{ border: 'solid 1px black', padding: '0px 20px' }}>
            <div>
                <a className="navbar-brand" href="#"><img src="/img/logo_2.svg" alt="Logo" className="d-inline-block align-text-top" /></a>
            </div>
            <div className={`${x['search']}`}   >
                <form className="d-flex" role="search">
                    <button className="btn " type="submit"><img src="/img/search.svg" alt="Logo" className="d-inline-block align-text-top" /></button>
                    <input className="me-2" style={{ outline: 'none', border: 'none' }} placeholder="Search" />
                </form>
            </div>
            <IconNavbar img='/img/home.svg' img_h='/img/home_h.svg' />
            <IconNavbar img='/img/market.svg' />
            <IconNavbar img='/img/news.svg' style={{ width: '23px', height: '23px', padding: '2px' }} />
            <IconNavbar img='/img/market.svg' />

            <button className='account' style={{ backgroundColor: '#fff', border: 'none' }}>
                <div style={{ display: 'flex' }}>
                    <img src="/img/avatar-default.jpg" alt="avatar" sizes='auto' style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                    <p style={{ margin: 'auto', paddingLeft: '10px' }}>123456</p>
                </div>

            </button>
        </nav>
    )
}