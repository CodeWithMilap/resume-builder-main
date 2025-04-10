interface ProgressToastProps {
    title: string
    description?: string
    progress: number // 0-100
  }
  
  export function ProgressToast({ title, description, progress }: ProgressToastProps) {
    return (
      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        {description && <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    )
  }
  
  