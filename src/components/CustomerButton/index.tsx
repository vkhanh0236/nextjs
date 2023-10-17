'use client'
import Link from "next/link"
type Class = "light" | "dark" | 'border'
export default function Button(props: {
    class: Class,
    text: string
}) {
    return (
        <>
            {
                props.class === 'light' ? (
                    <button type="button" className="btn btn-light fw-medium rounded-pill shadow"><Link href={''} className='text-decoration-none text-black text-capitalize' >{props.text}</Link></button>
                ) : props.class === 'dark' ?
                    (
                        <button type="button" className="btn btn-dark fw-medium  rounded-pill shadow "><Link href={''} className='text-decoration-none text-white text-capitalize' >{props.text}</Link></button>
                    ) : (
                        <button type="button" className="btn btn-light fw-medium  rounded-pill shadow border border-dark"><Link href={''} className='text-decoration-none text-black text-capitalize' >{props.text}</Link></button>
                    )
            }

        </>
    )
}