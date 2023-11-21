/*
 * @Author: fantiga
 * @Date: 2023-11-21 16:21:08
 * @LastEditTime: 2023-11-21 16:21:10
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/[q]/[dt]/error.tsx
 */

"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
