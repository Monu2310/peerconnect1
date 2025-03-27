export default function Loading() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-t-blue-600 border-b-blue-600 border-l-blue-100 border-r-blue-100 animate-spin"></div>
          <p className="text-lg font-medium text-blue-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }
  
  