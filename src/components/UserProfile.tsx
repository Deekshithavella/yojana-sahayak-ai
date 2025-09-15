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
  'किसान', 'छात्र', 'गृहिणी', 'व्यापारी', 'मजदूर', 'कर्मचारी', 
  'बेरोजगार', 'रिटायर्ड', 'उद्यमी', 'कारीगर', 'मछुआरा', 'पशुपालक'
];

const EDUCATION_LEVELS = [
  'अनपढ़', 'प्राथमिक', 'माध्यमिक', 'उच्च माध्यमिक', 'स्नातक', 
  'स्नातकोत्तर', 'डिप्लोमा', 'व्यावसायिक कोर्स'
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
          आपकी जानकारी
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          सही योजनाओं की जानकारी के लिए अपनी जानकारी भरें
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">नाम (वैकल्पिक)</Label>
            <Input
              id="name"
              value={profile.name || ''}
              onChange={(e) => updateProfile('name', e.target.value)}
              placeholder="आपका नाम"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age">उम्र (वैकल्पिक)</Label>
            <Input
              id="age"
              type="number"
              value={profile.age || ''}
              onChange={(e) => updateProfile('age', parseInt(e.target.value) || undefined)}
              placeholder="आपकी उम्र"
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            स्थान *
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">राज्य</Label>
              <Select onValueChange={(value) => updateProfile('state', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="राज्य चुनें" />
                </SelectTrigger>
                <SelectContent>
                  {INDIAN_STATES.map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="district">जिला (वैकल्पिक)</Label>
              <Input
                id="district"
                value={profile.district || ''}
                onChange={(e) => updateProfile('district', e.target.value)}
                placeholder="आपका जिला"
              />
            </div>
          </div>
        </div>

        {/* Occupation & Income */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            व्यवसाय व आय
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="occupation">व्यवसाय *</Label>
              <Select onValueChange={(value) => updateProfile('occupation', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="व्यवसाय चुनें" />
                </SelectTrigger>
                <SelectContent>
                  {OCCUPATIONS.map((occupation) => (
                    <SelectItem key={occupation} value={occupation}>{occupation}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="income">वार्षिक आय (रुपए में, वैकल्पिक)</Label>
              <Input
                id="income"
                type="number"
                value={profile.income || ''}
                onChange={(e) => updateProfile('income', parseInt(e.target.value) || undefined)}
                placeholder="जैसे: 200000"
              />
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <Home className="w-4 h-4 text-success" />
            व्यक्तिगत जानकारी *
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gender">लिंग</Label>
              <Select onValueChange={(value) => updateProfile('gender', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="लिंग चुनें" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">पुरुष</SelectItem>
                  <SelectItem value="female">महिला</SelectItem>
                  <SelectItem value="other">अन्य</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">श्रेणी</Label>
              <Select onValueChange={(value) => updateProfile('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="श्रेणी चुनें" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">सामान्य</SelectItem>
                  <SelectItem value="obc">ओबीसी</SelectItem>
                  <SelectItem value="sc">अनुसूचित जाति</SelectItem>
                  <SelectItem value="st">अनुसूचित जनजाति</SelectItem>
                  <SelectItem value="ews">आर्थिक रूप से कमजोर वर्ग</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="education">शिक्षा</Label>
              <Select onValueChange={(value) => updateProfile('education', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="शिक्षा चुनें" />
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
            <Label htmlFor="familySize">परिवार के सदस्य (वैकल्पिक)</Label>
            <Input
              id="familySize"
              type="number"
              value={profile.familySize || ''}
              onChange={(e) => updateProfile('familySize', parseInt(e.target.value) || undefined)}
              placeholder="जैसे: 4"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="landOwnership">जमीन (एकड़ में, वैकल्पिक)</Label>
            <Input
              id="landOwnership"
              type="number"
              step="0.1"
              value={profile.landOwnership || ''}
              onChange={(e) => updateProfile('landOwnership', parseFloat(e.target.value) || undefined)}
              placeholder="जैसे: 2.5"
            />
          </div>
        </div>

        {/* Profile Summary */}
        {(profile.state || profile.occupation) && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium mb-2">आपकी प्रोफाइल:</h4>
            <div className="flex flex-wrap gap-2">
              {profile.state && <Badge variant="outline">{profile.state}</Badge>}
              {profile.occupation && <Badge variant="outline">{profile.occupation}</Badge>}
              {profile.gender && <Badge variant="outline">{profile.gender === 'male' ? 'पुरुष' : profile.gender === 'female' ? 'महिला' : 'अन्य'}</Badge>}
              {profile.category && <Badge variant="outline">{profile.category}</Badge>}
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
          योजनाएं खोजें
        </Button>
        
        {!isComplete && (
          <p className="text-sm text-muted-foreground text-center">
            कृपया * वाली सभी जानकारी भरें
          </p>
        )}
      </CardContent>
    </Card>
  );
}