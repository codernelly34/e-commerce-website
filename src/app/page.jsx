import "@/styles/home.css";
import HomeNav from "@/components/HomeNav.jsx";
import Categories from "@/components/Categories.jsx";
import Products from "@/components/Products.jsx";
import Text from "./_home/text.jsx";

const Home = () => {
  return (
    <div id="home-page">
      <header id="heroSection" className="relative">
        <HomeNav />
        {/* <div className="heroContent text-white pr-2"> */}
        <Text />
        {/* </div> */}
      </header>
      <main id="mainSection" className="h-screen">
        <section id="quickShow" className="relative">
          <Categories />
          <div className="text-center pt-10">
            <span className="text-3xl font-medium">Top best products</span>
          </div>
          <Products />
        </section>
      </main>
    </div>
  );
};
export default Home;
