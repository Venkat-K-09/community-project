export type Lang = "en" | "te";

export type Bi = { en: string; te: string };

// Helper to define bilingual strings concisely
export const b = (en: string, te: string): Bi => ({ en, te });

export const ui = {
  // Language gate
  chooseLanguage: b("Choose Your Language", "మీ భాషను ఎంచుకోండి"),
  selectLanguage: b("Select Language", "భాష ఎంచుకోండి"),
  english: b("English", "English"),
  telugu: b("తెలుగు", "తెలుగు"),
  continue: b("Continue", "కొనసాగించు"),
  gateTagline: b(
    "Support Local Talent, Build a Stronger Community",
    "స్థానిక ప్రతిభకు మద్దతు, బలమైన సమాజ నిర్మాణం",
  ),

  // Nav
  navHome: b("Home", "హోమ్"),
  navIdeas: b("Business Ideas", "వ్యాపార ఆలోచనలు"),
  navMarket: b("Marketplace", "మార్కెట్‌ప్లేస్"),
  navStories: b("Success Stories", "విజయ గాథలు"),
  navSchemes: b("Government Schemes", "ప్రభుత్వ పథకాలు"),
  navAbout: b("About", "మా గురించి"),
  navContact: b("Contact", "సంప్రదించండి"),

  brand: b("Community Makers' Market", "కమ్యూనిటీ మేకర్స్ మార్కెట్"),
  tagline: b(
    "Support Local Talent, Build a Stronger Community",
    "స్థానిక ప్రతిభకు మద్దతు, బలమైన సమాజ నిర్మాణం",
  ),

  // Hero
  heroDesc: b(
    "Helping local residents transform their skills and creativity into sustainable income opportunities.",
    "స్థానిక ప్రజలు తమ నైపుణ్యాలను మరియు సృజనాత్మకతను స్థిరమైన ఆదాయ అవకాశాలుగా మార్చుకోవడంలో సహాయం చేయడం.",
  ),
  heroSub: b(
    "Empowering homemakers, students, artists, and self-help groups to turn their craft into a livelihood.",
    "గృహిణులు, విద్యార్థులు, కళాకారులు మరియు స్వయం సహాయక సంఘాల సభ్యులు తమ నైపుణ్యాలను ఆదాయ వనరుగా మార్చుకోవడానికి సహాయం చేయడం.",
  ),
  exploreIdeas: b("Explore Business Ideas", "వ్యాపార ఆలోచనలను చూడండి"),
  startSelling: b("Start Selling", "అమ్మకం ప్రారంభించండి"),

  // Stats
  statIdeas: b("Business Ideas Shared", "వ్యాపార ఆలోచనలు పంచుకున్నాం"),
  statCreators: b("Local Creators Supported", "స్థానిక సృష్టికర్తలకు మద్దతు"),
  statProducts: b("Products Listed", "ఉత్పత్తులు జాబితా చేయబడ్డాయి"),
  statStories: b("Success Stories", "విజయ గాథలు"),

  // Why
  whyTitle: b("Why This Platform Exists", "ఈ వేదిక ఎందుకు ఉంది"),
  whySub: b(
    "Bridging the gap between local talent and real opportunity.",
    "స్థానిక ప్రతిభకు, నిజమైన అవకాశాలకు మధ్య అంతరాన్ని తగ్గించడం.",
  ),
  challengesTitle: b("Community Challenges", "సమాజ సవాళ్లు"),
  solutionsTitle: b("Our Solution", "మా పరిష్కారం"),

  // Sections generic
  learnMore: b("Learn More", "మరింత తెలుసుకోండి"),
  viewAll: b("View All", "అన్నీ చూడండి"),
  startupCost: b("Startup Cost", "ప్రారంభ ఖర్చు"),
  skillLevel: b("Skill Level", "నైపుణ్య స్థాయి"),
  earningPotential: b("Earning Potential", "ఆదాయ సామర్థ్యం"),
  category: b("Category", "విభాగం"),
  price: b("Price", "ధర"),
  seller: b("Seller", "విక్రేత"),
  contactSeller: b("Contact Seller", "విక్రేతను సంప్రదించండి"),
  allCategories: b("All Categories", "అన్ని విభాగాలు"),
  search: b("Search", "వెతకండి"),

  // Business idea detail
  overview: b("Overview", "అవలోకనం"),
  requiredMaterials: b("Required Materials", "అవసరమైన పదార్థాలు"),
  stepGuide: b("Step-by-Step Guide", "దశల వారీ మార్గదర్శి"),
  pricingSuggestions: b("Pricing Suggestions", "ధర సూచనలు"),
  marketingTips: b("Marketing Tips", "మార్కెటింగ్ చిట్కాలు"),
  expectedEarnings: b("Expected Earnings", "అంచనా ఆదాయం"),
  commonChallenges: b("Common Challenges", "సాధారణ సవాళ్లు"),
  successTips: b("Success Tips", "విజయ చిట్కాలు"),

  // Skill center
  skillCenterTitle: b("Skill Learning Center", "నైపుణ్య అభ్యాస కేంద్రం"),
  skillCenterSub: b(
    "Free resources to build the skills behind every successful small business.",
    "ప్రతి విజయవంతమైన చిన్న వ్యాపారం వెనుక ఉన్న నైపుణ్యాలను పెంచుకోవడానికి ఉచిత వనరులు.",
  ),

  // Marketplace
  marketTitle: b("Community Marketplace", "కమ్యూనిటీ మార్కెట్‌ప్లేస్"),
  marketSub: b(
    "Discover authentic products made by local creators. Connect directly with sellers.",
    "స్థానిక సృష్టికర్తలు తయారు చేసిన నిజమైన ఉత్పత్తులను కనుగొనండి. విక్రేతలతో నేరుగా కనెక్ట్ అవ్వండి.",
  ),
  noPayments: b(
    "No online payments — buyers connect directly with sellers to arrange purchases.",
    "ఆన్‌లైన్ చెల్లింపులు లేవు — కొనుగోలుదారులు విక్రేతలతో నేరుగా సంప్రదించి కొనుగోళ్లను ఏర్పాటు చేసుకుంటారు.",
  ),

  // Contact form
  yourName: b("Name", "పేరు"),
  email: b("Email", "ఇమెయిల్"),
  phone: b("Phone Number", "ఫోన్ నంబర్"),
  message: b("Message", "సందేశం"),
  send: b("Send Message", "సందేశం పంపండి"),
  sending: b("Sending...", "పంపుతోంది..."),
  msgPlaceholder: b(
    "Hello, I am interested in purchasing your product. Please provide more details.",
    "నమస్తే, మీ ఉత్పత్తిని కొనుగోలు చేయడానికి నేను ఆసక్తిగా ఉన్నాను. దయచేసి మరిన్ని వివరాలు అందించండి.",
  ),
  inquirySent: b(
    "Your inquiry was sent successfully!",
    "మీ విచారణ విజయవంతంగా పంపబడింది!",
  ),
  contactSellerFor: b("Contact seller about", "విక్రేతను సంప్రదించండి"),

  // Stories
  storiesTitle: b("Success Stories", "విజయ గాథలు"),
  storiesSub: b(
    "Real people, real income, real change in their communities.",
    "నిజమైన వ్యక్తులు, నిజమైన ఆదాయం, వారి సమాజాలలో నిజమైన మార్పు.",
  ),

  // Women / Youth
  womenTitle: b("Women Empowerment", "మహిళా సాధికారత"),
  womenSub: b(
    "Helping women achieve financial independence through home-based enterprise.",
    "గృహ ఆధారిత వ్యాపారం ద్వారా మహిళలు ఆర్థిక స్వాతంత్ర్యం సాధించడంలో సహాయం.",
  ),
  youthTitle: b("Youth Entrepreneurship", "యువ వ్యవస్థాపకత"),
  youthSub: b(
    "Startup ideas, freelancing and creative careers for students and young creators.",
    "విద్యార్థులు మరియు యువ సృష్టికర్తల కోసం స్టార్టప్ ఆలోచనలు, ఫ్రీలాన్సింగ్ మరియు సృజనాత్మక వృత్తులు.",
  ),

  // Schemes
  schemesTitle: b("Government Schemes", "ప్రభుత్వ పథకాలు"),
  schemesSub: b(
    "Discover support programs that can fund and grow your small business.",
    "మీ చిన్న వ్యాపారానికి నిధులు సమకూర్చి, అభివృద్ధి చేసే మద్దతు కార్యక్రమాలను కనుగొనండి.",
  ),
  eligibility: b("Eligibility", "అర్హత"),
  benefits: b("Benefits", "ప్రయోజనాలు"),
  applicationInfo: b("How to Apply", "ఎలా దరఖాస్తు చేయాలి"),
  searchSchemes: b("Search schemes...", "పథకాలను వెతకండి..."),

  // Impact
  impactTitle: b("Community Impact", "సమాజ ప్రభావం"),
  impactSub: b(
    "Growing together, one creator at a time.",
    "ఒక్కో సృష్టికర్తతో, కలిసి ఎదుగుతున్నాం.",
  ),

  // About
  aboutTitle: b("About Us", "మా గురించి"),
  mission: b("Our Mission", "మా లక్ష్యం"),
  missionText: b(
    "Empower local communities through entrepreneurship and skill development.",
    "వ్యవస్థాపకత మరియు నైపుణ్యాభివృద్ధి ద్వారా స్థానిక సమాజాలను సాధికారం చేయడం.",
  ),
  vision: b("Our Vision", "మా దృష్టి"),
  visionText: b(
    "Build a financially independent and self-reliant community.",
    "ఆర్థికంగా స్వతంత్రమైన మరియు స్వావలంబన కలిగిన సమాజాన్ని నిర్మించడం.",
  ),

  // Contact page
  contactTitle: b("Get in Touch", "మాతో సంప్రదించండి"),
  contactSub: b(
    "Questions, partnerships or support — we're here to help.",
    "ప్రశ్నలు, భాగస్వామ్యాలు లేదా మద్దతు — మేము సహాయం చేయడానికి ఇక్కడ ఉన్నాం.",
  ),
  faqTitle: b("Frequently Asked Questions", "తరచుగా అడిగే ప్రశ్నలు"),
  followUs: b("Follow Us", "మమ్మల్ని అనుసరించండి"),
  contactReceived: b("Message received! We'll get back to you soon.", "సందేశం అందింది! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాం."),

  // Footer
  quickLinks: b("Quick Links", "త్వరిత లింకులు"),
  resources: b("Community Resources", "సమాజ వనరులు"),
  contactInfo: b("Contact Information", "సంప్రదింపు సమాచారం"),
  footerAbout: b(
    "A community service platform empowering local makers, homemakers and entrepreneurs.",
    "స్థానిక సృష్టికర్తలు, గృహిణులు మరియు వ్యవస్థాపకులను సాధికారం చేసే సమాజ సేవా వేదిక.",
  ),
  rights: b("All rights reserved.", "అన్ని హక్కులు ప్రత్యేకించబడ్డాయి."),
  builtFor: b(
    "Built for NGOs, Self-Help Groups & community organizations.",
    "NGOలు, స్వయం సహాయక సంఘాలు & సమాజ సంస్థల కోసం రూపొందించబడింది.",
  ),

  // common
  close: b("Close", "మూసివేయి"),
  lightMode: b("Light mode", "లైట్ మోడ్"),
  darkMode: b("Dark mode", "డార్క్ మోడ్"),
};

export type UiKey = keyof typeof ui;
