import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { VoiceInput } from '@/components/VoiceInput';
import { SchemeCard, Scheme } from '@/components/SchemeCard';
import { UserProfile, UserProfileData } from '@/components/UserProfile';
import { getRelevantSchemes } from '@/data/schemes';
import { useToast } from '@/hooks/use-toast';
import { 
  Bot, Heart, Users, Zap, Shield, 
  MessageSquare, Search, FileText, 
  ArrowRight, CheckCircle, Globe,
  Mic, Smartphone, Award
} from 'lucide-react';

type AppState = 'welcome' | 'profile' | 'chat' | 'results';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    state: '',
    occupation: '',
    gender: '',
    category: '',
    education: ''
  });
  const [isListening, setIsListening] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'ai', message: string}>>([]);
  const [recommendedSchemes, setRecommendedSchemes] = useState<Array<Scheme & { matchScore: number }>>([]);
  const { toast } = useToast();

  const handleVoiceTranscription = (text: string, language: string) => {
    setChatInput(text);
    handleSendMessage(text);
  };

  const handleSendMessage = (message?: string) => {
    const text = message || chatInput;
    if (!text.trim()) return;

    // Add user message to conversation
    const newConversation = [...conversation, { type: 'user' as const, message: text }];
    setConversation(newConversation);
    setChatInput('');

    // Simulate AI processing and get scheme recommendations
    setTimeout(() => {
      const schemes = getRelevantSchemes(userProfile);
      setRecommendedSchemes(schemes);
      
      const aiResponse = schemes.length > 0
        ? `Based on your profile, I found ${schemes.length} suitable schemes for you. The best match is ${schemes[0].name} which offers ${schemes[0].benefits}.`
        : 'Sorry, no suitable schemes found based on your profile. Please update your information to find more relevant schemes.';
      
      setConversation([...newConversation, { type: 'ai', message: aiResponse }]);
      setAppState('results');
    }, 1500);
  };

  const handleApplyScheme = (scheme: Scheme) => {
    toast({
      title: "Application Process",
      description: `For ${scheme.name}, please visit ${scheme.applicationUrl || 'the relevant office'} to apply.`,
    });
  };

  if (appState === 'welcome') {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <Badge className="mb-4 bg-success">
                  🇮🇳 Government of India
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  YojanaAI
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
                  AI Assistant for Government Schemes
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover the right government schemes for you in your preferred language. 
                  Simply speak or type - we'll help you find what you need.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-hover text-lg px-8"
                  onClick={() => setAppState('profile')}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  onClick={() => setAppState('chat')}
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Start with Voice
                </Button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Multilingual Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Speak in Hindi, Telugu, Tamil, or English
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold mb-2">AI Powered</h3>
                    <p className="text-sm text-muted-foreground">
                      Understands your needs and suggests the right schemes
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Safe & Free</h3>
                    <p className="text-sm text-muted-foreground">
                      Your data is secure, completely free to use
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="container mx-auto px-4 py-16 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">The Problem We Solve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-destructive">Current Problems</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    Language barriers - Everything in English only
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    700+ schemes scattered across different portals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    Complex eligibility rules
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    Middlemen exploitation
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-success">YojanaAI's Solution</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Speak in your preferred language
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    All schemes in one place
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    AI-powered eligibility checking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Direct application guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'profile') {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">अपनी जानकारी भरें</h1>
            <p className="text-muted-foreground">सही योजनाओं की जानकारी के लिए</p>
          </div>
          
          <UserProfile 
            profile={userProfile}
            onProfileUpdate={setUserProfile}
            onProfileComplete={() => setAppState('chat')}
          />
          
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              onClick={() => setAppState('welcome')}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'chat') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Chat with YojanaAI</h1>
            <p className="text-muted-foreground">Tell us your needs, we'll find the right schemes</p>
          </div>

          {/* Conversation Display */}
          {conversation.length > 0 && (
            <Card className="mb-6 max-h-64 overflow-y-auto border-border">
              <CardContent className="p-4 space-y-4">
                {conversation.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Voice Input */}
          <div className="mb-6">
            <VoiceInput 
              onTranscription={handleVoiceTranscription}
              isListening={isListening}
              setIsListening={setIsListening}
            />
          </div>

          {/* Text Input */}
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Or type here: I am a farmer with 2 acres of land..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 min-h-[60px]"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button 
                  onClick={() => handleSendMessage()}
                  disabled={!chatInput.trim()}
                  size="lg"
                  className="bg-primary hover:bg-primary-hover"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-6 space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setAppState('profile')}
            >
              Edit Profile
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setAppState('welcome')}
            >
              Go Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'results') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Recommended Schemes</h1>
            <p className="text-muted-foreground">
              Found {recommendedSchemes.length} schemes matching your profile
            </p>
          </div>

          {/* Latest Conversation */}
          {conversation.length > 0 && (
            <Card className="mb-8 border-border">
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Conversation
                </h3>
                <div className="space-y-2">
                  {conversation.slice(-2).map((msg, index) => (
                    <div key={index} className={msg.type === 'user' ? 'text-right' : ''}>
                      <Badge variant={msg.type === 'user' ? 'default' : 'secondary'}>
                        {msg.type === 'user' ? 'You' : 'YojanaAI'}
                      </Badge>
                      <p className="text-sm mt-1">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Scheme Results */}
          {recommendedSchemes.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendedSchemes.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  matchScore={scheme.matchScore}
                  onApply={handleApplyScheme}
                />
              ))}
            </div>
          ) : (
            <Card className="text-center p-8 border-border">
              <CardContent>
                <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No Schemes Found</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find any suitable schemes based on your profile.
                </p>
                <Button onClick={() => setAppState('profile')}>
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-8 space-x-4">
            <Button 
              onClick={() => setAppState('chat')}
              className="bg-primary hover:bg-primary-hover"
            >
              Ask More Questions
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setAppState('profile')}
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Index;
