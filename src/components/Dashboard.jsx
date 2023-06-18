import React from 'react'
import Topbar from './Topbar'
import Displaybar from './Displaybar'
import KanbanBoard from './KanbanBoard'

const Dashboard = () => {
  return (
    <div className='w-full'>
        <Topbar />
        <Displaybar />
        <KanbanBoard />
    </div>
  )
}

export default Dashboard