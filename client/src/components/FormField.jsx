import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => (
  // return (
  <div>
    <div className='flex items-center gap-2 mb-2 '>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-grey-900 "
      >
        {labelName}
      </label>
      {
        isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#068270] py-1 px-2
              rounded-[5px] text-white">
            Surprise me
          </button>
        )
      }
    </div>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className="bg-gray  border border-gray-300 text-gray-900
        text-sm rounded-1g py-2 px-4 w-full focus:outline-none
        focus:ring-2 focus-ring-[#6469ff] rounded-xl"
    />
  </div>
);


export default FormField