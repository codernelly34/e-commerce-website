import "@/styles/home.css";
import HomeNav from "@/components/HomeNav.jsx";
import Categories from "@/components/Categories.jsx";
import Products from "@/components/Products.jsx";
import Text from "./_home/text.jsx";
import Location from "./_home/location.jsx";
import Testimonial from "./_home/testimonial.jsx";
import Footer from "@/components/Footer.jsx";

const Home = () => {
  return (
    <div id="home-page">
      <header id="heroSection" className="relative">
        <HomeNav />
        <Text />
      </header>
      <main id="mainSection" className="my-4">
        <section id="quickShow" className="relative @container">
          <Categories />
          <div className="text-center py-10">
            <span className="text-3xl font-medium">Top best products</span>
          </div>
          <Products />
        </section>
        <Location />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
