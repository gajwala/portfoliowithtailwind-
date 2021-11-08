import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i91ygif",
        "template_xa7cpnh",
        e.target,
        "user_bgOaFYMRH7ZqRjCFgtodv"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(result.text, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        }
      );
    e.target.reset();
  };

  return (
    <section className="pt-20 pb-36 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Contact</h1>
          <p className="pt-2">Get in touch with me</p>
        </div>
      </div>
      <div className="mt-16 relative max-w-4xl mx-auto">
        <div
          className="
              absolute
              z-10
              inset-0
              bg-gradient-to-r
              from-cyan-400
              to-emerald-400
              shadow-lg
              transform
              -skew-y-6
              sm:skew-y-0 sm:-rotate-6 sm:rounded-lg
            "
        ></div>
        <div
          className="
              relative
              z-20
              bg-white
              rounded-md
              shadow-md
              p-12
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
            "
        >
          <form onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="
                    border border-gray-200
                    outline-none
                    px-4
                    py-2
                    rounded-md
                    hover:border-gray-400
                    focus:border-gray-400
                  "
                required
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                required
                className="
                    border border-gray-200
                    outline-none
                    px-4
                    py-2
                    rounded-md
                    hover:border-gray-400
                    focus:border-gray-400
                  "
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="
                    border border-gray-200
                    outline-none
                    px-4
                    py-2
                    rounded-md
                    hover:border-gray-400
                    focus:border-gray-400
                    md:col-span-2
                  "
                required
              />
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                required
                className="
                    border border-gray-200
                    outline-none
                    px-4
                    py-2
                    rounded-md
                    hover:border-gray-400
                    focus:border-gray-400
                    md:col-span-2
                  "
              ></textarea>
            </div>
            <button
              type="submit"
              className="
                  transition
                  duration-500
                  ease-in-out
                  transform
                  hover:-translate-y-1 hover:scale-110
                  inline-block
                  w-auto
                  mt-4
                  px-6
                  py-2
                  bg-gradient-to-r
                  from-cyan-400
                  to-emerald-400
                  rounded-md
                  shadow-md
                  text-sm
                  font-bold
                  text-white
                "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
