import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Search, MapPin, Star } from 'lucide-react';

interface CitySelectionStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const majorCities = [
  { name: 'Mumbai', state: 'Maharashtra', icon: '🏙️', popular: true },
  { name: 'Delhi', state: 'Delhi', icon: '🏛️', popular: true },
  { name: 'Bangalore', state: 'Karnataka', icon: '💻', popular: true },
  { name: 'Hyderabad', state: 'Telangana', icon: '💎', popular: true },
  { name: 'Chennai', state: 'Tamil Nadu', icon: '🏖️', popular: true },
  { name: 'Kolkata', state: 'West Bengal', icon: '🎭', popular: true },
  { name: 'Pune', state: 'Maharashtra', icon: '🎓', popular: false },
  { name: 'Ahmedabad', state: 'Gujarat', icon: '🏭', popular: false },
  { name: 'Jaipur', state: 'Rajasthan', icon: '🏰', popular: false },
  { name: 'Surat', state: 'Gujarat', icon: '💍', popular: false },
  { name: 'Lucknow', state: 'Uttar Pradesh', icon: '🕌', popular: false },
  { name: 'Kanpur', state: 'Uttar Pradesh', icon: '🏭', popular: false },
  { name: 'Nagpur', state: 'Maharashtra', icon: '🍊', popular: false },
  { name: 'Indore', state: 'Madhya Pradesh', icon: '🏛️', popular: false },
  { name: 'Thane', state: 'Maharashtra', icon: '🌊', popular: false },
  { name: 'Bhopal', state: 'Madhya Pradesh', icon: '🏞️', popular: false },
  { name: 'Visakhapatnam', state: 'Andhra Pradesh', icon: '⚓', popular: false },
  { name: 'Pimpri-Chinchwad', state: 'Maharashtra', icon: '🏢', popular: false },
];

const CitySelectionStep: React.FC<CitySelectionStepProps> = ({ data, updateData, onNext }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  
  const filteredCities = majorCities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularCities = filteredCities.filter(city => city.popular);
  const otherCities = filteredCities.filter(city => !city.popular);
  const displayedOtherCities = showAll ? otherCities : otherCities.slice(0, 6);

  const selectCity = (cityName: string) => {
    updateData('selectedCity', cityName);
  };

  const CityCard = ({ city }: { city: typeof majorCities[0] }) => {
    const isSelected = data.selectedCity === city.name;
    
    return (
      <div
        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => selectCity(city.name)}
      >
        {city.popular && (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
            <Star size={12} />
            Popular
          </div>
        )}
        
        <div className="text-center">
          <div className="text-4xl mb-3">{city.icon}</div>
          <h3 className="font-bold text-xl mb-1">{city.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{city.state}</p>
          
          {isSelected && (
            <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                <MapPin size={16} />
                Your home base
              </div>
            </div>
          )}
        </div>
        
        {isSelected && (
          <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            ✓
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
        <div className="text-6xl mb-4">🏙️</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Home Base</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Every journey begins from home. Understanding where you're starting from helps us 
          provide the most relevant guidance and connect you with fellow travelers from your area.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          placeholder="Search for your city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 py-3 text-lg rounded-xl border-2 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Selected City Summary */}
      {data.selectedCity && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <MapPin size={24} className="text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-900">Your Home City</h3>
              <p className="text-green-700">{data.selectedCity}</p>
            </div>
          </div>
          <p className="text-green-800 bg-white p-3 rounded-lg border border-green-200">
            Perfect! We'll use this information to provide you with location-specific guidance and connect you with our local counselors.
          </p>
        </div>
      )}

      {/* Popular Cities */}
      {popularCities.length > 0 && (
        <div>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
            <Star className="text-yellow-500" size={28} />
            Major Cities
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularCities.map((city) => (
              <CityCard key={city.name} city={city} />
            ))}
          </div>
        </div>
      )}

      {/* Other Cities */}
      {otherCities.length > 0 && (
        <div>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
            <MapPin className="text-blue-500" size={28} />
            More Cities
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedOtherCities.map((city) => (
              <CityCard key={city.name} city={city} />
            ))}
          </div>
          
          {!showAll && otherCities.length > 6 && (
            <div className="text-center mt-6">
              <Button
                variant="outline"
                onClick={() => setShowAll(true)}
                className="px-6 py-2"
              >
                Show More Cities
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Custom City Input */}
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center">
        <h4 className="font-semibold text-lg mb-3">Don't see your city?</h4>
        <p className="text-gray-600 mb-4">No worries! You can enter it manually:</p>
        <div className="max-w-md mx-auto">
          <Input
            placeholder="Enter your city name..."
            value={data.selectedCity.includes('Mumbai') ? '' : data.selectedCity}
            onChange={(e) => updateData('selectedCity', e.target.value)}
            className="text-center"
          />
        </div>
      </div>

      {/* Continue Button */}
      {data.selectedCity && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100">
        <p className="text-lg text-gray-700 italic">
          "Home is where your story begins, but it's not where it ends." - Your study abroad journey
        </p>
      </div>
    </div>
  );
};

export default CitySelectionStep;
