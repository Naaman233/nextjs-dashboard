'use client'

import { useEffect } from 'react'
import { FaceFrownIcon } from "@heroicons/react/24/outline"
export default function Error ({
    error,
    reset
} : {
    error : Error & { digest? : string}
    reset : () => void
}) {
    useEffect(() => {
        console.log(error)
    },[error])

    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-center">OPPSS! Something went wrong!</h2>
            <FaceFrownIcon className="h-6 w-6 text-gray-500" />
            <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                onClick={
                    ()=> reset()
                }
            >
               Try Again
            </button>
        </main>
    );
}

