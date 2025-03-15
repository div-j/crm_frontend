import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const UsersTable = () => {
  const { users, fetchUsers, loading } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone_number.includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-1">All Users</h2>
      <div className="flex md:flex-row flex-col items-center justify-between mb-8">
        <h1 className="text-green-500 ">Active Members</h1>
        <div className="flex items-center justify-between gap-x-4 ">
          <section className=" rounded">
            <label className="input flex items-center bg-[#F9FBFF]">
              <img src="assets/search.png" alt="" className="w-4" />
              <input
                type="search"
                required
                placeholder="Search"
                className="text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </section>
          <div className="bg-[#F9FBFF] rounded p-2.5 text-sm text-gray-500">
            <label htmlFor="sortby">Sort By:</label>
            <select name="sortby" id="">
              <option value="name font-bold">Newest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white ">
          <thead>
            <tr className="text-sm  text-gray-400">
              <td className="py-2 px-4 border-b text-start">Users Name</td>
              <td className="py-2 px-4 border-b text-start">Company</td>
              <td className="py-2 px-4 border-b text-start">Phone Number</td>
              <td className="py-2 px-4 border-b text-start">Email</td>
              <td className="py-2 px-4 border-b text-start">Country</td>
              <td className="py-2 px-4 border-b text-start">Status</td>
            </tr>
          </thead>
          <tbody>
            {loading
              ? [1, 2, 3, 4, 5].map((_, index) => (
                  <tr key={index} className="text-sm text-gray-500">
                    <td className="w-4 animate-pulse h-4 border-b"></td>
                  </tr>
                ))
              : filteredUsers.map((user, index) => (
                  <tr key={index} className="text-sm text-gray-500">
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.company}</td>
                    <td className="py-2 px-4 border-b">{user.phone_number}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.country}</td>
                    <td className="py-2 px-4 border-b">
                      <span
                        className={`py-1 px-3 rounded-full text-xs ${
                          user.status === "Active"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row justify-between  items-center my-5 mt-10">
        <div>
          <p className="text-sm text-gray-500">
            Showing data 1 to 8 of 30 entries
          </p>
        </div>
        <nav>
          <ul className="flex list-none">
            <li className="mx-1">
              <button
                onClick={prevPage}
                className="px-3 py-1.5 border rounded  cursor-pointer"
              >
                <FaChevronLeft size={13} />
              </button>
            </li>
            {[...Array(Math.ceil(filteredUsers.length / usersPerPage)).keys()].map(
              (number) => (
                <li key={number + 1} className="mx-1">
                  <button
                    onClick={() => paginate(number + 1)}
                    className="px-3 py-1 border rounded text-xs cursor-pointer"
                  >
                    {number + 1}
                  </button>
                </li>
              )
            )}
            <li className="mx-1">
              <button
                onClick={nextPage}
                className="px-3 py-1.5 border rounded text-xs cursor-pointer"
              >
                <FaChevronRight size={13} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UsersTable;
