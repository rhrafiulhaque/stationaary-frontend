import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      id="hero"
      className="relative h-[550px]"
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-a-set-of-bright-stationery-items-on-a-blue-background-colored-image_15677953.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black  z-0"></div>
      <div className="container mx-auto h-full flex items-center justify-center  text-white z-10 relative">
        <div className="text-center">
          <h1 id="heroTitle" className="text-5xl font-bold mb-4">
            Stationery That Inspires Your Creativity
          </h1>
          <p id="heroOverview" className="text-lg mb-4">
            Discover premium quality pens, notebooks, and more – all designed to{" "}
            <br />
            elevate your everyday tasks. Find everything you need to create,{" "}
            <br />
            organize, and stay inspired.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="max-lg:hidden px-4 py-2 text-sm rounded-full cursor-pointer text-white border-2 border-[#E84F6A] bg-[#E84F6A] hover:bg-[#e84f57]"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
