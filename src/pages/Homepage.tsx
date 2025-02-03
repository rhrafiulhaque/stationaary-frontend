import Banner from "../components/HomePage/Banner";
import BlogList from "../components/HomePage/BlogList";
import Features from "../components/HomePage/Features";
import Footer from "../components/HomePage/Footer";
import HeroSection from "../components/HomePage/HeroSection";
import Menubar from "../components/HomePage/Menubar";
import Navbar from "../components/HomePage/Navbar";
import ProductList from "../components/HomePage/ProductList";
import Testmonials from "../components/HomePage/Testmonials";
import { useAppSelector } from "../hooks/hooks";

const Homepage = () => {
  const searchTerm = useAppSelector((state) => state.searchProduct.searchTerm);
  return (
    <>
      <Navbar />
      <Menubar />
      {searchTerm ? (
        <ProductList searchTerm={searchTerm} />
      ) : (
        <>
          <HeroSection />
          <Features />
          <ProductList searchTerm="" />
          <Testmonials />
          <BlogList />
          <Banner />
          <Footer />
        </>
      )}
    </>
  );
};

export default Homepage;
