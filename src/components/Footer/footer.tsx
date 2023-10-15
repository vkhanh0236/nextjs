'use client'
import x from './footer.module.scss';
import Link from 'next/link';
export default function Footer() {
    return (
        <div className={x.footer}>
            <div className={`${x.footer_container} container-xxl`}>
                <div>
                    <ul>
                        <li className={x.footer_link}><Link href={'/'}>FIND A STORE</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>BECOME A MEMBER</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>SIGN UP FOR EMAIL</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>SEND US FEEDBACK</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={x.footer_link}><Link href={'/'}>GET HELP</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>Order Status</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>Returns</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>Delivery</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>Payment Options</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={x.footer_link}><Link href={'/'}>ABOUT NIKE</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>News</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>Careers</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>Investors</Link></li>
                        <li className={x.footer_link}><Link href={'/'}>Sustainability</Link></li>
                    </ul>
                </div>
                <div className={x.sosical_menu}>
                    <ul className={x.sosical_link}>
                        <li >
                            <Link href={'/'}>
                                <img src="./img/youtube_white.svg" alt="youtube" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <img src="./img/facebook_white.svg" alt="youtube" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <img src="./img/instagram_white.svg" alt="youtube" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <img src="./img/twitter_white.svg" alt="youtube" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}