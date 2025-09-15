import { Scheme } from '@/components/SchemeCard';

export const GOVERNMENT_SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan',
    name: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)',
    description: 'छोटे और सीमांत किसानों को आर्थिक सहायता प्रदान करने वाली योजना',
    benefits: '₹6,000 प्रति वर्ष (तीन किस्तों में ₹2,000 प्रत्येक)',
    eligibility: [
      '2 हेक्टेयर तक की खेती योग्य भूमि',
      'भारतीय नागरिकता',
      'आधार कार्ड अनिवार्य',
      'बैंक खाता आधार से लिंक'
    ],
    department: 'कृषि एवं किसान कल्याण मंत्रालय',
    type: 'central',
    amount: '₹6,000/वर्ष',
    documentsRequired: ['आधार कार्ड', 'बैंक पासबुक', 'भूमि दस्तावेज', 'मोबाइल नंबर'],
    applicationUrl: 'https://pmkisan.gov.in',
    category: 'कृषि'
  },
  {
    id: 'pradhan-mantri-fasal-bima',
    name: 'प्रधानमंत्री फसल बीमा योजना (PMFBY)',
    description: 'प्राकृतिक आपदाओं के कारण फसल नुकसान की भरपाई करने वाली योजना',
    benefits: 'फसल नुकसान की स्थिति में मुआवजा (फसल के अनुसार)',
    eligibility: [
      'भारत का किसान',
      'स्वयं की या बंटाई/किराए की जमीन पर खेती',
      'अधिसूचित क्षेत्र में फसल उगाना',
      'फसल की बुआई के 10 दिन के अंदर आवेदन'
    ],
    department: 'कृषि एवं किसान कल्याण मंत्रालय',
    type: 'central',
    amount: 'फसल के अनुसार प्रीमियम',
    documentsRequired: ['आधार कार्ड', 'भूमि दस्तावेज', 'बैंक पासबुक', 'बुआई प्रमाण पत्र'],
    applicationUrl: 'https://pmfby.gov.in',
    category: 'कृषि'
  },
  {
    id: 'pm-scholarship',
    name: 'प्रधानमंत्री छात्रवृत्ति योजना',
    description: 'मेधावी छात्रों को उच्च शिक्षा के लिए छात्रवृत्ति',
    benefits: '₹36,000 प्रति वर्ष (लड़कों को), ₹43,000 प्रति वर्ष (लड़कियों को)',
    eligibility: [
      '12वीं में 85% से अधिक अंक (SC/ST के लिए 75%)',
      'पारिवारिक आय ₹6 लाख से कम',
      'भारतीय नागरिक',
      'नियमित कोर्स में दाखिला'
    ],
    department: 'शिक्षा मंत्रालय',
    type: 'central',
    amount: '₹36,000-43,000/वर्ष',
    documentsRequired: ['आधार कार्ड', '12वीं मार्कशीट', 'आय प्रमाण पत्र', 'बैंक पासबुक'],
    category: 'शिक्षा'
  },
  {
    id: 'mudra-yojana',
    name: 'प्रधानमंत्री मुद्रा योजना (PMMY)',
    description: 'छोटे व्यापारियों और उद्यमियों को बिना गारंटी के लोन',
    benefits: '₹10 लाख तक का लोन (बिना गारंटी)',
    eligibility: [
      'नॉन-कॉर्पोरेट, नॉन-फार्म एंटरप्राइज',
      'व्यापारिक गतिविधि शुरू करने की योजना',
      'पहले से डिफॉल्टर नहीं होना चाहिए',
      'आधार कार्ड अनिवार्य'
    ],
    department: 'वित्त मंत्रालय',
    type: 'central',
    amount: '₹50,000 से ₹10 लाख तक',
    documentsRequired: ['आधार कार्ड', 'पैन कार्ड', 'व्यापार योजना', 'बैंक स्टेटमेंट'],
    category: 'व्यापार'
  },
  {
    id: 'ujjwala-yojana',
    name: 'प्रधानमंत्री उज्ज्वला योजना',
    description: 'गरीब महिलाओं को मुफ्त LPG कनेक्शन प्रदान करने वाली योजना',
    benefits: 'मुफ्त LPG कनेक्शन + पहला रिफिल मुफ्त',
    eligibility: [
      'BPL परिवार की महिला',
      '18 वर्ष से अधिक उम्र',
      'परिवार में पहले से LPG कनेक्शन नहीं',
      'SECC-2011 की सूची में नाम'
    ],
    department: 'पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय',
    type: 'central',
    amount: '₹1,600 की सब्सिडी',
    documentsRequired: ['BPL कार्ड', 'आधार कार्ड', 'पता प्रमाण', 'बैंक पासबुक'],
    category: 'महिला कल्याण'
  },
  {
    id: 'ayushman-bharat',
    name: 'आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना',
    description: 'गरीब परिवारों को मुफ्त इलाज की सुविधा',
    benefits: '₹5 लाख तक का मुफ्त इलाज प्रति परिवार प्रति वर्ष',
    eligibility: [
      'SECC-2011 के अनुसार योग्यता',
      'ग्रामीण और शहरी गरीब परिवार',
      'आयुष्मान कार्ड होल्डर',
      'सरकारी अस्पतालों में इलाज'
    ],
    department: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    type: 'central',
    amount: '₹5 लाख/परिवार/वर्ष',
    documentsRequired: ['आधार कार्ड', 'राशन कार्ड', 'पता प्रमाण', 'आय प्रमाण'],
    category: 'स्वास्थ्य'
  },
  {
    id: 'sukanya-samriddhi',
    name: 'सुकन्या समृद्धि योजना',
    description: 'बेटियों की शिक्षा और शादी के लिए बचत योजना',
    benefits: '7.6% वार्षिक ब्याज दर (कर मुक्त)',
    eligibility: [
      '10 वर्ष से कम उम्र की बेटी',
      'भारतीय नागरिक',
      'एक परिवार में अधिकतम 2 खाते',
      'न्यूनतम ₹250 प्रति वर्ष जमा'
    ],
    department: 'वित्त मंत्रालय',
    type: 'central',
    amount: '₹250 से ₹1.5 लाख/वर्ष',
    documentsRequired: ['बेटी का जन्म प्रमाण पत्र', 'माता-पिता का आधार', 'पता प्रमाण'],
    category: 'बालिका कल्याण'
  },
  {
    id: 'free-sewing-machine',
    name: 'निःशुल्क सिलाई मशीन योजना',
    description: 'गरीब महिलाओं को आजीविका के लिए मुफ्त सिलाई मशीन',
    benefits: 'मुफ्त सिलाई मशीन + प्रशिक्षण',
    eligibility: [
      '20-40 वर्ष की आयु की महिला',
      'पारिवारिक आय ₹12,000 से कम',
      'विधवा या परित्यक्ता महिला को प्राथमिकता',
      'शारीरिक रूप से सक्षम'
    ],
    department: 'महिला एवं बाल विकास मंत्रालय',
    type: 'central',
    amount: 'मुफ्त',
    documentsRequired: ['आधार कार्ड', 'आय प्रमाण पत्र', 'आयु प्रमाण पत्र', 'फोटो'],
    category: 'महिला कल्याण'
  }
];

// Function to match schemes based on user profile
export function getRelevantSchemes(profile: any): Array<Scheme & { matchScore: number }> {
  const relevantSchemes = GOVERNMENT_SCHEMES.map(scheme => {
    let score = 0;
    
    // Occupation-based matching
    if (profile.occupation === 'किसान' && scheme.category === 'कृषि') score += 40;
    if (profile.occupation === 'छात्र' && scheme.category === 'शिक्षा') score += 40;
    if (profile.occupation === 'व्यापारी' && scheme.category === 'व्यापार') score += 40;
    if (profile.occupation === 'गृहिणी' && scheme.category === 'महिला कल्याण') score += 40;
    
    // Gender-based matching
    if (profile.gender === 'female') {
      if (scheme.category === 'महिला कल्याण' || scheme.category === 'बालिका कल्याण') score += 20;
    }
    
    // Age-based matching
    if (profile.age && profile.age < 25 && scheme.category === 'शिक्षा') score += 15;
    if (profile.age && profile.age > 18 && scheme.id === 'ujjwala-yojana') score += 15;
    
    // Income-based matching
    if (profile.income && profile.income < 200000) {
      if (scheme.id === 'ayushman-bharat' || scheme.id === 'ujjwala-yojana') score += 25;
    }
    
    // Land ownership matching
    if (profile.landOwnership && profile.landOwnership <= 2 && scheme.id === 'pm-kisan') score += 30;
    
    // Category-based matching
    if (profile.category === 'sc' || profile.category === 'st') {
      if (scheme.category === 'शिक्षा') score += 15;
    }
    
    // Universal schemes get base score
    if (scheme.type === 'central') score += 10;
    
    return { ...scheme, matchScore: Math.min(score, 95) };
  });
  
  return relevantSchemes
    .filter(scheme => scheme.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);
}