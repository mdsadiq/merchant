import "tailwindcss/tailwind.css";
import Layout from "../components/Layout/layout";
import Navbar from "../components/navbar/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    // </div>
  );
}

export default MyApp;
