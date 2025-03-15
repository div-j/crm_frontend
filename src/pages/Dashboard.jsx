import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from './../components/Header';
import Statistics from './../components/Statistics';
import UsersTable from '../components/UsersTable';


export default function Dashboard() {
  return (
    <div className='flex'>
      <div className='w-[20%]'>
      <Sidebar />
      </div>
      <div className='w-[80%] p-5'>
        <Header />
        <Statistics />
        <UsersTable />
      </div>
              
    </div>
  )
}
