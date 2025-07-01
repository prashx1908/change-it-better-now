
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { DollarSign, PiggyBank, Award } from 'lucide-react';

interface FinancialStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
}

const fundingSources = [
  { id: 'self', label: 'Self-funded', icon: '💰' },
  { id: 'family', label: 'Family Support', icon: '👨‍👩‍👧‍👦' },
  { id: 'scholarship', label: 'Scholarships', icon: '🏆' },
  { id: 'loan', label: 'Education Loan', icon: '🏦' },
  { id: 'employer', label: 'Employer Sponsorship', icon: '🏢' },
  { id: 'government', label: 'Government Aid', icon: '🏛️' },
];

const FinancialStep: React.FC<FinancialStepProps> = ({ data, updateData }) => {
  const handleBudgetChange = (value: string) => {
    updateData('financial', {
      ...data.financial,
      budget: value,
    });
  };

  const handleFundingSourceChange = (sourceId: string, checked: boolean) => {
    const currentSources = data.financial.fundingSource;
    if (checked) {
      updateData('financial', {
        ...data.financial,
        fundingSource: [...currentSources, sourceId],
      });
    } else {
      updateData('financial', {
        ...data.financial,
        fundingSource: currentSources.filter(s => s !== sourceId),
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign size={24} className="text-green-600" />
        <h3 className="text-xl font-semibold">Financial Planning</h3>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Annual Budget (USD) *</Label>
        <Select value={data.financial.budget} onValueChange={handleBudgetChange}>
          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select your budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-20k">Under $20,000</SelectItem>
            <SelectItem value="20k-40k">$20,000 - $40,000</SelectItem>
            <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
            <SelectItem value="60k-80k">$60,000 - $80,000</SelectItem>
            <SelectItem value="above-80k">Above $80,000</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-500">Include tuition, living expenses, and other costs</p>
      </div>

      <div className="space-y-4">
        <Label>Funding Sources (Select all that apply) *</Label>
        <div className="grid md:grid-cols-2 gap-4">
          {fundingSources.map((source) => (
            <div key={source.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <Checkbox
                id={source.id}
                checked={data.financial.fundingSource.includes(source.id)}
                onCheckedChange={(checked) => handleFundingSourceChange(source.id, checked as boolean)}
              />
              <label htmlFor={source.id} className="flex items-center gap-2 cursor-pointer flex-1">
                <span className="text-lg">{source.icon}</span>
                <span className="font-medium">{source.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <Award size={20} className="text-green-600" />
          <h4 className="font-semibold text-green-900">Scholarship Opportunities</h4>
        </div>
        <div className="space-y-3 text-sm text-green-800">
          <div className="p-3 bg-white rounded-lg">
            <h5 className="font-medium">Merit-based Scholarships</h5>
            <p>Up to $30,000/year for high-achieving students</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <h5 className="font-medium">Need-based Aid</h5>
            <p>Financial assistance based on family income</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <h5 className="font-medium">Country-specific Scholarships</h5>
            <p>Special programs for international students</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <div className="flex items-center gap-3 mb-3">
          <PiggyBank size={20} className="text-blue-600" />
          <h4 className="font-semibold text-blue-900">Budget Planning Tips</h4>
        </div>
        <div className="space-y-2 text-sm text-blue-800">
          <p>• Consider living costs: $800-2000/month depending on location</p>
          <p>• Factor in visa fees, travel, and insurance costs</p>
          <p>• Research work opportunities for international students</p>
          <p>• Look into graduate assistantships for reduced tuition</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialStep;
