
import React from 'react'
import  Sidebar  from './components/Layout/Sidebar'
import Header from './components/Layout/header'
import Dashboard from './components/Dashboard/Dashboard';
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
        <Header className={SidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed(!SidebarCollapsed)}/>

        <main className='flex-1 overflow-y-auto bg-transparent '>
          <div className='p-6 space-y-6 '>
            {currentPage === "dashboard" && <Dashboard />}
          </div>
        </main>
        </div>
      </div>
      
    </div>
  )
}

export default App
