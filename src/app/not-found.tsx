import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          
            <FaHome className="mr-2" />
            Back to Home
          
        </Link>
      </div>
    </div>
  )
}

export default NotFound