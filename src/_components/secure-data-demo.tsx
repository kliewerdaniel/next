/**
 * Client component for demonstrating secure data fetching
 * This shows how client components can make secure API calls
 */

// This could be moved to a server component for enhanced security
export function SecureDataDemo() {
  const handleFetchSecureData = async () => {
    try {
      // Client-side secure API call
      // Note: API_SECRET_KEY should never be exposed to client
      const response = await fetch('/api/secure-data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization would be handled by middleware/session
        },
      })

      if (response.ok) {
        const data = await response.json()
        alert('Secure data fetched successfully!')
        console.log('Secure data:', data)
      } else {
        alert('Failed to fetch secure data')
      }
    } catch (error) {
      console.error('Error fetching secure data:', error)
      alert('Error occurred while fetching data')
    }
  }

  return (
    <div className="border rounded-lg p-4 bg-muted/30">
      <h3 className="text-lg font-semibold mb-2">Client-Side Secure API Call</h3>
      <p className="text-sm text-muted-foreground mb-4">
        This demonstrates client-side secure API calls. Note that sensitive data
        should typically be fetched server-side to prevent credential exposure.
      </p>
      <button
        onClick={handleFetchSecureData}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
      >
        Fetch Secure Data
      </button>
    </div>
  )
}
