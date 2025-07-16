import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
export default function PaymentSuccess() {
  return (
    <div>
        <Navbar />
    <div className="flex items-center justify-center bg-white min-h-screen">
      <div className="text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto mb-6">
          <div className="w-full h-full rounded-full border-4 border-green-700 flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-green-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-semibold mb-4 text-black">
          Your order is successfully placed
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link 
            href="/packages" 
            className="px-6 py-2 bg-yellow-50 text-yellow-600 hover:bg-yellow-100 rounded-md"
          >
            Go To Packages
          </Link>
          <Link 
            href="/orders" 
            className="px-6 py-2 bg-green-700 text-white hover:bg-green-800 rounded-md flex items-center gap-2"
          >
            View Order
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}
