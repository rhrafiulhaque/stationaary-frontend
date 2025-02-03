import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setCart } from "../../redux/features/cart/cartSlice";
import { TProduct } from "../../redux/features/product/productSlice";
import { truncateDescription } from "../../utils/fnc";

const SingleProduct = ({ product }: { product: TProduct }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProductDetails = (productId: string) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
      <div
        onClick={() => product._id && handleProductDetails(product._id)}
        className="mb-4 bg-gray-100 rounded p-2"
      >
        <img
          src={product.image ?? " "}
          alt={product?.name ?? " "}
          className="aspect-[33/35] w-full object-contain"
        />
      </div>

      <div>
        <div onClick={() => product._id && handleProductDetails(product._id)}>
          <h5 className="text-base font-bold text-gray-800">{product.name}</h5>

          <p className="text-gray-500 text-[13px] mt-2">
            {truncateDescription(product.description ?? "")}
          </p>
          <h6 className="text-base text-gray-800 font-bold ml-auto">
            ${product?.price}
          </h6>
        </div>

        <button
          type="button"
          onClick={() => {
            dispatch(setCart(product));
            toast.success("Carted the product!");
          }}
          className="text-sm px-2 my-2 h-9 font-semibold w-full bg-[#E84F6A] hover:bg-[#e84f4f] text-white tracking-wide ml-auto outline-none border-none rounded"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
