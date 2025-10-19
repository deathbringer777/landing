const NotFound = () => {

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 backdrop-blur-sm">
      <div className="text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
          404
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/70 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 font-medium">
          Oops! Page not found
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 xl:px-14 xl:py-7 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 ease-out rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
