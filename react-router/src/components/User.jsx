import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  return (
    <div className="p-20 bg-white flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-black">
          User ID: <span className="text-orange-500">{userId}</span>
        </h1>

        <p className="text-lg text-gray-600">MERN Stack Developer.</p>
      </div>
    </div>
  );
}

export default User;
