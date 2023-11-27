import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const DetailProduct = () => {
  const [product, setProduct] = useState([]);

  let { id } = useParams();
  console.log(id);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=25fd04690e6e712dde58ac89e191a8a4`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <section className="overflow-hidden w-screen bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src={
                      IMAGE_BASE_URL +
                      (product.backdrop_path
                        ? product.backdrop_path
                        : product.poster_path)
                    }
                    alt=""
                    className="object-cover w-full lg:h-full "
                  />
                </div>
                <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                  <div className="flex flex-wrap items-center mt-6">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                      </svg>
                    </span>
                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">
                      Free Shipping
                    </h2>
                  </div>
                  <div className="mt-2 px-7">
                    <a
                      className="text-sm text-blue-400 dark:text-blue-200"
                      href="#"
                    >
                      Get delivery dates
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8">
                  <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span className="text-gray-700 mb-8">
                      {product.name ? product.name : product.title}
                    </span>
                  </p>
                  <p className="max-w-md text-gray-700 dark:text-gray-400">
                    {product.overview}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="w-full p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700">
                    Add to cart
                  </button>
                  <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailProduct;
