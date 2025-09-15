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
        ? `आपकी जानकारी के आधार पर मैंने ${schemes.length} योजनाएं खोजी हैं जो आपके लिए उपयुक्त हैं। इनमें से सबसे अच्छी योजना ${schemes[0].name} है जिसमें आपको ${schemes[0].benefits} मिलेगा।`
        : 'क्षमा करें, आपकी जानकारी के आधार पर कोई उपयुक्त योजना नहीं मिली। कृपया अपनी जानकारी को अपडेट करें।';
      
      setConversation([...newConversation, { type: 'ai', message: aiResponse }]);
      setAppState('results');
    }, 1500);
  };

  const handleApplyScheme = (scheme: Scheme) => {
    toast({
      title: "आवेदन प्रक्रिया",
      description: `${scheme.name} के लिए आपको ${scheme.applicationUrl || 'संबंधित कार्यालय'} पर जाना होगा।`,
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
                  🇮🇳 भारत सरकार की योजनाएं
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  YojanaAI
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
                  सरकारी योजनाओं का AI सहायक
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  आपकी भाषा में, आपकी जरूरत के अनुसार, सही सरकारी योजना खोजें। 
                  बस बोलें या लिखें - हम आपकी मदद करेंगे।
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-hover text-lg px-8"
                  onClick={() => setAppState('profile')}
                >
                  शुरू करें
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  onClick={() => setAppState('chat')}
                >
                  <Mic className="w-5 h-5 mr-2" />
                  आवाज से शुरू करें
                </Button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">बहुभाषी सपोर्ट</h3>
                    <p className="text-sm text-muted-foreground">
                      हिंदी, तेलुगु, तमिल और अंग्रेजी में बात करें
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold mb-2">AI पावर्ड</h3>
                    <p className="text-sm text-muted-foreground">
                      आपकी जरूरत समझकर सही योजना सुझाता है
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                    <h3 className="font-bold mb-2">सुरक्षित और मुफ्त</h3>
                    <p className="text-sm text-muted-foreground">
                      आपकी जानकारी सुरक्षित, कोई फीस नहीं
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
            <h2 className="text-3xl font-bold mb-8">समस्या का समाधान</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-destructive">समस्याएं</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    भाषा की बाधा - सब कुछ अंग्रेजी में
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    700+ योजनाएं अलग-अलग जगह
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    जटिल योग्यता नियम
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full"></span>
                    बिचौलियों का शोषण
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-success">YojanaAI का समाधान</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    आपकी भाषा में बात करें
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    सभी योजनाएं एक जगह
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    AI से योग्यता जांच
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    सीधे आवेदन करें
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
              वापस जाएं
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
            <h1 className="text-3xl font-bold mb-2">YojanaAI से बात करें</h1>
            <p className="text-muted-foreground">अपनी जरूरत बताएं, हम सही योजना खोजेंगे</p>
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
                  placeholder="या यहां लिखें: मैं किसान हूं, 2 एकड़ जमीन है..."
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
              प्रोफाइल एडिट करें
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setAppState('welcome')}
            >
              होम जाएं
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
            <h1 className="text-3xl font-bold mb-2">आपके लिए योजनाएं</h1>
            <p className="text-muted-foreground">
              {recommendedSchemes.length} योजनाएं मिलीं आपकी जरूरत के अनुसार
            </p>
          </div>

          {/* Latest Conversation */}
          {conversation.length > 0 && (
            <Card className="mb-8 border-border">
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  बातचीत
                </h3>
                <div className="space-y-2">
                  {conversation.slice(-2).map((msg, index) => (
                    <div key={index} className={msg.type === 'user' ? 'text-right' : ''}>
                      <Badge variant={msg.type === 'user' ? 'default' : 'secondary'}>
                        {msg.type === 'user' ? 'आप' : 'YojanaAI'}
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
                <h3 className="text-xl font-bold mb-2">कोई योजना नहीं मिली</h3>
                <p className="text-muted-foreground mb-4">
                  आपकी जानकारी के आधार पर कोई उपयुक्त योजना नहीं मिली।
                </p>
                <Button onClick={() => setAppState('profile')}>
                  प्रोफाइल अपडेट करें
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-8 space-x-4">
            <Button 
              onClick={() => setAppState('chat')}
              className="bg-primary hover:bg-primary-hover"
            >
              और प्रश्न पूछें
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setAppState('profile')}
            >
              प्रोफाइल एडिट करें
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Index;
