export const profile = {
  name: 'ZAKY HANIF TESTANDY',
  role: 'Fullstack Developer',
  tagline: 'Building Scalable Web Apps with Vue.js & RESTful APIs',
  location: 'Bekasi',
  phone: '+62 812 8102 6497',
  email: 'zakyhanif12@gmail.com',
  links: {
    github: 'https://github.com/jakihanif23',
    linkedin: 'https://www.linkedin.com/in/zaky-hanif-testandy/'
  },
  summary: "I'm a Fullstack Engineer with 3+ years of experience building scalable web applications using modern JavaScript frameworks & backend services. Currently at PT. Inovasi Dinamika Solusi, I design and deliver enterprise-grade systems — from e-commerce platforms to real-time attendance systems serving 5,000+ offices."
}

export const experiences = [
  {
    company: 'PT. INOVASI DINAMIKA SOLUSI',
    location: 'Bandung, Indonesia',
    role: 'Fullstack Developer',
    period: 'Maret 2023 - Present',
    details: [
      'Built and shipped the SAKTI attendance system using Vue.js, Node.js & Python (DeepFace), serving 5,000+ offices with real-time face recognition & geolocation tracking',
      'Designed & developed the malaria.kemkes.go.id portal using Drupal 9 with custom modules; created UI/UX mockups in Figma',
      'Developed Rabbani e-commerce platform (Web & Mobile) using Vue.js and Flutter, integrating RESTful APIs for product catalog and checkout flow',
      'Built tekMIRA Uji Profisiensi — a lab proficiency testing platform using Laravel + Vue.js with Redis caching for improved performance',
      'Developed KONI Jabar athlete management system and Hattrick website using CodeIgniter & Laravel for 30+ sports federations',
      'Led development of HRIS Next Generation mobile app using Flutter with Clean Architecture, covering attendance, payroll, leave management & performance tracking',
      'Developed FOLUR FIMS Dashboard — an enterprise-grade Financial Information Management System for UNDP using Laravel 12 + Vue 3 with 14 core business modules'
    ]
  },
  {
    company: 'PT PUSKOMEDIA INDONESIA KREATIF (INTERNSHIP)',
    location: 'Purwokerto, Indonesia',
    role: 'Android Engineer (Flutter)',
    period: 'July 2020 – October 2020',
    details: [
      'Developed "Deliveri" — a delivery service app using Flutter & REST API, implementing Figma designs into production-ready UI',
      'Built "Panda Android" app using Java with RESTful API integration',
      'Debugged and shipped production fixes, improving app stability and user experience'
    ]
  }
]

export const education = [
  {
    institution: 'INSTITUT TEKNOLOGI TELKOM PURWOKERTO',
    period: '2017 - 2022',
    degree: 'Bachelor of Informatics Engineering',
    gpa: '3.34',
    details: [
      'Database Modeling Practicum Assistant using MySQL (October 2020 – February 2021)',
      'Database Modeling Practicum Assistant using MySQL (October 2019 – February 2020)',
      'Staff of Person In Charge Informatics Technology Team at INVFEST 3.0 National Competition'
    ]
  },
  {
    institution: 'CODE ACADEMY (CODE.ID) (Bootcamp)',
    period: 'July 2022 – October 2022',
    degree: 'Flutter Developer',
    details: [
      'Learning Backend from beginner using Node.JS',
      'Creating simple Web Application using Node.JS and React',
      'Learning using database PostgreSQL',
      'Creating final project named "Bali Journey App" using Flutter and Node.JS'
    ]
  }
]

export const skills = [
  'Flutter', 'Dart', 'Kotlin', 'Node JS', 'Vue.js', 'SCSS',
  'Code Igniter', 'CSS', 'PostgreSQL', 'Firebase', 'Cloud Firestore', 'MySQL',
  'Figma', 'Laravel', 'Drupal', 'React', 'Rest API', 'Docker', 'Redis'
]

export interface Project {
  slug: string
  name: string
  role: string
  impact: string
  description: string
  screenshot: string
  liveUrl: string
  repoUrl: string
  techStack: string[]
  libraries?: string[]
  details: string[]
  keyAchievements?: string[]
}

export const projects: Project[] = [
  {
    slug: 'folur-fims',
    name: 'FOLUR FIMS Dashboard',
    role: 'Fullstack Developer',
    impact: 'Enterprise-grade Financial Information Management System with 14 core business modules for UNDP',
    description: 'Developed a modular, enterprise-grade Financial Information Management System (FIMS) for the FOLUR (Food, Land Use, and Restoration) project to manage the full financial lifecycle — budgeting, fund request, expenditure, accounting, approval workflow, and financial reporting. The system was built as a scalable fullstack web application with RESTful API architecture, real-time dashboard monitoring, and secure multi-level approval mechanisms.',
    screenshot: '/projects/folur-fims.png',
    liveUrl: '',
    repoUrl: '',
    techStack: ['Laravel 12', 'PHP 8', 'Vue 3', 'Pinia', 'PostgreSQL 17', 'Redis', 'Docker', 'JWT', 'ApexCharts', 'D3.js'],
    libraries: ['Spatie Permission (RBAC)', 'Laravel Octane', 'Horizon', 'Pusher', 'Firebase'],
    details: [
      'Designed and implemented a modular architecture using Laravel Modules to separate business domains independently',
      'Developed RESTful API (versioned) with JWT authentication, encrypted responses, and RBAC for secure financial data handling',
      'Built interactive financial dashboards with real-time monitoring using Vue 3, ApexCharts, and D3.js',
      'Implemented multi-level approval workflow for financial transactions',
      'Developed comprehensive financial reporting (Financial Report, Cash Book, Bank Book, General Ledger, Bank Reconciliation) with PDF export',
      'Integrated multi-currency support with exchange rate management',
      'Implemented audit trail system including activity logging and authentication history',
      'Built Progressive Web App (PWA) support for mobile accessibility',
      'Managed CI/CD pipeline, Docker containerization, and Redis-based queue system'
    ],
    keyAchievements: [
      'Successfully delivered a fully integrated system with 14 core business modules covering the complete financial lifecycle',
      'Implemented high-performance architecture using Laravel Octane, Redis caching, and Horizon queue management',
      'Delivered 7 financial report types with export functionality',
      'Achieved scalable and maintainable system architecture aligned with enterprise financial standards'
    ]
  },
  {
    slug: 'sakti',
    name: 'Sistem Absensi & Laporan Terintegrasi (SAKTI)',
    role: 'Frontend Developer',
    impact: 'Scalable attendance system for 5,000+ offices with real-time face recognition & geolocation tracking',
    description: 'Acted as a Frontend Developer in the development of an integrated attendance and reporting system managing employees from more than 5,000 unit offices. Responsible for designing and implementing the website\'s frontend UI using Vue.js, integrating RESTful APIs, face recognition using Python (DeepFace), and integration with Odoo, with a focus on system performance and scalability.',
    screenshot: '/projects/sakti.png',
    liveUrl: '',
    repoUrl: '',
    techStack: ['Vue.js', 'Node.js', 'Pinia', 'Vite', 'Python (DeepFace)', 'Redis', 'Odoo', 'JWT'],
    libraries: ['Axios', 'Sweet Alert', 'Sentry', 'Leaflet', 'Pusher', 'UIKit', 'Quill', 'Tabler Icons', 'Apex Chart', 'Intlify'],
    details: [
      'Developed APIs for real-time attendance features with geolocation tracking and face recognition, improving employee attendance accuracy by up to 95%',
      'Implemented a caching system using Redis, accelerating response time by up to 70%',
      'Integrated RESTful APIs into the frontend website using Vue.js',
      'Implemented API security using JWT authentication, role-based access control, request hashing, encrypted responses, and rate limiting',
      'Conducted code reviews and provided mentoring for junior development team members'
    ]
  },
  {
    slug: 'hris-next-gen',
    name: 'HRIS Next Generation',
    role: 'Mobile (Flutter) Developer',
    impact: 'Comprehensive HRIS mobile app with offline-first architecture covering attendance, payroll, leave & performance',
    description: 'Led the development of a comprehensive Human Resource Information System (HRIS) mobile application using Flutter, covering attendance, payroll, leave management, performance tracking, and approval workflows. Designed and implemented the application architecture using Clean Architecture principles combined with a modular pattern (View, Controller, Repository, Data Source) to ensure scalability, maintainability, and clear separation of concerns.',
    screenshot: '/projects/hris.png',
    liveUrl: '',
    repoUrl: '',
    techStack: ['Flutter', 'Dart', 'GetX', 'REST API', 'SQLite', 'JWT', 'GPS', 'PDF Generation'],
    details: [
      'Developed an offline-first architecture using local database storage and background synchronization service to ensure stable operation during network interruptions',
      'Implemented secure, location-validated and photo-verified real-time attendance using GPS and camera integration',
      'Built a secure networking layer with JWT-based authentication, automatic token handling, centralized error management, and reliable API communication',
      'Designed dynamic dashboards and visual analytics to display employee statistics and performance insights',
      'Integrated PDF generation and printing features for payslips and official HR documents directly within the application',
      'Maintained clean code standards and implemented automated testing for core business logic to ensure reliability and long-term stability'
    ]
  },
  {
    slug: 'tekmira',
    name: 'tekMIRA – Uji Profisiensi',
    role: 'Fullstack Developer',
    impact: 'Lab proficiency testing platform evaluating performance of 100+ participant laboratories nationwide',
    description: 'This proficiency testing program aims to evaluate the performance of participant laboratories in testing. Proficiency testing is an important activity for testing laboratories to demonstrate their performance and to ensure that their analytical results are reliable. Proficiency testing is also a mandatory requirement for analytical laboratories according to ISO 17025 standards, which state that when implementing a quality system, analytical laboratories must also prove the capability of their measurements.',
    screenshot: '/projects/tekmira.png',
    liveUrl: '',
    repoUrl: '',
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'Nginx', 'Redis', 'Rest API', 'UIKit', 'CSS', 'HTML5', 'Node.js'],
    details: [
      'Designing UI/UX Dashboard for the website',
      'Developing Frontend View for Integrating with the Backend',
      'Testing All Function in Frontend and Backend that match with the flow and fixing bugs or issues',
      'Developing Modules that used for Website'
    ]
  },
  {
    slug: 'rabbani',
    name: 'Rabbani E-Commerce',
    role: 'Frontend Developer',
    impact: 'Full e-commerce platform for Indonesia\'s leading Islamic fashion brand — Web & Mobile',
    description: 'Contributed to the development of a web-based e-commerce platform for Rabbani, specializing in Islamic fashion products. The system was designed to deliver a secure, responsive, and seamless shopping experience across desktop and mobile platforms.',
    screenshot: '/projects/rabbani.png',
    liveUrl: 'https://rabbani.id',
    repoUrl: '',
    techStack: ['Vue.js', 'Node.js', 'REST API', 'CSS', 'Flutter'],
    details: [
      'Developed responsive and dynamic user interfaces using Vue.js for both desktop and mobile web views',
      'Integrated frontend pages with RESTful APIs for product management, cart system, checkout, and transaction flow',
      'Collaborated with backend and mobile teams to ensure feature consistency and API alignment',
      'Assisted mobile development implementation using Flutter by ensuring UI and functional parity with web platform',
      'Identified and resolved functional and UI issues to ensure smooth user journey and checkout process',
      'Improved page performance and user experience through structured component design and state management'
    ]
  },
  {
    slug: 'malaria-kemkes',
    name: 'Malaria Kemkes Portal',
    role: 'Fullstack Developer',
    impact: 'National health portal supporting UNDP\'s malaria elimination initiative across Indonesia',
    description: 'UNDP through the Health Governance Initiative (HEART) Program has contributed to supporting national efforts to address inequality in health. The program will develop innovative solutions and capacities through technical assistance, South to South collaboration, and partnerships for better and more sustainable health outcomes. One of the efforts is working closely with the Government of Indonesia and development partners to strengthen the effectiveness of the Global Fund for AIDS, Tuberculosis and Malaria (GFATM) Country Coordinating Mechanisms (CCM) in Indonesia.',
    screenshot: '/projects/malaria.png',
    liveUrl: 'https://malaria.kemkes.go.id',
    repoUrl: '',
    techStack: ['Drupal 9', 'PHP', 'CSS', 'HTML', 'Figma'],
    details: [
      'Developing Custom Module for the function as requested',
      'Designing Mockup and UI/UX using Figma',
      'Fixing Bugs or Issues'
    ]
  },
  {
    slug: 'koni-jabar',
    name: 'KONI Jabar Athlete Management',
    role: 'Fullstack Developer',
    impact: 'Sports management platform tracking athletes and achievements across 30+ federations in West Java',
    description: 'KONI Jabar Athlete Management project is an effort to develop and manage a platform that integrates athlete data, training programs, and sports achievements in West Java. Its goal is to become a comprehensive and easily accessible source of information for users seeking up-to-date data on athletes, coaching programs, and sports accomplishments in West Java.',
    screenshot: '/projects/koni.png',
    liveUrl: '',
    repoUrl: '',
    techStack: ['CodeIgniter', 'Laravel', 'MySQL', 'UIKit', 'Nginx'],
    details: [
      'Fixing issues or bugs when developing',
      'Re-design some view such as button function and view details'
    ]
  }
]

export const certifications = [
  'Junior Mobile Programmer (BNSP)',
  'Learn to Make Android Apps for Beginners (Dicoding)',
  'Getting Started Programming With Kotlin (Dicoding)',
  'Starting Programming With Dart (Dicoding)',
  'Flutter Developer Bootcamp (CODE.ID)'
]
