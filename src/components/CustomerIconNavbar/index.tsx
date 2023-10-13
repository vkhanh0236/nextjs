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
        <div className={`${style.ico_home}`}>
            <button className="btn " type="submit">
                <img src={props.img} alt="Logo" className="d-inline-block align-text-top" style={props.style} />
            </button>
        </div>
    )
}