'use client'

import { useEffect, useState } from 'react';
//import React from 'react'
//import { Menu, X, MapPin } from 'lucide-react'
import contact from '../../assets/Logo/contact.png';
import {v4 as uuidv4} from 'uuid';

const Contact=()=> {
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [userdata, setUserData] = useState("");
  // const [temporaryUserId, setTemporaryUserId] = useState('');
  console.log(isloggedin,userdata);
  // setTemporaryUserId(newUserId);
  

  const collectData=async ()=>{
    console.warn(name || userdata.name, email || userdata.email, number || userdata.number, message);
    let userid;
    if(isloggedin){
       userid = userdata._id;
    }else{
      const newUserId = uuidv4();
      userid = newUserId;
      console.log(userid);      
    }
    let result = await fetch('http://localhost:4000/contact',{
      method:'post',
      body:JSON.stringify({userid,name,email,number,message}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result = await result.json()
    console.warn(result);
    // localStorage.setItem("user", JSON.stringify(result));
    if(result)
    {
      // navigate('/')
    }


  }

  useEffect(()=>{

    const auth = localStorage.getItem('user');
    if(auth){

      const userid = JSON.parse(localStorage.getItem('user'))._id;
      if(userid){
        setIsLoggedIn(true);

        const userdata = JSON.parse(localStorage.getItem('user'));
        setUserData(userdata);
        console.log(userdata)
      }else{
        setIsLoggedIn(false);
        setUserData("");
      }
    }else{
      setIsLoggedIn(false);
      setUserData("");
    }  
  }, []);

  return (
    <>
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          {/* <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
              Share your thoughts
            </p>
          </div> */}
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Love to hear from you
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                        onChange={(e) => setName(e.target.value)}
                        value={isloggedin ? userdata.name || name : name}
                        // readOnly={isloggedin}
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={isloggedin ? userdata.email || email : email}
                      // readOnly={isloggedin}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                      onChange={(e) => setNumber(e.target.value)}
                      value={isloggedin ? userdata.number || number :number}
                      // readOnly={isloggedin}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Leave us a message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      cols={3}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={collectData}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src={contact}
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
    </>
  )
}
export default Contact;