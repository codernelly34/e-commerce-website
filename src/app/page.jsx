import "@/styles/home.css";
import HomeNav from "@/components/HomeNav.jsx";
import Categories from "@/components/Categories.jsx";
import Products from "@/components/Products.jsx";
import Text from "./_home/text.jsx";
import Location from "./_home/location.jsx";

const Home = () => {
  return (
    <div id="home-page">
      <header id="heroSection" className="relative">
        <HomeNav />
        <Text />
      </header>
      <main id="mainSection" className="mb-20">
        <section id="quickShow" className="relative">
          <Categories />
          <div className="text-center py-10">
            <span className="text-3xl font-medium">Top best products</span>
          </div>
          <Products />
        </section>
      </main>
      <Location />
    </div>
  );
};
export default Home;
