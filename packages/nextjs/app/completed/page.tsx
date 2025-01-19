import React from 'react'
import { Shield, CheckCircle, Wallet, Copy, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const Complete = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-200'>
      {/* Header */}
      <header className='bg-gray-800 border-b border-gray-700'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Setup Complete</h1>
            <span className='text-sm text-gray-400'>Step 3 of 3</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-8'>
        {/* Progress Steps */}
        <div className='flex items-center justify-center mb-12'>
          <div className='flex items-center'>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center'>
                <CheckCircle className='w-6 h-6 text-gray-900' />
              </div>
              <span className='text-sm mt-2 text-green-400'>Verification</span>
            </div>
            <div className='w-20 h-1 bg-green-500'></div>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center'>
                <Wallet className='w-6 h-6 text-gray-900' />
              </div>
              <span className='text-sm mt-2 text-green-400'>Wallet Setup</span>
            </div>
            <div className='w-20 h-1 bg-green-500'></div>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center'>
                <Shield className='w-6 h-6 text-gray-900' />
              </div>
              <span className='text-sm mt-2 text-purple-400'>Complete</span>
            </div>
          </div>
        </div>

        {/* Success Card */}
        <div className='bg-gray-800 rounded-xl border border-gray-700 shadow-xl'>
          <div className='p-8 text-center border-b border-gray-700'>
            <div className='w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Shield className='w-12 h-12 text-gray-900' />
            </div>
            <h2 className='text-2xl font-semibold'>
              Wallet Successfully Created!
            </h2>
            <p className='text-gray-400 mt-2'>
              Your secure wallet is ready to use
            </p>
          </div>

          {/* <div className='p-6 space-y-6'>
            <div className='p-4 bg-gray-750 rounded-lg border border-gray-600'>
              <h3 className='text-sm font-medium text-gray-400 mb-2'>
                Your Wallet Address
              </h3>
              <div className='flex items-center justify-between bg-gray-900 p-3 rounded'>
                <code className='text-purple-400'>0x1234...5678</code>
                <button className='p-2 hover:text-purple-400 transition-colors'>
                  <Copy className='w-4 h-4' />
                </button>
              </div>
            </div>

            <div className='p-4 bg-gray-750 rounded-lg border border-gray-600'>
              <div className='flex items-start space-x-3'>
                <CheckCircle className='w-6 h-6 text-green-400 mt-1' />
                <div>
                  <h3 className='font-medium'>Social Recovery Enabled</h3>
                  <p className='text-sm text-gray-400 mt-1'>
                    Your wallet can be recovered using your verified social
                    accounts:
                  </p>
                  <div className='mt-3 space-y-2'>
                    <div className='flex items-center space-x-2 text-sm text-gray-400'>
                      <div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center'>
                        <span className='text-xs'>𝕏</span>
                      </div>
                      <span>@username</span>
                    </div>
                    <div className='flex items-center space-x-2 text-sm text-gray-400'>
                      <div className='w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center'>
                        <span className='text-xs'>T</span>
                      </div>
                      <span>@username</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className='p-6 border-t border-gray-700 bg-gray-750'>
            <div className='flex justify-center space-x-4'>
              <button className='px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors flex items-center space-x-2'>
                <Link href={'/dashboard'} passHref>
                  View Dashboard
                </Link>
                <ExternalLink className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className='mt-8 text-center text-gray-400 text-sm'>
          <p>Need help? Check our documentation or contact support</p>
        </div>
      </main>
    </div>
  )
}

export default Complete
