"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/navbar';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [stream, setStream] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()
  const apiurl = process.env.NEXT_PUBLIC_API_URL
  const handleSubmit = async (event) => {
    event.preventDefault();
    

    console.log('Submitted form data:');
    console.log(`Name: ${name}`);
    console.log(`Phone Number: ${phoneNumber}`);
    console.log(`Stream: ${stream}`);
    event.preventDefault();
 
    if (!name || !phoneNumber) {
        alert("Name and image are required.");
        return;
    }

    try {
        const res = await fetch(apiurl, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ name, phoneNumber, stream}),
        });

        if (res.ok) {
            router.push("/");
        } else {
            throw new Error("Failed to create a Product");
        }
    } catch (error) {
        console.log(error);
    }
    setName('');
    setPhoneNumber('');
    setStream('');
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 5000); // Reset form after 5 seconds
  };
  

  return (<>
    <Navbar></Navbar>
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white rounded-lg p-6 shadow-md max-w-md mx-auto">
  <h2 className="text-2xl font-bold text-center text-primary mb-4">Contact Us</h2>
  <div className="flex flex-col">
    <label htmlFor="name" className="text-gray-700 font-medium mb-2">
      Your Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="rounded-md border px-4 py-2 focus:outline-none focus:border-primary"
      required
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="phone" className="text-gray-700 font-medium mb-2">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      className="rounded-md border px-4 py-2 focus:outline-none focus:border-primary"
      required
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="stream" className="text-gray-700 font-medium mb-2">
      Stream
    </label>
    <select
      id="stream"
      name="stream"
      value={stream}
      onChange={(e) => setStream(e.target.value)}
      className="rounded-md border px-4 py-2 focus:outline-none focus:border-primary"
      required
    >
      <option value="">Select Stream</option>
      <option value="PCM">PCM</option>
      <option value="PCB">PCB</option>
      <option value="PCMB">PCMB</option>
    </select>
  </div>
  <button
    type="submit"
    className="bg-primary text-black font-bold py-2 px-4 rounded-md hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
  >
    Submit
  </button>
  {isSubmitted && (
    <p className="text-green-500 text-center mt-4">Form submitted successfully!</p>
  )}
</form>
    </>
  );
};

export default ContactForm;
