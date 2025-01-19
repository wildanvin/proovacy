'use client'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import { ReclaimProofRequest /*Proof*/ } from '@reclaimprotocol/js-sdk'

function ReclaimDemo() {
  // State to store the verification request URL
  const [requestUrl, setRequestUrl] = useState('')
  const [proofs, setProofs] = useState<any>([])

  const getVerificationReq = async () => {
    // Your credentials from the Reclaim Developer Portal
    // Replace these with your actual credentials

    // const APP_ID = '0x7B5C8b54686A7549a758e72aD00829248B97D64F'
    // const APP_SECRET =
    //   '0xb31a37c7e4d220916c28e2cd5518fe0eb25dcc6ffd73ea1a8f5ef46f10abb09b'
    // const PROVIDER_ID = 'e6fe962d-8b4e-4ce5-abcc-3d21c88bd64a'

    const APP_ID = process.env.NEXT_PUBLIC_APP_ID || ''
    const APP_SECRET = process.env.NEXT_PUBLIC_APP_SECRET || ''
    const PROVIDER_ID = process.env.NEXT_PUBLIC_PROVIDER_ID || ''

    // Initialize the Reclaim SDK with your credentials
    const reclaimProofRequest = await ReclaimProofRequest.init(
      APP_ID,
      APP_SECRET,
      PROVIDER_ID
    )

    // Generate the verification request URL
    const requestUrl = await reclaimProofRequest.getRequestUrl()

    console.log('Request URL:', requestUrl)

    setRequestUrl(requestUrl)

    // Start listening for proof submissions
    await reclaimProofRequest.startSession({
      // Called when the user successfully completes the verification
      onSuccess: (proofs) => {
        console.log('Verification success', proofs)
        setProofs(proofs)

        // Add your success logic here, such as:
        // - Updating UI to show verification success
        // - Storing verification status
        // - Redirecting to another page
      },
      // Called if there's an error during verification
      onError: (error) => {
        console.error('Verification failed', error)

        // Add your error handling logic here, such as:
        // - Showing error message to user
        // - Resetting verification state
        // - Offering retry options
      },
    })
  }

  return (
    <>
      <button onClick={getVerificationReq}>Get Verification Request</button>

      {/* Display QR code when URL is available */}

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

export default ReclaimDemo
