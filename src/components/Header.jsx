import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Header() {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold">Hello {user?.name} 👋,</h1>
      <section className=" rounded">
        <label className="input flex items-center bg-white">
          <img src="assets/search.png" alt="" className="w-4 " />
          <input
            type="search"
            required
            placeholder="Search"
            className="text-sm bg-[#F9FBFF]"
          />
        </label>
      </section>
    </div>
  );
}
