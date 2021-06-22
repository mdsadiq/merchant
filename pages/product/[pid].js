import { useRouter } from "next/router";
import Link from "next/link";

import { GraphQLClient } from "graphql-request";
import Navbar from "../../components/navbar/navbar";
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
  // console.log("gdata", gdata);

  // const query = `query getProduct($pid: ID!){
  // product(where: {id: $pid}) {
  //     id
  //     name
  //     slug
  //     description
  //     images {
  //       url
  //       fileName
  //       handle
  //     }
  //     price
  //     reviews {
  //       name
  //       content
  //       rating
  //     }

  //   }
  // }`;
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
  console.log("product", product);
  const colors = product.variants.reduce((a,item) => [ ...a, item.color ], [])
  const sizes = product.variants.reduce((a,item) => [ ...a, item.size ], [])
  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row bg-black text-white">
        <div className="w-4/6 relative border flex flex-col overflow-hidden">
          <div className="absolute bg-gray-100 text-black text-lg font-bold p-2">
            {product.name}
          </div>
          <div className="min-w-full">
            <img src={`${product.images[0].url}`} />
          </div>
          <div className="min-w-24 flex flex-row overflow-x-scroll">
            {product.images.map((image) => (
              <img
                className="w-64 p-2"
                src={image.url}
                alt={image.filename}
                key={image.filename}
              />
            ))}
          </div>
          <div></div>
        </div>
        <div className="w-2/6 flex flex-col border p-4">
          <section className="flex flex-col">
            <div className="text-lg mx-2">COLOR</div>
            <div className="flex flex-row flex-wrap py-4">
              <button className="rounded-full bg-black text-white p-3 border-2 hover:border-white hover:scale-105 mx-2">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
              <button className="rounded-full bg-white text-black p-3 border-2 hover:border-black hover:scale-105 mx-2">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </section>
          <section className="flex flex-col pt-4">
            <div className="text-lg mx-2">SIZE</div>
            <div className="flex flex-row flex-wrap py-4">
              {sizes.map(s => 
              <button className="rounded-full text-white border-2 border-gray-400 hover:border-white hover:bg-gray-900 mx-2 w-14 h-14 flex items-center justify-center hover:scale-105">
                {s}
              </button>
              )}
               {/* <button className="rounded-full text-white border-2 border-gray-400 hover:border-white hover:bg-gray-900 mx-2 w-14 h-14 flex items-center justify-center hover:scale-105">
                S
               </button>

               <button className="rounded-full text-white border-2 border-gray-400 hover:border-white hover:bg-gray-900 mx-2 w-14 h-14 flex items-center justify-center hover:scale-105">
                 M
               </button> */}
            </div>
          </section>
          <section className="pt-5">{product.description}</section>
          <section className="pt-5 flex flex-row justify-between">
            <div>
              {product.reviews.reduce((a, r) => (a + r.rating), 0) / product.reviews.length }
              star
            </div>
            <div className="justify-items-end">
              {product.reviews.length} reviews
            </div>
          </section>
          <div>Price {product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
