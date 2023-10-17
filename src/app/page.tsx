'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link';
import Button from '../components/CustomerButtonLink'
import { useEffect } from "react";
import { GET } from './api/router';
export default function Home() {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    const request = new Request("http://localhost:3004/api/sql/get", {

    });
    const getdata = GET(request)

    console.log(getdata)
  }, []) // import bootstrap
  return (
    <main className={`${styles.main} container-xxl`}>
      <div >
        <figure>
          <div className={`${styles.media_container}`}>
            <img className={styles.img_Banner} src="/img/imgBe/banner.png" alt="banner" />
            <img className={styles.img_Banner} src="/img/imgBe/banner.png" alt="banner" />
            <img className={styles.img_Banner} src="/img/imgBe/banner.png" alt="banner" />
          </div>

          <figcaption>
            <div className='text-center'>
              <h4 className='text-dark pt-2' >Louis Vuitton X Nike Air Force 1</h4>
              <p className='text-body-tertiary'>The Louis Vuitton and Nike “Air Force 1″ by Virgil Abloh</p>
              <div>
                <Button class='dark' text='shop Now' href='/shop' />
              </div>
            </div>
          </figcaption>
        </figure>

      </div>
      <div className='px-5 pb-5'>
        <div>
          <p className='text-capitalize'>

            Dont' miss
          </p>
        </div>
        <div className='row '>
          <div className="card col text-bg-white border-0 w-50 align-items-end">
            <img src="./img/imgBe/banner_overlay.png" className="card-img rounded-0" alt="..." />
            <div className="card-img-overlay text-center" style={{ top: 'unset', left: 'unset', right: 'unset' }}>
              <h5 className="card-title text-white">Nike Air Force 1 Shadow</h5>
              <Button class='light' text='shop Now' href='/shop'></Button>
            </div>
          </div>
          <div className="card col text-bg-white border-0 w-50 ">
            <img src="./img/imgBe/banner_overlay.png" className="card-img rounded-0" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 pb-5'>
        <div>
          <h4 className='text-capitalize'>
            trending
          </h4>
        </div>

        <div>
          <div>
            <Link href="/shop" >

              <img className='w-100' src="./img/imgBe/banner2.png" alt="banner" />
            </Link>
          </div>
          <div>
            <div className='text-center'>
              <Link href="/shop">
                <h4 className='text-dark pt-2' >Louis Vuitton X Nike Air Force 1</h4>
                <p className='text-body-tertiary'>The Louis Vuitton and Nike “Air Force 1″ by Virgil Abloh</p>

              </Link>
              <div>
                <Button class='dark' text='shop Now' href='/shop' />
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className='px-5 pb-5'>
        <div>
          <h4>
            More NIKE
          </h4>
        </div>
        <div className='prod_home'>
          <div className='d-flex justify-content-between w-100'>
            <div className={`card  text-bg-white border-0  align-items-end ${styles.product_home}`} >
              <img src="./img/imgBe/product_home.png" className="card-img rounded-0" alt="..." />
              <div className="card-img-overlay " >
                <Button class='border' text='shop Now' href='/shop'></Button>
              </div>
            </div>
            <div className={`card  text-bg-white border-0  align-items-end ${styles.product_home}`}>
              <img src="./img/imgBe/product_home.png" className="card-img rounded-0" alt="..." />
              <div className="card-img-overlay text-center" style={{ top: 'unset', left: 'unset', right: 'unset' }}>
                <h5 className="card-title text-white">Nike Air Force 1 Shadow</h5>
                <Button class='light' text='shop Now' href='/shop'></Button>
              </div>
            </div>
            <div className={`card  text-bg-white border-0  align-items-end ${styles.product_home}`} >
              <img src="./img/imgBe/product_home.png" className="card-img rounded-0" alt="..." />
              <div className="card-img-overlay text-center" style={{ top: 'unset', left: 'unset', right: 'unset' }}>
                <h5 className="card-title text-white">Nike Air Force 1 Shadow</h5>
                <Button class='light' text='shop Now' href='/shop'></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
