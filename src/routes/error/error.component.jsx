import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-6 lg:p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-light text-gray-900 leading-normal text-center">
            404
          </h1>
          <p className="text-2xl font-light text-gray-700 text-center mb-4">
            Not Found.
          </p>
          <Link
            to="/"
            className="text-base font-light text-white bg-black px-4 py-3"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Error;
