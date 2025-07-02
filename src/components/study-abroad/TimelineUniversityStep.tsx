
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { University, Calendar, Clock, Star, MapPin } from 'lucide-react';

interface TimelineUniversityStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

// Mock university data based on eligible countries
const universitiesByCountry = {
  'USA': [
    { name: 'Harvard University', ranking: 1, location: 'Cambridge, MA', acceptance: 'Highly Selective', tuition: '₹45 lakhs' },
    { name: 'Stanford University', ranking: 2, location: 'Stanford, CA', acceptance: 'Highly Selective', tuition: '₹48 lakhs' },
    { name: 'MIT', ranking: 3, location: 'Cambridge, MA', acceptance: 'Highly Selective', tuition: '₹46 lakhs' },
    { name: 'University of California, Berkeley', ranking: 15, location: 'Berkeley, CA', acceptance: 'Selective', tuition: '₹35 lakhs' },
    { name: 'University of Texas at Austin', ranking: 25, location: 'Austin, TX', acceptance: 'Moderate', tuition: '₹28 lakhs' },
  ],
  'Canada': [
    { name: 'University of Toronto', ranking: 1, location: 'Toronto, ON', acceptance: 'Selective', tuition: '₹22 lakhs' },
    { name: 'University of British Columbia', ranking: 2, location: 'Vancouver, BC', acceptance: 'Selective', tuition: '₹20 lakhs' },
    { name: 'McGill University', ranking: 3, location: 'Montreal, QC', acceptance: 'Selective', tuition: '₹18 lakhs' },
    { name: 'University of Waterloo', ranking: 4, location: 'Waterloo, ON', acceptance: 'Moderate', tuition: '₹25 lakhs' },
  ],
  'UK': [
    { name: 'University of Oxford', ranking: 1, location: 'Oxford', acceptance: 'Highly Selective', tuition: '₹32 lakhs' },
    { name: 'University of Cambridge', ranking: 2, location: 'Cambridge', acceptance: 'Highly Selective', tuition: '₹35 lakhs' },
    { name: 'Imperial College London', ranking: 3, location: 'London', acceptance: 'Selective', tuition: '₹38 lakhs' },
    { name: 'London School of Economics', ranking: 4, location: 'London', acceptance: 'Selective', tuition: '₹30 lakhs' },
  ],
  // Add more countries as needed
};

const timelineItems = [
  { month: 'Month 1-2', task: 'Prepare Applications', status: 'current' },
  { month: 'Month 3-4', task: 'Submit Applications', status: 'upcoming' },
  { month: 'Month 5-6', task: 'Admission Results', status: 'upcoming' },
  { month: 'Month 7-8', task: 'Visa Processing', status: 'upcoming' },
  { month: 'Month 9-10', task: 'Departure Prep', status: 'upcoming' },
];

const TimelineUniversityStep: React.FC<TimelineUniversityStepProps> = ({ data, updateData, onNext }) => {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>(data.selectedUniversities || []);
  
  // Get universities based on eligible countries
  const getUniversitiesForUser = () => {
    const allUniversities: any[] = [];
    data.eligibleCountries.forEach(country => {
      const countryUniversities = universitiesByCountry[country as keyof typeof universitiesByCountry] || [];
      countryUniversities.forEach(uni => {
        allUniversities.push({ ...uni, country });
      });
    });
    return allUniversities;
  };

  const universities = getUniversitiesForUser();

  const toggleUniversity = (universityName: string) => {
    const newSelection = selectedUniversities.includes(universityName)
      ? selectedUniversities.filter(name => name !== universityName)
      : [...selectedUniversities, universityName];
    
    setSelectedUniversities(newSelection);
    updateData('selectedUniversities', newSelection);
  };

  const UniversityCard = ({ university }: { university: any }) => {
    const isSelected = selectedUniversities.includes(university.name);
    
    return (
      <div
        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => toggleUniversity(university.name)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">{university.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <MapPin size={14} />
              {university.location}, {university.country}
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Star size={14} className="text-yellow-500" />
              <span>Rank #{university.ranking} in {university.country}</span>
            </div>
          </div>
          {isSelected && (
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              ✓
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Acceptance Rate:</span>
            <span className={`text-sm font-medium ${
              university.acceptance === 'Highly Selective' ? 'text-red-600' :
              university.acceptance === 'Selective' ? 'text-orange-600' : 'text-green-600'
            }`}>
              {university.acceptance}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Tuition (Annual):</span>
            <span className="text-sm font-medium text-blue-600">{university.tuition}</span>
          </div>
        </div>
        
        {isSelected && (
          <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              ✨ Added to your university list! We'll help you craft a perfect application.
            </p>
          </div>
        )}
      </div>
    );
  };

  const TimelineStep = ({ item, index }: { item: any, index: number }) => {
    const isActive = item.status === 'current';
    const isCompleted = item.status === 'completed';
    
    return (
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
          isCompleted ? 'bg-green-500 text-white' :
          isActive ? 'bg-blue-500 text-white' :
          'bg-gray-200 text-gray-600'
        }`}>
          {isCompleted ? '✓' : index + 1}
        </div>
        <div className="ml-4 flex-1">
          <div className="font-medium">{item.month}</div>
          <div className="text-sm text-gray-600">{item.task}</div>
        </div>
        {index < timelineItems.length - 1 && (
          <div className="ml-4 w-8 h-0.5 bg-gray-300"></div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
        <div className="text-6xl mb-4">🏛️</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Dream Universities</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Choose from the best universities that match your profile. We've curated this list 
          based on your eligible countries and academic background.
        </p>
      </div>

      {/* Selected Universities Summary */}
      {selectedUniversities.length > 0 && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-4 mb-3">
            <University size={24} className="text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-900">Your University Shortlist</h3>
              <p className="text-green-700">{selectedUniversities.length} universities selected</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedUniversities.map((uni) => (
              <span key={uni} className="px-3 py-1 bg-white rounded-full border border-green-300 text-green-800 text-sm">
                {uni}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* University Selection */}
      <div>
        <h3 className="font-bold text-2xl mb-6 text-center">Select Your Target Universities</h3>
        <p className="text-center text-gray-600 mb-8">
          We recommend selecting 8-12 universities across different selectivity levels
        </p>
        
        {universities.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {universities.map((university) => (
              <UniversityCard key={university.name} university={university} />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <p className="text-gray-600">
              We'll help you discover amazing universities that match your profile in the next steps!
            </p>
          </div>
        )}
      </div>

      {/* Application Timeline */}
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
        <div className="flex items-center gap-3 mb-6">
          <Calendar size={24} className="text-blue-600" />
          <h3 className="text-xl font-semibold text-blue-900">Your Application Timeline</h3>
        </div>
        <div className="space-y-4">
          {timelineItems.map((item, index) => (
            <TimelineStep key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* University Categories */}
      <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-900 mb-4">Smart Application Strategy</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🏆</div>
            <h4 className="font-semibold mb-2">Reach Schools (3-4)</h4>
            <p className="text-sm text-gray-600">Dream universities with lower acceptance rates</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold mb-2">Target Schools (4-6)</h4>
            <p className="text-sm text-gray-600">Well-matched universities with good chances</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">✅</div>
            <h4 className="font-semibold mb-2">Safety Schools (2-3)</h4>
            <p className="text-sm text-gray-600">Universities with high acceptance probability</p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="text-center pt-8">
        <Button
          onClick={onNext}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg rounded-xl"
        >
          Continue Your Journey →
        </Button>
      </div>

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
        <p className="text-lg text-gray-700 italic">
          "Aim for the moon. If you miss, you may hit a star." - Your university applications
        </p>
      </div>
    </div>
  );
};

export default TimelineUniversityStep;
