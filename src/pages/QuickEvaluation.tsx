
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, Lock, ArrowRight } from 'lucide-react';

const QuickEvaluation = () => {
  const milestones = [
    {
      id: 1,
      title: "Quick Evaluation",
      status: "Completed",
      progress: 100,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Basic profile assessment completed"
    },
    {
      id: 2,
      title: "Complete profile evaluation",
      status: "In Progress",
      progress: 60,
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Detailed academic and financial review"
    },
    {
      id: 3,
      title: "University Matching",
      status: "Locked",
      progress: 0,
      icon: Lock,
      color: "text-gray-400",
      bgColor: "bg-gray-50",
      description: "Personalized university recommendations"
    },
    {
      id: 4,
      title: "Application Support",
      status: "Locked",
      progress: 0,
      icon: Lock,
      color: "text-gray-400",
      bgColor: "bg-gray-50",
      description: "Guidance through application process"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quick Evaluation Complete!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Great start! You've completed the first step of your study abroad journey. 
            Continue with the detailed evaluation to unlock personalized recommendations.
          </p>
        </div>

        {/* Milestones */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 mb-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <Card key={milestone.id} className={`${milestone.bgColor} border-2 ${milestone.status === 'Completed' ? 'border-green-200' : milestone.status === 'In Progress' ? 'border-blue-200' : 'border-gray-200'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${milestone.bgColor}`}>
                          <IconComponent size={24} className={milestone.color} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          milestone.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : milestone.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {milestone.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium text-gray-900">{milestone.progress}%</span>
                      </div>
                      <Progress 
                        value={milestone.progress} 
                        className={`h-2 ${milestone.status === 'Locked' ? 'opacity-50' : ''}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Action Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready for the Next Step?
              </h2>
              <p className="text-gray-600 mb-6">
                Complete your detailed profile evaluation to unlock personalized university recommendations 
                and scholarship opportunities tailored to your academic background.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg mb-4"
              >
                Complete profile evaluation now
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <span>⏱️ Takes 5-10 minutes</span>
                <span>📚 Personalized recommendations</span>
                <span>💰 Scholarship matching</span>
              </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🎁 Complete Your Profile & Get</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl mb-1">📊</div>
                  <p className="font-medium">Detailed Profile Report</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🎯</div>
                  <p className="font-medium">University Matches</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">💎</div>
                  <p className="font-medium">Scholarship Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickEvaluation;
