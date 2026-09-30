import type { ServiceItem, ProjectItem, TeamMember, TestimonialItem, ProcessStep, StatItem } from '../types';

export const statsData: StatItem[] = [
  {
    number: '50+',
    label: 'Projects Completed',
    iconName: 'ShieldCheck',
  },
  {
    number: '25+',
    label: 'Happy Clients',
    iconName: 'Users',
  },
  {
    number: '10+',
    label: 'Industries Served',
    iconName: 'Layers',
  },
  {
    number: '10+',
    label: 'Expert Team',
    iconName: 'Briefcase',
  },
  {
    number: '99%',
    label: 'Client Satisfaction',
    iconName: 'Star',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Web and mobile experiences engineered to connect people with the services and information they need.',
    iconName: 'Globe',
    accentColor: 'from-blue-600/20 to-blue-600/5 text-[#2563EB] border-[#2563EB]/20',
    badge: 'Popular',
    features: ['Custom Web Applications', 'Mobile-friendly Digital Products', 'Progressive Web Apps (PWA)', 'SEO & High-Performance Core Web Vitals'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Custom software and cloud platforms that connect workflows, data, and services into dependable systems.',
    iconName: 'Code',
    accentColor: 'from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/20',
    badge: 'Enterprise',
    features: ['Enterprise ERP & CRM', 'Cloud Systems Architecture', 'Microservices & API Gateways', 'Legacy System Modernization'],
    technologies: ['Go', 'Python', 'Docker', 'Kubernetes', 'AWS', 'GraphQL'],
  },
  {
    id: 'iot-solutions',
    title: 'IoT & Embedded Systems',
    description: 'We connect sensors, embedded devices, and digital platforms for monitoring, automation, and real-time control.',
    iconName: 'Wifi',
    accentColor: 'from-sky-500/20 to-sky-500/5 text-sky-400 border-sky-500/20',
    badge: 'Connected Technology',
    features: ['Real-time Telemetry & Sensors', 'Smart Irrigation & Agritech', 'Industrial Asset Tracking', 'Firmware & Edge Computing'],
    technologies: ['ESP32', 'MQTT', 'Raspberry Pi', 'InfluxDB', 'Grafana', 'WebSockets'],
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Data',
    description: 'AI, analytics, and automation that turn data into useful insight and practical action.',
    iconName: 'Cpu',
    accentColor: 'from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/20',
    badge: 'Next-Gen',
    features: ['Custom LLMs & Intelligent Agents', 'Computer Vision & OCR', 'Predictive Data Analytics', 'RAG Knowledge Bases'],
    technologies: ['PyTorch', 'TensorFlow', 'OpenAI', 'LangChain', 'Hugging Face', 'FastAPI'],
  },
  {
    id: 'design-3d',
    title: 'Creative Technology',
    description: 'Emerging technologies, thoughtful digital experiences, 3D, and interaction design.',
    iconName: 'Box',
    accentColor: 'from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/20',
    badge: 'Creative',
    features: ['3D Web Graphics & Three.js', 'Brand Identity Systems', 'UI/UX Design & Prototyping', 'Product Visualization'],
    technologies: ['Blender', 'Figma', 'Spline', 'Three.js', 'Cinema 4D'],
  },
  {
    id: 'security-systems',
    title: 'Security & Systems',
    description: 'Secure, resilient infrastructure and systems designed to protect data and keep essential services dependable.',
    iconName: 'ShieldCheck',
    accentColor: 'from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/20',
    badge: 'Secure by Design',
    features: ['Security Reviews & Threat Modeling', 'Infrastructure Hardening', 'Identity & Access Controls', 'Monitoring, Resilience & Recovery'],
    technologies: ['Cloud Security', 'Linux', 'IAM', 'Encryption', 'Monitoring', 'Incident Response'],
  },
  {
    id: 'video-creative',
    title: 'Video & Creative',
    description: 'High-impact videos and creative content that tell your story perfectly.',
    iconName: 'Film',
    accentColor: 'from-violet-500/20 to-violet-500/5 text-violet-400 border-violet-500/20',
    badge: 'Media',
    features: ['Motion Graphics & VFX', 'Product Explainer Videos', 'Commercial Branding', 'Interactive Storytelling'],
    technologies: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Audition'],
  },
  {
    id: 'merchandise-branding',
    title: 'Merchandise & Corporate Branding',
    description: 'Custom corporate merchandise, premium apparel, promotional swag kits, and executive branded gifts.',
    iconName: 'Shirt',
    accentColor: 'from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/20',
    badge: 'Additional Service',
    features: [
      'Custom Corporate Apparel (Hoodies, Polos, Tees, Caps)',
      'High-Precision Embroidery & Direct-to-Film (DTF) Printing',
      'Event Swag Kits & Welcome Onboarding Packages',
      'Branded Drinkware, Tech Accessories & Executive Gifting',
    ],
    technologies: ['Screen Printing', 'Precision Embroidery', 'DTF Printing', 'Laser Engraving', 'Sublimation', 'Vector Production'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'kitui-school-website',
    title: 'Kitui School Website',
    category: 'Web Development',
    tag: 'School Website',
    image: '/images/project-school.png',
    description: 'A website developed for Kitui School to present the school and its information online.',
    link: '#',
  },
  {
    id: 'hotflame-biogas-narok',
    title: 'Hotflame Biogas Narok',
    category: 'Business Website',
    tag: 'Business Website',
    image: '/images/project-irrigation.png',
    description: 'A business website for Hotflame Biogas Narok.',
    link: '#',
  },
  {
    id: 'captain-glassmart-hardware',
    title: 'Captain Glassmart & Hardware',
    category: 'Business Website',
    tag: 'Business Website',
    image: '/images/project-merchandise.png',
    description: 'A business website for Captain Glassmart & Hardware.',
    link: '#',
  },
  {
    id: 'kenyan-footwear-website',
    title: 'Kenyan Footwear Website',
    category: 'E-Commerce',
    tag: 'E-Commerce / Business Website',
    image: '/images/project-ecommerce.png',
    description: 'An e-commerce and business web presence for a Kenyan footwear brand.',
    link: '#',
  },
];

export const whyChooseUsData = [
  {
    icon: 'Sparkles',
    title: 'Innovative Solutions',
    description: 'We use the latest technologies to build future-ready products.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Quality & Reliability',
    description: 'We deliver tested solutions designed to scale and last.',
  },
  {
    icon: 'Headphones',
    title: 'Client-Centered Approach',
    description: 'We listen, understand and deliver exactly what you need.',
  },
  {
    icon: 'TrendingUp',
    title: 'Scalable & Future-Ready',
    description: 'Our solutions grow with your business and adapt to change.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We understand your ideas, goals and challenges.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'We define the roadmap and craft the perfect strategy.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'We design intuitive and engaging experiences.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'We build powerful and scalable solutions.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'We test rigorously to ensure quality.',
  },
  {
    step: '06',
    title: 'Deployment',
    description: 'We deploy seamlessly and make it live.',
  },
  {
    step: '07',
    title: 'Support',
    description: 'We provide ongoing support and maintenance.',
  },
];

export const teamData: TeamMember[] = [
  {
    id: 'faith-mutua',
    name: 'Faith Mutua',
    role: 'CEO',
    image: '/images/team-1.png',
    bio: 'Visionary tech leader with over 8 years steering high-impact digital ventures and engineering ecosystems across Africa.',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'mathias-kieti',
    name: 'Mathias Kieti',
    role: 'COO',
    image: '/images/team-2.png',
    bio: 'Operational strategist orchestrating product delivery, business expansion, and cross-functional technology initiatives.',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'ronald-mutua',
    name: 'Ronald Mutua',
    role: 'CTO',
    image: '/images/team-3.png',
    bio: 'Full-stack systems architect leading distributed infrastructure, cloud platforms, and engineering best practices.',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'james-ngandu',
    name: 'James Ngandu',
    role: 'Cybersecurity Expert',
    image: '/images/team-4.png',
    bio: 'Security researcher specializing in threat modeling, infrastructure hardening, compliance, and penetration testing.',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'james@starvoniq.com',
    },
  },
  {
    id: 'joseph-seko',
    name: 'Joseph Seko',
    role: '3D Expert',
    image: '/images/team-5.png',
    bio: 'Master 3D visual artist and motion designer sculpting photorealistic environments, interactive web assets, and CGI.',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'mary-wanjiku',
    author: 'Mary Wanjiku',
    title: 'CEO',
    company: 'GreenFarm Solutions',
    quote: 'StarVoniq transformed our ideas into a powerful platform. Their professionalism, creativity and attention to detail are unmatched.',
    rating: 5,
  },
  {
    id: 'john-maina',
    author: 'John Maina',
    title: 'Founder',
    company: 'BuildFast Ltd',
    quote: 'The team is extremely reliable and their solutions have helped us automate and scale our operations efficiently.',
    rating: 5,
  },
  {
    id: 'sarah-njeri',
    author: 'Sarah Njeri',
    title: 'Marketing Director',
    company: 'Qare Brands',
    quote: 'From design to deployment, the experience was smooth and the results exceeded our expectations.',
    rating: 5,
  },
];

export const blogPostsData = [
  {
    id: '1',
    title: 'How Generative AI is Reshaping Enterprise Workflows in 2026',
    excerpt: 'Explore how modern businesses are moving from basic prompt engineering to autonomous, multi-agent AI ecosystems.',
    category: 'Artificial Intelligence',
    author: 'Ronald Mutua',
    date: 'Sep 24, 2026',
    readTime: '6 min read',
    image: '/images/project-ai-bot.png',
  },
  {
    id: '2',
    title: 'Designing Ultra-Low Latency IoT Architectures for Agritech',
    excerpt: 'Field insights on deploying solar-powered LoRaWAN mesh networks for automated irrigation in arid climates.',
    category: 'IoT & Hardware',
    author: 'Mathias Kieti',
    date: 'Sep 18, 2026',
    readTime: '8 min read',
    image: '/images/project-irrigation.png',
  },
  {
    id: '3',
    title: 'The Shift to Edge Computing in Modern Web Applications',
    excerpt: 'Why distributed edge functions and global caching are critical for modern e-commerce conversion rates.',
    category: 'Web Architecture',
    author: 'Faith Mutua',
    date: 'Sep 10, 2026',
    readTime: '5 min read',
    image: '/images/project-school.png',
  },
];

export const faqsData = [
  {
    q: 'How long does a typical software or web development project take?',
    a: 'Timelines vary depending on complexity: standard web applications typically launch within 3 to 6 weeks, while large-scale enterprise systems or custom AI/IoT platforms take 8 to 16 weeks with agile sprint deliveries.',
  },
  {
    q: 'Do you offer ongoing maintenance and post-launch support?',
    a: 'Yes, absolutely. We provide tailored SLA packages covering 24/7 uptime monitoring, security patching, performance optimization, and continuous feature updates.',
  },
  {
    q: 'Where is StarVoniq located?',
    a: 'Our headquarters is in Nairobi, Kenya. We work with organizations across East Africa and internationally to design and engineer connected technology, from digital platforms and data systems to IoT and AI.',
  },
  {
    q: 'Do you build IoT and embedded systems?',
    a: 'Yes. We can bring together sensors, embedded devices, connectivity, cloud or web platforms, and data workflows for monitoring, automation, and control. The design depends on the real-world problem and the environment where the system will operate.',
  },
  {
    q: 'Do you help make technology systems more secure and resilient?',
    a: 'Yes. Security and resilience can be considered throughout a project, including architecture reviews, threat modeling, infrastructure hardening, access controls, monitoring, and recovery planning.',
  },
  {
    q: 'What is your project onboarding process?',
    a: 'We begin with a thorough discovery consultation to understand your business objectives, followed by technical architecture planning, interactive wireframing, sprint development, rigorous testing, and seamless deployment.',
  },
];
