/* eslint-disable react-refresh/only-export-components */
// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/zayndotdev")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);
  // console.log(data);
  return (
    <div className="bg-gray-100 max-w-5/6 w-full flex items-center gap-5 text-center mx-auto">
      {data && <img src={data.avatar_url} alt={data.name} />}
      {data && (
        <h2 className="w-full text-5xl text-bold">
          Followers: {data.followers}
        </h2>
      )}
    </div>
  );
}

export default Github;

// Github.jsx
export const githubLoader = async () => {
  const res = await fetch("https://api.github.com/users/zayndotdev");
  if (!res.ok) throw new Error("Failed to fetch GitHub data");
  return res.json();
};
