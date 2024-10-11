"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    present: 60,
    absent: 24,
  },
  {
    name: 'Page B',
    present: 30,
    absent: 13,
  },
  {
    name: 'Page C',
    present: 20,
    absent: 98,
  },
  {
    name: 'Page D',
    present: 27,
    absent: 39,
  },
  {
    name: 'Page E',
    present: 18,
    absent: 48,
  },
  {
    name: 'Page F',
    present: 23,
    absent: 38,
  },
  {
    name: 'Page G',
    present: 34,
    absent: 43,
  },
];

const BarLineChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-[450px]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-bold'>Penyaluran</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"Lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar dataKey="absent" fill="#176AD1" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType='circle' radius={[10,10,0,0]}/>
          <Bar dataKey="present" fill="#fac852" activeBar={<Rectangle fill="gold" stroke="yellow" />} legendType='circle'radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarLineChart