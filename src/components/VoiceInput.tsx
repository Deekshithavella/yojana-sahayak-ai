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
          title: "Voice recognition error",
          description: "Please try again",
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
        title: "Voice not supported",
        description: "Your browser doesn't support voice recognition",
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
              {isListening ? 'Listening...' : 'Start Speaking'}
            </p>
            <p className="text-sm text-muted-foreground">
              {isListening 
                ? 'Tell us your requirements' 
                : 'Press the microphone and tell us about yourself'
              }
            </p>
          </div>
        </div>

        {/* Sample Prompts */}
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            Examples:
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• "I am a farmer in Andhra Pradesh with 2 acres of land"</li>
            <li>• "I need scholarship, I'm studying engineering"</li>
            <li>• "What schemes are available for women entrepreneurs?"</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}