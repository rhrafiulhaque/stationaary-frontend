import Footer from "../components/HomePage/Footer";
import Navbar from "../components/HomePage/Navbar";
import SingleBlog from "../components/HomePage/SingleBlog";

const BlogListAll = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 md:px-10 px-4 py-12 ">
        <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogListAll;
