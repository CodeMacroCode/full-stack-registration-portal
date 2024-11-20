import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [employee, setEmployee] = useState();
  //           BASE URL                                       END POINT
  const url = `http://full-stack-registration-portal.vercel.app/base/get`;

  const getAllData = async () => {
    try {
      const getPeople = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await getPeople.json();
      setEmployee(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-bold">Employees</h2>
          <p>
            This is the list of all the employees. You can add new employees.
          </p>
        </div>
        <Link
          className="bg-[#5049db] w-32 h-10 flex justify-center items-center rounded-md"
          to={"addEmployee"}
        >
          <button>Add Employee</button>
        </Link>
      </div>
      <div className="mt-3 overflow-hidden rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right border-2 border-solid border-gray-800 text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span>Employee</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span>Title</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span>Role</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {employee?.data.map((person) => (
              <tr
                key={person._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 flex items-center gap-4">
                  <img className="size-12 rounded-full" src={person.image} />
                  <div>
                    <div className="font-bold">{person.name}</div>
                    <div className="text-sm">{person.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-sm">{person.department}</div>
                  <div className="text-xs">{person.title}</div>
                </td>
                <td className="text-sm px-6 py-4">{person.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
