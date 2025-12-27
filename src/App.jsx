
import React from 'react'
import  Sidebar  from './components/Layout/Sidebar'
import Header from './components/Layout/header'
function App() {
  const [SidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('dashboard');
  return (
    <div className='min-h-screen bg-gradientto-br from-slate-50 via-blue-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 trasition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar collapsed={SidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!SidebarCollapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage} />
        <div className='flex-1 flex flex-col  overflow-hidden'>
        <Header/>
        </div>
      </div>
      
    </div>
  )
}

export default App
