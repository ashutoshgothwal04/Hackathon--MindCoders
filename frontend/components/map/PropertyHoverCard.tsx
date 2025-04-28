'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Property } from '@/services/propertyServices';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IndianRupee } from 'lucide-react';

interface PropertyHoverCardProps {
  property: Property;
  isVisible: boolean;
}

export function PropertyHoverCard({ property, isVisible }: PropertyHoverCardProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 z-[1000] pointer-events-auto"
          style={{ minWidth: '250px' }}
        >
          <Link href={`/properties/${property._id}`}>
            <Card className="p-3 hover:shadow-lg transition-shadow cursor-pointer bg-white">
              {property.images && property.images[0] && (
                <div className="relative w-full h-32 mb-2 rounded-md overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <h3 className="font-semibold text-sm mb-1 line-clamp-1">{property.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <IndianRupee className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">{property.price.toLocaleString()}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {property.amenities?.slice(0, 3).map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </Card>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 