export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  client: string;
  year: number;
  services: string[];
  fullDescription?: string;
  results?: string[];
  images?: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'alpine-adventures',
    title: 'Alpine Adventures',
    category: 'web',
    thumbnail: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shortDescription: 'An e-commerce website for a premium outdoor adventure company',
    client: 'Alpine Adventures LLC',
    year: 2024,
    services: ['Web Development', 'E-commerce', 'UX Design'],
    fullDescription: 'Alpine Adventures needed a complete e-commerce solution to showcase their premium outdoor trips and allow customers to book and pay online. We created a custom Shopify-based solution with integrated booking capabilities and a unique visual identity.',
    results: [
      'Increased online bookings by 78%',
      'Reduced customer support inquiries by 42%',
      '3.2x ROI within the first year'
    ],
    images: [
      'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1497585/pexels-photo-1497585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'lucid-finance',
    title: 'Lucid Finance',
    category: 'web',
    thumbnail: 'https://images.pexels.com/photos/7821506/pexels-photo-7821506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shortDescription: 'A modern fintech platform with advanced user dashboard',
    client: 'Lucid Financial Technologies',
    year: 2023,
    services: ['Web Application', 'Dashboard Design', 'Frontend Development'],
    fullDescription: 'Lucid Finance required a sophisticated, secure web application that would allow their clients to manage investments, track performance, and communicate with advisors. We delivered a React-based solution with real-time data visualization and intuitive UX.',
    results: [
      'Reduced dashboard loading time by 65%',
      'Increased user engagement by 47%',
      'Secured over $2M in additional investment'
    ],
    images: [
      'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5912394/pexels-photo-5912394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'urban-harvest',
    title: 'Urban Harvest',
    category: 'design',
    thumbnail: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shortDescription: 'Brand identity for an urban farming startup',
    client: 'Urban Harvest Collective',
    year: 2023,
    services: ['Branding', 'Logo Design', 'Packaging Design'],
    fullDescription: 'Urban Harvest needed a complete brand identity that would resonate with eco-conscious consumers and stand out in the competitive organic produce market. We created a modern, sustainable brand identity system with versatile applications across digital and physical touchpoints.',
    results: [
      'Brand recognition increased by 35% in target markets',
      'Successful product launch in 12 retail locations',
      'Featured in 3 major design publications'
    ],
    images: [
      'https://images.pexels.com/photos/5273044/pexels-photo-5273044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5723506/pexels-photo-5723506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'nova-therapeutics',
    title: 'Nova Therapeutics',
    category: 'web',
    thumbnail: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shortDescription: 'Corporate website for pharmaceutical research company',
    client: 'Nova Therapeutics Inc.',
    year: 2024,
    services: ['Web Development', 'Content Strategy', 'SEO'],
    fullDescription: 'Nova Therapeutics needed a modern corporate website that would communicate their innovative research, attract investment, and recruit top talent. We created a sophisticated digital presence with secure investor relations portals and dynamic content management.',
    results: [
      'Organic search traffic increased by 124%',
      'Average time on site improved by 2.7 minutes',
      'Job application submissions up 86%'
    ],
    images: [
      'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Fitness',
    category: 'branding',
    thumbnail: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shortDescription: 'Complete rebrand for a premium fitness chain',
    client: 'Pulse Fitness Group',
    year: 2023,
    services: ['Brand Strategy', 'Visual Identity', 'Environmental Design'],
    fullDescription: 'Pulse Fitness underwent a complete rebrand to position themselves as a premium fitness destination. We developed a comprehensive brand identity system, from logo to environmental design, creating a cohesive experience across their 15 locations.',
    results: [
      'Membership sign-ups increased 42% post-rebrand',
      'Social media engagement grew by 215%',
      'Successfully expanded to 5 new locations'
    ],
    images: [
      'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'echo-audio',
    title: 'Echo Audio',
    category: 'design',
    thumbnail: 'https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shortDescription: 'Product design and packaging for premium headphones',
    client: 'Echo Audio Systems',
    year: 2024,
    services: ['Product Design', 'Packaging Design', 'Brand Identity'],
    fullDescription: 'Echo Audio needed a distinctive visual identity for their new line of premium headphones. We created a minimalist, elegant design language that extended from the product itself to packaging and digital presence, positioning them in the luxury audio market.',
    results: [
      'Product featured in major tech publications',
      'First production run sold out in 72 hours',
      'Design awards from Red Dot and iF Design'
    ],
    images: [
      'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3761020/pexels-photo-3761020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'verdant-gardens',
    title: 'Verdant Gardens',
    category: 'web',
    thumbnail: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shortDescription: 'E-commerce site for premium landscaping services',
    client: 'Verdant Gardens LLC',
    year: 2023,
    services: ['Web Development', 'E-commerce', 'SEO'],
    fullDescription: 'Verdant Gardens needed an e-commerce platform to sell their premium plants and landscaping services. We delivered a visually stunning website with sophisticated filtering, scheduling integration, and seamless checkout experience.',
    results: [
      'Conversion rate increased by 3.2%',
      'Average order value up by 47%',
      'Reduced cart abandonment by 28%'
    ],
    images: [
      'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4505167/pexels-photo-4505167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4505172/pexels-photo-4505172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'horizon-hospitality',
    title: 'Horizon Hospitality',
    category: 'branding',
    thumbnail: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shortDescription: 'Brand identity for luxury hotel chain',
    client: 'Horizon Hospitality Group',
    year: 2024,
    services: ['Brand Strategy', 'Identity Design', 'Marketing Materials'],
    fullDescription: 'Horizon Hospitality Group required a sophisticated brand identity to unify their portfolio of luxury boutique hotels. We created a flexible, elegant visual system that maintained the unique character of each property while establishing a cohesive parent brand.',
    results: [
      'Brand recognition improved by 65% in target demographics',
      'Cross-property bookings increased by 38%',
      'Successfully launched two new properties under unified brand'
    ],
    images: [
      'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7546289/pexels-photo-7546289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4915566/pexels-photo-4915566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
];