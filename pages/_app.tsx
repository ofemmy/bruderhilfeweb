import "tailwindcss/tailwind.css";
import "styles/custom.css";
import {Layout} from "components"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
