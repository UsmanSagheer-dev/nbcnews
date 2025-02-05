function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Page Not Found</p>
      <a href="/" className="mt-4 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md">
        Go Back Home
      </a>
    </div>
  );
}

export default NotFound;
