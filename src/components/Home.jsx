import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home'id='home'>
        <main>
          <h1>Anubhav...</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>
      <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
          <p>We Are the only Solutions of all your "Techy Problems..." Contact Us for any Tech.issue</p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>Who We Are...?</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nihil, itaque, quo numquam ipsum voluptatum adipisci dolorem sequi consequatur et, quidem ipsa commodi! Iusto nihil eligendi prehenderit atque enim maxime iste doloremque a error praesentium sint corrupti! Libero, fugiat rerum cum accusamus reiciendis aliquam explicabo nulla, ab dolorum harum hic earum.</p>
        </div>
      </div>
      <div className="home4" id='brands'>
        <div>

       
        <h1>Brands</h1>
        <article>

          <div style={{
            animationDelay:"0.1s"
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s"
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"1s"
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
          <div style={{
            animationDelay:"1.5s"
          }}> 
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
        </article>
        </div>
      </div>

    </>
  )
}

export default Home
