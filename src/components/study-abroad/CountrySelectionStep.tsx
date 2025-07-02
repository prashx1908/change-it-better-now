import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Search, MapPin, Star, Globe } from 'lucide-react';

interface CountrySelectionStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const countries = [
  { name: 'USA', flag: '🇺🇸', description: 'Land of Innovation', popular: true, color: 'from-red-500 to-blue-600' },
  { name: 'Canada', flag: '🇨🇦', description: 'Maple Leaf Dreams', popular: true, color: 'from-red-600 to-white' },
  { name: 'UK', flag: '🇬🇧', description: 'Academic Heritage', popular: true, color: 'from-blue-800 to-red-600' },
  { name: 'Ireland', flag: '🇮🇪', description: 'Emerald Excellence', popular: false, color: 'from-green-600 to-orange-500' },
  { name: 'Australia', flag: '🇦🇺', description: 'Down Under Adventure', popular: true, color: 'from-blue-500 to-yellow-400' },
  { name: 'New Zealand', flag: '🇳🇿', description: 'Kiwi Innovation', popular: false, color: 'from-blue-600 to-black' },
  { name: 'Germany', flag: '🇩🇪', description: 'Engineering Excellence', popular: false, color: 'from-black to-red-600' },
  { name: 'France', flag: '🇫🇷', description: 'Cultural Sophistication', popular: false, color: 'from-blue-600 to-red-600' },
  { name: 'Netherlands', flag: '🇳🇱', description: 'Progressive Learning', popular: false, color: 'from-red-600 to-blue-600' },
  { name: 'Singapore', flag: '🇸🇬', description: 'Asian Gateway', popular: false, color: 'from-red-600 to-white' },
  { name: 'Sweden', flag: '🇸🇪', description: 'Nordic Innovation', popular: false, color: 'from-blue-600 to-yellow-400' },
  { name: 'Denmark', flag: '🇩🇰', description: 'Happiness Nation', popular: false, color: 'from-red-600 to-white' },
  { name: 'Italy', flag: '🇮🇹', description: 'Renaissance Legacy', popular: false, color: 'from-green-600 to-red-600' },
  { name: 'Spain', flag: '🇪🇸', description: 'Vibrant Culture', popular: false, color: 'from-red-600 to-yellow-400' },
  { name: 'Not sure', flag: '🤔', description: 'Explore Options', popular: false, color: 'from-gray-400 to-gray-600' },
];

const CountrySelectionStep: React.FC<CountrySelectionStepProps> = ({ data, updateData, onNext }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showStory, setShowStory] = useState(true);
  
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularCountries = filteredCountries.filter(country => country.popular);
  const otherCountries = filteredCountries.filter(country => !country.popular);

  const toggleCountry = (countryName: string) => {
    const currentCountries = data.selectedCountries;
    let newCountries;
    
    if (countryName === 'Not sure') {
      newCountries = currentCountries.includes('Not sure') ? [] : ['Not sure'];
    } else {
      const filteredCurrent = currentCountries.filter(c => c !== 'Not sure');
      if (filteredCurrent.includes(countryName)) {
        newCountries = filteredCurrent.filter(c => c !== countryName);
      } else {
        newCountries = [...filteredCurrent, countryName];
      }
    }
    
    updateData('selectedCountries', newCountries);
    
    if (showStory && newCountries.length > 0) {
      setShowStory(false);
    }
  };

  const CountryCard = ({ country }: { country: typeof countries[0] }) => {
    const isSelected = data.selectedCountries.includes(country.name);
    
    return (
      <div
        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => toggleCountry(country.name)}
      >
        {country.popular && (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
            <Star size={12} />
            Popular
          </div>
        )}
        
        <div className="text-center">
          <div className="text-4xl mb-3">{country.flag}</div>
          <h3 className="font-bold text-xl mb-2">{country.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{country.description}</p>
          
          {isSelected && (
            <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                <Globe size={16} />
                Selected for your journey
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      {showStory && (
        <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
          <div className="text-6xl mb-4">🌍</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Global Adventure Begins</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Every great story starts with a destination. Where will your academic journey take you? 
            Each country offers unique opportunities, cultures, and experiences that will shape your future.
          </p>
          <div className="mt-6 p-4 bg-white rounded-xl border border-blue-200">
            <p className="text-sm text-blue-800 font-medium">
              💡 Pro tip: You can select multiple countries to explore all your options
            </p>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          placeholder="Search for your dream destination..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 py-3 text-lg rounded-xl border-2 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Selected Countries Summary */}
      {data.selectedCountries.length > 0 && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={24} className="text-green-600" />
            <h3 className="text-xl font-semibold text-green-900">Your Selected Destinations</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.selectedCountries.map((country) => (
              <span key={country} className="px-4 py-2 bg-white rounded-full border border-green-300 text-green-800 font-medium">
                {countries.find(c => c.name === country)?.flag} {country}
              </span>
            ))}
          </div>
          <p className="text-green-700 mt-3">
            Great choice! {data.selectedCountries.length === 1 ? 'This destination' : 'These destinations'} will open amazing opportunities for you.
          </p>
        </div>
      )}

      {/* Popular Countries */}
      {popularCountries.length > 0 && (
        <div>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
            <Star className="text-yellow-500" size={28} />
            Most Popular Destinations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCountries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
          </div>
        </div>
      )}

      {/* Other Countries */}
      {otherCountries.length > 0 && (
        <div>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
            <Globe className="text-blue-500" size={28} />
            More Amazing Options
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCountries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {data.selectedCountries.length > 0 && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Story →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
        <p className="text-lg text-gray-700 italic">
          "The world is a book, and those who do not travel read only one page." - Saint Augustine
        </p>
      </div>
    </div>
  );
};

export default CountrySelectionStep;
