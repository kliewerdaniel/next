'use client'

import Image from 'next/image'
import { useState } from 'react'

export function ImageOptimizationDemo() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Next.js Image Optimization</h3>

      {/* Basic image optimization */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium">Automatic WebP/AVIF conversion:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="https://picsum.photos/400/300?random=1"
            alt="Sample image 1"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo="
            onLoad={() => setImageLoaded(true)}
          />

          <Image
            src="https://picsum.photos/400/300?random=2"
            alt="Sample image 2"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
            priority
            quality={75}
          />
        </div>

        {/* Image with lazy loading and placeholder */}
        <div className="mt-4">
          <h4 className="text-lg font-medium mb-2">Lazy loading with blur placeholder:</h4>
          <Image
            src="https://picsum.photos/800/400?random=3"
            alt="Large image with lazy loading"
            width={800}
            height={400}
            className="rounded-lg shadow-md w-full"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Responsive images */}
        <div className="mt-4">
          <h4 className="text-lg font-medium mb-2">Responsive image with sizes:</h4>
          <div className="max-w-sm">
            <Image
              src="https://picsum.photos/400/600?random=4"
              alt="Responsive image example"
              width={400}
              height={600}
              className="rounded-lg shadow-md"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-medium mb-2">Image Optimization Benefits:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Automatic format conversion (WebP/AVIF when supported)</li>
          <li>• Responsive images with srcSet generation</li>
          <li>• Lazy loading for better performance</li>
          <li>• Placeholder blur-up effect</li>
          <li>• CDN optimization via next/image</li>
          <li>• Cache optimization headers</li>
        </ul>
      </div>

      {imageLoaded && (
        <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
          ✓ Images loaded and optimized automatically by Next.js
        </div>
      )}
    </div>
  )
}
