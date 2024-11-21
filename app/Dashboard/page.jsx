"use client";

import { useEffect, useState } from "react";
import {
  Edit2,
  Save,
  Mail,
  Phone,
  User,
  Briefcase,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import Users from "../components/_user/Users";
import { useAuth } from "../context/AuthContext";

// const countryCodes = [
//   { code: "+1", label: "USA/Canada (+1)" },
//   { code: "+44", label: "UK (+44)" },
//   { code: "+234", label: "Nigeria (+234)" },
//   { code: "+91", label: "India (+91)" },
//   { code: "+61", label: "Australia (+61)" },
//   { code: "+81", label: "Japan (+81)" },
// ];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    name: user?.username || "Jane Doe",
    email: user?.email || "jane.doe@example.com",
    phone: user?.phone || "234567890",
    company: user?.companyname || "Acme Corp",
    status: user?.status || "Subscribe",
    // countryCode: "+1",
    // profilePic: "https://via.placeholder.com/150",
  });

  // Fetch user data on component mount
  // useEffect(() => {
  //   if (user) {
  //     setUserData({
  //       name: user.username || "Jane Doe",
  //       email: user.email || "jane.doe@example.com",
  //       phone: user.phone || "234567890",
  //       company: user.companyname || "Acme Corp",
  //     });
  //   }
  // }, [user]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryCodeChange = (e) => {
    setUserData({
      ...userData,
      countryCode: e.target.value,
    });
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setUserData({
  //         ...userData,
  //         profilePic: reader.result,
  //       });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    console.log("Updated Profile:", userData);
    setIsEditing(false);
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Sidebar */}
      {/* <div
        className={`fixed top-0 left-0 z-50 h-screen bg-accent shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0 w-64`}
      >
        <div className='p-4 flex justify-between items-center border-b'>
          <h2 className='text-lg font-bold text-gray-800'>Student Portal</h2>
          <button
            className='md:hidden text-gray-600 hover:text-gray-800'
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className='w-6 h-6' />
          </button>
        </div>
        <div className='p-4 text-center'>
          <img
            src={userData.profilePic}
            alt='Profile'
            className='w-24 h-24 rounded-full mx-auto mb-4 object-cover'
          />
          <h3 className='text-lg font-semibold text-gray-700'>
            {userData.name}
          </h3>
          <label
            htmlFor='profile-pic'
            className='text-green-600 cursor-pointer hover:underline text-sm'
          >
            Edit Profile Picture
          </label>
          <input
            type='file'
            id='profile-pic'
            accept='image/*'
            className='hidden'
            onChange={handleFileChange}
          />
        </div>
        <nav className='mt-6'>
          <div className=' flex flex-col justify-between w-full h-[455px] items-start '>
            <ul>
              <li className='py-3 px-4 text-gray-700 hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                Dashboard
              </li>
              <li className='py-3 px-4 text-gray-700 hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                Courses
              </li>
              <li className='py-3 px-4 text-gray-700 hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                Settings
              </li>
            </ul>
            <ul>
              <li className='py-3 px-4 text-gray-700 hover:bg-gray-100 w-full rounded-lg flex items-center justify-between cursor-pointer'>
                Logout
                <LogOut className='w-5 h-5 text-gray-500' />
              </li>
            </ul>
          </div>
        </nav>
      </div> */}

      {/* Main Dashboard Area */}
      <div className='flex-1'>
        {/* Mobile Menu Button */}
        <div className='p-4 md:hidden bg-white shadow-md'>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className='text-gray-600 hover:text-gray-800'
          >
            <Menu className='w-6 h-6' />
          </button>
        </div>

        {/* Profile Page */}
        <div className='p-4 md:p-8 mt-6'>
          <div className='max-w-lg mx-auto bg-white shadow-md rounded-lg p-6'>
            <h2 className='text-2xl font-bold text-center mb-6'>
              My Dashboard
            </h2>
            <form className='space-y-6'>
              {/* Name */}
              <div className='relative'>
                <label className='block text-gray-600 mb-1'>Name</label>
                <div className='flex items-center'>
                  <User className='text-green-600 w-5 h-5 mr-3' />
                  <input
                    type='text'
                    name='name'
                    value={userData.name}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`w-full p-2 border rounded-lg ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-green-600"
                        : "bg-gray-100"
                    }`}
                  />
                </div>
              </div>
              {/* Email */}
              <div className='relative'>
                <label className='block text-gray-600 mb-1'>Email</label>
                <div className='flex items-center'>
                  <Mail className='text-green-600 w-5 h-5 mr-3' />
                  <input
                    type='email'
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`w-full p-2 border rounded-lg ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-green-600"
                        : "bg-gray-100"
                    }`}
                  />
                </div>
              </div>
              {/* Phone */}
              <div className='relative'>
                <label className='block text-gray-600 mb-1'>Phone</label>
                <div className='flex items-center gap-2'>
                  <Phone className='text-green-600 w-5 h-5' />
                  <div
                    name='countryCode'
                    value={userData.countryCode}
                    onChange={handleCountryCodeChange}
                    disabled={!isEditing}
                    className={`p-2 border rounded-lg ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-green-600"
                        : "bg-gray-100"
                    }`}
                  >
                    <div>NGN</div>
                    {/* {countryCodes.map((country) => (
                    ))} */}
                  </div>
                  <input
                    type='text'
                    name='phone'
                    value={userData.phone}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`flex-grow p-2 border rounded-lg ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-green-600"
                        : "bg-gray-100"
                    }`}
                  />
                </div>
              </div>
              {/* Company */}
              <div className='relative'>
                <label className='block text-gray-600 mb-1'>Company</label>
                <div className='flex items-center'>
                  <Briefcase className='text-green-600 w-5 h-5 mr-3' />
                  <input
                    type='text'
                    name='company'
                    value={userData.company}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`w-full p-2 border rounded-lg ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-green-600"
                        : "bg-gray-100"
                    }`}
                  />
                </div>
              </div>
              {/* Company */}
              <div className='relative'>
                <label className='block text-gray-600 mb-1'>Company</label>
                <div className='flex items-center'>
                  <Briefcase className='text-green-600 w-5 h-5 mr-3' />
                  <input
                    type='text'
                    name='company'
                    value={userData.company}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`w-full p-2 border rounded-lg ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-green-600"
                        : "bg-gray-100"
                    }`}
                  />
                </div>
              </div>
              {/* Users */}
              {/* <div>
                <Users />
              </div> */}
              <div className=' flex justify-center items-center'>
                <article className=' flex flex-col gap-4 justify-center items-center'>
                  <h2>Subscription</h2>
                  {userData?.status === true ? (
                    <button
                      type='button'
                      className='bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition'
                    >
                      {/* <Edit2 className='inline w-5 h-5 mr-2' /> */}
                      {userData?.status}
                    </button>
                  ) : (
                    <p>You are Subscribed</p>
                  )}
                </article>
              </div>

              {/* Action Buttons */}
              <div className='flex justify-end space-x-4'>
                {isEditing ? (
                  <button
                    type='button'
                    onClick={handleSave}
                    className='bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition'
                  >
                    <Save className='inline w-5 h-5 mr-2' />
                    Save
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={toggleEdit}
                    className='bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition'
                  >
                    <Edit2 className='inline w-5 h-5 mr-2' />
                    Edit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
