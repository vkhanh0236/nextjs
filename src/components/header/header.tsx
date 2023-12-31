'use client'
import x from '@/components/header/header.module.scss'
// import './header.module.scss'
import IconNavbar from '../CustomerIconNavbar'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
export default function Header() {
    const pathname = usePathname()
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
    return (
        pathname !== '/login' ?
            <nav className={`navbar ${x.headerP} container-xxl px-3`} >
                <div className={`${x['navbar-left']}`}>
                    <div>
                        <a className="navbar-brand" href="/"><img src="/img/logo_2.svg" alt="Logo" className="d-inline-block align-text-top" /></a>
                    </div>
                    <div className={`${x['search']}`}   >
                        <form className="d-flex" role="search">
                            <button className="btn " type="submit"><img src="/img/search.svg" alt="Logo" className="d-inline-block align-text-top" /></button>
                            <input className="me-2" style={{ outline: 'none', border: 'none' }} placeholder="Search" />
                        </form>
                    </div>
                </div>
                <div className={`${x['navbar-right']}`}>
                    <IconNavbar img='/img/home.svg' img_h='/img/home_h.svg' link='/' />
                    <IconNavbar img='/img/shop.svg' img_h='/img/shop_h.svg' link='/shop' />
                    <IconNavbar img='/img/news.svg' img_h='/img/news_h.svg' />
                    <IconNavbar img='/img/shoppingBag.svg' />

                    <button className='account' style={{ backgroundColor: '#fff', border: 'none' }}>
                        <div style={{ display: 'flex' }}>
                            <img className='navbar__avatar' src="/img/avatar-default.jpg" alt="avatar" sizes='auto' style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                            <p className='navbar__userName' style={{ maxWidth: '9.375rem', margin: 'auto', paddingLeft: '10px' }}>232333333333333</p>
                        </div>

                    </button>
                </div>

            </nav>
            :
            <></>
    )
}