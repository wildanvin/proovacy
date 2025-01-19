'use client'
import React, { useState } from 'react'
import {
  Shield,
  Settings,
  Home,
  Users,
  Wallet,
  Bell,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const verificationStatuses = [
    { platform: 'Twitter', verified: true },
    { platform: 'Telegram', verified: false },
  ]

  return (
    <div className='flex flex-col h-screen bg-gray-900 lg:flex-row'>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20'
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-200 ease-in-out z-30 lg:relative lg:transform-none ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className='flex items-center justify-between h-16 px-6 border-b border-gray-700'>
          <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
            Proovacy
          </span>
          <button className='lg:hidden text-gray-400' onClick={toggleSidebar}>
            <X className='w-5 h-5' />
          </button>
        </div>

        <nav className='mt-8'>
          <div className='px-4 space-y-2'>
            {[
              { icon: Home, label: 'Dashboard', active: true },
              { icon: Shield, label: 'Verifications' },
              { icon: Users, label: 'Referrals' },
              { icon: Wallet, label: 'Wallet' },
              { icon: Settings, label: 'Settings' },
            ].map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                className={`flex items-center w-full px-4 py-2 rounded-lg transition-colors ${
                  active
                    ? 'text-gray-300 bg-gray-700'
                    : 'text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Icon className='w-5 h-5 mr-4' />
                {label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col min-w-0'>
        {/* Top Header */}
        <header className='bg-gray-800 border-b border-gray-700 h-16 flex items-center justify-between px-4 lg:px-6'>
          <div className='flex items-center space-x-4'>
            <button className='text-gray-400 lg:hidden' onClick={toggleSidebar}>
              <Menu className='w-5 h-5' />
            </button>
            <h1 className='text-xl text-gray-200'>Dashboard</h1>
          </div>
          <div className='flex items-center space-x-4'>
            <button className='p-2 text-gray-400 hover:text-gray-200'>
              <Bell className='w-5 h-5' />
            </button>
            <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full'></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className='flex-1 overflow-auto p-4 lg:p-6'>
          {/* Stats Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6'>
            {/* Verification Status Card */}
            <div className='bg-gray-800 rounded-xl p-4 lg:p-6 border border-gray-700'>
              <div className='flex items-center justify-between'>
                <h3 className='text-gray-400'>Verification Status</h3>
                <Shield className='w-5 h-5 text-purple-400' />
              </div>
              <div className='mt-4'>
                {verificationStatuses.map(({ platform, verified }) => (
                  <div
                    key={platform}
                    className='flex items-center space-x-2 mt-2 first:mt-0'
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${verified ? 'bg-green-400' : 'bg-red-400'}`}
                    ></div>
                    <span className='text-gray-200'>
                      {platform} {verified ? 'Verified' : 'Not Verified'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Referral Progress Card */}
            <div className='bg-gray-800 rounded-xl p-4 lg:p-6 border border-gray-700'>
              <div className='flex items-center justify-between'>
                <h3 className='text-gray-400'>Referral Progress</h3>
                <Users className='w-5 h-5 text-blue-400' />
              </div>
              <div className='mt-4'>
                <span className='text-2xl text-gray-200'>1/2</span>
                <div className='w-full bg-gray-700 rounded-full h-2 mt-2'>
                  <div className='bg-gradient-to-r from-purple-500 to-blue-500 w-1/2 h-2 rounded-full'></div>
                </div>
              </div>
            </div>

            {/* Wallet Status Card */}
            <div className='bg-gray-800 rounded-xl p-4 lg:p-6 border border-gray-700'>
              <div className='flex items-center justify-between'>
                <h3 className='text-gray-400'>Wallet Status</h3>
                <Wallet className='w-5 h-5 text-purple-400' />
              </div>
              <div className='mt-4'>
                <span className='text-gray-200'>Active</span>
                <div className='flex items-center space-x-2 mt-2'>
                  <span className='text-gray-400 text-sm'>0x1234...5678</span>
                  <ExternalLink className='w-4 h-4 text-gray-400' />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className='bg-gray-800 rounded-xl border border-gray-700'>
            <div className='p-4 lg:p-6 border-b border-gray-700'>
              <h2 className='text-xl text-gray-200'>Recent Activity</h2>
            </div>
            <div className='p-4 lg:p-6'>
              <div className='space-y-4'>
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className='flex items-center justify-between py-3 border-b border-gray-700 last:border-0'
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center'>
                        <Shield className='w-4 h-4 text-purple-400' />
                      </div>
                      <div>
                        <p className='text-gray-200'>
                          Twitter Verification Completed
                        </p>
                        <p className='text-sm text-gray-400'>2 hours ago</p>
                      </div>
                    </div>
                    <button className='text-purple-400 hover:text-purple-300'>
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
