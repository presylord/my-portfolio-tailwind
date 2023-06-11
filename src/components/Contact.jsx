import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    // console.log(form.current);
    toast.loading('Sending message...');

    emailjs
      .sendForm(
        "service_qzmb9o4",
        "template_h6irpby",
        form.current,
        "_9fyXI9e0Hj0-eod9"
      )
      .then(
        (result) => {
          // console.log("sent", result);
          form.current.reset();
          toast.dismiss()
          toast.success('Message successfully sent!', { duration: 6000 }
          )

        },
        (error) => {
          // show the user an error
          // console.log(error);
          form.current.reset();
          toast.dismiss()
          toast.error('Encountered an error.', { duration: 6000 })

        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#08192f] flex justify-center items-center p-4"
    >
      {/* EmailJS */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
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
          className="  p-2 rounded-lg	"
          placeholder="Name"
          name="from_name"
          required
        />
        <input
          type="email"
          className="my-4 p-2  rounded-lg	"
          placeholder="Email"
          name="reply_to"
          required
        />
        <textarea
          className=" p-2 rounded-lg	"
          placeholder="Message"
          name="message"
          rows="10"
          required
        />
        <button className="text-white border-2 hover:bg-[#19A7CE] hover:border-[#19A7CE] px-4 py-3 my-8 mx-auto flex items-center">
          Contact Me
        </button>
      </form>
      <Toaster position="bottom-center" />

    </div>
  );
};

export default Contact;
