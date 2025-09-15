import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


interface VoiceInputProps {
  onTranscription: (text: string, language: string) => void;
  isListening: boolean;
  setIsListening: (listening: boolean) => void;
}

export function VoiceInput({ onTranscription, isListening, setIsListening }: VoiceInputProps) {
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [supportedLanguages] = useState([
    { code: 'hi-IN', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'te-IN', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ta-IN', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'en-IN', name: 'English', flag: '🇮🇳' },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState('hi-IN');
  const { toast } = useToast();

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = selectedLanguage;

      recognitionInstance.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        
        if (event.results[current].isFinal) {
          onTranscription(transcript, selectedLanguage);
        }
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast({
          title: "आवाज़ की समस्या",
          description: "कृपया दोबारा कोशिश करें",
          variant: "destructive",
        });
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, [selectedLanguage, onTranscription, setIsListening, toast]);

  const toggleListening = () => {
    if (!recognition) {
      toast({
        title: "आवाज़ सपोर्ट नहीं है",
        description: "आपका ब्राउज़र आवाज़ को सपोर्ट नहीं करता",
        variant: "destructive",
      });
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.lang = selectedLanguage;
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <Card className="p-6 bg-card border-border">
      <div className="space-y-4">
        {/* Language Selection */}
        <div className="flex flex-wrap gap-2 justify-center">
          {supportedLanguages.map((lang) => (
            <Button
              key={lang.code}
              variant={selectedLanguage === lang.code ? "default" : "secondary"}
              size="sm"
              onClick={() => setSelectedLanguage(lang.code)}
              className="text-sm"
            >
              {lang.flag} {lang.name}
            </Button>
          ))}
        </div>

        {/* Voice Input Button */}
        <div className="flex flex-col items-center space-y-4">
          <Button
            onClick={toggleListening}
            size="lg"
            className={`w-20 h-20 rounded-full ${
              isListening 
                ? 'bg-destructive hover:bg-destructive/90 animate-pulse' 
                : 'bg-primary hover:bg-primary-hover'
            }`}
          >
            {isListening ? (
              <MicOff className="w-8 h-8" />
            ) : (
              <Mic className="w-8 h-8" />
            )}
          </Button>
          
          <div className="text-center">
            <p className="text-lg font-medium">
              {isListening ? 'सुन रहे हैं...' : 'बोलना शुरू करें'}
            </p>
            <p className="text-sm text-muted-foreground">
              {isListening 
                ? 'अपनी जरूरत बताएं' 
                : 'माइक दबाकर अपनी जानकारी बताएं'
              }
            </p>
          </div>
        </div>

        {/* Sample Prompts */}
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            उदाहरण:
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• "मैं आंध्र प्रदेश में किसान हूं, 2 एकड़ जमीन है"</li>
            <li>• "मुझे छात्रवृत्ति चाहिए, मैं इंजीनियरिंग कर रहा हूं"</li>
            <li>• "महिला उद्यमी के लिए क्या योजना है?"</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}