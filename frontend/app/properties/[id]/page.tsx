import PropertyHeader from "@/components/Properties/PropertyHeader";
import PropertyImages from "@/components/Properties/PropertyImages";
import LeftColumn from "@/components/Properties/LeftColumn";
import RightColumn from "@/components/Properties/RightColumn";
import SimilarProperties from "@/components/Properties/SimilarProperties";

export default function PropertyDetailPage() {
  return (
    <div className="container mx-auto px-8 py-12">
      {/* Property Header */}
      <PropertyHeader />
      {/* Property Images */}
      <PropertyImages />
      {/* Property Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Property Details */}
        <LeftColumn />
        {/* Right Column - Booking & Contact */}
        <RightColumn/>
      </div>
      {/* Similar Properties */}
      <SimilarProperties/>
    </div>
  );
}
