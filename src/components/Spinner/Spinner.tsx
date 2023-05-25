import { FaSpinner } from "react-icons/fa";

export const SpinnerLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="flex items-center justify-center bg-white rounded-lg p-4">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
      </div>
    </div>
  );
};
