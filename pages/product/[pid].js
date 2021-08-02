import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import StarRatings from "../../components/StarRatings";

const graphcms = new GraphQLClient(process.env.graphcmsurl);
export async function getStaticProps({ params }) {
  // ckdu4awq00h140104ijzi92kv
  const { product } = await graphcms.request(
    `
    query getProduct($pid: ID!){
      product(where: {id: $pid}) {
      id
      name
      slug
      description
      images {
        url
        fileName
        handle
      }
      price
      reviews {
        name
        content
        rating
      }
      variants {
        __typename
        ... on ProductSizeColorVariant {
          id
          name
          color
          size
        }
      }
      
    }
  }
  `,
    {
      pid: params.pid,
    }
  );
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ id: "ckdu49mfc0h070102jgprxnj0" }].map(({ id }) => ({
      params: { pid: id },
    })),
    fallback: false,
  };
}

const Product = ({ product }) => {
  const router = useRouter();
  const { pid } = router.query;
  const [mainImage, setmainImage] = useState(product.images[0].url);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  
  // const colors = product.variants.reduce((a, item) => [...a, item.color], []);
  const colors = Array(...new Set(product.variants.map(item => item.color)));
  console.log("product", product, colors);
  const sizes = product.variants.reduce((a, item) => [...a, item.size], []);
  
  // const ratings =
  //   product.reviews.reduce((a, r) => a + r.rating, 0) / product.reviews.length;

  return (
    <div>
      {/* product info over */}
      {/* backgroundColor:"#7b42ca" */}
      <div className="flex flex-col md:flex-row bg-black text-white overflow-scroll">
        <div className="w-full md:w-4/6 flex flex-col overflow-hidden sticky top-0 h-full bg-gradient-to-bl from-purple-900  to-purple-500">
          <div className="relative">
            <div className="absolute bg-gray-100 text-black text-lg font-bold p-2">
              {product.name}
            </div>
            <div className="absolute bg-gray-100 text-black text-lg font-bold p-2 mt-11 z-0">
              Rs {product.price}
            </div>
          </div>
          <div className="" style={{ height: "36rem" }}>
            <img src={mainImage} className="h-full m-auto" />
          </div>
          <div className="flex flex-row overflow-x-scroll">
            {product.images.map((image) => (
              <img
                className="w-52 p-2"
                src={image.url}
                alt={image.fileName}
                key={image.fileName}
                onClick={() => {
                  setmainImage(image.url);
                }}
              />
            ))}
          </div>
          <div></div>
        </div>

        <div className="w-full md:w-2/6 flex flex-col p-4 pl-6">
          <section className="flex flex-col">
            {/* <div className="text-xl">{product.name}</div> */}
            <div className="">COLOR</div>
            <div className="flex flex-row flex-wrap py-4">
              {colors.map(c => (
              <button 
              className={clsx("rounded-full bg-black text-white p-3 border-2 hover:border-white hover:scale-105 mx-2")}
              onClick={() => setColor('black')}>
                <span className={clsx()}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>))}
              {/* <button 
              className={clsx("rounded-full bg-black text-white p-3 border-2 hover:border-white hover:scale-105 mx-2")}
              onClick={() => setcolor('black')}>
                <span className={clsx()}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button> */}
              {/* <button className="rounded-full bg-white text-black p-3 border-2 hover:border-black hover:scale-105 mx-2">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button> */}
            </div>
          </section>
          <section className="flex flex-col pt-4">
            <div className="">SIZE</div>
            <div className="flex flex-row flex-wrap py-4">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={clsx("rounded-full text-white border-2 border-gray-400 hover:border-white hover:bg-gray-900 mx-2 w-14 h-14 flex items-center justify-center hover:scale-105", size == s && "border-white bg-gray-900")}
                  onClick={() => { setSize(s)}}
                >
                  {s.length > 3 ? s[0] : s}
                </button>
              ))}
            </div>
          </section>
          <section className="pt-5">{product.description}</section>
          <section className="pt-10 flex flex-row justify-between">
            <div>
              <StarRatings reviews={product.reviews} />
            </div>
            <div className="justify-items-end">
              {product.reviews.length} reviews
            </div>
          </section>
          <section className="pt-5">
            <button className="w-full bg-white text-lg text-black font-bold p-4">
              Add to Cart
            </button>
          </section>
          <section className="pt-5">
            All India Shipping Available
          </section>
          <section className="pt-5">
            This is a limited edition Hoodie up for sale
          </section>
          <section className="pt-5">
            <div className="text-lg">CARE</div>
            This is a limited edition Hoodie up for sale
          </section>
        </div>
      </div>
      <hr />
      {/* product info over */}
      <div>
        <h2>Related Products</h2>
      </div>
    </div>
  );
};

export default Product;
