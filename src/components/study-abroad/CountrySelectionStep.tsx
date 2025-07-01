
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Search, MapPin, DollarSign, Clock } from 'lucide-react';

interface CountrySelectionStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
}

const countries = [
  { 
    name: 'United States', 
    flag: '🇺🇸', 
    cost: '$40,000 - $70,000/year',
    visaTime: '3-5 months',
    popular: true 
  },
  { 
    name: 'United Kingdom', 
    flag: '🇬🇧', 
    cost: '$25,000 - $50,000/year',
    visaTime: '2-3 months',
    popular: true 
  },
  { 
    name: 'Canada', 
    flag: '🇨🇦', 
    cost: '$20,000 - $40,000/year',
    visaTime: '4-6 weeks',
    popular: true 
  },
  { 
    name: 'Australia', 
    flag: '🇦🇺', 
    cost: '$30,000 - $45,000/year',
    visaTime: '1-2 months',
    popular: true 
  },
  { 
    name: 'Germany', 
    flag: '🇩🇪', 
    cost: '$1,500 - $12,000/year',
    visaTime: '6-8 weeks',
    popular: false 
  },
  { 
    name: 'Netherlands', 
    flag: '🇳🇱', 
    cost: '$8,000 - $20,000/year',
    visaTime: '4-6 weeks',
    popular: false 
  },
  { 
    name: 'France', 
    flag: '🇫🇷', 
    cost: '$3,000 - $15,000/year',
    visaTime: '2-3 months',
    popular: false 
  },
  { 
    name: 'Singapore', 
    flag: '🇸🇬', 
    cost: '$25,000 - $40,000/year',
    visaTime: '2-4 weeks',
    popular: false 
  },
];

const CountrySelectionStep: React.FC<CountrySelectionStepProps> = ({ data, updateData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularCountries = filteredCountries.filter(country => country.popular);
  const otherCountries = filteredCountries.filter(country => !country.popular);

  const toggleCountry = (countryName: string) => {
    const currentPreferences = data.countryPreferences;
    const isSelected = currentPreferences.includes(countryName);
    
    if (isSelected) {
      updateData('countryPreferences', currentPreferences.filter(c => c !== countryName));
    } else {
      updateData('countryPreferences', [...currentPreferences, countryName]);
    }
  };

  const CountryCard = ({ country }: { country: typeof countries[0] }) => {
    const isSelected = data.countryPreferences.includes(country.name);
    
    return (
      <div
        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-md'
            : 'border-gray-200 hover:border-gray-300'
        }`}
        onClick={() => toggleCountry(country.name)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{country.flag}</span>
            <h3 className="font-semibold text-lg">{country.name}</h3>
          </div>
          {isSelected && (
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
          )}
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <DollarSign size={14} />
            <span>{country.cost}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Visa processing: {country.visaTime}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="countrySearch">Search Countries</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
            id="countrySearch"
            placeholder="Search for countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {data.countryPreferences.length > 0 && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-green-800">
            <strong>Selected Countries:</strong> {data.countryPreferences.join(', ')}
          </p>
        </div>
      )}

      {popularCountries.length > 0 && (
        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-blue-600" />
            Popular Destinations
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {popularCountries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
          </div>
        </div>
      )}

      {otherCountries.length > 0 && (
        <div>
          <h3 className="font-semibold text-lg mb-4">Other Countries</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherCountries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
          </div>
        </div>
      )}

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-yellow-800">
          <strong>Tip:</strong> Select multiple countries to increase your chances of admission. 
          Our experts will help you prioritize based on your profile.
        </p>
      </div>
    </div>
  );
};

export default CountrySelectionStep;
