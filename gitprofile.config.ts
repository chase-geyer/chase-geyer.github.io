// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'chase-geyer', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/', // Base path for your GitHub Pages deployment. (Optional)
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['chase-geyer/odin-recipes', 'chase-geyer/rice-bikes-app'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'OwlConnect',
          description:
            'Real-time forum platform built for campus social interaction with concurrent read/write operations using Go backend and HTML frontend.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/chase-geyer/owlconnect',
        },
        {
          title: 'Rice Bikes App',
          description:
            'Service management platform with role-based security, administrative interfaces, and transaction systems built with React, PostgreSQL, and Docker.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/chase-geyer/rice-bikes',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Chase Geyer',
    imageURL: '',
  },
  social: {
    linkedin: 'chase-j-geyer',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://www.chasegeyer.com',
    phone: '+19495581606',
    email: 'jobswithchase@gmail.com',
  },
  resume: {
    fileUrl: '', // Add your actual resume file URL if hosted online
  },
  skills: [
    'R',
    'Julia',
    'Python',
    'Java',
    'C',
    'JavaScript',
    'HTML/CSS',
    'SQL',
    'TypeScript',
    'Go',
    'JAX',
    'PyTorch',
    'React',
    'Node.js',
    'MongoDB',
    'Firebase',
    'Apache Spark',
    'Angular',
    'PostgreSQL',
    'Docker',
    'Podman',
    'Kubernetes',
    'Spinnaker',
    'Databricks',
    'Snowflake',
    'Git',
    'gRPC',
    'CockroachDB',
    'Flax',
  ],
  experiences: [
    {
      company: 'DoorDash',
      position: 'Software Engineering Intern',
      from: 'May 2025',
      to: 'Present',
      companyLink: 'https://www.doordash.com',
    },
    {
      company: 'Microsoft',
      position: 'TNT Software Engineering Intern',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: 'https://www.microsoft.com',
    },
    {
      company: 'Rice Operations Research Department',
      position: 'Machine Learning Research Assistant',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https://www.rice.edu',
    },
  ],
  certifications: [
    // Add certifications if you have any
  ],
  educations: [
    {
      institution: 'Rice University',
      degree: 'B.S. Computer Science & B.S. Operations Research',
      from: '2022',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Convex Optimization for Neural Network Energy Efficiency',
      conferenceName: '',
      journalName: 'Research Paper (In Progress)',
      authors: 'Chase Geyer, Tu Nguyen, Google Research Team',
      link: '',
      description:
        'Co-authored research utilizing convex optimization principles to decrease neural network energy consumption and enhance result accuracy. Implemented techniques with Flax and JAX achieving 20% reduction in memory consumption.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
