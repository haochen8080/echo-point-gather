
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, MapPin, Utensils } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Connect Over
            <span className="text-primary block">Weekend Dinners</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join curated small-group dinners for Chinese university students. 
            Build meaningful connections over great food every Saturday and Sunday.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
              Join Your First Dinner
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Weekly Events</h3>
              <p className="text-gray-600 text-sm">Every Saturday & Sunday</p>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Small Groups</h3>
              <p className="text-gray-600 text-sm">4-6 people max</p>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Great Locations</h3>
              <p className="text-gray-600 text-sm">Near campus & city</p>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <Utensils className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Curated Experience</h3>
              <p className="text-gray-600 text-sm">Quality restaurants</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
