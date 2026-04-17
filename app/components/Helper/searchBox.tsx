import React from 'react'
import {  FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

function SearchBox() {
  const fields = [
    { label: 'Location', placeholder: 'Where are you going?', icon: <FaMap className='text-blue-600 ' /> },
    { label: 'Start Date', placeholder: 'dd/mm/yyyy' , icon: <FaCalendarWeek className='text-blue-600' />},
    { label: 'End Date', placeholder: 'dd/mm/yyyy', icon: <FaCalendarWeek className='text-blue-600' /> },
    { label: 'Guests', placeholder: 'Number of guests', icon: <FaUserGroup className=' text-blue-600' /> },
  ]

  return (
    <div className='mx-auto   w-full max-w-6xl p-4 sm:p-6 lg:p-8 '>
      <div className='bg-white rounded-xl shadow-lg p-10 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {fields.map((field) => (
          <label key={field.label} className='flex flex-col gap-2 w-full'>
            <span className='text-sm font-semibold text-slate-700'>{field.label}</span>
            <div className='flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2'>
           {field.icon}
              <input
                type='text'
                placeholder={field.placeholder}
                className='w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500'
              />
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}

export default SearchBox