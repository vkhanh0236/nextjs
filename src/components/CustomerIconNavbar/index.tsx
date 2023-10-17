'use client'
import style from './style.module.scss';
import Link from 'next/link';
interface IconNav {
    img: string;
    link?: string;
    style?: object;
    img_h?: string;
}
import { usePathname } from 'next/navigation';
export default function IconNavbar(props: IconNav) {
    const pathname = usePathname()
    return (
        <div className={`${style['ico-home']}`}>
            <button className="btn " type="submit" style={{ padding: '0.375rem' }}>
                {
                    pathname === props.link ? (
                        <>
                            <Link href={`${props.link}`}>
                                <img src={props.img_h} alt="Logo" className="d-inline-block align-text-top" style={props.style} />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href={`${props.link}`}>
                                <img src={props.img} alt="Logo" className="d-inline-block align-text-top" style={props.style} />
                            </Link></>
                    )
                }

            </button>
        </div>
    )
}