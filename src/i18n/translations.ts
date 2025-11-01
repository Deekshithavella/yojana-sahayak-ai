export type Language = 'en' | 'hi' | 'te' | 'ta';

export const translations = {
  en: {
    // Welcome Screen
    welcomeTitle: 'YojanaAI',
    welcomeSubtitle: 'AI Assistant for Government Schemes',
    welcomeDescription: 'Discover the right government schemes for you in your preferred language. Simply speak or type - we\'ll help you find what you need.',
    getStarted: 'Get Started',
    startWithVoice: 'Start with Voice',
    
    // Features
    multilingualTitle: 'Multilingual Support',
    multilingualDesc: 'Speak in Hindi, Telugu, Tamil, or English',
    aiPoweredTitle: 'AI Powered',
    aiPoweredDesc: 'Understands your needs and suggests the right schemes',
    safeFreeTitle: 'Safe & Free',
    safeFreeDesc: 'Your data is secure, completely free to use',
    
    // Problem Statement
    problemTitle: 'The Problem We Solve',
    currentProblems: 'Current Problems',
    ourSolution: 'YojanaAI\'s Solution',
    problem1: 'Language barriers - Everything in English only',
    problem2: '700+ schemes scattered across different portals',
    problem3: 'Complex eligibility rules',
    problem4: 'Middlemen exploitation',
    solution1: 'Speak in your preferred language',
    solution2: 'All schemes in one place',
    solution3: 'AI-powered eligibility checking',
    solution4: 'Direct application guidance',
    
    // Profile Screen
    profileTitle: 'Fill Your Information',
    profileSubtitle: 'To find the right schemes',
    state: 'State',
    selectState: 'Select your state',
    occupation: 'Occupation',
    selectOccupation: 'Select occupation',
    gender: 'Gender',
    selectGender: 'Select gender',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    category: 'Category',
    selectCategory: 'Select category',
    education: 'Education',
    selectEducation: 'Select education level',
    continueBtn: 'Continue',
    goBack: 'Go Back',
    
    // Chat Screen
    chatTitle: 'Chat with YojanaAI',
    chatSubtitle: 'Tell us your needs, we\'ll find the right schemes',
    listening: 'Listening...',
    startSpeaking: 'Start Speaking',
    listeningDesc: 'Tell us your requirements',
    startSpeakingDesc: 'Press the microphone and tell us about yourself',
    examples: 'Examples:',
    example1: 'I am a farmer in Andhra Pradesh with 2 acres of land',
    example2: 'I need scholarship, I\'m studying engineering',
    example3: 'What schemes are available for women entrepreneurs?',
    typePlaceholder: 'Or type here: I am a farmer with 2 acres of land...',
    editProfile: 'Edit Profile',
    goHome: 'Go Home',
    
    // Results Screen
    resultsTitle: 'Recommended Schemes',
    foundSchemes: 'Found {count} schemes matching your profile',
    conversation: 'Conversation',
    you: 'You',
    yojanaAI: 'YojanaAI',
    noSchemesTitle: 'No Schemes Found',
    noSchemesDesc: 'We couldn\'t find any suitable schemes based on your profile.',
    updateProfile: 'Update Profile',
    askMore: 'Ask More Questions',
    
    // Scheme Card
    matchScore: 'Match Score',
    benefits: 'Benefits',
    eligibility: 'Eligibility',
    amount: 'Amount',
    documentsRequired: 'Documents Required',
    viewDetails: 'View Details',
    applyNow: 'Apply Now',
    
    // Occupations
    farmer: 'Farmer',
    student: 'Student',
    women_entrepreneur: 'Women Entrepreneur',
    senior_citizen: 'Senior Citizen',
    unemployed: 'Unemployed',
    small_business: 'Small Business Owner',
    
    // Education
    no_formal: 'No Formal Education',
    primary: 'Primary',
    secondary: 'Secondary',
    graduate: 'Graduate',
    postgraduate: 'Post Graduate',
    
    // Toast messages
    applicationProcess: 'Application Process',
    applicationDesc: 'For {scheme}, please visit {url} to apply.',
    voiceNotSupported: 'Voice not supported',
    voiceNotSupportedDesc: 'Your browser doesn\'t support voice recognition',
    voiceError: 'Voice recognition error',
    voiceErrorDesc: 'Please try again',
    
    // AI Response
    aiFoundSchemes: 'Based on your profile, I found {count} suitable schemes for you. The best match is {name} which offers {benefits}.',
    aiNoSchemes: 'Sorry, no suitable schemes found based on your profile. Please update your information to find more relevant schemes.',
  },
  
  hi: {
    // Welcome Screen
    welcomeTitle: 'YojanaAI',
    welcomeSubtitle: 'सरकारी योजनाओं के लिए एआई सहायक',
    welcomeDescription: 'अपनी पसंदीदा भाषा में अपने लिए सही सरकारी योजनाएं खोजें। बस बोलें या टाइप करें - हम आपकी मदद करेंगे।',
    getStarted: 'शुरू करें',
    startWithVoice: 'आवाज़ से शुरू करें',
    
    // Features
    multilingualTitle: 'बहुभाषी समर्थन',
    multilingualDesc: 'हिंदी, तेलुगू, तमिल या अंग्रेजी में बोलें',
    aiPoweredTitle: 'एआई संचालित',
    aiPoweredDesc: 'आपकी जरूरतों को समझता है और सही योजनाओं का सुझाव देता है',
    safeFreeTitle: 'सुरक्षित और मुफ्त',
    safeFreeDesc: 'आपका डेटा सुरक्षित है, उपयोग बिल्कुल मुफ्त है',
    
    // Problem Statement
    problemTitle: 'हम जो समस्या हल करते हैं',
    currentProblems: 'वर्तमान समस्याएं',
    ourSolution: 'YojanaAI का समाधान',
    problem1: 'भाषा की बाधाएं - सब कुछ केवल अंग्रेजी में',
    problem2: 'विभिन्न पोर्टलों पर बिखरी 700+ योजनाएं',
    problem3: 'जटिल पात्रता नियम',
    problem4: 'बिचौलियों का शोषण',
    solution1: 'अपनी पसंदीदा भाषा में बोलें',
    solution2: 'सभी योजनाएं एक जगह',
    solution3: 'एआई-संचालित पात्रता जांच',
    solution4: 'सीधे आवेदन मार्गदर्शन',
    
    // Profile Screen
    profileTitle: 'अपनी जानकारी भरें',
    profileSubtitle: 'सही योजनाओं की जानकारी के लिए',
    state: 'राज्य',
    selectState: 'अपना राज्य चुनें',
    occupation: 'व्यवसाय',
    selectOccupation: 'व्यवसाय चुनें',
    gender: 'लिंग',
    selectGender: 'लिंग चुनें',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    category: 'श्रेणी',
    selectCategory: 'श्रेणी चुनें',
    education: 'शिक्षा',
    selectEducation: 'शिक्षा स्तर चुनें',
    continueBtn: 'जारी रखें',
    goBack: 'वापस जाएं',
    
    // Chat Screen
    chatTitle: 'YojanaAI से बात करें',
    chatSubtitle: 'हमें अपनी जरूरतें बताएं, हम सही योजनाएं ढूंढेंगे',
    listening: 'सुन रहे हैं...',
    startSpeaking: 'बोलना शुरू करें',
    listeningDesc: 'हमें अपनी आवश्यकताएं बताएं',
    startSpeakingDesc: 'माइक्रोफोन दबाएं और अपने बारे में बताएं',
    examples: 'उदाहरण:',
    example1: 'मैं आंध्र प्रदेश में 2 एकड़ जमीन वाला किसान हूं',
    example2: 'मुझे छात्रवृत्ति चाहिए, मैं इंजीनियरिंग की पढ़ाई कर रहा हूं',
    example3: 'महिला उद्यमियों के लिए कौन सी योजनाएं उपलब्ध हैं?',
    typePlaceholder: 'या यहां टाइप करें: मैं 2 एकड़ जमीन वाला किसान हूं...',
    editProfile: 'प्रोफाइल संपादित करें',
    goHome: 'होम पर जाएं',
    
    // Results Screen
    resultsTitle: 'अनुशंसित योजनाएं',
    foundSchemes: 'आपकी प्रोफाइल से मेल खाती {count} योजनाएं मिलीं',
    conversation: 'बातचीत',
    you: 'आप',
    yojanaAI: 'YojanaAI',
    noSchemesTitle: 'कोई योजना नहीं मिली',
    noSchemesDesc: 'हमें आपकी प्रोफाइल के आधार पर कोई उपयुक्त योजना नहीं मिली।',
    updateProfile: 'प्रोफाइल अपडेट करें',
    askMore: 'और सवाल पूछें',
    
    // Scheme Card
    matchScore: 'मैच स्कोर',
    benefits: 'लाभ',
    eligibility: 'पात्रता',
    amount: 'राशि',
    documentsRequired: 'आवश्यक दस्तावेज',
    viewDetails: 'विवरण देखें',
    applyNow: 'अभी आवेदन करें',
    
    // Occupations
    farmer: 'किसान',
    student: 'छात्र',
    women_entrepreneur: 'महिला उद्यमी',
    senior_citizen: 'वरिष्ठ नागरिक',
    unemployed: 'बेरोजगार',
    small_business: 'लघु व्यवसाय स्वामी',
    
    // Education
    no_formal: 'कोई औपचारिक शिक्षा नहीं',
    primary: 'प्राथमिक',
    secondary: 'माध्यमिक',
    graduate: 'स्नातक',
    postgraduate: 'स्नातकोत्तर',
    
    // Toast messages
    applicationProcess: 'आवेदन प्रक्रिया',
    applicationDesc: '{scheme} के लिए, कृपया आवेदन करने के लिए {url} पर जाएं।',
    voiceNotSupported: 'आवाज समर्थित नहीं',
    voiceNotSupportedDesc: 'आपका ब्राउज़र आवाज पहचान का समर्थन नहीं करता',
    voiceError: 'आवाज पहचान त्रुटि',
    voiceErrorDesc: 'कृपया पुनः प्रयास करें',
    
    // AI Response
    aiFoundSchemes: 'आपकी प्रोफाइल के आधार पर, मुझे आपके लिए {count} उपयुक्त योजनाएं मिलीं। सबसे अच्छा मैच {name} है जो {benefits} प्रदान करता है।',
    aiNoSchemes: 'क्षमा करें, आपकी प्रोफाइल के आधार पर कोई उपयुक्त योजना नहीं मिली। अधिक प्रासंगिक योजनाएं खोजने के लिए कृपया अपनी जानकारी अपडेट करें।',
  },
  
  te: {
    // Welcome Screen
    welcomeTitle: 'YojanaAI',
    welcomeSubtitle: 'ప్రభుత్వ పథకాల కోసం AI సహాయకుడు',
    welcomeDescription: 'మీ ఇష్టమైన భాషలో మీకు సరైన ప్రభుత్వ పథకాలను కనుగొనండి. మాట్లాడండి లేదా టైప్ చేయండి - మేము మీకు సహాయం చేస్తాము.',
    getStarted: 'ప్రారంభించండి',
    startWithVoice: 'వాయిస్‌తో ప్రారంభించండి',
    
    // Features
    multilingualTitle: 'బహుభాషా మద్దతు',
    multilingualDesc: 'హిందీ, తెలుగు, తమిళం లేదా ఇంగ్లీష్‌లో మాట్లాడండి',
    aiPoweredTitle: 'AI శక్తితో',
    aiPoweredDesc: 'మీ అవసరాలను అర్థం చేసుకుని సరైన పథకాలను సూచిస్తుంది',
    safeFreeTitle: 'సురక్షితం & ఉచితం',
    safeFreeDesc: 'మీ డేటా సురక్షితం, పూర్తిగా ఉచితంగా ఉపయోగించండి',
    
    // Problem Statement
    problemTitle: 'మేము పరిష్కరించే సమస్య',
    currentProblems: 'ప్రస్తుత సమస్యలు',
    ourSolution: 'YojanaAI పరిష్కారం',
    problem1: 'భాషా అడ్డంకులు - అన్నీ ఇంగ్లీష్‌లో మాత్రమే',
    problem2: 'వివిధ పోర్టల్‌లలో చెదిరిన 700+ పథకాలు',
    problem3: 'క్లిష్టమైన అర్హత నియమాలు',
    problem4: 'మధ్యవర్తుల దోపిడీ',
    solution1: 'మీ ఇష్టమైన భాషలో మాట్లాడండి',
    solution2: 'అన్ని పథకాలు ఒకే చోట',
    solution3: 'AI-శక్తితో అర్హత తనిఖీ',
    solution4: 'ప్రత్యక్ష దరఖాస్తు మార్గదర్శకత్వం',
    
    // Profile Screen
    profileTitle: 'మీ సమాచారం నింపండి',
    profileSubtitle: 'సరైన పథకాల కోసం',
    state: 'రాష్ట్రం',
    selectState: 'మీ రాష్ట్రాన్ని ఎంచుకోండి',
    occupation: 'వృత్తి',
    selectOccupation: 'వృత్తిని ఎంచుకోండి',
    gender: 'లింగం',
    selectGender: 'లింగాన్ని ఎంచుకోండి',
    male: 'పురుషుడు',
    female: 'స్త్రీ',
    other: 'ఇతర',
    category: 'వర్గం',
    selectCategory: 'వర్గాన్ని ఎంచుకోండి',
    education: 'విద్య',
    selectEducation: 'విద్యా స్థాయిని ఎంచుకోండి',
    continueBtn: 'కొనసాగించు',
    goBack: 'వెనక్కి వెళ్ళు',
    
    // Chat Screen
    chatTitle: 'YojanaAI తో చాట్ చేయండి',
    chatSubtitle: 'మీ అవసరాలను మాకు చెప్పండి, మేము సరైన పథకాలను కనుగొంటాము',
    listening: 'వింటోంది...',
    startSpeaking: 'మాట్లాడటం ప్రారంభించండి',
    listeningDesc: 'మీ అవసరాలను మాకు చెప్పండి',
    startSpeakingDesc: 'మైక్రోఫోన్ నొక్కి మీ గురించి చెప్పండి',
    examples: 'ఉదాహరణలు:',
    example1: 'నేను ఆంధ్రప్రదేశ్‌లో 2 ఎకరాల భూమి ఉన్న రైతును',
    example2: 'నాకు స్కాలర్‌షిప్ కావాలి, నేను ఇంజినీరింగ్ చదువుతున్నాను',
    example3: 'మహిళా వ్యవసాయదారుల కోసం ఏ పథకాలు అందుబాటులో ఉన్నాయి?',
    typePlaceholder: 'లేదా ఇక్కడ టైప్ చేయండి: నేను 2 ఎకరాల భూమి ఉన్న రైతును...',
    editProfile: 'ప్రొఫైల్ సవరించు',
    goHome: 'హోమ్‌కు వెళ్ళు',
    
    // Results Screen
    resultsTitle: 'సిఫార్సు చేసిన పథకాలు',
    foundSchemes: 'మీ ప్రొఫైల్‌కు సరిపోయే {count} పథకాలు దొరికాయి',
    conversation: 'సంభాషణ',
    you: 'మీరు',
    yojanaAI: 'YojanaAI',
    noSchemesTitle: 'పథకాలు కనుగొనబడలేదు',
    noSchemesDesc: 'మీ ప్రొఫైల్ ఆధారంగా తగిన పథకాలు కనుగొనలేకపోయాము.',
    updateProfile: 'ప్రొఫైల్ నవీకరించు',
    askMore: 'మరిన్ని ప్రశ్నలు అడగండి',
    
    // Scheme Card
    matchScore: 'మ్యాచ్ స్కోర్',
    benefits: 'ప్రయోజనాలు',
    eligibility: 'అర్హత',
    amount: 'మొత్తం',
    documentsRequired: 'అవసరమైన పత్రాలు',
    viewDetails: 'వివరాలు చూడండి',
    applyNow: 'ఇప్పుడే దరఖాస్తు చేసుకోండి',
    
    // Occupations
    farmer: 'రైతు',
    student: 'విద్యార్థి',
    women_entrepreneur: 'మహిళా వ్యవసాయదారు',
    senior_citizen: 'వృద్ధ పౌరుడు',
    unemployed: 'నిరుద్యోగి',
    small_business: 'చిన్న వ్యాపార యజమాని',
    
    // Education
    no_formal: 'అధికారిక విద్య లేదు',
    primary: 'ప్రాథమిక',
    secondary: 'మాధ్యమిక',
    graduate: 'గ్రాడ్యుయేట్',
    postgraduate: 'పోస్ట్ గ్రాడ్యుయేట్',
    
    // Toast messages
    applicationProcess: 'దరఖాస్తు ప్రక్రియ',
    applicationDesc: '{scheme} కోసం, దయచేసి దరఖాస్తు చేసుకోవడానికి {url} ను సందర్శించండి.',
    voiceNotSupported: 'వాయిస్ మద్దతు లేదు',
    voiceNotSupportedDesc: 'మీ బ్రౌజర్ వాయిస్ గుర్తింపుకు మద్దతు ఇవ్వదు',
    voiceError: 'వాయిస్ గుర్తింపు లోపం',
    voiceErrorDesc: 'దయచేసి మళ్లీ ప్రయత్నించండి',
    
    // AI Response
    aiFoundSchemes: 'మీ ప్రొఫైల్ ఆధారంగా, నేను మీకు {count} తగిన పథకాలను కనుగొన్నాను. ఉత్తమ మ్యాచ్ {name} ఇది {benefits} అందిస్తుంది.',
    aiNoSchemes: 'క్షమించండి, మీ ప్రొఫైల్ ఆధారంగా తగిన పథకాలు కనుగొనబడలేదు. మరింత సంబంధిత పథకాలను కనుగొనడానికి దయచేసి మీ సమాచారాన్ని నవీకరించండి.',
  },
  
  ta: {
    // Welcome Screen
    welcomeTitle: 'YojanaAI',
    welcomeSubtitle: 'அரசு திட்டங்களுக்கான AI உதவியாளர்',
    welcomeDescription: 'உங்கள் விருப்பமான மொழியில் உங்களுக்கு சரியான அரசு திட்டங்களைக் கண்டறியவும். பேசவும் அல்லது தட்டச்சு செய்யவும் - நாங்கள் உங்களுக்கு உதவுவோம்.',
    getStarted: 'தொடங்குங்கள்',
    startWithVoice: 'குரல் மூலம் தொடங்கு',
    
    // Features
    multilingualTitle: 'பல மொழி ஆதரவு',
    multilingualDesc: 'இந்தி, தெலுங்கு, தமிழ் அல்லது ஆங்கிலத்தில் பேசுங்கள்',
    aiPoweredTitle: 'AI இயக்கப்படுகிறது',
    aiPoweredDesc: 'உங்கள் தேவைகளைப் புரிந்து சரியான திட்டங்களைப் பரிந்துரைக்கிறது',
    safeFreeTitle: 'பாதுகாப்பான & இலவசம்',
    safeFreeDesc: 'உங்கள் தரவு பாதுகாப்பானது, பயன்படுத்த முற்றிலும் இலவசம்',
    
    // Problem Statement
    problemTitle: 'நாங்கள் தீர்க்கும் பிரச்சனை',
    currentProblems: 'தற்போதைய பிரச்சனைகள்',
    ourSolution: 'YojanaAI தீர்வு',
    problem1: 'மொழித் தடைகள் - எல்லாம் ஆங்கிலத்தில் மட்டுமே',
    problem2: 'பல்வேறு போர்டல்களில் சிதறிய 700+ திட்டங்கள்',
    problem3: 'சிக்கலான தகுதி விதிகள்',
    problem4: 'இடைத்தரகர் சுரண்டல்',
    solution1: 'உங்கள் விருப்பமான மொழியில் பேசுங்கள்',
    solution2: 'அனைத்து திட்டங்களும் ஒரே இடத்தில்',
    solution3: 'AI-இயக்கப்படும் தகுதி சரிபார்ப்பு',
    solution4: 'நேரடி விண்ணப்ப வழிகாட்டுதல்',
    
    // Profile Screen
    profileTitle: 'உங்கள் தகவலை நிரப்பவும்',
    profileSubtitle: 'சரியான திட்டங்களைக் கண்டறிய',
    state: 'மாநிலம்',
    selectState: 'உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும்',
    occupation: 'தொழில்',
    selectOccupation: 'தொழிலைத் தேர்ந்தெடுக்கவும்',
    gender: 'பாலினம்',
    selectGender: 'பாலினத்தைத் தேர்ந்தெடுக்கவும்',
    male: 'ஆண்',
    female: 'பெண்',
    other: 'மற்றவை',
    category: 'வகை',
    selectCategory: 'வகையைத் தேர்ந்தெடுக்கவும்',
    education: 'கல்வி',
    selectEducation: 'கல்வி நிலையைத் தேர்ந்தெடுக்கவும்',
    continueBtn: 'தொடரவும்',
    goBack: 'திரும்பிச் செல்',
    
    // Chat Screen
    chatTitle: 'YojanaAI உடன் உரையாடவும்',
    chatSubtitle: 'உங்கள் தேவைகளை எங்களிடம் சொல்லுங்கள், நாங்கள் சரியான திட்டங்களைக் கண்டுபிடிப்போம்',
    listening: 'கேட்கிறது...',
    startSpeaking: 'பேச ஆரம்பிக்கவும்',
    listeningDesc: 'உங்கள் தேவைகளை எங்களிடம் சொல்லுங்கள்',
    startSpeakingDesc: 'மைக்ரோஃபோனை அழுத்தி உங்களைப் பற்றி சொல்லுங்கள்',
    examples: 'உதாரணங்கள்:',
    example1: 'நான் ஆந்திரப்பிரதேசத்தில் 2 ஏக்கர் நிலம் உள்ள விவசாயி',
    example2: 'எனக்கு உதவித்தொகை தேவை, நான் பொறியியல் படித்து வருகிறேன்',
    example3: 'பெண் தொழில்முனைவோருக்கு என்ன திட்டங்கள் உள்ளன?',
    typePlaceholder: 'அல்லது இங்கே தட்டச்சு செய்யவும்: நான் 2 ஏக்கர் நிலம் உள்ள விவசாயி...',
    editProfile: 'சுயவிவரத்தைத் திருத்து',
    goHome: 'முகப்புக்குச் செல்',
    
    // Results Screen
    resultsTitle: 'பரிந்துரைக்கப்பட்ட திட்டங்கள்',
    foundSchemes: 'உங்கள் சுயவிவரத்துடன் பொருந்தும் {count} திட்டங்கள் கண்டறியப்பட்டன',
    conversation: 'உரையாடல்',
    you: 'நீங்கள்',
    yojanaAI: 'YojanaAI',
    noSchemesTitle: 'திட்டங்கள் கிடைக்கவில்லை',
    noSchemesDesc: 'உங்கள் சுயவிவரத்தின் அடிப்படையில் பொருத்தமான திட்டங்களைக் கண்டுபிடிக்க முடியவில்லை.',
    updateProfile: 'சுயவிவரத்தைப் புதுப்பிக்கவும்',
    askMore: 'மேலும் கேள்விகள் கேளுங்கள்',
    
    // Scheme Card
    matchScore: 'பொருத்த மதிப்பெண்',
    benefits: 'நன்மைகள்',
    eligibility: 'தகுதி',
    amount: 'தொகை',
    documentsRequired: 'தேவையான ஆவணங்கள்',
    viewDetails: 'விவரங்களைப் பார்க்கவும்',
    applyNow: 'இப்போது விண்ணப்பிக்கவும்',
    
    // Occupations
    farmer: 'விவசாயி',
    student: 'மாணவர்',
    women_entrepreneur: 'பெண் தொழில்முனைவோர்',
    senior_citizen: 'மூத்த குடிமகன்',
    unemployed: 'வேலையில்லாதவர்',
    small_business: 'சிறு வணிக உரிமையாளர்',
    
    // Education
    no_formal: 'முறையான கல்வி இல்லை',
    primary: 'முதன்மை',
    secondary: 'இரண்டாம் நிலை',
    graduate: 'பட்டதாரி',
    postgraduate: 'முதுகலை',
    
    // Toast messages
    applicationProcess: 'விண்ணப்ப செயல்முறை',
    applicationDesc: '{scheme} க்கு, விண்ணப்பிக்க {url} ஐப் பார்வையிடவும்.',
    voiceNotSupported: 'குரல் ஆதரிக்கப்படவில்லை',
    voiceNotSupportedDesc: 'உங்கள் உலாவி குரல் அங்கீகாரத்தை ஆதரிக்கவில்லை',
    voiceError: 'குரல் அங்கீகாரப் பிழை',
    voiceErrorDesc: 'மீண்டும் முயற்சிக்கவும்',
    
    // AI Response
    aiFoundSchemes: 'உங்கள் சுயவிவரத்தின் அடிப்படையில், உங்களுக்கு {count} பொருத்தமான திட்டங்களைக் கண்டறிந்தேன். சிறந்த பொருத்தம் {name} இது {benefits} வழங்குகிறது.',
    aiNoSchemes: 'மன்னிக்கவும், உங்கள் சுயவிவரத்தின் அடிப்படையில் பொருத்தமான திட்டங்கள் எதுவும் கிடைக்கவில்லை. மேலும் பொருத்தமான திட்டங்களைக் கண்டறிய உங்கள் தகவலைப் புதுப்பிக்கவும்.',
  },
};

export function getTranslation(lang: Language, key: string): string {
  return translations[lang][key as keyof typeof translations.en] || key;
}
