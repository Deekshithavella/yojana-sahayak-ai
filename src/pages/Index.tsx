import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { VoiceInput } from '@/components/VoiceInput';
import { SchemeCard, Scheme } from '@/components/SchemeCard';
import { UserProfile, UserProfileData } from '@/components/UserProfile';
import { LanguageSelector } from '@/components/LanguageSelector';
import { getRelevantSchemes } from '@/data/schemes';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { t } = useLanguage();

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
        ? t('aiFoundSchemes').replace('{count}', schemes.length.toString()).replace('{name}', schemes[0].name).replace('{benefits}', schemes[0].benefits)
        : t('aiNoSchemes');
      
      setConversation([...newConversation, { type: 'ai', message: aiResponse }]);
      setAppState('results');
    }, 1500);
  };

  const handleApplyScheme = (scheme: Scheme) => {
    toast({
      title: t('applicationProcess'),
      description: t('applicationDesc').replace('{scheme}', scheme.name).replace('{url}', scheme.applicationUrl || 'the relevant office'),
    });
  };

  if (appState === 'welcome') {
    return (
      <div className="min-h-screen bg-background">
        {/* Language Selector - Fixed Position */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector />
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <Badge className="mb-4 bg-success">
                  🇮🇳 Government of India
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('welcomeTitle')}
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
                  {t('welcomeSubtitle')}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('welcomeDescription')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-hover text-lg px-8"
                  onClick={() => setAppState('profile')}
                >
                  {t('getStarted')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  onClick={() => setAppState('chat')}
                >
                  <Mic className="w-5 h-5 mr-2" />
                  {t('startWithVoice')}
                </Button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{t('multilingualTitle')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('multilingualDesc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{t('aiPoweredTitle')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('aiPoweredDesc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{t('safeFreeTitle')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('safeFreeDesc')}
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
            <h2 className="text-3xl font-bold mb-8">{t('problemTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-destructive">{t('currentProblems')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    {t('problem1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    {t('problem2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    {t('problem3')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    {t('problem4')}
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-success">{t('ourSolution')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {t('solution1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {t('solution2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {t('solution3')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {t('solution4')}
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
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector />
        </div>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{t('profileTitle')}</h1>
            <p className="text-muted-foreground">{t('profileSubtitle')}</p>
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
              {t('goBack')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'chat') {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector />
        </div>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{t('chatTitle')}</h1>
            <p className="text-muted-foreground">{t('chatSubtitle')}</p>
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
                  placeholder={t('typePlaceholder')}
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
              {t('editProfile')}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setAppState('welcome')}
            >
              {t('goHome')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'results') {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector />
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{t('resultsTitle')}</h1>
            <p className="text-muted-foreground">
              {t('foundSchemes').replace('{count}', recommendedSchemes.length.toString())}
            </p>
          </div>

          {/* Latest Conversation */}
          {conversation.length > 0 && (
            <Card className="mb-8 border-border">
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  {t('conversation')}
                </h3>
                <div className="space-y-2">
                  {conversation.slice(-2).map((msg, index) => (
                    <div key={index} className={msg.type === 'user' ? 'text-right' : ''}>
                      <Badge variant={msg.type === 'user' ? 'default' : 'secondary'}>
                        {msg.type === 'user' ? t('you') : t('yojanaAI')}
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
                <h3 className="text-xl font-bold mb-2">{t('noSchemesTitle')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('noSchemesDesc')}
                </p>
                <Button onClick={() => setAppState('profile')}>
                  {t('updateProfile')}
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-8 space-x-4">
            <Button 
              onClick={() => setAppState('chat')}
              className="bg-primary hover:bg-primary-hover"
            >
              {t('askMore')}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setAppState('profile')}
            >
              {t('editProfile')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Index;
