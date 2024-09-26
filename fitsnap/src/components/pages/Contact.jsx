import React from 'react'
import { useForm } from "react-hook-form";
import FitSnapTheme from '../../utils/FitsnapTheme';

function Contact({darkMode}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <div id='contact' className={`p-32 flex justify-center items-center gap-20 ${darkMode ? 'bg-customDark text-customWhite' : 'bg-customLight text-customBlack'}`}>
      <div className='w-1/2 flex flex-col gap-10'>
        <h1 className='text-5xl font-bold'>WANT TO INSTALL FITSNAP AI CAMERA IN YOUR GYM?</h1>
        <h4 className='text-2xl font-semibold'>Please submit your details.</h4>
      </div>
      <div className='w-1/2'>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-14">
        {/* Name of Gym */}
        <div className="relative py-4">
          <input
            id="gymName"
            type="text"
            {...register("gymName", { required: "Gym Name is required" })}
            className={`peer w-full border-b-2 text-lg ${darkMode?"border-customWhite":"border-gray-800"} bg-transparent py-2 ${darkMode?"text-customWhite":"text-gray-900"} focus:outline-none focus:border-black-800`}
            placeholder=" " 
          />
          <label
            htmlFor="gymName"
            className={`absolute left-0 top-1 ${darkMode?"text-customWhite":"text-gray-800"} peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl ${darkMode?"peer-placeholder-shown:text-customWhite":"peer-placeholder-shown:text-gray-800"} peer-focus:top-0 peer-focus:text-sm peer-focus:text-black-800 transition-all `}
          >
            Name of Gym
          </label>
          {errors.gymName && (
            <p className="text-red-800 font-semibold text-sm mt-1">{errors.gymName.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="relative py-4">
          <input
            id="location"
            type="text"
            {...register("location", { required: "Location is required" })}
            className={`peer w-full border-b-2 ${darkMode?"border-customWhite":"border-gray-800"} bg-transparent py-2 ${darkMode?"text-customWhite":"text-gray-900"} focus:outline-none focus:border-black-800`}
            placeholder=" "
          />
          <label
            htmlFor="location"
            className={`absolute left-0 top-1 ${darkMode?"text-customWhite":"text-gray-800"} peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl ${darkMode?"peer-placeholder-shown:text-customWhite":"peer-placeholder-shown:text-gray-800"} peer-focus:top-0 peer-focus:text-sm peer-focus:text-black-800 transition-all`}
          >
            Location
          </label>
          {errors.location && (
            <p className="text-red-800 font-semibold text-sm mt-1">{errors.location.message}</p>
          )}
        </div>

        {/* Your Name */}
        <div className="relative py-4">
          <input
            id="yourName"
            type="text"
            {...register("yourName", { required: "Name is required" })}
            className={`peer w-full border-b-2 ${darkMode?"border-customWhite":"border-gray-800"} bg-transparent py-2 ${darkMode?"text-customWhite":"text-gray-900"} focus:outline-none focus:border-black-800`}
            placeholder=" "
          />
          <label
            htmlFor="yourName"
            className={`absolute left-0 top-1 ${darkMode?"text-customWhite":"text-gray-800"} peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl ${darkMode?"peer-placeholder-shown:text-customWhite":"peer-placeholder-shown:text-gray-800"} peer-focus:top-0 peer-focus:text-sm peer-focus:text-black-800 transition-all`}
          >
            Your Name
          </label>
          {errors.yourName && (
            <p className="text-red-800 font-semibold text-sm mt-1">{errors.yourName.message}</p>
          )}
        </div>

        {/* Contact */}
        <div className="relative py-4">
          <input
            id="contact"
            type="text"
            {...register("contact", { required: "Contact is required" })}
            className={`peer w-full border-b-2 ${darkMode?"border-customWhite":"border-gray-800"} bg-transparent py-2 ${darkMode?"text-customWhite":"text-gray-900"} focus:outline-none focus:border-black-800`}
            placeholder=" "
          />
          <label
            htmlFor="contact"
            className={`absolute left-0 top-1 ${darkMode?"text-customWhite":"text-gray-800"} peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl ${darkMode?"peer-placeholder-shown:text-customWhite":"peer-placeholder-shown:text-gray-800"} peer-focus:top-0 peer-focus:text-sm peer-focus:text-black-800 transition-all`}
          >
            Contact
          </label>
          {errors.contact && (
            <p className="text-red-800 font-semibold text-sm mt-1">{errors.contact.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="relative py-4">
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
            className={`peer w-full border-b-2 ${darkMode?"border-customWhite":"border-gray-800"} bg-transparent py-2 ${darkMode?"text-customWhite":"text-gray-900"} focus:outline-none focus:border-black-800`}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={`absolute left-0 top-1 ${darkMode?"text-customWhite":"text-gray-800"} peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl ${darkMode?"peer-placeholder-shown:text-customWhite":"peer-placeholder-shown:text-gray-800"} peer-focus:top-0 peer-focus:text-sm peer-focus:text-black-800 transition-all`}
          >
            Email
          </label>
          {errors.email && (
            <p className="text-red-800 font-semibold text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Contact Us Button */}
        <div>
          <button
            type="submit"
            className={`w-fit text-lg ${darkMode?"bg-customWhite text-customBlack":"bg-customBlack text-customWhite"}  py-3 rounded-full px-4  ${darkMode?"hover:bg-gray-300":"hover:bg-gray-800"} `}
          >
            Contact Us
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default FitSnapTheme(Contact)
