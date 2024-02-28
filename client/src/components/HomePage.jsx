import React from 'react'
import iconImage from "../Images/Icon.jpg";
import HomeBlog  from './HomeBlog';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="container text-center">
        <div className="profile">
          <div className="profile-image">
            <img src={iconImage} className="iconImage" />
          </div>

          <div className="profile-direction">
            <h1>Yuu</h1>
            <p>
              Yuuです。文系大学1年生。競技プログラミングをしています。
            </p>
          </div>
        </div>

        <section class="page-section" id="services">
          <div className="service">
            <div className="blog-section">
              <h2 class="section-heading text-uppercase">BLOG</h2>
              <h3 class="section-subheading text-muted mb-5">
                最新の記事等
              </h3>
              <HomeBlog />
              <div className='more-blog'>
                <Link to='/blog' className='more-blog-link'>もっと見る</Link>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="skill">
          <div class="text-center">
            <h2 class="title">WORK</h2>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default HomePage