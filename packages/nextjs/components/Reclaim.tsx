'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QRCode from 'react-qr-code'
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk'

export const Reclaim = function Reclaim() {
  const [requestUrl, setRequestUrl] = useState('')
  const [proofs, setProofs] = useState<any>([])
  const router = useRouter() // Initialize the router

  const getVerificationReq = async () => {
    const APP_ID = process.env.NEXT_PUBLIC_APP_ID || ''
    const APP_SECRET = process.env.NEXT_PUBLIC_APP_SECRET || ''
    const PROVIDER_ID = process.env.NEXT_PUBLIC_PROVIDER_ID || ''

    const reclaimProofRequest = await ReclaimProofRequest.init(
      APP_ID,
      APP_SECRET,
      PROVIDER_ID
    )

    const requestUrl = await reclaimProofRequest.getRequestUrl()
    console.log('Request URL:', requestUrl)
    setRequestUrl(requestUrl)

    if (requestUrl) {
      window.open(requestUrl, '_blank')
    }

    await reclaimProofRequest.startSession({
      onSuccess: (proofs) => {
        console.log('Verification success', proofs)
        setProofs(proofs)

        router.push('/wallet')
      },
      onError: (error) => {
        console.error('Verification failed', error)
      },
    })
  }

  return (
    <>
      <button
        className='px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors'
        onClick={getVerificationReq}
      >
        Connect
      </button>

      {requestUrl && (
        <div style={{ margin: '20px 0' }}>
          <QRCode value={requestUrl} />
        </div>
      )}

      {proofs.length > 0 && (
        <div>
          <h2>Verification Successful!</h2>
          <pre>{JSON.stringify(proofs, null, 2)}</pre>
        </div>
      )}
    </>
  )
}

export default Reclaim
