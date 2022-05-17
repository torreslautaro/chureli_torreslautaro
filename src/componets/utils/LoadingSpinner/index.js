const LoadingSpinner = () => {
    return (
      <div className="mt-72 md:mt-52">
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
        </div>
      </div>
    )
}

export default LoadingSpinner