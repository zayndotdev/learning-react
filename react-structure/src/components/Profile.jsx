import user from "../constants";
function Profile() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-1/4 p-4 bg-gray-100 rounded-lg shadow-lg text-neutral-950">
      <img
        src={user.photoName}
        className="mb-5 w-[150px] h-auto rounded-full"
        alt="Zayn Raza"
      />
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p className="text-lg mb-2">Age: {user.age}</p>
      <p className="text-lg mb-2">{user.job}</p>
      <a href="mailto:zaynraza.dev@gmail.com" className="text-lg mb-2">
        {user.email}
      </a>
    </div>
  );
}

export default Profile;
