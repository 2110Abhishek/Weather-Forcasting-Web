export default function Skeleton() {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="animate-pulse space-y-6">
        {/* Header skeleton */}
        <div className="flex justify-between items-center">
          <div>
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
          </div>
          <div className="h-20 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>

        {/* Weather stats skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-4 bg-gray-200/50 dark:bg-gray-700/50 rounded-xl">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-3"></div>
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-16 mb-2"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
            </div>
          ))}
        </div>

        {/* Additional info skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-gray-200/50 dark:bg-gray-700/50 rounded-xl">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20 mb-3"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}