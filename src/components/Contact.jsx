import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#08192f] flex justify-center items-center p-4"
    >
      {/* SendGrid */}
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Send me an email</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
