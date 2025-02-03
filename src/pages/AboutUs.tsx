import Footer from "../components/HomePage/Footer";
import Navbar from "../components/HomePage/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="font-sans bg-gray-100 px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">
              Crafting Your Creativity, One Stationery Product at a Time
            </h2>
            <p className="mb-4 text-sm text-gray-500">
              Welcome to Stationary, where passion for quality stationery meets
              the needs of creators, professionals, and students alike. Our
              online store is dedicated to bringing you the finest selection of
              pens, pencils, notebooks, and more — all designed to fuel your
              creativity and productivity.
            </p>
            <p className="mb-4 text-sm text-gray-500">
              We believe that the right stationery can make all the difference,
              whether you're jotting down notes, sketching ideas, or organizing
              your thoughts. That’s why we carefully curate every product,
              ensuring that it meets the highest standards of quality and
              durability.
            </p>
            <p className="text-sm text-gray-500">
              At Stationary, we're more than just an online shop; we’re a part
              of your everyday routine, helping you express yourself and stay
              organized. With fast, reliable shipping and a customer-first
              approach, we make it easy for you to get the tools you need to
              thrive.
            </p>
            <p className="text-sm text-gray-500">
              Thank you for choosing us as your trusted stationery partner.
              Let’s create something great together!
            </p>
          </div>
          <div>
            <img
              src="https://readymadeui.com/management-img.webp"
              alt="Placeholder Image"
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
