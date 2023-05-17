const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#08192f] flex justify-center items-center p-4"
    >
      {/* SendGrid */}
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#19A7CE] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Send me an email - presylord@gmail.com
          </p>
        </div>
        <input
          type="text"
          className=" bg-[#ccd6f6] p-2 rounded-lg	"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          className="my-4 p-2 bg-[#ccd6f6] rounded-lg	"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-lg	"
          placeholder="Message"
          name="message"
          rows="10"
        />
        <button className="text-white border-2 hover:bg-[#19A7CE] hover:border-[#19A7CE] px-4 py-3 my-8 mx-auto flex items-center">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;
