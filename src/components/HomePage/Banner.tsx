import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img
        src="https://png.pngtree.com/background/20250122/original/pngtree-stationery-objects-school-and-office-supplies-picture-image_15573064.jpg"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">
          Unlock Your Creativity with the Best Stationery!
        </h2>
        <p className="sm:text-lg text-base text-center text-gray-200">
          Shop Now and Elevate Your Everyday Writing Experience.
        </p>

        <button
          onClick={() => navigate("/products")}
          type="button"
          className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
