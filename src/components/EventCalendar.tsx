"use client"
import { time } from 'console';
import { title } from 'framer-motion/client';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "lorem",
    time: "12:00 PM - 2:00 PM",
    description: "Bakudapa atau Basis Data Khusus DAK Fisik dan Dana Desa Provinsi Sulawesi Utara",
  },
  {
    id: 2,
    title: "lorem",
    time: "12:00 PM - 2:00 PM",
    description: "Bakudapa atau Basis Data Khusus DAK Fisik ",
  },
  {
    id: 3,
    title: "lorrm",
    time: "12:00 PM - 2:00 PM",
    description: "Bakudapa ",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md h-full'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>
      <div className='flex flex-col gap-4'>
        {events.map(event => (
          <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaYellow' 
          key={event.id}>
            <div className='flex items-center justify-between' >
              <h1 className='font-semibold text-gray-600'>{event.title}</h1>
              <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar