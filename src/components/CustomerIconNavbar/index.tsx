'use client'
import style from './style.module.scss';
interface IconNav {
    img: string;
    link?: string;
    style?: object;
    img_h?: string;
}

export default function IconNavbar(props: IconNav) {
    return (
        <div className={`${style['ico-home']}`}>
            <button className="btn " type="submit" style={{ padding: '0.375rem' }}>
                <img src={props.img} alt="Logo" className="d-inline-block align-text-top" style={props.style} />
            </button>
        </div>
    )
}