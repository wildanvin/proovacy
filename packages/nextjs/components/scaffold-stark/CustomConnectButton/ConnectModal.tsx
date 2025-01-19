import { Connector, useConnect } from '@starknet-react/core'
import { useRef, useState } from 'react'
import Wallet from '~~/components/scaffold-stark/CustomConnectButton/Wallet'
import { useLocalStorage } from 'usehooks-ts'
import { BurnerConnector, burnerAccounts } from '@scaffold-stark/stark-burner'
import { useTheme } from 'next-themes'
import { BlockieAvatar } from '../BlockieAvatar'
import GenericModal from './GenericModal'
import { LAST_CONNECTED_TIME_LOCALSTORAGE_KEY } from '~~/utils/Constants'
import { WebWalletConnector } from 'starknetkit/webwallet'

const loader = ({ src }: { src: string }) => {
  return src
}

const ConnectModal = () => {
  const modalRef = useRef<HTMLInputElement>(null)
  const [isBurnerWallet, setIsBurnerWallet] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'
  const { connectors, connect, error, status, ...props } = useConnect()
  const [_, setLastConnector] = useLocalStorage<{ id: string; ix?: number }>(
    'lastUsedConnector',
    { id: '' },
    {
      initializeWithValue: false,
    }
  )
  const webConnector = [
    new WebWalletConnector({
      url: 'https://web.argent.xyz',
    }),
  ]
  const [, setLastConnectionTime] = useLocalStorage<number>(
    LAST_CONNECTED_TIME_LOCALSTORAGE_KEY,
    0
  )

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.checked = false
    }
  }

  function handleConnectWallet(
    e: React.MouseEvent<HTMLButtonElement>,
    connector: Connector
  ): void {
    if (connector.id === 'burner-wallet') {
      setIsBurnerWallet(true)
      return
    }
    connect({ connector })
    setLastConnector({ id: connector.id })
    setLastConnectionTime(Date.now())
    handleCloseModal()
  }

  return (
    <div className='px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors flex items-center space-x-2'>
      {/* Connect Button */}
      <label
        htmlFor='connect-modal'
        // className='inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90
        //          text-white font-semibold px-6 py-2.5 text-sm transition-colors duration-200
        //          cursor-pointer shadow-sm hover:shadow-md'
      >
        <span>Create Wallet</span>
      </label>

      {/* Modal Toggle */}
      <input
        ref={modalRef}
        type='checkbox'
        id='connect-modal'
        className='modal-toggle'
      />

      {/* Modal Content */}
      <GenericModal modalId='connect-modal'>
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md'>
          {/* Modal Header */}
          <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700'>
            {/* <h3 className='text-xl font-bold text-gray-900 dark:text-white'> */}
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
              Create your Wallet
            </h3>
            <button
              onClick={() => {
                handleCloseModal()
              }}
              className='text-gray-400 hover:text-gray-500 transition-colors duration-200'
            >
              <span className='text-2xl'>×</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className='p-6'>
            <div className='space-y-4'>
              {/* Available Wallets */}
              <div className='grid gap-4'>
                {webConnector.map((connector, index) => (
                  <Wallet
                    key={connector.id || index}
                    connector={connector}
                    loader={loader}
                    handleConnectWallet={handleConnectWallet}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </GenericModal>
    </div>
  )
}

export default ConnectModal
