import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Search, BookOpen, Star, Zap } from 'lucide-react';

interface ProgramSelectionStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const programsByLevel = {
  '12th-grade': [
    { name: 'Engineering', icon: '⚙️', description: 'Build the future', popular: true },
    { name: 'Business & Management', icon: '💼', description: 'Lead and innovate', popular: true },
    { name: 'Computer Science', icon: '💻', description: 'Code the world', popular: true },
    { name: 'Medicine', icon: '⚕️', description: 'Heal and help', popular: false },
    { name: 'Arts & Design', icon: '🎨', description: 'Create and inspire', popular: false },
    { name: 'Social Sciences', icon: '🏛️', description: 'Understand society', popular: false },
  ],
  'bachelors-not-final': [
    { name: 'Continue Current Program', icon: '📚', description: 'Transfer credits', popular: true },
    { name: 'Switch to Business', icon: '💼', description: 'New direction', popular: false },
    { name: 'Engineering', icon: '⚙️', description: 'Technical skills', popular: false },
    { name: 'Liberal Arts', icon: '🎭', description: 'Broad knowledge', popular: false },
  ],
  'bachelors-final': [
    { name: 'Master in Business (MBA)', icon: '💼', description: 'Leadership excellence', popular: true },
    { name: 'Master in Engineering', icon: '⚙️', description: 'Technical mastery', popular: true },
    { name: 'Master in Computer Science', icon: '💻', description: 'Tech innovation', popular: true },
    { name: 'Master in Data Science', icon: '📊', description: 'Data insights', popular: false },
    { name: 'Master in Design', icon: '🎨', description: 'Creative leadership', popular: false },
  ],
  'completed-bachelors': [
    { name: 'Master in Business (MBA)', icon: '💼', description: 'Strategic leadership', popular: true },
    { name: 'Master in Engineering', icon: '⚙️', description: 'Advanced engineering', popular: true },
    { name: 'Master in Computer Science', icon: '💻', description: 'Tech leadership', popular: true },
    { name: 'Master in Data Science', icon: '📊', description: 'AI & Analytics', popular: false },
    { name: 'Master in Finance', icon: '💰', description: 'Financial expertise', popular: false },
    { name: 'Master in Public Policy', icon: '🏛️', description: 'Policy making', popular: false },
  ],
  'masters': [
    { name: 'PhD in Engineering', icon: '🔬', description: 'Research excellence', popular: true },
    { name: 'PhD in Computer Science', icon: '💻', description: 'Tech research', popular: true },
    { name: 'Executive MBA', icon: '💼', description: 'Senior leadership', popular: false },
    { name: 'Professional Certificates', icon: '📜', description: 'Specialized skills', popular: false },
  ],
  'mbbs': [
    { name: 'Medical Residency', icon: '⚕️', description: 'Specialized practice', popular: true },
    { name: 'Master in Public Health', icon: '🏥', description: 'Healthcare leadership', popular: true },
    { name: 'Medical Research', icon: '🔬', description: 'Clinical research', popular: false },
    { name: 'Healthcare Management', icon: '💼', description: 'Healthcare business', popular: false },
  ],
  'other': [
    { name: 'Foundation Program', icon: '🏗️', description: 'Build your base', popular: true },
    { name: 'Bridge Courses', icon: '🌉', description: 'Connect to degree', popular: true },
    { name: 'Professional Certificates', icon: '📜', description: 'Skill development', popular: false },
    { name: 'Language Programs', icon: '🗣️', description: 'Communication skills', popular: false },
  ],
};

const ProgramSelectionStep: React.FC<ProgramSelectionStepProps> = ({ data, updateData, onNext }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showStory, setShowStory] = useState(true);
  
  const programs = programsByLevel[data.educationLevel as keyof typeof programsByLevel] || programsByLevel['other'];
  const filteredPrograms = programs.filter(program =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularPrograms = filteredPrograms.filter(program => program.popular);
  const otherPrograms = filteredPrograms.filter(program => !program.popular);

  const selectProgram = (programName: string) => {
    updateData('selectedProgram', programName);
    if (showStory) {
      setShowStory(false);
    }
  };

  const ProgramCard = ({ program }: { program: typeof programs[0] }) => {
    const isSelected = data.selectedProgram === program.name;
    
    return (
      <div
        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => selectProgram(program.name)}
      >
        {program.popular && (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
            <Star size={12} />
            Popular
          </div>
        )}
        
        <div className="text-center">
          <div className="text-4xl mb-3">{program.icon}</div>
          <h3 className="font-bold text-xl mb-2">{program.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{program.description}</p>
          
          {isSelected && (
            <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                <Zap size={16} />
                Your chosen path
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
        <div className="text-center p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Passion</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            This is where your story takes shape. What field ignites your curiosity? 
            Your chosen program will be the foundation of your international academic adventure.
          </p>
          <div className="mt-6 p-4 bg-white rounded-xl border border-green-200">
            <p className="text-sm text-green-800 font-medium">
              💡 Each program opens different doors to your future career
            </p>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          placeholder="Search for your ideal program..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 py-3 text-lg rounded-xl border-2 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Selected Program Summary */}
      {data.selectedProgram && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-4 mb-3">
            <BookOpen size={24} className="text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-900">Your Chosen Field</h3>
              <p className="text-green-700">{data.selectedProgram}</p>
            </div>
          </div>
          <p className="text-green-800 bg-white p-3 rounded-lg border border-green-200">
            Excellent choice! This program aligns perfectly with your academic background and opens exciting career opportunities.
          </p>
        </div>
      )}

      {/* Popular Programs */}
      {popularPrograms.length > 0 && (
        <div>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
            <Star className="text-yellow-500" size={28} />
            Most Popular Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPrograms.map((program) => (
              <ProgramCard key={program.name} program={program} />
            ))}
          </div>
        </div>
      )}

      {/* Other Programs */}
      {otherPrograms.length > 0 && (
        <div>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
            <BookOpen className="text-blue-500" size={28} />
            More Great Options
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPrograms.map((program) => (
              <ProgramCard key={program.name} program={program} />
            ))}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {data.selectedProgram && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
        <p className="text-lg text-gray-700 italic">
          "Choose a job you love, and you will never have to work a day in your life." - Confucius
        </p>
      </div>
    </div>
  );
};

export default ProgramSelectionStep;
