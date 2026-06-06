import type { Bi } from "@/i18n/translations";
import { b } from "@/i18n/translations";

export interface BusinessIdea {
  id: string;
  icon: string;
  title: Bi;
  tagline: Bi;
  cost: Bi;
  skill: Bi;
  earning: Bi;
  overview: Bi;
  materials: Bi[];
  steps: Bi[];
  pricing: Bi;
  marketing: Bi[];
  expected: Bi;
  challenges: Bi[];
  tips: Bi[];
}

export const businessIdeas: BusinessIdea[] = [
  {
    id: "candles",
    icon: "🕯️",
    title: b("Handmade Candles", "చేతితో తయారు చేసిన కొవ్వొత్తులు"),
    tagline: b("Scented & decorative candles", "సువాసన & అలంకరణ కొవ్వొత్తులు"),
    cost: b("₹3,000 – ₹8,000", "₹3,000 – ₹8,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹10,000 – ₹30,000 / month", "₹10,000 – ₹30,000 / నెల"),
    overview: b(
      "Handmade candles are a low-cost, high-demand product perfect for festivals, gifting and home décor. You can start from your kitchen and scale into a recognizable local brand.",
      "చేతితో తయారు చేసిన కొవ్వొత్తులు తక్కువ ఖర్చుతో, ఎక్కువ గిరాకీ ఉన్న ఉత్పత్తి. పండుగలు, బహుమతులు మరియు ఇంటి అలంకరణకు అనువైనవి. మీ వంటగది నుండే ప్రారంభించి స్థానిక బ్రాండ్‌గా ఎదగవచ్చు.",
    ),
    materials: [
      b("Soy or paraffin wax", "సోయా లేదా పారాఫిన్ మైనం"),
      b("Cotton wicks", "పత్తి వత్తులు"),
      b("Fragrance oils", "సువాసన నూనెలు"),
      b("Color dyes", "రంగు డైలు"),
      b("Glass jars / moulds", "గాజు జాడీలు / మోల్డ్‌లు"),
    ],
    steps: [
      b("Melt the wax in a double boiler.", "డబుల్ బాయిలర్‌లో మైనాన్ని కరిగించండి."),
      b("Add color and fragrance oil.", "రంగు మరియు సువాసన నూనె కలపండి."),
      b("Secure the wick in the jar.", "జాడీలో వత్తిని అమర్చండి."),
      b("Pour wax and let it set for 24 hours.", "మైనాన్ని పోసి 24 గంటలు ఆరనివ్వండి."),
      b("Trim the wick and package neatly.", "వత్తిని కత్తిరించి శుభ్రంగా ప్యాక్ చేయండి."),
    ],
    pricing: b(
      "Price small candles at ₹120–₹250 and gift sets at ₹400–₹800 depending on size and fragrance.",
      "చిన్న కొవ్వొత్తులను ₹120–₹250 కు, గిఫ్ట్ సెట్‌లను పరిమాణం, సువాసనను బట్టి ₹400–₹800 కు అమ్మండి.",
    ),
    marketing: [
      b("Post styled photos on Instagram & WhatsApp Status.", "ఇన్‌స్టాగ్రామ్ & వాట్సాప్ స్టేటస్‌లో ఫోటోలు పెట్టండి."),
      b("Sell gift bundles during festival seasons.", "పండుగ సీజన్‌లలో గిఫ్ట్ బండిల్‌లు అమ్మండి."),
      b("Partner with local gift shops.", "స్థానిక గిఫ్ట్ షాపులతో భాగస్వామ్యం చేయండి."),
    ],
    expected: b(
      "A consistent seller can earn ₹10,000–₹30,000 per month, more during Diwali and wedding seasons.",
      "క్రమం తప్పని విక్రేత నెలకు ₹10,000–₹30,000 సంపాదించవచ్చు, దీపావళి, వివాహ సీజన్‌లలో మరింత ఎక్కువ.",
    ),
    challenges: [
      b("Wax may crack if cooled too fast.", "త్వరగా చల్లారితే మైనం పగులవచ్చు."),
      b("Finding consistent fragrance suppliers.", "నమ్మకమైన సువాసన సరఫరాదారులను కనుగొనడం."),
    ],
    tips: [
      b("Focus on a signature scent customers remember.", "కస్టమర్లు గుర్తుంచుకునే ప్రత్యేక సువాసనపై దృష్టి పెట్టండి."),
      b("Reuse and recycle jars to lower costs.", "ఖర్చు తగ్గించడానికి జాడీలను తిరిగి వాడండి."),
    ],
  },
  {
    id: "pickles",
    icon: "🥒",
    title: b("Homemade Pickles", "ఇంట్లో తయారు చేసిన ఊరగాయలు"),
    tagline: b("Traditional flavours, sealed fresh", "సంప్రదాయ రుచులు, తాజాగా ప్యాక్"),
    cost: b("₹2,000 – ₹6,000", "₹2,000 – ₹6,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹8,000 – ₹25,000 / month", "₹8,000 – ₹25,000 / నెల"),
    overview: b(
      "Authentic homemade pickles have huge demand among families who miss traditional taste. With good hygiene and packaging, this becomes a trusted repeat-order business.",
      "సంప్రదాయ రుచిని కోరుకునే కుటుంబాల్లో ఇంటి ఊరగాయలకు భారీ గిరాకీ ఉంది. మంచి శుభ్రత, ప్యాకింగ్‌తో ఇది నమ్మకమైన పునరావృత ఆర్డర్ వ్యాపారం అవుతుంది.",
    ),
    materials: [
      b("Fresh mango / lime / vegetables", "తాజా మామిడి / నిమ్మ / కూరగాయలు"),
      b("Quality spices & oil", "నాణ్యమైన మసాలాలు & నూనె"),
      b("Sterilized glass jars", "శుభ్రం చేసిన గాజు జాడీలు"),
      b("Labels & seals", "లేబుళ్లు & సీళ్లు"),
    ],
    steps: [
      b("Clean and dry the produce completely.", "కూరగాయలను శుభ్రం చేసి పూర్తిగా ఆరనివ్వండి."),
      b("Mix with spices and salt.", "మసాలాలు, ఉప్పుతో కలపండి."),
      b("Add heated oil and rest for 2–3 days.", "వేడి చేసిన నూనె కలిపి 2–3 రోజులు నిల్వ చేయండి."),
      b("Fill into sterilized jars.", "శుభ్రం చేసిన జాడీల్లో నింపండి."),
      b("Label with date and ingredients.", "తేదీ, పదార్థాలతో లేబుల్ వేయండి."),
    ],
    pricing: b(
      "Sell 250g jars at ₹120–₹200 and 1kg jars at ₹400–₹650.",
      "250g జాడీలను ₹120–₹200 కు, 1kg జాడీలను ₹400–₹650 కు అమ్మండి.",
    ),
    marketing: [
      b("Offer free tasting samples to neighbours.", "ఇరుగుపొరుగు వారికి ఉచిత రుచి శాంపిళ్లు ఇవ్వండి."),
      b("Build a WhatsApp order group.", "వాట్సాప్ ఆర్డర్ గ్రూప్ ఏర్పాటు చేయండి."),
      b("Highlight 'no preservatives' on labels.", "లేబుళ్లపై 'ప్రిజర్వేటివ్‌లు లేవు' అని చూపండి."),
    ],
    expected: b(
      "Regular sellers earn ₹8,000–₹25,000 monthly with festival peaks.",
      "క్రమ విక్రేతలు నెలకు ₹8,000–₹25,000 సంపాదిస్తారు, పండుగల్లో ఎక్కువ.",
    ),
    challenges: [
      b("Maintaining shelf life and hygiene.", "నిల్వ సామర్థ్యం, శుభ్రత నిర్వహించడం."),
      b("Seasonal availability of raw materials.", "ముడి పదార్థాల కాలానుగుణ లభ్యత."),
    ],
    tips: [
      b("Keep consistent taste in every batch.", "ప్రతి బ్యాచ్‌లో రుచిని స్థిరంగా ఉంచండి."),
      b("Use airtight, leak-proof packaging.", "గాలి చొరని, లీక్ కాని ప్యాకింగ్ వాడండి."),
    ],
  },
  {
    id: "tailoring",
    icon: "🧵",
    title: b("Tailoring & Stitching", "కుట్టు పని"),
    tagline: b("Custom clothing & alterations", "కస్టమ్ దుస్తులు & మార్పులు"),
    cost: b("₹5,000 – ₹15,000", "₹5,000 – ₹15,000"),
    skill: b("Intermediate", "మధ్యస్థం"),
    earning: b("₹12,000 – ₹35,000 / month", "₹12,000 – ₹35,000 / నెల"),
    overview: b(
      "Tailoring offers steady, repeat income with one machine and skill. Blouses, school uniforms, alterations and boutique stitching are always in demand.",
      "ఒక మెషీన్, నైపుణ్యంతో కుట్టు పని స్థిరమైన పునరావృత ఆదాయం ఇస్తుంది. జాకెట్లు, యూనిఫారాలు, మార్పులు, బొటిక్ కుట్లకు ఎల్లప్పుడూ గిరాకీ ఉంది.",
    ),
    materials: [
      b("Sewing machine", "కుట్టు మెషీన్"),
      b("Threads & needles", "దారాలు & సూదులు"),
      b("Measuring tape & scissors", "కొలత టేప్ & కత్తెర"),
      b("Fabric stock", "వస్త్రాల నిల్వ"),
    ],
    steps: [
      b("Learn accurate measurements.", "ఖచ్చితమైన కొలతలు నేర్చుకోండి."),
      b("Practice basic stitches and patterns.", "ప్రాథమిక కుట్లు, నమూనాలు సాధన చేయండి."),
      b("Offer blouse & alteration services first.", "ముందుగా జాకెట్, మార్పుల సేవలు ఇవ్వండి."),
      b("Expand to boutique designs.", "బొటిక్ డిజైన్‌లకు విస్తరించండి."),
    ],
    pricing: b(
      "Charge ₹150–₹400 per blouse, ₹50–₹200 for alterations, more for designer work.",
      "జాకెట్‌కు ₹150–₹400, మార్పులకు ₹50–₹200, డిజైనర్ పనికి ఎక్కువ వసూలు చేయండి.",
    ),
    marketing: [
      b("Display finished samples at home.", "పూర్తయిన నమూనాలను ఇంట్లో ప్రదర్శించండి."),
      b("Take orders via WhatsApp catalogue.", "వాట్సాప్ క్యాటలాగ్ ద్వారా ఆర్డర్లు తీసుకోండి."),
      b("Offer doorstep pickup for fabric.", "వస్త్రాలకు ఇంటి వద్ద పికప్ ఇవ్వండి."),
    ],
    expected: b(
      "₹12,000–₹35,000 monthly; higher during wedding and festival seasons.",
      "నెలకు ₹12,000–₹35,000; వివాహ, పండుగ సీజన్‌లలో ఎక్కువ.",
    ),
    challenges: [
      b("Meeting deadlines during peak season.", "రద్దీ సీజన్‌లో గడువులు పాటించడం."),
      b("Pricing custom work fairly.", "కస్టమ్ పనికి సరైన ధర నిర్ణయించడం."),
    ],
    tips: [
      b("Build a loyal repeat customer base.", "నమ్మకమైన పునరావృత కస్టమర్లను సంపాదించండి."),
      b("Keep a finishing-quality standard.", "ఫినిషింగ్ నాణ్యతను కాపాడుకోండి."),
    ],
  },
  {
    id: "jewelry",
    icon: "💍",
    title: b("Jewelry Making", "ఆభరణాల తయారీ"),
    tagline: b("Handcrafted & terracotta jewelry", "చేతి & టెర్రకోట ఆభరణాలు"),
    cost: b("₹2,500 – ₹7,000", "₹2,500 – ₹7,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹9,000 – ₹28,000 / month", "₹9,000 – ₹28,000 / నెల"),
    overview: b(
      "Handmade jewelry — terracotta, thread, beads — is trendy and affordable. Great margins and very popular with younger buyers.",
      "చేతి ఆభరణాలు — టెర్రకోట, దారం, పూసలు — ట్రెండీ, చౌకగా ఉంటాయి. మంచి లాభాలు, యువ కొనుగోలుదారుల్లో ప్రాచుర్యం.",
    ),
    materials: [
      b("Beads, threads, clay", "పూసలు, దారాలు, మట్టి"),
      b("Hooks & findings", "హుక్‌లు & ఫైండింగ్‌లు"),
      b("Paints & sealant", "పెయింట్‌లు & సీలెంట్"),
    ],
    steps: [
      b("Choose a style: terracotta, beadwork, threadwork.", "శైలి ఎంచుకోండి: టెర్రకోట, పూస పని, దారం పని."),
      b("Shape, paint and seal the pieces.", "ఆకారం, పెయింట్, సీల్ చేయండి."),
      b("Assemble earrings & necklaces.", "చెవి దుద్దులు, హారాలు తయారు చేయండి."),
      b("Photograph and list each design.", "ప్రతి డిజైన్ ఫోటో తీసి జాబితా చేయండి."),
    ],
    pricing: b(
      "Earrings ₹80–₹250, necklace sets ₹300–₹900.",
      "చెవి దుద్దులు ₹80–₹250, హారాల సెట్‌లు ₹300–₹900.",
    ),
    marketing: [
      b("Sell at local exhibitions & melas.", "స్థానిక ప్రదర్శనలు & మేళాల్లో అమ్మండి."),
      b("Use reels to show the making process.", "తయారీ ప్రక్రియను రీల్స్‌లో చూపండి."),
    ],
    expected: b("₹9,000–₹28,000 monthly with good designs.", "మంచి డిజైన్‌లతో నెలకు ₹9,000–₹28,000."),
    challenges: [
      b("Standing out in a crowded market.", "రద్దీ మార్కెట్‌లో ప్రత్యేకంగా నిలవడం."),
      b("Fragile items need careful packing.", "పెళుసు వస్తువులకు జాగ్రత్త ప్యాకింగ్."),
    ],
    tips: [
      b("Follow seasonal colour trends.", "కాలానుగుణ రంగు ట్రెండ్‌లను అనుసరించండి."),
      b("Offer customization for occasions.", "సందర్భాలకు కస్టమైజేషన్ ఇవ్వండి."),
    ],
  },
  {
    id: "gifts",
    icon: "🎁",
    title: b("Customized Gifts", "కస్టమైజ్డ్ బహుమతులు"),
    tagline: b("Personalized hampers & frames", "వ్యక్తిగత హాంపర్‌లు & ఫ్రేమ్‌లు"),
    cost: b("₹2,000 – ₹6,000", "₹2,000 – ₹6,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹8,000 – ₹26,000 / month", "₹8,000 – ₹26,000 / నెల"),
    overview: b(
      "Personalized gifts are a booming market for birthdays, weddings and corporate events. Creativity matters more than capital.",
      "పుట్టినరోజులు, వివాహాలు, కార్పొరేట్ ఈవెంట్‌లకు వ్యక్తిగత బహుమతులు పెరుగుతున్న మార్కెట్. పెట్టుబడి కంటే సృజనాత్మకత ముఖ్యం.",
    ),
    materials: [
      b("Frames, mugs, boxes", "ఫ్రేమ్‌లు, మగ్‌లు, బాక్స్‌లు"),
      b("Printing / craft supplies", "ప్రింటింగ్ / క్రాఫ్ట్ సామాగ్రి"),
      b("Decorative wrapping", "అలంకరణ ర్యాపింగ్"),
    ],
    steps: [
      b("Collect customer photos & messages.", "కస్టమర్ ఫోటోలు, సందేశాలు సేకరించండి."),
      b("Design and assemble the gift.", "బహుమతిని డిజైన్ చేసి తయారు చేయండి."),
      b("Wrap attractively and deliver.", "ఆకర్షణీయంగా ప్యాక్ చేసి అందించండి."),
    ],
    pricing: b("Hampers ₹300–₹1,500 based on contents.", "హాంపర్‌లు కంటెంట్ బట్టి ₹300–₹1,500."),
    marketing: [
      b("Showcase event-themed packages.", "ఈవెంట్ థీమ్ ప్యాకేజీలను చూపండి."),
      b("Partner with photographers & event planners.", "ఫోటోగ్రాఫర్లు, ఈవెంట్ ప్లానర్‌లతో భాగస్వామ్యం."),
    ],
    expected: b("₹8,000–₹26,000 monthly with event orders.", "ఈవెంట్ ఆర్డర్లతో నెలకు ₹8,000–₹26,000."),
    challenges: [
      b("Last-minute custom requests.", "చివరి నిమిషంలో కస్టమ్ అభ్యర్థనలు."),
      b("Sourcing varied materials.", "వివిధ పదార్థాల సేకరణ."),
    ],
    tips: [
      b("Build templates to deliver faster.", "వేగంగా అందించడానికి టెంప్లేట్‌లు తయారు చేయండి."),
      b("Upsell add-ons like cards & flowers.", "కార్డులు, పూల వంటివి అదనంగా అమ్మండి."),
    ],
  },
  {
    id: "nursery",
    icon: "🌱",
    title: b("Plant Nursery", "మొక్కల నర్సరీ"),
    tagline: b("Indoor plants & saplings", "ఇండోర్ మొక్కలు & మొలకలు"),
    cost: b("₹4,000 – ₹12,000", "₹4,000 – ₹12,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹10,000 – ₹30,000 / month", "₹10,000 – ₹30,000 / నెల"),
    overview: b(
      "Demand for indoor and balcony plants is rising in towns and cities. A small backyard can grow into a profitable green business.",
      "పట్టణాలు, నగరాల్లో ఇండోర్, బాల్కనీ మొక్కలకు గిరాకీ పెరుగుతోంది. చిన్న పెరడు లాభదాయక గ్రీన్ వ్యాపారంగా మారవచ్చు.",
    ),
    materials: [
      b("Seeds & saplings", "విత్తనాలు & మొలకలు"),
      b("Pots & soil mix", "కుండీలు & మట్టి మిశ్రమం"),
      b("Fertilizer & tools", "ఎరువులు & పనిముట్లు"),
    ],
    steps: [
      b("Start with easy indoor plants.", "సులభమైన ఇండోర్ మొక్కలతో ప్రారంభించండి."),
      b("Propagate and maintain healthy stock.", "ఆరోగ్యకర మొక్కలను పెంచి నిర్వహించండి."),
      b("Pot attractively for resale.", "విక్రయానికి ఆకర్షణీయంగా కుండీలో పెట్టండి."),
    ],
    pricing: b("Small plants ₹50–₹200, decorative pots ₹250–₹800.", "చిన్న మొక్కలు ₹50–₹200, అలంకరణ కుండీలు ₹250–₹800."),
    marketing: [
      b("Offer plant-care guidance to buyers.", "కొనుగోలుదారులకు మొక్కల సంరక్షణ సలహాలు ఇవ్వండి."),
      b("Sell at weekend markets.", "వారాంత మార్కెట్‌లలో అమ్మండి."),
    ],
    expected: b("₹10,000–₹30,000 monthly with steady stock.", "స్థిర నిల్వతో నెలకు ₹10,000–₹30,000."),
    challenges: [
      b("Plant care and seasonal loss.", "మొక్కల సంరక్షణ, కాలానుగుణ నష్టం."),
      b("Transport without damage.", "నష్టం లేకుండా రవాణా."),
    ],
    tips: [
      b("Bundle plant + pot + care card.", "మొక్క + కుండీ + సంరక్షణ కార్డు కలిపి అమ్మండి."),
      b("Focus on low-maintenance varieties.", "తక్కువ సంరక్షణ రకాలపై దృష్టి పెట్టండి."),
    ],
  },
  {
    id: "crochet",
    icon: "🧶",
    title: b("Crochet Crafts", "క్రోషే క్రాఫ్ట్‌లు"),
    tagline: b("Handmade wearables & toys", "చేతి దుస్తులు & బొమ్మలు"),
    cost: b("₹1,500 – ₹4,000", "₹1,500 – ₹4,000"),
    skill: b("Intermediate", "మధ్యస్థం"),
    earning: b("₹7,000 – ₹22,000 / month", "₹7,000 – ₹22,000 / నెల"),
    overview: b(
      "Crochet toys, bags and accessories command premium prices for their handmade charm. Perfect work-from-home craft.",
      "క్రోషే బొమ్మలు, బ్యాగులు, యాక్సెసరీలు చేతి అందానికి మంచి ధర పొందుతాయి. ఇంటి నుండి చేసే అద్భుత క్రాఫ్ట్.",
    ),
    materials: [
      b("Yarn in various colours", "వివిధ రంగుల ఉన్ని"),
      b("Crochet hooks", "క్రోషే హుక్‌లు"),
      b("Stuffing & accessories", "స్టఫింగ్ & యాక్సెసరీలు"),
    ],
    steps: [
      b("Master basic crochet stitches.", "ప్రాథమిక క్రోషే కుట్లు నేర్చుకోండి."),
      b("Make small items like keychains first.", "ముందుగా కీచైన్‌ల వంటి చిన్నవి తయారు చేయండి."),
      b("Progress to toys, bags and wearables.", "బొమ్మలు, బ్యాగులు, దుస్తులకు పురోగమించండి."),
    ],
    pricing: b("Keychains ₹60–₹150, toys ₹250–₹900.", "కీచైన్‌లు ₹60–₹150, బొమ్మలు ₹250–₹900."),
    marketing: [
      b("Share making videos to attract buyers.", "కొనుగోలుదారులను ఆకర్షించేందుకు తయారీ వీడియోలు పంచండి."),
      b("Offer custom colours & names.", "కస్టమ్ రంగులు, పేర్లు ఇవ్వండి."),
    ],
    expected: b("₹7,000–₹22,000 monthly with custom orders.", "కస్టమ్ ఆర్డర్లతో నెలకు ₹7,000–₹22,000."),
    challenges: [
      b("Time-intensive to make each piece.", "ప్రతి వస్తువు తయారీకి ఎక్కువ సమయం."),
      b("Pricing for the hours involved.", "పట్టే సమయానికి ధర నిర్ణయించడం."),
    ],
    tips: [
      b("Batch-make popular items.", "ప్రాచుర్యం పొందిన వస్తువులను బ్యాచ్‌గా తయారు చేయండి."),
      b("Charge fairly for handmade time.", "చేతి శ్రమకు సరైన ధర వసూలు చేయండి."),
    ],
  },
  {
    id: "paintings",
    icon: "🎨",
    title: b("Paintings & Art", "చిత్రలేఖనం & కళ"),
    tagline: b("Canvas, folk & custom art", "క్యాన్వాస్, జానపద & కస్టమ్ కళ"),
    cost: b("₹2,000 – ₹6,000", "₹2,000 – ₹6,000"),
    skill: b("Intermediate", "మధ్యస్థం"),
    earning: b("₹8,000 – ₹40,000 / month", "₹8,000 – ₹40,000 / నెల"),
    overview: b(
      "Original art and traditional folk paintings (Kalamkari, Madhubani) sell well as décor and gifts. High value for skilled artists.",
      "మౌలిక కళ, సంప్రదాయ జానపద చిత్రాలు (కలంకారి, మధుబని) అలంకరణ, బహుమతులుగా బాగా అమ్ముడవుతాయి. నైపుణ్యం గల కళాకారులకు అధిక విలువ.",
    ),
    materials: [
      b("Canvas & paper", "క్యాన్వాస్ & కాగితం"),
      b("Acrylic / fabric paints", "అక్రిలిక్ / ఫాబ్రిక్ పెయింట్‌లు"),
      b("Brushes & easel", "బ్రష్‌లు & ఈజెల్"),
    ],
    steps: [
      b("Develop a recognizable style.", "గుర్తించదగిన శైలిని అభివృద్ధి చేయండి."),
      b("Create a portfolio of works.", "మీ రచనల పోర్ట్‌ఫోలియో తయారు చేయండి."),
      b("Offer prints and custom commissions.", "ప్రింట్‌లు, కస్టమ్ ఆర్డర్లు ఇవ్వండి."),
    ],
    pricing: b("Small art ₹500–₹2,000, large/custom ₹3,000+.", "చిన్న కళ ₹500–₹2,000, పెద్ద/కస్టమ్ ₹3,000+."),
    marketing: [
      b("Post time-lapse art videos.", "టైమ్-లాప్స్ కళ వీడియోలు పెట్టండి."),
      b("Sell prints to widen the market.", "మార్కెట్ విస్తరించడానికి ప్రింట్‌లు అమ్మండి."),
    ],
    expected: b("₹8,000–₹40,000 monthly depending on demand.", "గిరాకీ బట్టి నెలకు ₹8,000–₹40,000."),
    challenges: [
      b("Valuing your own creative work.", "మీ సృజనాత్మక పనికి విలువ నిర్ణయించడం."),
      b("Reaching the right audience.", "సరైన ప్రేక్షకులను చేరుకోవడం."),
    ],
    tips: [
      b("Sell prints alongside originals.", "మౌలిక చిత్రాలతో పాటు ప్రింట్‌లు అమ్మండి."),
      b("Build an online portfolio.", "ఆన్‌లైన్ పోర్ట్‌ఫోలియో తయారు చేయండి."),
    ],
  },
  {
    id: "decor",
    icon: "🏠",
    title: b("Home Décor", "ఇంటి అలంకరణ"),
    tagline: b("Wall art, macramé & accents", "గోడ కళ, మాక్రమే & అలంకరణలు"),
    cost: b("₹3,000 – ₹9,000", "₹3,000 – ₹9,000"),
    skill: b("Intermediate", "మధ్యస్థం"),
    earning: b("₹9,000 – ₹28,000 / month", "₹9,000 – ₹28,000 / నెల"),
    overview: b(
      "Handmade décor — macramé, wall hangings, painted pots — is popular for home styling and gifting with healthy profit margins.",
      "చేతి అలంకరణ — మాక్రమే, గోడ హ్యాంగింగ్‌లు, పెయింట్ చేసిన కుండీలు — ఇంటి అలంకరణ, బహుమతులకు ప్రాచుర్యం, మంచి లాభాలు.",
    ),
    materials: [
      b("Cotton ropes, wood, paint", "పత్తి తాళ్లు, చెక్క, పెయింట్"),
      b("Adhesives & hooks", "అంటించేవి & హుక్‌లు"),
      b("Decorative elements", "అలంకరణ వస్తువులు"),
    ],
    steps: [
      b("Pick trending décor styles.", "ట్రెండింగ్ అలంకరణ శైలులు ఎంచుకోండి."),
      b("Create a small product range.", "చిన్న ఉత్పత్తి శ్రేణిని తయారు చేయండి."),
      b("Photograph in styled settings.", "అందమైన నేపథ్యంలో ఫోటోలు తీయండి."),
    ],
    pricing: b("Items ₹200–₹1,500 based on size.", "పరిమాణం బట్టి వస్తువులు ₹200–₹1,500."),
    marketing: [
      b("Show pieces in real home setups.", "నిజమైన ఇంటి సెటప్‌లలో చూపండి."),
      b("Target new-home and festival buyers.", "కొత్త ఇల్లు, పండుగ కొనుగోలుదారులను లక్ష్యంగా చేసుకోండి."),
    ],
    expected: b("₹9,000–₹28,000 monthly.", "నెలకు ₹9,000–₹28,000."),
    challenges: [
      b("Storage of bulky items.", "పెద్ద వస్తువుల నిల్వ."),
      b("Keeping designs fresh.", "డిజైన్‌లను కొత్తగా ఉంచడం."),
    ],
    tips: [
      b("Offer sets for a complete look.", "పూర్తి లుక్ కోసం సెట్‌లు ఇవ్వండి."),
      b("Follow interior trends.", "ఇంటీరియర్ ట్రెండ్‌లను అనుసరించండి."),
    ],
  },
];

// Marketplace products
export interface Product {
  id: string;
  name: Bi;
  seller: Bi;
  price: string;
  category: Bi;
  categoryKey: string;
  emoji: string;
  desc: Bi;
}

export const productCategories = [
  { key: "crafts", label: b("Crafts", "క్రాఫ్ట్‌లు") },
  { key: "foods", label: b("Homemade Foods", "ఇంటి ఆహారాలు") },
  { key: "jewelry", label: b("Jewelry", "ఆభరణాలు") },
  { key: "clothing", label: b("Clothing", "దుస్తులు") },
  { key: "paintings", label: b("Paintings", "చిత్రాలు") },
  { key: "decor", label: b("Home Decor", "ఇంటి అలంకరణ") },
  { key: "gifts", label: b("Gifts", "బహుమతులు") },
];

export const products: Product[] = [
  {
    id: "p1",
    name: b("Lavender Soy Candle Set", "లావెండర్ సోయా కొవ్వొత్తి సెట్"),
    seller: b("Lakshmi Crafts", "లక్ష్మి క్రాఫ్ట్స్"),
    price: "₹450",
    category: b("Crafts", "క్రాఫ్ట్‌లు"),
    categoryKey: "crafts",
    emoji: "🕯️",
    desc: b("Set of 3 hand-poured soy candles with calming lavender fragrance.", "ప్రశాంతమైన లావెండర్ సువాసనతో చేతితో పోసిన 3 సోయా కొవ్వొత్తుల సెట్."),
  },
  {
    id: "p2",
    name: b("Homemade Mango Pickle 500g", "ఇంటి మామిడి ఊరగాయ 500g"),
    seller: b("Padma's Kitchen", "పద్మ వంటిల్లు"),
    price: "₹220",
    category: b("Homemade Foods", "ఇంటి ఆహారాలు"),
    categoryKey: "foods",
    emoji: "🥭",
    desc: b("Traditional spicy mango pickle, no preservatives, family recipe.", "సంప్రదాయ కారం మామిడి ఊరగాయ, ప్రిజర్వేటివ్‌లు లేవు, కుటుంబ వంటకం."),
  },
  {
    id: "p3",
    name: b("Terracotta Earrings", "టెర్రకోట చెవి దుద్దులు"),
    seller: b("Sravani Designs", "శ్రావణి డిజైన్స్"),
    price: "₹180",
    category: b("Jewelry", "ఆభరణాలు"),
    categoryKey: "jewelry",
    emoji: "💍",
    desc: b("Handpainted terracotta earrings, lightweight and elegant.", "చేతితో పెయింట్ చేసిన టెర్రకోట చెవి దుద్దులు, తేలికైనవి, అందమైనవి."),
  },
  {
    id: "p4",
    name: b("Hand-stitched Cotton Blouse", "చేతి కుట్టు పత్తి జాకెట్"),
    seller: b("Anjali Tailors", "అంజలి టైలర్స్"),
    price: "₹350",
    category: b("Clothing", "దుస్తులు"),
    categoryKey: "clothing",
    emoji: "👚",
    desc: b("Custom-fit cotton blouse, made to your measurements.", "మీ కొలతలకు తగ్గట్టు కస్టమ్ ఫిట్ పత్తి జాకెట్."),
  },
  {
    id: "p5",
    name: b("Madhubani Wall Painting", "మధుబని గోడ చిత్రం"),
    seller: b("Ravi Art Studio", "రవి ఆర్ట్ స్టూడియో"),
    price: "₹1,200",
    category: b("Paintings", "చిత్రాలు"),
    categoryKey: "paintings",
    emoji: "🎨",
    desc: b("Authentic hand-painted Madhubani folk art on canvas.", "క్యాన్వాస్‌పై చేతితో గీసిన అసలైన మధుబని జానపద కళ."),
  },
  {
    id: "p6",
    name: b("Macramé Wall Hanging", "మాక్రమే గోడ హ్యాంగింగ్"),
    seller: b("Knot & Co", "నాట్ & కో"),
    price: "₹600",
    category: b("Home Decor", "ఇంటి అలంకరణ"),
    categoryKey: "decor",
    emoji: "🪢",
    desc: b("Boho macramé wall hanging, perfect for living rooms.", "లివింగ్ రూమ్‌లకు అనువైన బోహో మాక్రమే గోడ హ్యాంగింగ్."),
  },
  {
    id: "p7",
    name: b("Personalized Photo Frame", "వ్యక్తిగత ఫోటో ఫ్రేమ్"),
    seller: b("Gift Nook", "గిఫ్ట్ నుక్"),
    price: "₹320",
    category: b("Gifts", "బహుమతులు"),
    categoryKey: "gifts",
    emoji: "🖼️",
    desc: b("Custom engraved wooden photo frame for special memories.", "ప్రత్యేక జ్ఞాపకాల కోసం చెక్కిన చెక్క ఫోటో ఫ్రేమ్."),
  },
  {
    id: "p8",
    name: b("Crochet Baby Booties", "క్రోషే బేబీ బూటీలు"),
    seller: b("Cozy Threads", "కోజీ థ్రెడ్స్"),
    price: "₹250",
    category: b("Crafts", "క్రాఫ్ట్‌లు"),
    categoryKey: "crafts",
    emoji: "🧶",
    desc: b("Soft handmade crochet booties for newborns, gift-ready.", "నవజాత శిశువులకు మృదువైన చేతి క్రోషే బూటీలు, బహుమతికి సిద్ధం."),
  },
  {
    id: "p9",
    name: b("Assorted Laddu Box", "మిశ్రమ లడ్డూ బాక్స్"),
    seller: b("Sweet Home", "స్వీట్ హోమ్"),
    price: "₹400",
    category: b("Homemade Foods", "ఇంటి ఆహారాలు"),
    categoryKey: "foods",
    emoji: "🍡",
    desc: b("Festive box of fresh homemade laddus, pure ghee.", "స్వచ్ఛమైన నెయ్యితో తాజా ఇంటి లడ్డూల పండుగ బాక్స్."),
  },
];

// Success stories
export interface Story {
  id: string;
  name: Bi;
  role: Bi;
  emoji: string;
  story: Bi;
  testimonial: Bi;
  growth: Bi;
}

export const stories: Story[] = [
  {
    id: "s1",
    name: b("Lakshmi", "లక్ష్మి"),
    role: b("Homemaker, Guntur", "గృహిణి, గుంటూరు"),
    emoji: "👩",
    story: b(
      "Lakshmi started making handmade candles from her kitchen. Today she supplies three gift shops and earns a steady second income.",
      "లక్ష్మి తన వంటగది నుండి కొవ్వొత్తులు తయారు చేయడం ప్రారంభించింది. నేడు ఆమె మూడు గిఫ్ట్ షాపులకు సరఫరా చేస్తూ స్థిరమైన అదనపు ఆదాయం పొందుతోంది.",
    ),
    testimonial: b(
      "This platform gave me confidence to turn my hobby into a real business.",
      "ఈ వేదిక నా అభిరుచిని నిజమైన వ్యాపారంగా మార్చుకునే ధైర్యం ఇచ్చింది.",
    ),
    growth: b("₹0 → ₹25,000/month in 8 months", "8 నెలల్లో ₹0 → ₹25,000/నెల"),
  },
  {
    id: "s2",
    name: b("Ramya", "రమ్య"),
    role: b("Student, Vijayawada", "విద్యార్థి, విజయవాడ"),
    emoji: "👩‍🎓",
    story: b(
      "Ramya funds her college fees by selling handmade jewelry online while studying. Her terracotta designs are loved by young buyers.",
      "రమ్య చదువుతూనే ఆన్‌లైన్‌లో చేతి ఆభరణాలు అమ్మి తన కాలేజీ ఫీజులు చెల్లించుకుంటోంది. ఆమె టెర్రకోట డిజైన్‌లను యువత ఇష్టపడుతున్నారు.",
    ),
    testimonial: b(
      "I learned pricing and marketing here — now I run my own small brand.",
      "ధర, మార్కెటింగ్ ఇక్కడ నేర్చుకున్నాను — ఇప్పుడు నా సొంత బ్రాండ్ నడుపుతున్నాను.",
    ),
    growth: b("100+ orders in first year", "మొదటి సంవత్సరంలో 100+ ఆర్డర్లు"),
  },
  {
    id: "s3",
    name: b("Sunitha SHG", "సునీత స్వయం సహాయక సంఘం"),
    role: b("Self-Help Group, Khammam", "స్వయం సహాయక సంఘం, ఖమ్మం"),
    emoji: "👭",
    story: b(
      "A group of 12 women started a shared pickle and snacks unit. They now supply local stores and support each other's families.",
      "12 మంది మహిళల బృందం ఉమ్మడి ఊరగాయలు, స్నాక్స్ యూనిట్ ప్రారంభించారు. వారు ఇప్పుడు స్థానిక దుకాణాలకు సరఫరా చేస్తూ ఒకరికొకరు మద్దతుగా ఉన్నారు.",
    ),
    testimonial: b(
      "Together we built something none of us could alone.",
      "ఒక్కొక్కరిగా చేయలేనిది అందరం కలిసి సాధించాం.",
    ),
    growth: b("12 families, ₹1.5L+ monthly turnover", "12 కుటుంబాలు, ₹1.5L+ నెలవారీ టర్నోవర్"),
  },
  {
    id: "s4",
    name: b("Arjun", "అర్జున్"),
    role: b("Young Creator, Warangal", "యువ సృష్టికర్త, వరంగల్"),
    emoji: "👨‍🎨",
    story: b(
      "Arjun turned his painting passion into a freelance art business, selling prints and taking custom commissions across India.",
      "అర్జున్ తన చిత్రలేఖన అభిరుచిని ఫ్రీలాన్స్ ఆర్ట్ వ్యాపారంగా మార్చి, దేశవ్యాప్తంగా ప్రింట్‌లు, కస్టమ్ ఆర్డర్లు తీసుకుంటున్నాడు.",
    ),
    testimonial: b(
      "The startup guides helped me price my art with confidence.",
      "స్టార్టప్ గైడ్‌లు నా కళకు ధైర్యంగా ధర పెట్టడంలో సహాయపడ్డాయి.",
    ),
    growth: b("Pan-India custom orders", "దేశవ్యాప్త కస్టమ్ ఆర్డర్లు"),
  },
];

// Government schemes
export interface Scheme {
  id: string;
  name: Bi;
  eligibility: Bi;
  benefits: Bi;
  application: Bi;
}

export const schemes: Scheme[] = [
  {
    id: "g1",
    name: b("Women Entrepreneurship Support", "మహిళా వ్యవస్థాపకత మద్దతు"),
    eligibility: b("Women aged 18+ starting or running a micro-enterprise.", "మైక్రో-ఎంటర్‌ప్రైజ్ ప్రారంభించే లేదా నడిపే 18+ వయసు మహిళలు."),
    benefits: b("Low-interest loans, subsidies and business training.", "తక్కువ వడ్డీ రుణాలు, సబ్సిడీలు మరియు వ్యాపార శిక్షణ."),
    application: b("Apply through your local bank or district industries centre.", "మీ స్థానిక బ్యాంక్ లేదా జిల్లా పరిశ్రమల కేంద్రం ద్వారా దరఖాస్తు చేయండి."),
  },
  {
    id: "g2",
    name: b("Self Help Group (SHG) Programs", "స్వయం సహాయక సంఘం (SHG) కార్యక్రమాలు"),
    eligibility: b("Registered SHGs with active members.", "క్రియాశీల సభ్యులతో నమోదైన SHGలు."),
    benefits: b("Group loans, revolving funds and capacity building.", "గ్రూప్ రుణాలు, రివాల్వింగ్ నిధులు మరియు సామర్థ్య నిర్మాణం."),
    application: b("Register your SHG via the village/ward secretariat.", "గ్రామ/వార్డు సచివాలయం ద్వారా మీ SHGని నమోదు చేయండి."),
  },
  {
    id: "g3",
    name: b("Skill Development Schemes", "నైపుణ్యాభివృద్ధి పథకాలు"),
    eligibility: b("Youth and adults seeking vocational training.", "వృత్తి శిక్షణ కోరే యువత మరియు పెద్దలు."),
    benefits: b("Free certified training and placement assistance.", "ఉచిత ధృవీకృత శిక్షణ మరియు ఉద్యోగ సహాయం."),
    application: b("Enroll at a recognized skill training centre.", "గుర్తింపు పొందిన నైపుణ్య శిక్షణ కేంద్రంలో చేరండి."),
  },
  {
    id: "g4",
    name: b("Startup Assistance Programs", "స్టార్టప్ సహాయ కార్యక్రమాలు"),
    eligibility: b("New small businesses and first-time entrepreneurs.", "కొత్త చిన్న వ్యాపారాలు మరియు తొలిసారి వ్యవస్థాపకులు."),
    benefits: b("Seed funding, mentorship and market linkage.", "సీడ్ ఫండింగ్, మెంటర్‌షిప్ మరియు మార్కెట్ అనుసంధానం."),
    application: b("Submit a simple business proposal online or at the MSME office.", "ఆన్‌లైన్‌లో లేదా MSME కార్యాలయంలో సరళమైన వ్యాపార ప్రతిపాదన సమర్పించండి."),
  },
  {
    id: "g5",
    name: b("Mudra Micro-Loan Scheme", "ముద్ర మైక్రో-రుణ పథకం"),
    eligibility: b("Small non-corporate businesses needing up to ₹10 lakh.", "₹10 లక్షల వరకు అవసరమైన చిన్న వ్యాపారాలు."),
    benefits: b("Collateral-free loans in three categories.", "మూడు వర్గాల్లో పూచీకత్తు లేని రుణాలు."),
    application: b("Apply at any bank with basic business documents.", "ప్రాథమిక వ్యాపార పత్రాలతో ఏ బ్యాంక్‌లోనైనా దరఖాస్తు చేయండి."),
  },
  {
    id: "g6",
    name: b("Handicrafts Artisan Support", "హస్తకళ కళాకారుల మద్దతు"),
    eligibility: b("Registered artisans and craft producers.", "నమోదైన కళాకారులు మరియు క్రాఫ్ట్ ఉత్పత్తిదారులు."),
    benefits: b("Artisan cards, exhibitions and material subsidies.", "కళాకారుల కార్డులు, ప్రదర్శనలు మరియు పదార్థ సబ్సిడీలు."),
    application: b("Register with the handicrafts development office.", "హస్తకళల అభివృద్ధి కార్యాలయంలో నమోదు చేసుకోండి."),
  },
];

// Challenges & Solutions
export const challenges: { icon: string; text: Bi }[] = [
  { icon: "🚪", text: b("Lack of opportunities", "అవకాశాల కొరత") },
  { icon: "👥", text: b("Limited customer access", "పరిమిత కస్టమర్ చేరువ") },
  { icon: "💭", text: b("Lack of confidence", "ఆత్మవిశ్వాస లోపం") },
  { icon: "🧭", text: b("Lack of business guidance", "వ్యాపార మార్గదర్శనం లేకపోవడం") },
  { icon: "🗣️", text: b("Language barriers", "భాషా అడ్డంకులు") },
];

export const solutions: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "💡", title: b("Business Ideas", "వ్యాపార ఆలోచనలు"), text: b("Curated, proven home-based ideas to start with.", "ప్రారంభించడానికి నిరూపితమైన గృహ ఆధారిత ఆలోచనలు.") },
  { icon: "📚", title: b("Startup Guides", "స్టార్టప్ గైడ్‌లు"), text: b("Step-by-step guides from idea to first sale.", "ఆలోచన నుండి తొలి అమ్మకం వరకు దశల వారీ మార్గదర్శి.") },
  { icon: "🛒", title: b("Marketplace", "మార్కెట్‌ప్లేస్"), text: b("A place to showcase and sell your products.", "మీ ఉత్పత్తులను ప్రదర్శించి అమ్మే వేదిక.") },
  { icon: "🤝", title: b("Mentorship", "మెంటర్‌షిప్"), text: b("Connect with mentors who guide your journey.", "మీ ప్రయాణాన్ని నడిపించే మెంటర్‌లతో కనెక్ట్ అవ్వండి.") },
  { icon: "🏛️", title: b("Government Schemes", "ప్రభుత్వ పథకాలు"), text: b("Find funding and support programs you qualify for.", "మీకు అర్హత ఉన్న నిధులు, మద్దతు కార్యక్రమాలను కనుగొనండి.") },
  { icon: "❤️", title: b("Community Support", "సమాజ మద్దతు"), text: b("Grow with a supportive community around you.", "మీ చుట్టూ ఉన్న మద్దతు సమాజంతో ఎదగండి.") },
];

// Skill learning
export const skills: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "📢", title: b("Marketing Basics", "మార్కెటింగ్ ప్రాథమికాంశాలు"), text: b("Reach customers and tell your story.", "కస్టమర్లను చేరుకోండి, మీ కథ చెప్పండి.") },
  { icon: "📸", title: b("Product Photography", "ఉత్పత్తి ఫోటోగ్రఫీ"), text: b("Take clear photos that sell.", "అమ్మకాలు పెంచే స్పష్టమైన ఫోటోలు తీయండి.") },
  { icon: "🎯", title: b("Branding", "బ్రాండింగ్"), text: b("Build a memorable identity.", "గుర్తుండిపోయే గుర్తింపు తయారు చేయండి.") },
  { icon: "📱", title: b("Social Media Marketing", "సోషల్ మీడియా మార్కెటింగ్"), text: b("Grow on Instagram, WhatsApp & Facebook.", "ఇన్‌స్టా, వాట్సాప్, ఫేస్‌బుక్‌లో ఎదగండి.") },
  { icon: "💰", title: b("Pricing Products", "ఉత్పత్తుల ధర నిర్ణయం"), text: b("Price fairly and profitably.", "న్యాయంగా, లాభదాయకంగా ధర పెట్టండి.") },
  { icon: "📦", title: b("Packaging", "ప్యాకేజింగ్"), text: b("Package safely and attractively.", "సురక్షితంగా, ఆకర్షణీయంగా ప్యాక్ చేయండి.") },
  { icon: "🧾", title: b("Financial Literacy", "ఆర్థిక అవగాహన"), text: b("Track income, costs and savings.", "ఆదాయం, ఖర్చులు, పొదుపు ట్రాక్ చేయండి.") },
];

export const womenPoints: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "💼", title: b("Business Opportunities", "వ్యాపార అవకాశాలు"), text: b("Flexible home-based ideas that fit around family life.", "కుటుంబ జీవితానికి సరిపోయే సౌకర్యవంతమైన గృహ ఆధారిత ఆలోచనలు.") },
  { icon: "🌟", title: b("Success Stories", "విజయ గాథలు"), text: b("Be inspired by women who built thriving enterprises.", "విజయవంతమైన వ్యాపారాలు నిర్మించిన మహిళల నుండి ప్రేరణ పొందండి.") },
  { icon: "📘", title: b("Skill Resources", "నైపుణ్య వనరులు"), text: b("Free learning to build confidence and capability.", "ఆత్మవిశ్వాసం, సామర్థ్యం పెంచే ఉచిత అభ్యాసం.") },
  { icon: "💪", title: b("Financial Independence", "ఆర్థిక స్వాతంత్ర్యం"), text: b("Earn, save and gain control of your finances.", "సంపాదించండి, పొదుపు చేయండి, మీ ఆర్థిక నియంత్రణ పొందండి.") },
];

export const youthPoints: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "🚀", title: b("Student Startup Ideas", "విద్యార్థి స్టార్టప్ ఆలోచనలు"), text: b("Low-cost businesses you can run alongside studies.", "చదువుతో పాటు నడపగల తక్కువ ఖర్చు వ్యాపారాలు.") },
  { icon: "💻", title: b("Freelancing Opportunities", "ఫ్రీలాన్సింగ్ అవకాశాలు"), text: b("Earn online with design, writing and more.", "డిజైన్, రైటింగ్ వంటి వాటితో ఆన్‌లైన్‌లో సంపాదించండి.") },
  { icon: "🎨", title: b("Creative Businesses", "సృజనాత్మక వ్యాపారాలు"), text: b("Turn art, crafts and content into income.", "కళ, క్రాఫ్ట్, కంటెంట్‌ను ఆదాయంగా మార్చండి.") },
  { icon: "🔬", title: b("Innovation Resources", "ఆవిష్కరణ వనరులు"), text: b("Tools and guidance to launch new ideas.", "కొత్త ఆలోచనలను ప్రారంభించడానికి సాధనాలు, మార్గదర్శనం.") },
];

export const faqs: { q: Bi; a: Bi }[] = [
  {
    q: b("Is this platform free to use?", "ఈ వేదిక ఉపయోగించడం ఉచితమా?"),
    a: b("Yes. Community Makers' Market is a community service platform and free for makers and buyers.", "అవును. కమ్యూనిటీ మేకర్స్ మార్కెట్ ఒక సమాజ సేవా వేదిక, సృష్టికర్తలు, కొనుగోలుదారులకు ఉచితం."),
  },
  {
    q: b("Do you handle payments?", "మీరు చెల్లింపులు నిర్వహిస్తారా?"),
    a: b("No. Buyers contact sellers directly to arrange purchases. We do not process any payments.", "లేదు. కొనుగోలుదారులు విక్రేతలను నేరుగా సంప్రదిస్తారు. మేము చెల్లింపులు ప్రాసెస్ చేయము."),
  },
  {
    q: b("Who can join as a seller?", "విక్రేతగా ఎవరు చేరవచ్చు?"),
    a: b("Homemakers, students, artists, self-help groups and any local creator are welcome.", "గృహిణులు, విద్యార్థులు, కళాకారులు, స్వయం సహాయక సంఘాలు, ఏ స్థానిక సృష్టికర్త అయినా స్వాగతం."),
  },
  {
    q: b("Can NGOs and SHGs use this?", "NGOలు, SHGలు దీన్ని ఉపయోగించవచ్చా?"),
    a: b("Absolutely. The platform is designed for NGOs, SHGs, secretariats and community programs.", "ఖచ్చితంగా. ఈ వేదిక NGOలు, SHGలు, సచివాలయాలు, సమాజ కార్యక్రమాల కోసం రూపొందించబడింది."),
  },
];

export const impactStats: { value: number; suffix: string; key: "statIdeas" | "statCreators" | "statProducts" | "statStories" }[] = [
  { value: 500, suffix: "+", key: "statIdeas" },
  { value: 200, suffix: "+", key: "statCreators" },
  { value: 1000, suffix: "+", key: "statProducts" },
  { value: 50, suffix: "+", key: "statStories" },
];

// Community workflow journey
export const workflowSteps: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "💡", title: b("Learn an Idea", "ఆలోచన నేర్చుకోండి"), text: b("Discover a home-based business idea that fits your skills.", "మీ నైపుణ్యాలకు సరిపోయే గృహ ఆధారిత వ్యాపార ఆలోచనను కనుగొనండి.") },
  { icon: "🛠️", title: b("Create Products", "ఉత్పత్తులు తయారు చేయండి"), text: b("Make your handmade products using your craft and creativity.", "మీ నైపుణ్యం, సృజనాత్మకతతో చేతి ఉత్పత్తులను తయారు చేయండి.") },
  { icon: "📝", title: b("Register as Seller", "విక్రేతగా నమోదు చేసుకోండి"), text: b("Create your free seller profile in minutes.", "నిమిషాల్లో మీ ఉచిత విక్రేత ప్రొఫైల్ సృష్టించుకోండి.") },
  { icon: "📤", title: b("Upload Products", "ఉత్పత్తులను అప్‌లోడ్ చేయండి"), text: b("Add photos, prices and details for your products.", "మీ ఉత్పత్తులకు ఫోటోలు, ధరలు, వివరాలు జోడించండి.") },
  { icon: "🛒", title: b("Appear in Marketplace", "మార్కెట్‌ప్లేస్‌లో కనిపించండి"), text: b("Your products go live for the whole community to see.", "మీ ఉత్పత్తులు మొత్తం సమాజం చూసేలా ప్రత్యక్షమవుతాయి.") },
  { icon: "💬", title: b("Buyers Contact You", "కొనుగోలుదారులు సంప్రదిస్తారు"), text: b("Interested buyers reach out to you directly — no middlemen.", "ఆసక్తి గల కొనుగోలుదారులు మిమ్మల్ని నేరుగా సంప్రదిస్తారు — మధ్యవర్తులు లేరు.") },
  { icon: "📈", title: b("Earn & Grow", "సంపాదించి ఎదగండి"), text: b("Receive inquiries and turn your skill into steady income.", "విచారణలు అందుకొని మీ నైపుణ్యాన్ని స్థిరమైన ఆదాయంగా మార్చుకోండి.") },
];
