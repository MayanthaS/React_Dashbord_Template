import React from "react";
import { Filter, Menu, Plus, Search } from "lucide-react";
function Header() {
  return (
    <div
      className="bg-white/80 dark:bg-slate-900/80  backdrop-blur-xl border-b 
    border-slate-200/50 dark:border-slate-700/50 px-6 py-4"
    >
      <div className="flex item-center justify-between ">
        {/* Left section*/}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300">
            <Menu className="w-5 h-5 " />
          </button>
          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-600 dark:text-slate-300">
              Dashbord
            </h1>
            <p className="">
              Welcome back , Mayantha Sapumal's What's happening today
            </p>
          </div>
        </div>
        {/* Middle section*/}
        <div className="flex-1  max-w-md mx-8  my-auto ">
          <div className="relative ">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                type="text"
                placeholder="Search Anything ..."
                className="w-full  pl-10 pr-4 py-2 rounded-lg border 
                            border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 
                            text-slate-600 dark:text-slate-300 focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 p-2 rounded-lg transform -translate-y-1/2 text-slate-600 dark:text-slate-300">
                    <Filter className="w-5 h-5  " />
                </button>  
          </div>
        </div>
        {/* Right section*/}
        <div className="flex items-center space-x-3">
            {/*Quick Actions */}
            <button className="hidden lg:flex  items-center space-x-2  py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600  text-while rounded-xl hover:shadow-lg transition-all">
                <Plus className="w-5 h-5 "/>
                <span className="text-sm  font-medium ">New</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
