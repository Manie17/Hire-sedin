import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Rails from "../assets/Rails-img.svg";

const blogs = [
  {
    image: Rails,
    title: "Implementation Services",
    description:
      "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering AI-powered insights across your business.",
  },
  {
    image: Rails,
    title: "Custom Development",
    description:
      "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering AI-powered insights across your business.",
  },
  {
    image: Rails,
    title: "Integration Services",
    description:
      "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering AI-powered insights across your business.",
  },
  {
    image: Rails,
    title: "Implementation Services",
    description:
      "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering AI-powered insights across your business.",
  },
  {
    image: Rails,
    title: "Custom Development",
    description:
      "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering AI-powered insights across your business.",
  },
];

const BlogPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / 3);

  useEffect(() => {
    const currentPageElement = document.getElementById("currentPage");
    currentPageElement.style.opacity = 0;
    setTimeout(() => {
      currentPageElement.textContent = String(currentPage).padStart(2, "0");
      currentPageElement.style.animation = "none";
      void currentPageElement.offsetWidth;
      currentPageElement.style.animation = "fadeIn 0.5s ease-in-out forwards";
    }, 200);
  }, [currentPage]);

  return (
    <section className="blogs-bg-container">
      <div className="container cmn-container">
        <div className="blog-header">
          <h1 className="text-h2 pt-5 text-white pb-5">Our Service Offering</h1>
        </div>

        <Swiper
          modules={[Navigation, EffectFade]}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={30}
          onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
        >
          {[0, 3].map((index) => (
            <SwiperSlide key={index}>
              <div className="row g-4">
                {blogs.slice(index, index + 3).map((blog, i) => (
                  <div key={i} className="col-md-4 pt-5">
                    <div className="blog-body">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="img-blg w-20"
                      />
                      <div className="card-body">
                        <h5 className="blog-text pt-5 text-white">
                          {blog.title}
                        </h5>
                        <p className="blog-p pt-3 text-white">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="blog-nav-container d-flex justify-content-between align-items-center pt-5">
          {/* Left-aligned navigation buttons */}
          <div className="blog-nav d-flex gap-2">
            <button className="prev btn btn-secondary">&#10094;</button>
            <button className="next btn btn-secondary">&#10095;</button>
          </div>

          {/* Right-aligned pagination */}
          <div className="pagination d-flex">
            <span id="currentPage" className="current">
              01
            </span>
            <span className="separator">—</span>
            <span id="totalPages">{String(totalPages).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPagination;
