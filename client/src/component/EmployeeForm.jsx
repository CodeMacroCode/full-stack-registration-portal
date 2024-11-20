import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    title: "",
    role: "",
  });

  let url = `${import.meta.env.VITE_BACKEND_BASEURL}/add`;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-[350px]">
          <label htmlFor="name">Employee Name</label>
          <input
            className="h-[45px] bg-transparent border-2 border-white border-opacity-10 rounded-md p-2"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 w-[350px]">
          <label htmlFor="email">Employee Email</label>
          <input
            className="h-[45px] bg-transparent border-2 border-white border-opacity-10 rounded-md p-2"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 w-[350px]">
          <label htmlFor="department">Employee Department</label>
          <input
            className="h-[45px] bg-transparent border-2 border-white border-opacity-10 rounded-md p-2"
            type="text"
            name="department"
            value={formData.department}
            placeholder="Enter Your Department"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 w-[350px]">
          <label htmlFor="role">Employee Role</label>
          <input
            className="h-[45px] bg-transparent border-2 border-white border-opacity-10 rounded-md p-2"
            type="text"
            name="role"
            value={formData.role}
            placeholder="Enter Your Role"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 w-[350px]">
          <label htmlFor="title">Employee Title</label>
          <input
            className="h-[45px] bg-transparent border-2 border-white border-opacity-10 rounded-md p-2"
            type="text"
            name="title"
            value={formData.title}
            placeholder="Enter Your Title"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-[#3e3893] w-[350px] h-[50px] rounded-md font-bold flex items-center justify-center gap-2"
          type="submit"
        >
          Create Employee
          <FaArrowRight className="opacity-50 peer" />
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
