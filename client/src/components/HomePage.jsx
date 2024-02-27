import React from 'react'
import iconImage from "../Images/Icon.jpg";
import HomeBlog from './HomeBlog';

const HomePage = () => {
  return (
    <>
      <div className="container text-center">
        <h1>Yuu</h1>

        <img src={iconImage} className="iconImage" />

        <p>
          Yuuです。大学1年生。競技プログラミングをしています。
        </p>

        <section class="page-section" id="services">
          <div className="service">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">BLOG</h2>
              <h3 class="section-subheading text-muted mb-5">
                最新の記事等
              </h3>
              <HomeBlog />
            </div>
          </div>
        </section>

        <section id="skill">
          <div class="text-center">
            <h2 class="title">WORK</h2>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage