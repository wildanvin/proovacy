import React from 'react'
import {
  Shield,
  Settings,
  Home,
  Users,
  Wallet,
  Bell,
  ExternalLink,
} from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='flex h-screen bg-gray-900'>
      {/* Sidebar */}
      <div className='w-64 bg-gray-800 border-r border-gray-700'>
        <div className='flex items-center justify-center h-16 border-b border-gray-700'>
          <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
            Proovacy
          </span>
        </div>

        <nav className='mt-8'>
          <div className='px-4 space-y-2'>
            <button className='flex items-center w-full px-4 py-2 text-gray-300 rounded-lg bg-gray-700'>
              <Home className='w-5 h-5 mr-4' />
              Dashboard
            </button>
            <button className='flex items-center w-full px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors'>
              <Shield className='w-5 h-5 mr-4' />
              Verifications
            </button>
            <button className='flex items-center w-full px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors'>
              <Users className='w-5 h-5 mr-4' />
              Referrals
            </button>
            <button className='flex items-center w-full px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors'>
              <Wallet className='w-5 h-5 mr-4' />
              Wallet
            </button>
            <button className='flex items-center w-full px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors'>
              <Settings className='w-5 h-5 mr-4' />
              Settings
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className='flex-1 overflow-auto'>
        {/* Top Header */}
        <header className='bg-gray-800 border-b border-gray-700 h-16 flex items-center justify-between px-6'>
          <h1 className='text-xl text-gray-200'>Dashboard</h1>
          <div className='flex items-center space-x-4'>
            <button className='p-2 text-gray-400 hover:text-gray-200'>
              <Bell className='w-5 h-5' />
            </button>
            <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full'></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className='p-6'>
          {/* Stats Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
              <div className='flex items-center justify-between'>
                <h3 className='text-gray-400'>Verification Status</h3>
                <Shield className='w-5 h-5 text-purple-400' />
              </div>
              <div className='mt-4'>
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                  <span className='text-gray-200'>Twitter Verified</span>
                </div>
                <div className='flex items-center space-x-2 mt-2'>
                  <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                  <span className='text-gray-200'>Telegram Verified</span>
                </div>
              </div>
            </div>

            <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
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

            <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
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
            <div className='p-6 border-b border-gray-700'>
              <h2 className='text-xl text-gray-200'>Recent Activity</h2>
            </div>
            <div className='p-6'>
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
