"use client";

import { useEffect, useState } from "react";
import { Edit2, Save, Mail, Phone, User, Briefcase, Menu } from "lucide-react";
import Users from "../components/_user/Users";

import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { user, retrieveUser } = useAuth();
  const [userData, setUserData] = useState({
    userid: "", // Default to localStorage for `userid`
    username: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "234567890",
    companyname: "Acme Corp",
    status: "Subscribe", // Default to "Subscribe"
    api: "demo-api-key", // Placeholder for API Key
    amount: "5000", // Placeholder for amount
    start_date: "2024-01-01", // Placeholder for start date
    end_date: "2024-12-31", // Placeholder for end date
  });

  useEffect(() => {
    const userid = localStorage.getItem("userId"); // Safely access localStorage
    if (userid) {
      setUserData((prevState) => ({
        ...prevState,
        userid, // Update the `userid` from localStorage
      }));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const retrievedData = {
        userid: localStorage.getItem("userId"),
      };

      const response = await retrieveUser(retrievedData);
      if (response?.data) {
        setUserData(response.data); // Store full data for easier access
        console.log(response.data);
      } else {
        throw new Error("User data not found in response");
      }
    };

    fetchData();
  }, []);

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

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    console.log("Updated Profile:", userData);
    setIsEditing(false);
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
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
                    value={userData.username}
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
                    value={userData.companyname}
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
                    value={userData.companyname}
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
                <article className=' flex flex-col gap-6 justify-center items-center'>
                  <h2>Subscription</h2>
                  {userData?.status === true ? (
                    <div className=' flex flex-col gap-2 justify-center items-center'>
                      <p>You are Subscribed</p>
                      {/* <button
                        type='button'
                        className='bg-gray-600 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 transition'
                      >
                        {userData?.status}
                      </button> */}
                      {/* <Edit2 className='inline w-5 h-5 mr-2' /> */}
                      {/* New Section */}
                      <div className='mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg'>
                        <h3 className='text-lg font-bold mb-4'>
                          Subscription Details
                        </h3>
                        <div className='space-y-2'>
                          <p>
                            <span className='font-semibold'>API Key:</span>{" "}
                            {userData.api}
                          </p>
                          <p>
                            <span className='font-semibold'>Amount Paid:</span>{" "}
                            ₦{userData.amount}
                          </p>
                          <p>
                            <span className='font-semibold'>
                              Subscription Start:
                            </span>{" "}
                            {userData.start_date}
                          </p>
                          <p>
                            <span className='font-semibold'>
                              Subscription End:
                            </span>{" "}
                            {userData.end_date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=' flex flex-col gap-2 justify-center items-center'>
                      <p>You are Not Subscribed</p>
                      <button
                        type='button'
                        className='bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition'
                      >
                        {/* <Edit2 className='inline w-5 h-5 mr-2' /> */}
                        {userData?.status}
                      </button>
                    </div>
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
