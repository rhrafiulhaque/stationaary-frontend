import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AdminReviewList = () => {
  return (
    <div className="p-5  ">
      <div className="mx-auto  w-full rounded-xl p-9 max-md:px-4  ">
        <h2 className="mb-9 text-center text-2xl font-bold  lg:mb-11 lg:text-[28px]">
          Review List
        </h2>

        <table className="mx-auto text-sm text-left rtl:text-right dark:text-gray-400 ">
          <thead className="text-xs  uppercase bg-transparent border-b border-gray-500 ">
            <tr>
              <th scope="col" className="px-2 py-3">
                SL
              </th>
              <th scope="col" className="px-2 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-2 py-3">
                Customer Email
              </th>
              <th scope="col" className="px-2 py-3">
                Customer Phone
              </th>
              <th scope="col" className="px-2 py-3">
                Review Description
              </th>
              <th scope="col" className="px-2 py-3">
                Review Date
              </th>
              <th scope="col" className="px-2 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-transparent border-b  ">
              <th scope="row" className="px-2 py-4 font-medium   dark:">
                01
              </th>
              <td className="px-2 py-4">Rashed Chowdhury</td>
              <td className="px-2 py-4">rashed@gmail.com</td>
              <td className="px-2 py-4">+8801256000</td>
              <td className="px-2 py-4">
                Very Good Product and The Owner is friendly
              </td>
              <td className="px-2 py-4">16 October,2024</td>
              <td className="px-2 py-4">
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="hover:text-green-400 duration-300 transition cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="hover:text-red-500 duration-300 transition cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className="hover:text-red-500 duration-300 transition cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReviewList;
