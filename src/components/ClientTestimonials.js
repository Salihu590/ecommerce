import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Pat Reinger",
    title: "National Program Producer",
    image: "https://res.cloudinary.com/dsci2gspy/image/upload/v1755532256/user1_xjr1tv.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec ornare velit cursus sed. Cras in consectetur arcu, et auctor mi. Sed purus orci, sodales non metus vel, cursus bibendum turpis. Nam sit amet congue orci. Sed a ligula in velit porttitor consequat. Duis massa est, elementum id lectus ac, viverra dictum turpis. Pellentesque mollis vestibulum neque vel molestie. Nullam quis lacinia ipsum. Fusce at sapien risus.",
  },
];

const satisfiedUsers = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dsci2gspy/image/upload/v1755532256/user1_xjr1tv.png",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsci2gspy/image/upload/v1755532320/user2_revkpd.png",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dsci2gspy/image/upload/v1755532323/user3_wavxtt.png",
  },
];

const ClientTestimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-100 to-white"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-pink-100 to-white"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-100 to-white"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-pink-100 to-white"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
          <div className="relative flex justify-center items-center min-h-[500px]">
            <motion.div
              className="absolute bg-pink-100 rounded-full z-0"
              style={{
                width: "clamp(300px, 45vw, 450px)",
                height: "clamp(300px, 45vw, 450px)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <motion.img
              src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755532446/delivery_guy_vfzw7t.png"
              alt="Delivery Guy"
              className="relative z-10 w-full max-w-sm object-contain"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />

            <motion.div
              className="absolute bottom-4 lg:bottom-0 translate-y-4 lg:translate-y-12  bg-white p-6 md:p-8 rounded-xl shadow-xl flex flex-col items-center sm:items-start min-w-[280px] sm:min-w-[320px] max-w-[90%] sm:max-w-xs z-20"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <p className="font-bold text-gray-800 text-lg md:text-xl mb-3">
                Our Satisfied User
              </p>
              <div className="flex -space-x-2 overflow-hidden mb-2">
                {satisfiedUsers.map((user) => (
                  <img
                    key={user.id}
                    className="inline-block h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-white object-cover"
                    src={user.image}
                    alt={`User ${user.id}`}
                  />
                ))}
                <span className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-200 text-gray-700 text-sm md:text-base font-bold ring-2 ring-white">
                  +15k
                </span>
              </div>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <p className="text-sm text-gray-500 text-center sm:text-left">
                Trusted by thousands of happy customers!
              </p>
            </motion.div>
          </div>

          <div className="text-center lg:text-left">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              What Our Clients Say{" "}
              <span className="inline-block bg-black text-white px-4 py-2 rounded-lg ml-2">
                About Us
              </span>
            </motion.h2>

            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-center lg:justify-start mt-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-14 w-14 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-md text-gray-500">
                      {testimonial.title}
                    </div>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.039a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.039a1 1 0 00-1.175 0l-2.817 2.039c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="flex justify-center lg:justify-start mt-8 space-x-4">
              <button className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
