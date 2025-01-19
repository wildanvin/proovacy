import React from 'react'
import {
  Shield,
  CheckCircle,
  ArrowRight,
  CircleX,
  Wallet,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'
import { CustomConnectButton } from '~~/components/scaffold-stark/CustomConnectButton'

const WalletIntegration = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-200'>
      {/* Header */}
      <header className='bg-gray-800 border-b border-gray-700'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Wallet Setup</h1>
            <span className='text-sm text-gray-400'>Step 2 of 3</span>
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
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center'>
                <Wallet className='w-6 h-6 text-gray-900' />
              </div>
              <span className='text-sm mt-2 text-purple-400'>Wallet Setup</span>
            </div>
            <div className='w-20 h-1 bg-gray-700'></div>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center'>
                <Shield className='w-6 h-6 text-gray-500' />
              </div>
              <span className='text-sm mt-2 text-gray-500'>Complete</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className='bg-gray-800 rounded-xl border border-gray-700 shadow-xl'>
          <div className='p-6 border-b border-gray-700'>
            <h2 className='text-xl font-semibold'>Configure Your Wallet</h2>
            <p className='text-gray-400 mt-2'>
              Set up your unique wallet based on your verified social accounts
            </p>
          </div>

          {/* Social Verifications */}
          <div className='p-6 space-y-6'>
            <div className='flex items-center justify-between p-4 bg-gray-750 rounded-lg border border-gray-600'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center'>
                  <span className='text-xl'>𝕏</span>
                </div>
                <div>
                  <h3 className='font-medium'>Twitter Account</h3>
                  <p className='text-sm text-gray-400'>@username</p>
                </div>
              </div>
              <CheckCircle className='w-6 h-6 text-green-400' />
            </div>

            <div className='flex items-center justify-between p-4 bg-gray-750 rounded-lg border border-gray-600'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center'>
                  <span className='text-xl'>T</span>
                </div>
                <div>
                  <h3 className='font-medium'>Telegram Account</h3>
                  <p className='text-sm text-gray-400'>@username</p>
                </div>
              </div>

              <CircleX className='w-6 h-6 text-red-400' />
            </div>

            {/* Security Info */}
            <div className='p-4 bg-gray-750 rounded-lg border border-gray-600'>
              <div className='flex items-start space-x-3'>
                <AlertCircle className='w-6 h-6 text-purple-400 mt-1' />
                <div>
                  <h3 className='font-medium'>Security Information</h3>
                  <p className='text-sm text-gray-400 mt-1'>
                    Your wallet will be generated using secure parameters
                    derived from your verified social accounts. This creates a
                    unique and recoverable wallet address.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='p-6 border-t border-gray-700 bg-gray-750'>
            <div className='flex justify-between items-center'>
              <button className='px-6 py-2 text-gray-400 hover:text-gray-200 transition-colors'>
                <Link href={'/verification'} passHref>
                  Back
                </Link>
              </button>
              {/* <button className='px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors flex items-center space-x-2'>
                <span>Generate Wallet</span>
                <ArrowRight className='w-4 h-4' />
              </button> */}
              <Link href={'/completed'} passHref>
                <CustomConnectButton />
              </Link>
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

export default WalletIntegration
