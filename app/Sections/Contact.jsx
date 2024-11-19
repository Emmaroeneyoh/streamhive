"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Button from "../components/Button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+2341234567890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: " gleefulmarketing@gmail.com",
  },
  // {
  //   icon: <FaMapMarkerAlt />,
  //   title: "Address",
  //   value: "New Street No. 2",
  // },
];

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetMessage = () => {
    setName("");
    setEmail("");
    // setNumber("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      // from_number: number,
      to_name: "Gleeful Digital Marketing",
      message,
    };

    setIsLoading(true);

    emailjs
      .send(
        "service_tfoxu04",
        "template_mymerp2",
        templateParams,
        "vqos85Xl007ETwDsz"
      )
      .then(
        () => {
          notifySuccess();
          resetMessage();
          setIsLoading(false);
          console.log("SUCCESS!");
        },
        (error) => {
          notifyError();
          setIsLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  const notifySuccess = () => toast.success("Your Message Has Been Sent!");

  const notifyError = () => toast.error("Failed To Send Your Message!");

  return (
    <div className=' container mx-auto'>
      <ToastContainer />
      <div className=' flex flex-col-reverse xl:flex-row gap-[30px]  '>
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className=' flex flex-col gap-6 p-10 border border-secondary rounded-xl'
          >
            <h3 className=' text-4xl'>Let's Work Together</h3>
            <p>
              Ready to take your digital marketing journey to the next level?
              Connect with us to learn more about our services, join our
              community, and explore exciting opportunities for professional
              development.
            </p>
            {/* <div className=' flex flex-col gap-6 lg:grid lg:grid-cols-2'></div> */}
            <input
              type='text'
              name='user_name'
              placeholder='Full Name *'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='hover:border border-primary bg-slate-50 p-2 rounded-lg'
              required
            />
            <input
              type='email'
              name='user_email'
              placeholder='Email Address *'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='hover:border border-primary bg-slate-50 p-2 rounded-lg'
              required
            />
            {/* <input
              type='phone'
              name='phone'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='Phone Number'
              className='hover:border border-primary bg-slate-50 p-2 rounded-lg'
            /> */}
            <textarea
              name='message'
              placeholder='Message *'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='hover:border border-primary h-[120px] bg-slate-50 p-2 rounded-lg'
              required
            ></textarea>
            <div
              className=' flex justify-start items-center text-white'
              type='submit'
              value='Send'
            >
              <Button size={"229px"} style={"solid"}>
                {!isLoading ? (
                  <div className=' flex justify-center items-center'>
                    Submit
                    <FiArrowRight />
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </Button>
            </div>
          </form>
        </div>
        <div>
          <ul className=' flex flex-col gap-10'>
            {info.map((item, index) => {
              return (
                <li key={index} className=' flex gap-6 items-center'>
                  <div className=' w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-primary bg-secondary flex items-center rounded-lg justify-center '>
                    <div className=' text-[28px] text-white'>{item.icon}</div>
                  </div>
                  <div className=' flex-1'>
                    <p>{item.title} </p>
                    <h3 className=' text-xl'>{item.value} </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
