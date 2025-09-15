import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Briefcase, Home, DollarSign } from 'lucide-react';

export interface UserProfileData {
  name?: string;
  age?: number;
  state: string;
  district?: string;
  occupation: string;
  income?: number;
  landOwnership?: number;
  gender: string;
  category: string;
  familySize?: number;
  education: string;
}

interface UserProfileProps {
  profile: UserProfileData;
  onProfileUpdate: (profile: UserProfileData) => void;
  onProfileComplete: () => void;
}

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const OCCUPATIONS = [
  'Farmer', 'Student', 'Homemaker', 'Trader', 'Laborer', 'Employee', 
  'Unemployed', 'Retired', 'Entrepreneur', 'Artisan', 'Fisherman', 'Livestock'
];

const EDUCATION_LEVELS = [
  'Illiterate', 'Primary', 'Secondary', 'Higher Secondary', 'Graduate', 
  'Post Graduate', 'Diploma', 'Vocational Course'
];

export function UserProfile({ profile, onProfileUpdate, onProfileComplete }: UserProfileProps) {
  const [isComplete, setIsComplete] = useState(false);

  const updateProfile = (field: keyof UserProfileData, value: any) => {
    const updatedProfile = { ...profile, [field]: value };
    onProfileUpdate(updatedProfile);
    
    // Check if minimum required fields are filled
    const required = updatedProfile.state && updatedProfile.occupation && 
                    updatedProfile.gender && updatedProfile.category && updatedProfile.education;
    setIsComplete(!!required);
  };

  const handleComplete = () => {
    if (isComplete) {
      onProfileComplete();
    }
  };

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          Your Information
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Please fill in your details to find the right schemes for you
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name (Optional)</Label>
            <Input
              id="name"
              value={profile.name || ''}
              onChange={(e) => updateProfile('name', e.target.value)}
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age">Age (Optional)</Label>
            <Input
              id="age"
              type="number"
              value={profile.age || ''}
              onChange={(e) => updateProfile('age', parseInt(e.target.value) || undefined)}
              placeholder="Your age"
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Location *
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select onValueChange={(value) => updateProfile('state', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {INDIAN_STATES.map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="district">District (Optional)</Label>
              <Input
                id="district"
                value={profile.district || ''}
                onChange={(e) => updateProfile('district', e.target.value)}
                placeholder="Your district"
              />
            </div>
          </div>
        </div>

        {/* Occupation & Income */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            Occupation & Income
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation *</Label>
              <Select onValueChange={(value) => updateProfile('occupation', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Occupation" />
                </SelectTrigger>
                <SelectContent>
                  {OCCUPATIONS.map((occupation) => (
                    <SelectItem key={occupation} value={occupation}>{occupation}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="income">Annual Income (in Rupees, Optional)</Label>
              <Input
                id="income"
                type="number"
                value={profile.income || ''}
                onChange={(e) => updateProfile('income', parseInt(e.target.value) || undefined)}
                placeholder="e.g. 200000"
              />
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <Home className="w-4 h-4 text-success" />
            Personal Details *
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={(value) => updateProfile('gender', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={(value) => updateProfile('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="obc">OBC</SelectItem>
                  <SelectItem value="sc">SC</SelectItem>
                  <SelectItem value="st">ST</SelectItem>
                  <SelectItem value="ews">EWS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <Select onValueChange={(value) => updateProfile('education', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Education" />
                </SelectTrigger>
                <SelectContent>
                  {EDUCATION_LEVELS.map((education) => (
                    <SelectItem key={education} value={education}>{education}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="familySize">Family Members (Optional)</Label>
            <Input
              id="familySize"
              type="number"
              value={profile.familySize || ''}
              onChange={(e) => updateProfile('familySize', parseInt(e.target.value) || undefined)}
              placeholder="e.g. 4"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="landOwnership">Land (in acres, Optional)</Label>
            <Input
              id="landOwnership"
              type="number"
              step="0.1"
              value={profile.landOwnership || ''}
              onChange={(e) => updateProfile('landOwnership', parseFloat(e.target.value) || undefined)}
              placeholder="e.g. 2.5"
            />
          </div>
        </div>

        {/* Profile Summary */}
        {(profile.state || profile.occupation) && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Your Profile:</h4>
            <div className="flex flex-wrap gap-2">
              {profile.state && <Badge variant="outline">{profile.state}</Badge>}
              {profile.occupation && <Badge variant="outline">{profile.occupation}</Badge>}
              {profile.gender && <Badge variant="outline">{profile.gender === 'male' ? 'Male' : profile.gender === 'female' ? 'Female' : 'Other'}</Badge>}
              {profile.category && <Badge variant="outline">{profile.category.toUpperCase()}</Badge>}
              {profile.education && <Badge variant="outline">{profile.education}</Badge>}
            </div>
          </div>
        )}

        {/* Complete Button */}
        <Button 
          onClick={handleComplete}
          disabled={!isComplete}
          className="w-full bg-primary hover:bg-primary-hover"
          size="lg"
        >
          Find Schemes
        </Button>
        
        {!isComplete && (
          <p className="text-sm text-muted-foreground text-center">
            Please fill all required fields marked with *
          </p>
        )}
      </CardContent>
    </Card>
  );
}