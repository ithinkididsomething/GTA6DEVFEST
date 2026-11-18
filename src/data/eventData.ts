/**
 * DEVFEST INDORE 2026 — Official Event Information & Configuration
 * 
 * Source: Official DevFest Indore 2026 & GDG Indore Community
 * Theme: NEW FRONTIERS — "From Orbit to Insight"
 */

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  badge?: string;
  topic: string;
  type: 'Keynote' | 'Main Stage' | 'Workshop' | 'Special Address';
  focus: string;
  workshopDetails?: string;
  bio?: string;
}

export interface TrackItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  iconName: string;
  color: string;
}

export interface WorkshopItem {
  hall: 'Hall 1' | 'Hall 2';
  title: string;
  facilitator: string;
  organization?: string;
  focus: string;
  technologies?: string;
}

export interface TicketTier {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  badge: string;
  audience: string;
  perks: string[];
  discountInfo: string;
  ticketUrl: string;
}

export interface Partner {
  name: string;
  tier: string;
  role: string;
  description: string;
}

export interface EventConfig {
  eventName: string;
  edition: string;
  year: string;
  theme: {
    title: string;
    tagline: string;
    concept: string;
    description: string;
  };
  organiser: {
    name: string;
    shortName: string;
    since: string;
    description: string;
    email: string;
    communityUrl: string;
  };
  dates: {
    display: string;
    fullDate: string;
    dayOfWeek: string;
    date: string;
    timing: string;
    checkInTime: string;
    eventHours: string;
  };
  venue: {
    name: string;
    type: string;
    address: string;
    locality: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    mapsQuery: string;
    mapsUrl: string;
  };
  registration: {
    url: string;
    portalUrl: string;
    status: 'Open' | 'Waitlist' | 'Closed';
    ctaText: string;
    startingPrice: string;
    notice: string;
  };
  stats: {
    communityReach: string;
    tracksCount: string;
    confirmedSpeakers: string;
    startingPrice: string;
  };
  tracks: TrackItem[];
  speakers: Speaker[];
  agenda: {
    title: string;
    speaker: string;
    type: string;
    hall?: string;
  }[];
  workshops: WorkshopItem[];
  exhibits: {
    title: string;
    partner: string;
    highlights: string[];
    description: string;
  }[];
  tickets: TicketTier[];
  partners: Partner[];
  faqs: {
    question: string;
    answer: string;
  }[];
  officialLinks: {
    website: string;
    agenda: string;
    speakers: string;
    tickets: string;
    faq: string;
    venue: string;
    communityEvent: string;
    contactEmail: string;
  };
}

export const EVENT_DATA: EventConfig = {
  eventName: "DEVFEST INDORE",
  edition: "2026 EDITION",
  year: "2026",
  theme: {
    title: "NEW FRONTIERS",
    tagline: "Intelligent Software × Artificial Intelligence × Space Technology",
    concept: "From Orbit to Insight",
    description: "Exploring the bleeding-edge intersection of intelligent software, autonomous agents, orbital telemetry, physical robotics, and next-generation planetary compute.",
  },
  organiser: {
    name: "Google Developer Groups (GDG) Indore",
    shortName: "GDG Indore",
    since: "2014",
    description: "An active community of developers, engineers, and technologists hosting flagship developer gatherings in Indore since 2014.",
    email: "gdgindore@gmail.com",
    communityUrl: "https://gdg.community.dev/events/details/google-gdg-indore-presents-devfest-indore-2026/cohost-gdg-indore/",
  },
  dates: {
    display: "SATURDAY, 28 NOVEMBER 2026",
    fullDate: "Saturday, 28 November 2026",
    dayOfWeek: "Saturday",
    date: "28 November 2026",
    timing: "9:00 AM – 4:30 PM IST",
    checkInTime: "Check-in from 9:00 AM IST",
    eventHours: "9:30 AM – 4:30 PM IST",
  },
  venue: {
    name: "Essentia Luxury Hotel, Indore",
    type: "Luxury Convention Hotel",
    address: "Near World Cup Square, Pipliyahana, Ring Road",
    locality: "Pipliyahana",
    landmark: "Near World Cup Square",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452016",
    country: "India",
    mapsQuery: "Essentia+Luxury+Hotel+Indore+World+Cup+Square",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Essentia+Luxury+Hotel+Near+World+Cup+Square+Pipliyahana+Ring+Road+Indore+Madhya+Pradesh+452016",
  },
  registration: {
    url: "https://devfest.indore.community/tickets",
    portalUrl: "https://devfest.indore.community/",
    status: 'Open',
    ctaText: "GET PASSES FROM ₹849",
    startingPrice: "₹849",
    notice: "Registrations hosted on official KonfHub platform. Limited seats available per category.",
  },
  stats: {
    communityReach: "1000+",
    tracksCount: "04",
    confirmedSpeakers: "10+",
    startingPrice: "₹849",
  },
  tracks: [
    {
      id: "space-systems",
      title: "SPACE SYSTEMS",
      tagline: "From Orbit to Insight // Orbital Computing",
      description: "Satellite telemetry, Earth observation, space technology, edge computing beyond conventional planetary infrastructure, and transforming satellite streams into actionable planetary intelligence.",
      highlights: [
        "Satellite telemetry & ground communication",
        "High-resolution Earth observation data processing",
        "Space technology, exploration & satellite fleets",
        "Edge computing operating beyond cloud infrastructure"
      ],
      iconName: "Satellite",
      color: "from-[#FFB450] to-[#FF9B55]",
    },
    {
      id: "ai-agents",
      title: "AI AGENTS",
      tagline: "Multi-Agent Architectures & ADK Ecosystems",
      description: "Autonomous reasoning agents, multi-agent coordination, Model Context Protocol (MCP), Google Agent Development Kit (ADK), and production-grade Gemini Enterprise orchestration.",
      highlights: [
        "Autonomous AI agent design & evaluation",
        "Multi-agent swarm coordination & handoffs",
        "Model Context Protocol (MCP) integrations",
        "Google Agent Development Kit (ADK) in practice"
      ],
      iconName: "Sparkles",
      color: "from-[#FF9B55] to-[#F87572]",
    },
    {
      id: "physical-ai",
      title: "PHYSICAL AI",
      tagline: "Intelligent Hardware & Qualcomm Edge Stacks",
      description: "Artificial intelligence interacting directly with the physical world. Robotics, Qualcomm on-device neural processing, Arduino sensor integration, and low-latency edge deployment.",
      highlights: [
        "Robotics & sensor-driven physical interaction",
        "Qualcomm AI Stack & on-device NPU compute",
        "Arduino hardware prototyping & edge inference",
        "Embodied intelligence & autonomous cybernetics"
      ],
      iconName: "Cpu",
      color: "from-[#F87572] to-[#C9349B]",
    },
    {
      id: "cloud-systems",
      title: "CLOUD & SYSTEMS",
      tagline: "Google Cloud & Enterprise Scale Engineering",
      description: "Google Cloud infrastructure, scalable enterprise distributed systems, high-throughput architectures, guardrails for AI-written code, and production engineering at planetary scale.",
      highlights: [
        "Google Cloud architecture & serverless pipelines",
        "Enterprise distributed systems & zero-trust guardrails",
        "Open-weight LLM inference with Gemma 4",
        "Real-time voice agents in high-concurrency production"
      ],
      iconName: "Layers",
      color: "from-[#C9349B] to-[#7B208F]",
    },
  ],
  speakers: [
    {
      id: "pjs-pannu",
      name: "Lt Gen PJS Pannu",
      role: "Founder, Space Club of India",
      company: "Space Club of India / Indian Armed Forces",
      badge: "Keynote Speaker",
      topic: "National Security, Aerospace & India's Future in Space Technology",
      type: "Keynote",
      focus: "Space technology, national security, aerospace, strategic affairs & India's burgeoning space ecosystem.",
      bio: "Former Deputy Chief of the Integrated Defence Staff and Founder of Space Club of India, leading the strategic dialogue on national space architecture and orbital defense.",
    },
    {
      id: "kartikey-rawat",
      name: "Kartikey Rawat",
      role: "Senior Engineer, Developer Relations",
      company: "Qualcomm",
      badge: "Main Stage",
      topic: "Building AI at the Edge: Developing Intelligent Applications with Qualcomm AI Stack and On-Device AI",
      type: "Main Stage",
      focus: "Edge AI, on-device neural processing, Qualcomm AI Stack ecosystem.",
      bio: "Senior DevRel Engineer at Qualcomm empowering developers to ship high-efficiency on-device AI architectures.",
    },
    {
      id: "abhishek-sharma",
      name: "Abhishek Sharma",
      role: "FDE Lead & AI Architect",
      company: "Searce Inc.",
      badge: "Session & Workshop",
      topic: "The Production Agent Blueprint: Harness Engineering with Gemini Enterprise",
      type: "Main Stage",
      focus: "Production AI agents, Google Cloud infrastructure, multi-agent orchestration.",
      workshopDetails: "Workshop: Agent Engineering in Practice (Hall 1)",
      bio: "AI Architect and FDE Lead at Searce Inc., specializing in production-ready AI agents and enterprise generative systems.",
    },
    {
      id: "akash-kamerkar",
      name: "Akash Kamerkar",
      role: "Data Scientist",
      company: "ABB",
      badge: "Session & Workshop",
      topic: "Trust, but Verify: Guardrails for AI-Written Code with Google Antigravity and SonarQube",
      type: "Main Stage",
      focus: "AI-assisted development, code quality, Google ADK, MCP & independent code verification.",
      workshopDetails: "Workshop: Agents Shouldn't Grade Their Own Homework: Google ADK, MCP and Independent Code Verification (Hall 1)",
      bio: "Data Scientist at ABB focused on industrial reliability, automated code verification, and multi-agent guardrails.",
    },
    {
      id: "vinayak-gavariya",
      name: "Vinayak Gavariya",
      role: "AI Engineer",
      company: "Sarvam AI",
      badge: "Session & Workshop",
      topic: "From Open Weights to Production: Running Gemma 4 in Real Apps",
      type: "Main Stage",
      focus: "Generative AI, open-weight models, Gemma ecosystem, low-latency deployment.",
      workshopDetails: "Workshop: Hands-on with Gemma and Open Weights (Hall 1)",
      bio: "AI Engineer at Sarvam AI pushing the envelope of open-weight LLMs and language tech for Indian developer ecosystems.",
    },
    {
      id: "aswin-chandrasekaran",
      name: "Aswin Chandrasekaran",
      role: "Google Developer Expert, Cloud AI",
      company: "HeyBubba",
      badge: "Main Stage",
      topic: "Real-Time Voice Agents in Production",
      type: "Main Stage",
      focus: "Voice AI, real-time conversational systems, latency optimization, distributed voice pipelines.",
      bio: "Google Developer Expert in Cloud AI and builder at HeyBubba crafting real-time voice architectures.",
    },
    {
      id: "gautam-billore",
      name: "Gautam Billore",
      role: "Chief Consultant",
      company: "Nordic Digital Hub, Sweden",
      badge: "Main Stage",
      topic: "Transforming Enterprise Systems",
      type: "Main Stage",
      focus: "Enterprise digital transformation, systems consulting, international technology scaling.",
      bio: "Chief Consultant at Nordic Digital Hub (Sweden) advising multinational enterprises on digital modernization.",
    },
    {
      id: "srashti-jain",
      name: "Srashti Jain",
      role: "CEO, TechVraksh & Google Developer Expert",
      company: "TechVraksh",
      badge: "GDE Angular & Workshop",
      topic: "Modern Web Development with Angular",
      type: "Workshop",
      focus: "Angular, signals, modern frontend architecture, and enterprise web scalability.",
      workshopDetails: "Workshop: Modern Web Development with Angular (Hall 2)",
      bio: "CEO of TechVraksh and Google Developer Expert for Angular, recognized international community educator.",
    },
    {
      id: "salman-faris",
      name: "Salman Faris",
      role: "Community & Hardware Specialist",
      company: "Qualcomm",
      badge: "Workshop Facilitator",
      topic: "Physical AI Workshop with Qualcomm",
      type: "Workshop",
      focus: "Physical AI, edge hardware, microcontrollers and Qualcomm embedded developer toolchains.",
      workshopDetails: "Workshop: Physical AI Workshop with Qualcomm (Hall 1)",
      bio: "Hardware innovator and Qualcomm specialist bridging IoT, embedded silicon, and intelligent edge physical devices.",
    },
    {
      id: "kushagra-nagar",
      name: "Kushagra Nagar",
      role: "Workshop Facilitator",
      company: "Developer Community",
      badge: "Workshop Facilitator",
      topic: "Building Intelligent Applications",
      type: "Workshop",
      focus: "End-to-end intelligent app development, developer toolchains, practical AI prototypes.",
      workshopDetails: "Workshop: Building Intelligent Applications (Hall 2)",
      bio: "Hands-on engineering facilitator and mentor guiding developers in shipping functional AI-powered web applications.",
    },
  ],
  agenda: [
    { title: "Keynote Address: Space Systems, Defence & India's Technological Frontier", speaker: "Lt Gen PJS Pannu (Founder, Space Club of India)", type: "Keynote" },
    { title: "Executive Technology Panel: New Frontiers in Software & Intelligence", speaker: "Industry Leaders & GDG Core", type: "Panel Discussion" },
    { title: "Institutional Keynote & Regional Engineering Address", speaker: "Indore Institute of Science and Technology (IIST)", type: "Partner Address" },
    { title: "Transforming Enterprise Systems", speaker: "Gautam Billore (Chief Consultant, Nordic Digital Hub, Sweden)", type: "Main Stage Session" },
    { title: "Building AI at the Edge: Developing with Qualcomm AI Stack", speaker: "Kartikey Rawat (Senior Engineer, Qualcomm)", type: "Main Stage Session" },
    { title: "The Production Agent Blueprint: Harness Engineering with Gemini Enterprise", speaker: "Abhishek Sharma (FDE Lead & AI Architect, Searce Inc.)", type: "Main Stage Session" },
    { title: "Trust, but Verify: Guardrails for AI-Written Code with Google Antigravity", speaker: "Akash Kamerkar (Data Scientist, ABB)", type: "Main Stage Session" },
    { title: "From Open Weights to Production: Running Gemma 4 in Real Apps", speaker: "Vinayak Gavariya (AI Engineer, Sarvam AI)", type: "Main Stage Session" },
    { title: "Real-Time Voice Agents in Production", speaker: "Aswin Chandrasekaran (GDE Cloud AI, HeyBubba)", type: "Main Stage Session" },
  ],
  workshops: [
    {
      hall: "Hall 1",
      title: "Physical AI Workshop with Qualcomm",
      facilitator: "Salman Faris",
      organization: "Qualcomm",
      focus: "Hands-on physical computing, microcontrollers, and Qualcomm on-device AI stacks.",
      technologies: "Qualcomm AI Stack, Embedded Devices, Edge Sensors",
    },
    {
      hall: "Hall 1",
      title: "Agent Engineering in Practice",
      facilitator: "Abhishek Sharma",
      organization: "Searce Inc.",
      focus: "Building, deploying, and monitoring autonomous agents with Gemini Enterprise and cloud pipelines.",
      technologies: "Gemini Enterprise, Agent Blueprints, Multi-Agent Swarms",
    },
    {
      hall: "Hall 1",
      title: "Agents Shouldn't Grade Their Own Homework: Google ADK, MCP & Independent Code Verification",
      facilitator: "Akash Kamerkar",
      organization: "ABB",
      focus: "Constructing reliable verification pipelines using Model Context Protocol (MCP) and Google ADK.",
      technologies: "Google ADK, Model Context Protocol (MCP), SonarQube, Google Antigravity",
    },
    {
      hall: "Hall 1",
      title: "Hands-on with Gemma and Open Weights",
      facilitator: "Vinayak Gavariya",
      organization: "Sarvam AI",
      focus: "Running, fine-tuning, and packaging Google open-weight Gemma models for production apps.",
      technologies: "Gemma 4, Open Weights, Local Inference",
    },
    {
      hall: "Hall 2",
      title: "Building Intelligent Applications",
      facilitator: "Kushagra Nagar",
      organization: "Developer Community",
      focus: "Full-stack developer workflows for embedding generative and autonomous features into web apps.",
      technologies: "Modern Web APIs, LLM Endpoints, Vector Context",
    },
    {
      hall: "Hall 2",
      title: "Modern Web Development with Angular",
      facilitator: "Srashti Jain",
      organization: "TechVraksh / GDE Angular",
      focus: "Modern reactive frontend architectures, Angular Signals, and enterprise UI scalability.",
      technologies: "Angular, Signals, Vite, Scalable Web Architecture",
    },
  ],
  exhibits: [
    {
      title: "QUALCOMM × ARDUINO Physical AI Pavilion",
      partner: "Qualcomm & Arduino",
      highlights: [
        "Live Arduino-based robotic & sensor demonstrations",
        "Qualcomm on-device NPU compute hardware benchmarks",
        "Edge AI physical interaction & low-power telemetry",
        "Hands-on embedded silicon testing stations"
      ],
      description: "Experience physical computing firsthand: explore how microcontrollers and neural processors merge to create responsive real-world machines.",
    },
    {
      title: "SPACE CLUB OF INDIA Exhibition",
      partner: "Space Club of India",
      highlights: [
        "Space technology, rocketry, and satellite hardware models",
        "Earth observation and orbital data telemetry showcases",
        "Space education, student research & entrepreneurship",
        "Pathways into India's commercial & defense space sector"
      ],
      description: "Founded by Lt Gen PJS Pannu, this interactive pavilion showcases India's rapidly expanding commercial and scientific space frontier.",
    },
  ],
  tickets: [
    {
      id: "cadet-pass",
      name: "CADET PASS",
      price: "₹849",
      numericPrice: 849,
      badge: "Student Exclusive",
      audience: "Exclusively for currently enrolled college & university students",
      perks: [
        "Full day access to all main stage sessions & keynotes",
        "Workshop access across Hall 1 & Hall 2 (subject to availability)",
        "Complimentary luxury lunch & all-day refreshments at Essentia",
        "Exclusive DevFest Indore 2026 collector's goodies & kit",
        "Access to Community Lounge & Expert Lounge",
        "Full-day access to QUALCOMM × ARDUINO & Space exhibits",
        "5% instant discount with authorized campus ambassador codes"
      ],
      discountInfo: "Requires valid College/University Student ID at check-in. KonfHub ticketing.",
      ticketUrl: "https://devfest.indore.community/tickets",
    },
    {
      id: "commander-pass",
      name: "COMMANDER PASS",
      price: "₹849",
      numericPrice: 849,
      badge: "Professional Tier",
      audience: "For working software engineers, founders, and industry professionals",
      perks: [
        "Full day access to all technical sessions & keynote addresses",
        "Workshop access in Hall 1 & Hall 2 (first-come, first-served)",
        "Buffet lunch & networking refreshments at Essentia Luxury Hotel",
        "Official DevFest Indore 2026 conference swag & materials",
        "Access to Community Lounge, Expert Lounge & VIP networking",
        "Full access to the interactive Exhibit Lounge",
        "5% ambassador discount OR 15% bulk discount for 6–10 tickets"
      ],
      discountInfo: "Government-issued photo ID required at check-in. Discounts cannot be combined.",
      ticketUrl: "https://devfest.indore.community/tickets",
    },
  ],
  partners: [
    {
      name: "Indore Institute of Science and Technology (IIST)",
      tier: "Platinum Partner",
      role: "Academic Engineering Partner",
      description: "Premier engineering institution in Indore; hosted the official Pre-DevFest campus workshop in October 2026.",
    },
    {
      name: "Space Club of India",
      tier: "Space Collaborator",
      role: "Space Technology Partner",
      description: "Founded by Lt Gen PJS Pannu to accelerate space education, scientific exploration, research, and aerospace entrepreneurship in India.",
    },
    {
      name: "Qualcomm",
      tier: "Physical AI Partner",
      role: "Hardware & Edge AI Partner",
      description: "Global semiconductor leader powering edge computing, on-device intelligence, and the Qualcomm AI Stack.",
    },
  ],
  faqs: [
    {
      question: "What is the date, time, and venue for DevFest Indore 2026?",
      answer: "DevFest Indore 2026 takes place on Saturday, 28 November 2026 at the Essentia Luxury Hotel, Indore (Near World Cup Square, Pipliyahana, Ring Road). Check-in opens at 9:00 AM IST, with main conference sessions running from 9:30 AM to 4:30 PM IST.",
    },
    {
      question: "Who is organizing DevFest Indore?",
      answer: "The conference is organized by Google Developer Groups (GDG) Indore. The community has been hosting DevFest and technology gatherings in Indore since 2014.",
    },
    {
      question: "What are the ticket prices and what do they include?",
      answer: "Both Cadet Pass (for college/university students) and Commander Pass (for working professionals) are priced at ₹849. Tickets include access to all main stage sessions, workshop halls (subject to seating capacity), luxury hotel lunch, refreshments, official DevFest goodies, and entry to the Exhibit Lounge.",
    },
    {
      question: "Does a conference ticket guarantee a reserved seat in workshops?",
      answer: "No. Workshop seating in Hall 1 and Hall 2 is strictly limited and available on a first-come, first-served basis. Attendees are encouraged to arrive early and bring their laptop and charger.",
    },
    {
      question: "What documents must I bring to the event check-in?",
      answer: "All participants must present their digital QR ticket and an original government-issued photo ID matching their registration name. Cadet Pass holders must also present their original, valid college or university student ID.",
    },
    {
      question: "Are tickets refundable or transferable?",
      answer: "No. In accordance with event ticketing policies, all ticket sales are final, non-refundable, and non-transferable.",
    },
    {
      question: "What is the central theme of DevFest Indore 2026?",
      answer: "The central theme is 'New Frontiers: From Orbit to Insight', spanning Space Systems, Autonomous AI Agents, Physical AI & Robotics, and Scalable Cloud Systems.",
    },
  ],
  officialLinks: {
    website: "https://devfest.indore.community/",
    agenda: "https://devfest.indore.community/agenda",
    speakers: "https://devfest.indore.community/agenda/speakers",
    tickets: "https://devfest.indore.community/tickets",
    faq: "https://devfest.indore.community/faq",
    venue: "https://devfest.indore.community/venue",
    communityEvent: "https://gdg.community.dev/events/details/google-gdg-indore-presents-devfest-indore-2026/cohost-gdg-indore/",
    contactEmail: "gdgindore@gmail.com",
  },
};
