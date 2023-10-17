'use client'
import style from './shop.module.scss'

export default function Shop() {
    return (
        <div className='container-xxl d-flex justify-content-between'>
            <div className={`${style.tab_MenuItem}`}>
                <div>
                    <h4 className='text-uppercase ps-2'>
                        shoes
                    </h4>
                </div>
                <div>
                    <ul className={`${style.menu_item}`}>
                        <li><h5>All</h5></li>
                        <li>Jordan</li>
                        <li>Jordan</li>
                        <li>Jordan</li>
                        <li>Jordan</li>
                    </ul>
                </div>
            </div>
            <div className='container p-3'>
                <div>
                    <h4>
                        bestseller
                    </h4>
                </div>
                <div className="row ">
                    <div className={`col-6 col-sm-4 col-lg-3 `} >
                        <div className={`card  text-bg-light border-0  align-items-end ${style.card_items}`} >
                            <img src="./img/imgBe/product_shop.png" className="card-img rounded-0 " alt="..." />
                            <div className={`${style.bookmark_item}`}>
                                <img style={{ padding: '8px' }} src="./img/bookmark.svg" alt="123" />
                            </div>
                            <div className={`${style.price_item} `}   >
                                {/* <Button class='border' text='shop Now'></Button> */}
                                <p className='mb-1'>Nike Air Force 1 '07</p>
                                <p className='color-grey font-14' >test</p>
                                <p className='font-14'>2.000.000d</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-6 col-sm-4 col-lg-3 `} >
                        <div className={`card  text-bg-light border-0  align-items-end ${style.card_items}`} >
                            <div>

                            </div>
                            <img src="./img/imgBe/product_shop2.png" className="card-img rounded-0 " alt="..." />
                            <div className={`${style.bookmark_item}`}>

                            </div>
                            <div className={`${style.price_item} `}   >
                                {/* <Button class='border' text='shop Now'></Button> */}
                                <p className='mb-1'> Force 1 '07</p>
                                <p className='color-grey font-14' >test</p>
                                <p className='font-14'>14.000.000d</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        Variable width content
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        3 of 3
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        3 of 3
                    </div>
                </div>
            </div>
        </div>
    )
}