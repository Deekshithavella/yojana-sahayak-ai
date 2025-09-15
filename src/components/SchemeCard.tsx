import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { IndianRupee, MapPin, Users, Calendar, ExternalLink } from 'lucide-react';

export interface Scheme {
  id: string;
  name: string;
  description: string;
  benefits: string;
  eligibility: string[];
  department: string;
  type: 'central' | 'state';
  state?: string;
  amount?: string;
  applicationDeadline?: string;
  documentsRequired: string[];
  applicationUrl?: string;
  category: string;
}

interface SchemeCardProps {
  scheme: Scheme;
  matchScore?: number;
  onApply: (scheme: Scheme) => void;
}

export function SchemeCard({ scheme, matchScore, onApply }: SchemeCardProps) {
  return (
    <Card className="h-full border-border hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-2">
              {scheme.name}
            </CardTitle>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge 
                variant={scheme.type === 'central' ? 'default' : 'secondary'}
                className={scheme.type === 'central' ? 'bg-accent' : ''}
              >
                {scheme.type === 'central' ? 'केंद्रीय योजना' : 'राज्य योजना'}
              </Badge>
              <Badge variant="outline">
                {scheme.category}
              </Badge>
              {matchScore && (
                <Badge className="bg-success">
                  {matchScore}% मैच
                </Badge>
              )}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {scheme.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Benefits */}
        <div className="flex items-start gap-2">
          <IndianRupee className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">लाभ:</p>
            <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">क्षेत्र:</p>
            <p className="text-sm text-muted-foreground">
              {scheme.type === 'central' ? 'पूरे भारत में' : scheme.state || 'राज्य स्तर'}
            </p>
          </div>
        </div>

        {/* Eligibility */}
        <div className="flex items-start gap-2">
          <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">योग्यता:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              {scheme.eligibility.slice(0, 3).map((criteria, index) => (
                <li key={index} className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                  {criteria}
                </li>
              ))}
              {scheme.eligibility.length > 3 && (
                <li className="text-xs">और {scheme.eligibility.length - 3} और शर्तें...</li>
              )}
            </ul>
          </div>
        </div>

        {/* Deadline */}
        {scheme.applicationDeadline && (
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-sm">अंतिम तारीख:</p>
              <p className="text-sm text-muted-foreground">{scheme.applicationDeadline}</p>
            </div>
          </div>
        )}

        {/* Documents */}
        <div className="bg-muted/50 rounded-lg p-3">
          <p className="font-medium text-sm mb-2">आवश्यक दस्तावेज:</p>
          <div className="flex flex-wrap gap-1">
            {scheme.documentsRequired.slice(0, 4).map((doc, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {doc}
              </Badge>
            ))}
            {scheme.documentsRequired.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{scheme.documentsRequired.length - 4} और
              </Badge>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={() => onApply(scheme)}
          className="w-full bg-primary hover:bg-primary-hover"
        >
          आवेदन करें
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}