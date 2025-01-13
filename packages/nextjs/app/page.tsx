import React from 'react'
import { Shield, Lock, Users } from 'lucide-react'

const Home = () => {
  return (
    <div className='flex items-center flex-col flex-grow pt-10 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
      {/* Header Section */}
      <div className='px-5'>
        <h1 className='text-center'>
          <span className='block text-2xl mb-2 text-gray-400'>Welcome to</span>
          <span className='block text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
            Proovacy
          </span>
        </h1>
        <p className='text-center text-lg mt-4 text-gray-300 max-w-2xl'>
          Your private bridge to verified social identity. Connect your Twitter
          and Telegram accounts with zero-knowledge proofs.
        </p>
      </div>

      {/* Social Connection Cards */}
      <div className='w-full mt-16 px-8 py-12'>
        <div className='flex justify-center items-center gap-12 flex-col sm:flex-row max-w-6xl mx-auto'>
          <div className='flex flex-col bg-gray-800 relative px-10 py-10 text-center items-center max-w-xs rounded-3xl border border-gray-700 shadow-xl hover:shadow-2xl transition-shadow hover:border-purple-500/30'>
            <div className='absolute -top-6 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-2xl'>
              <Shield className='w-8 h-8 text-white' />
            </div>
            <h3 className='mt-8 text-xl font-semibold text-gray-200 mb-4'>
              Twitter Verification
            </h3>
            <p className='text-gray-400'>
              Connect your Twitter account securely using zkTLS proof generation
            </p>
            <button className='mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors'>
              Connect Twitter
            </button>
          </div>

          <div className='flex flex-col bg-gray-800 relative px-10 py-10 text-center items-center max-w-xs rounded-3xl border border-gray-700 shadow-xl hover:shadow-2xl transition-shadow hover:border-purple-500/30'>
            <div className='absolute -top-6 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl'>
              <Lock className='w-8 h-8 text-white' />
            </div>
            <h3 className='mt-8 text-xl font-semibold text-gray-200 mb-4'>
              Telegram Verification
            </h3>
            <p className='text-gray-400'>
              Verify your Telegram identity privately with zero-knowledge proofs
            </p>
            <button className='mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors'>
              Connect Telegram
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='w-full px-8 py-16'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center text-gray-200 mb-12'>
            How It Works
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors'>
              <Users className='w-12 h-12 text-purple-400 mb-4' />
              <h3 className='text-xl font-semibold text-gray-200 mb-2'>
                Connect Accounts
              </h3>
              <p className='text-gray-400'>
                Link your social media accounts securely and privately
              </p>
            </div>
            <div className='flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors'>
              <Shield className='w-12 h-12 text-blue-400 mb-4' />
              <h3 className='text-xl font-semibold text-gray-200 mb-2'>
                Verify Identity
              </h3>
              <p className='text-gray-400'>
                Generate zero-knowledge proofs of account ownership
              </p>
            </div>
            <div className='flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors'>
              <Lock className='w-12 h-12 text-purple-400 mb-4' />
              <h3 className='text-xl font-semibold text-gray-200 mb-2'>
                Access Network
              </h3>
              <p className='text-gray-400'>
                Join the trusted network and invite others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
