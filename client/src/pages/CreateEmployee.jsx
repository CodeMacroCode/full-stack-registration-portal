import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import EmployeeForm from "../component/EmployeeForm";

const CreateEmployee = () => {
  return (
    <div className="flex min-w-screen min-h-screen bg-black text-white">
      <div className="relative w-2/4">
        <img
          className="object-cover h-full"
          src="/image/pexels-olly-927022.jpg"
        />
        <div className="absolute bg-gradient-to-t from-black inset-0 flex items-end justify-center z-10">
          <h3 className="text-4xl font-bold text-white w-[500px] pb-11">
            Empower your business with our employee creation!
          </h3>
        </div>
      </div>
      <div className="w-2/4 flex flex-col gap-11 mt-7">
        <div className=" font-bold flex flex-col ml-[210px]">
          <h2 className="text-3xl">Create Employee</h2>
          <Link
            className="flex items-center gap-1 text-sm text-[#3e3893] hover:underline"
            to={"/"}
          >
            <FaBackward />
            Back to employee list
          </Link>
        </div>
        <div>
          <EmployeeForm />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
