import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'
import VirtualCard from '../VirtualCard'

export default function Featured() {
  return (
    <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6">Featured Virtual Tours</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <VirtualCard key={i} i={i.toString()} />
      ))}
    </div>
  </div>
  )
}
