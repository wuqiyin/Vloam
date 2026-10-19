import type { Locale } from './config';

export interface ProductCardData {
  tag: string;
  badge: string;
  title: string;
  slogan: string;
  desc: string;
  features: { icon: string; title: string; desc: string }[];
  cta: string;
}

export interface SpecRow {
  product: string;
  category: string;
  platforms: string;
  engine: string;
  dataStorage: string;
  license: string;
}

export interface ReleaseItem {
  version: string;
  product: string;
  date: string;
  tag: string;
  highlights: string[];
}

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    products: string;
    specs: string;
    radar: string;
    notes: string;
    security: string;
    about: string;
    faq: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  categories: {
    developerTools: string;
    developerSubtitle: string;
    assessmentTools: string;
    assessmentSubtitle: string;
  };
  products: {
    db: ProductCardData;
    clip: ProductCardData;
    mermaid: ProductCardData;
    adhd: ProductCardData;
    bpd: ProductCardData;
  };
  specsSection: {
    label: string;
    title: string;
    subtitle: string;
    headers: {
      product: string;
      category: string;
      platforms: string;
      engine: string;
      dataStorage: string;
      license: string;
    };
    rows: SpecRow[];
  };
  radarSection: {
    label: string;
    title: string;
    subtitle: string;
    items: ReleaseItem[];
  };
  articlesSection: {
    label: string;
    title: string;
    subtitle: string;
    readMore: string;
  };
  securitySection: {
    label: string;
    title: string;
    subtitle: string;
    readWhitepaper: string;
    pillars: {
      title: string;
      desc: string;
      details: string[];
    }[];
  };
  values: {
    label: string;
    title: string;
    items: {
      speedTitle: string;
      speedDesc: string;
      privacyTitle: string;
      privacyDesc: string;
      kbdTitle: string;
      kbdDesc: string;
    };
  };
  faq: {
    label: string;
    title: string;
    items: { q: string; a: string }[];
  };
  aboutPage: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    missionTitle: string;
    missionP1: string;
    pillarsTitle: string;
  };
  securityPage: {
    title: string;
    subtitle: string;
    localFirstTitle: string;
    localFirstP1: string;
    credentialTitle: string;
    credentialP1: string;
    telemetryTitle: string;
    telemetryP1: string;
    healthTitle: string;
    healthP1: string;
    contactTitle: string;
    contactP1: string;
  };
  privacyPage: {
    title: string;
    subtitle: string;
    updatedDate: string;
    sections: {
      title: string;
      content: string;
      points?: string[];
    }[];
  };
  termsPage: {
    title: string;
    subtitle: string;
    updatedDate: string;
    sections: {
      title: string;
      content: string;
      points?: string[];
    }[];
  };
  productsPage: {
    title: string;
    subtitle: string;
    desktopSectionTitle: string;
    desktopSectionDesc: string;
    webSectionTitle: string;
    webSectionDesc: string;
    btnDownload: string;
    btnLaunch: string;
    integrityTitle: string;
    integrityDesc: string;
  };
  footer: {
    brandDesc: string;
    devTitle: string;
    healthTitle: string;
    trustTitle: string;
    rights: string;
    motto: string;
    privacy: string;
    terms: string;
    about: string;
    security: string;
    contact: string;
  };
}

const en: Translation = {
  meta: {
    title: 'Vloam — Focused Desktop Software & Useful Web Apps',
    description: 'Independent software studio building lightweight desktop tools (VloamDb, VloamClip) and clean web applications (Vloam Mermaid, ADHD Test, BPD Test).',
  },
  nav: {
    products: 'Software & Tools',
    specs: 'Specifications',
    radar: 'Release Radar',
    notes: 'Articles',
    security: 'Security & Privacy',
    about: 'About Studio',
    faq: 'FAQ',
  },
  hero: {
    badge: 'Vloam · Software & Web Projects',
    title: 'Focused Desktop Software & Useful Web Apps',
    subtitle: 'Simple, fast, and distraction-free digital tools. Native desktop utilities for everyday productivity, alongside clean web apps that work directly in your browser.',
  },
  categories: {
    developerTools: 'Native Desktop Software',
    developerSubtitle: 'Lightweight native utilities for macOS and Windows, designed for smooth workflow and low memory footprint.',
    assessmentTools: 'Web Applications & Online Tools',
    assessmentSubtitle: 'Fast in-browser tools and evidence-based self-assessments, ready to use with zero friction.',
  },
  products: {
    db: {
      tag: 'Database Client',
      badge: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'Fast, Focused MySQL Client for Developers',
      desc: 'A lightning-fast native MySQL GUI designed to eliminate bloat. Features production safety guards, environment color tags, instant fuzzy table search, and local-first privacy.',
      features: [
        { icon: '›', title: 'Instant Launch:', desc: 'Starts in under 0.5s with minimal memory. No Electron lag.' },
        { icon: '›', title: 'Production Guard:', desc: 'Color tags and read-only mode prevent accidental deletions.' },
        { icon: '›', title: 'Keyboard-First:', desc: 'Double Shift table search and Ctrl+F12 column navigation.' },
        { icon: '›', title: 'Secure Key Storage:', desc: 'Passwords protected natively by macOS Keychain and Windows DPAPI.' },
      ],
      cta: 'View VloamDb ↗',
    },
    clip: {
      tag: 'Clipboard Manager',
      badge: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Local-First Clipboard Manager with FIFO/LIFO Queue',
      desc: 'Distraction-free desktop clipboard utility. Copy multiple items in sequence and paste them automatically in order for fast form filling, code migration, and refactoring.',
      features: [
        { icon: '›', title: 'Paste Queue:', desc: 'Sequential multi-copy with FIFO/LIFO ordered paste.' },
        { icon: '›', title: 'Fuzzy Search:', desc: 'Sub-millisecond full-text history search.' },
        { icon: '›', title: 'Pinned Templates:', desc: 'Save recurring shell commands and SQL snippets.' },
        { icon: '›', title: 'Fast & Private:', desc: 'Lightweight on-device SQLite database with zero background clutter.' },
      ],
      cta: 'View VloamClip ↗',
    },
    mermaid: {
      tag: 'Visual Diagramming',
      badge: 'Web Utility',
      title: 'Vloam Mermaid',
      slogan: 'Live Interactive Mermaid Diagram Editor',
      desc: 'Streamlined in-browser Mermaid chart editor and visualizer. Convert markdown-like syntax into flowcharts, sequence diagrams, and architecture maps with instant SVG/PNG export.',
      features: [
        { icon: '›', title: 'Live Preview:', desc: 'Zero-latency split-pane rendering as you write syntax.' },
        { icon: '›', title: 'Instant Export:', desc: 'Export crystal-clear SVG, high-res PNG, or copy markdown.' },
        { icon: '›', title: 'Theme Switching:', desc: 'Clean dark/light theme presets for documentation.' },
        { icon: '›', title: 'Instant & In-Browser:', desc: 'Diagram syntax rendered in your active browser tab without upload delays.' },
      ],
      cta: 'Launch Editor ↗',
    },
    adhd: {
      tag: 'Psychological Screening',
      badge: 'Evidence-Based',
      title: 'ADHD Test',
      slogan: 'Adult ADHD Self-Assessment Screening Tool',
      desc: 'Scientifically validated self-assessment tool based on standardized clinical criteria. Evaluate attention, hyperactivity, and executive function tendencies with instant private scoring.',
      features: [
        { icon: '›', title: 'Clinical Grounding:', desc: 'Formulated following recognized ADHD symptom checklists.' },
        { icon: '›', title: 'Instant Report:', desc: 'Clear dimensional score breakdown and symptom insights.' },
        { icon: '›', title: 'Free & Anonymous:', desc: 'Completely private screening without required accounts or paywalls.' },
        { icon: '›', title: '10 Languages:', desc: 'Available in English, Chinese, Spanish, French, German, and more.' },
      ],
      cta: 'Launch Screener ↗',
    },
    bpd: {
      tag: 'Personality Assessment',
      badge: 'Evidence-Based',
      title: 'BPD Test',
      slogan: 'Borderline Personality Self-Evaluation Tool',
      desc: 'Evidence-based questionnaire designed to screen for patterns associated with borderline personality traits, emotional regulation, interpersonal dynamics, and self-image.',
      features: [
        { icon: '›', title: 'Standardized Scales:', desc: 'Groundwork based on established diagnostic criteria.' },
        { icon: '›', title: 'Multi-Factor Analysis:', desc: 'Evaluates emotional reactivity, stability, and relationships.' },
        { icon: '›', title: 'Private & Open:', desc: 'Open-access self-assessment with immediate results and clear guidance.' },
        { icon: '›', title: 'Actionable Guidance:', desc: 'Clear educational summaries and professional consultation tips.' },
      ],
      cta: 'Launch Screener ↗',
    },
  },
  specsSection: {
    label: 'Technical Specifications',
    title: 'Ecosystem Architecture Matrix',
    subtitle: 'Transparent technical parameters, platform support, and data privacy guarantees across all Vloam applications and web services.',
    headers: {
      product: 'Product',
      category: 'Category',
      platforms: 'Platforms',
      engine: 'Architecture Engine',
      dataStorage: 'Data Location',
      license: 'License Model',
    },
    rows: [
      {
        product: 'VloamDb',
        category: 'Database Client',
        platforms: 'macOS (Silicon/Intel), Windows x64',
        engine: 'Native Desktop (Go / WebView)',
        dataStorage: '100% Local (macOS Keychain / DPAPI)',
        license: '15-Day Full Trial · One-Time Lifetime License',
      },
      {
        product: 'VloamClip',
        category: 'Clipboard Manager',
        platforms: 'macOS (Silicon/Intel), Windows x64',
        engine: 'Native Desktop (Go / Native APIs)',
        dataStorage: '100% Local (Encrypted SQLite)',
        license: '15-Day Full Trial · One-Time Lifetime License',
      },
      {
        product: 'Vloam Mermaid',
        category: 'Diagram Editor',
        platforms: 'Modern Web Browsers',
        engine: 'Astro (SSG) + Client-Side Island',
        dataStorage: 'In-Memory (Browser Tab Only)',
        license: '100% Free Web Utility',
      },
      {
        product: 'ADHD Test',
        category: 'Clinical Screener',
        platforms: 'Modern Web Browsers (Mobile & Desktop)',
        engine: 'Client-Side JavaScript / Static',
        dataStorage: 'Browser Memory (No Backend Logging)',
        license: '100% Free Public Resource',
      },
      {
        product: 'BPD Test',
        category: 'Personality Screener',
        platforms: 'Modern Web Browsers (Mobile & Desktop)',
        engine: 'Client-Side JavaScript / Static',
        dataStorage: 'Browser Memory (No Backend Logging)',
        license: '100% Free Public Resource',
      },
    ],
  },
  radarSection: {
    label: 'Ecosystem Pulse',
    title: 'Recent Release Radar',
    subtitle: 'Actively maintained and developed. Track key milestones across the Vloam desktop applications and web services.',
    items: [
      {
        version: 'v3.3.4',
        product: 'VloamDb',
        date: 'October 2026',
        tag: 'Desktop App',
        highlights: [
          'Added production color-tagging system and strict read-only lock to prevent accidental table drops.',
          'Enhanced double-tap Shift fuzzy search to index schemas with 5,000+ tables instantly.',
          'Native arm64 and x86_64 binary optimizations reducing memory footprint below 38MB on idle.',
        ],
      },
      {
        version: 'v1.2.0',
        product: 'VloamClip',
        date: 'October 2026',
        tag: 'Desktop App',
        highlights: [
          'Introduced dual FIFO / LIFO sequential paste queue modes for accelerated data migration.',
          'Added persistent template categories for recurring SQL snippets and shell commands.',
          'Zero-telemetry audit: verified on-device cryptographic storage with no outgoing network traffic.',
        ],
      },
      {
        version: 'v1.1.0',
        product: 'Vloam Mermaid',
        date: 'September 2026',
        tag: 'Web Tool',
        highlights: [
          'Real-time split-pane rendering with sub-10ms syntax parsing latency.',
          'Lossless SVG export and high-DPI PNG generation for technical documentation.',
          'Added dark/light diagram theme presets matching modern developer workspaces.',
        ],
      },
      {
        version: 'v2.1.0',
        product: 'ADHD & BPD Screening Tools',
        date: 'September 2026',
        tag: 'Health Web Tools',
        highlights: [
          'Standardized clinical scoring logic aligned with evidence-based diagnostic checklists.',
          'Rollout of 10 fully localized international language editions.',
          'Strict client-side privacy architecture ensuring zero personal medical information is uploaded.',
        ],
      },
    ],
  },
  articlesSection: {
    label: 'Publications & Insights',
    title: 'Articles & Architectural Notes',
    subtitle: 'Deep dives into local-first computing, hardware enclave security, and client-side ephemeral sandboxing.',
    readMore: 'Read Essay →',
  },
  securitySection: {
    label: 'Trust & Architecture',
    title: 'Local-First Security Manifesto',
    subtitle: 'Why our software and web services guarantee strict privacy and client-side data isolation.',
    readWhitepaper: 'Read Full Security Architecture & Data Isolation Whitepaper →',
    pillars: [
      {
        title: 'Zero Cloud Storage for Sensitive Assets',
        desc: 'Traditional cloud-synced utilities introduce serious attack vectors. Vloam desktop apps store credentials exclusively in your operating system’s secure enclave.',
        details: [
          'macOS: Credentials protected by native Keychain Services with hardware-backed encryption.',
          'Windows: Passwords encrypted via CryptProtectData (DPAPI) tied to your user login.',
          'Zero plain-text connection strings or passwords stored in clear text.',
        ],
      },
      {
        title: 'Confidential Client-Side Computation',
        desc: 'Our online self-assessment tools calculate all evaluation scores strictly inside your local browser memory without transmission.',
        details: [
          'All questionnaire responses processed via client-side JavaScript.',
          'No user tracking, no third-party behavioral profiling pixels.',
          'Reports disappear upon closing the tab, leaving no trace on external servers.',
        ],
      },
      {
        title: 'Native Performance & Clean Web Architecture',
        desc: 'We purposefully bypass heavy, insecure bundled runtimes that devour gigabytes of memory and complicate threat surfaces.',
        details: [
          'Lightweight native compilation starts in under 500ms.',
          'Web utilities operate with zero backend dependencies.',
          'Transparent open issue tracking and verified release checksums.',
        ],
      },
    ],
  },
  values: {
    label: 'Engineering Philosophy',
    title: 'Our Core Engineering Principles',
    items: {
      speedTitle: 'Peak Performance',
      speedDesc: 'We reject bloated runtimes that consume excessive CPU and memory. Every Vloam product starts instantly and runs quietly.',
      privacyTitle: 'Strict Local-First Privacy',
      privacyDesc: 'Whether it is database passwords, clipboard history, or psychological responses, your data belongs exclusively on your device.',
      kbdTitle: 'Ergonomics & Usability',
      kbdDesc: 'Clean interfaces, intuitive keyboard workflows, and distraction-free design keep you in flow.',
    },
  },
  faq: {
    label: 'Questions & Answers',
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'What is the Vloam ecosystem?',
        a: 'Vloam is an independent software studio building native desktop applications (VloamDb, VloamClip), visual web utilities (Vloam Mermaid), and privacy-first online self-assessment tools (ADHD Test, BPD Test).',
      },
      {
        q: 'Are my data or test results sent to cloud servers?',
        a: 'No. Across all Vloam tools, data sovereignty is guaranteed. Desktop apps store credentials and history locally, while web-based assessment tools calculate all scores entirely in your browser.',
      },
      {
        q: 'Which operating systems and architectures are supported?',
        a: 'Vloam desktop tools provide native builds for macOS (Apple Silicon M-series & Intel x86_64) and Windows (x64), while web tools work on all modern browsers.',
      },
      {
        q: 'What is the pricing model?',
        a: 'Our web assessment tools and diagram utilities are free. Desktop tools provide 15-day unrestricted trials followed by a simple one-time lifetime license with no subscriptions.',
      },
      {
        q: 'How can I get support or provide feedback?',
        a: 'You can email our team directly at support@vloam.com or participate via our public GitHub project repositories.',
      },
    ],
  },
  aboutPage: {
    title: 'About Vloam Studio',
    subtitle: 'An independent digital product studio creating focused desktop applications and private web services.',
    storyTitle: 'Our Story & Motivation',
    storyP1: 'Modern software has become increasingly bloated and intrusive. Simple utilities now require hundreds of megabytes of memory, constant network connectivity, and mandatory cloud logins just to perform basic tasks.',
    storyP2: 'Vloam was created to counter this trend. We build lean, native desktop applications and client-side web services that respect your memory, CPU, battery, and privacy.',
    missionTitle: 'Our Mission',
    missionP1: 'To provide users with high-craft digital products that launch instantly, function completely offline when needed, and never treat your data as a revenue stream.',
    pillarsTitle: 'What Sets Us Apart',
  },
  securityPage: {
    title: 'Security & Data Privacy',
    subtitle: 'Our technical commitments, cryptographic design, and data isolation guarantees across desktop and web.',
    localFirstTitle: '1. Local-First Architecture',
    localFirstP1: 'We believe sensitive assets—such as database connection strings, SQL query histories, clipboard text, and psychological self-evaluations—must never leave your local environment unless you explicitly choose to export them.',
    credentialTitle: '2. Operating System Credential Enclaves',
    credentialP1: 'Vloam desktop software delegates secret storage to hardware-backed system keychains: Apple Keychain Services on macOS and the Data Protection API (DPAPI) on Windows. We never store credentials in plain text.',
    telemetryTitle: '3. Zero Data Harvesting',
    telemetryP1: 'We collect zero telemetry on clipboard contents, SQL queries, or database schema names. Our desktop utilities operate without required network telemetry.',
    healthTitle: '4. Client-Side Psychological Assessments',
    healthP1: 'Both ADHD Test and BPD Test execute questionnaire calculation logic entirely in your local browser sandbox. No answers, scores, or identifiers are transmitted to our servers.',
    contactTitle: '5. Security Contact & Disclosures',
    contactP1: 'If you discover a security concern or vulnerability in any Vloam software, please contact our engineering team directly at security@vloam.com.',
  },
  privacyPage: {
    title: 'Privacy Policy',
    subtitle: 'Transparent, principled data practices across all Vloam desktop applications and web services.',
    updatedDate: 'Last updated: October 2026',
    sections: [
      {
        title: '1. Foundational Privacy Commitment',
        content: 'At Vloam, our business model is simple: we create helpful software and web tools. We do not sell user data, monetize behavioral attention, or build tracking profiles. Data minimization and local-first architecture guide everything we engineer.',
      },
      {
        title: '2. Native Desktop Applications (VloamDb & VloamClip)',
        content: 'Our desktop utilities are engineered to operate on your local machine with strict boundaries:',
        points: [
          'Database credentials and connection passwords are encrypted via native OS enclaves (macOS Keychain Services and Windows DPAPI).',
          'Database queries, clipboard text, history stacks, and configuration files reside solely on your physical drive.',
          'No clipboard content, SQL text, or database schemas are transmitted to our servers.',
        ],
      },
      {
        title: '3. Web Applications & Online Assessments',
        content: 'For our browser-based utilities including Vloam Mermaid, ADHD Test, and BPD Test:',
        points: [
          'Diagram rendering (Mermaid syntax) executes entirely client-side inside your active browser session.',
          'Psychological questionnaire responses and score breakdowns are calculated via in-memory JavaScript.',
          'Zero test answers or personal screening data are stored on or sent to remote databases.',
          'All session memory is purged as soon as you close or reload the browser tab.',
        ],
      },
      {
        title: '4. Infrastructure & Edge Logs',
        content: 'Our public websites are hosted on global content delivery networks (Cloudflare). Minimal transient server logs (e.g. IP addresses, request paths) are maintained temporarily for DDoS defense, routing optimization, and infrastructure uptime, and are never used for personal tracking.',
      },
      {
        title: '5. Privacy Inquiries & Data Rights',
        content: 'If you have questions, feedback, or concerns regarding your privacy when using Vloam software or sites, please reach out directly to privacy@vloam.com.',
      },
    ],
  },
  termsPage: {
    title: 'Terms of Service',
    subtitle: 'Clear, fair conditions for utilizing Vloam desktop tools and online web applications.',
    updatedDate: 'Last updated: October 2026',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: 'By accessing our websites, downloading our desktop software, or using our web applications, you agree to these Terms of Service. If you do not agree with any part of these terms, please discontinue using Vloam products.',
      },
      {
        title: '2. Software Licenses & Evaluation',
        content: 'Vloam desktop software (including VloamDb and VloamClip) is distributed with an unrestricted 15-day free evaluation period. Continued usage following the evaluation period requires purchase of a perpetual lifetime license. Licenses are non-exclusive and non-transferable, granting you the right to run the application on supported personal or work devices.',
      },
      {
        title: '3. Online Tools & Health Self-Assessment Disclaimer',
        content: 'Web applications such as Vloam Mermaid, ADHD Test, and BPD Test are provided free of charge for public benefit. Please note the clinical self-assessment tools are intended solely for educational and informational self-screening purposes and do not replace professional psychological diagnosis, medical advice, or psychiatric treatment. Always seek the advice of a qualified healthcare provider with any medical questions.',
      },
      {
        title: '4. Permitted Use & Restrictions',
        content: 'You agree to use Vloam products only for lawful purposes. You may not reverse-engineer, decompile, redistribute unauthorized cracked copies, or deploy automated attacks against our network infrastructure.',
      },
      {
        title: '5. Disclaimer of Warranties & Limitation of Liability',
        content: 'Vloam applications and services are provided "as is" and "as available". To the extent permitted by applicable law, Vloam disclaims all warranties, express or implied. Under no circumstances shall Vloam be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our products.',
      },
      {
        title: '6. Amendments & Contact',
        content: 'We may modify these terms as our products and services evolve. Notice of substantial revisions will be published on our website. For inquiries concerning these terms, contact us at legal@vloam.com.',
      },
    ],
  },
  productsPage: {
    title: 'Software Directory & Access Index',
    subtitle: 'Direct downloads, platform binaries, and browser links for all Vloam applications and utilities.',
    desktopSectionTitle: 'Native Desktop Applications',
    desktopSectionDesc: 'Fast native client software for macOS and Windows with zero telemetry and on-device storage.',
    webSectionTitle: 'Web Applications & Online Tools',
    webSectionDesc: 'Client-side web utilities and clinical screening sites, accessible instantly in modern browsers.',
    btnDownload: 'Download / View ↗',
    btnLaunch: 'Launch Web App ↗',
    integrityTitle: 'Build Integrity & Security Verification',
    integrityDesc: 'All desktop binaries are compiled natively with hardened runtime. macOS releases are signed and notarized by Apple. Windows builds adhere to Microsoft Authenticode standards.',
  },
  footer: {
    brandDesc: 'Focused, lightweight, and practical digital tools and web services—spanning native desktop applications, visual utilities, and helpful online resources.',
    devTitle: 'Desktop Software',
    healthTitle: 'Web Apps & Tools',
    trustTitle: 'Studio & Trust',
    rights: 'All rights reserved.',
    motto: 'Fast · Useful · Zero Bloat',
    privacy: 'Privacy Commitment',
    terms: 'Terms of Service',
    about: 'About Studio',
    security: 'Security & Privacy',
    contact: 'Support & Inquiries',
  },
};

const zh: Translation = {
  meta: {
    title: 'Vloam — 轻快实用的软件工具与在线网站',
    description: '独立软件工作室，打造轻巧高效的原生桌面软件（VloamDb、VloamClip）与免安装开箱即用的 Web 在线工具与自测网站（Vloam Mermaid、ADHD 与 BPD 自评）。',
  },
  nav: {
    products: '软件与工具',
    specs: '技术参数',
    radar: '更新动态',
    notes: '技术文章',
    security: '安全与隐私',
    about: '关于 Vloam',
    faq: '常见问题',
  },
  hero: {
    badge: 'Vloam · 独立软件与在线网站',
    title: '轻快实用的软件工具与在线网站',
    subtitle: '简单、顺手、拒绝臃肿。涵盖轻巧高效的原生桌面软件，以及打开即用的 Web 在线工具与自测网站。',
  },
  categories: {
    developerTools: '桌面客户端软件',
    developerSubtitle: '启动轻快、内存受控，支持 macOS 与 Windows 原生运行。',
    assessmentTools: 'Web 在线应用与工具网站',
    assessmentSubtitle: '浏览器打开即用，免注册、无门槛，随开随用。',
  },
  products: {
    db: {
      tag: '数据库客户端',
      badge: 'macOS · Windows',
      title: 'VloamDb',
      slogan: '专为开发者打造的轻快、专注 MySQL 客户端',
      desc: '告别笨重庞大的传统数据库工具。原生极速启动、多环境醒目颜色标识、严谨的生产只读保护与便捷的键盘快捷操作，回归干净纯粹的数据库管理。',
      features: [
        { icon: '›', title: '瞬时启动：', desc: '启动迅速，内存占用轻巧，无冗余开销。' },
        { icon: '›', title: '生产安全防护：', desc: '醒目环境颜色标签与只读锁定，防范误改误删生产数据。' },
        { icon: '›', title: '键盘优先体验：', desc: '双击 Shift 检索表，Ctrl+F12 快速定位字段。' },
        { icon: '›', title: '安全存储：', desc: '连接密码由系统底层安全区（Keychain / DPAPI）妥善加密保护。' },
      ],
      cta: '查看 VloamDb ↗',
    },
    clip: {
      tag: '剪贴板工具',
      badge: 'macOS · Windows',
      title: 'VloamClip',
      slogan: '支持先进粘贴队列的轻量剪贴板利器',
      desc: '专为高频文字工作者设计的剪贴板工具。连续批量复制，按先进先出（FIFO）或后进先出（LIFO）队列依次粘贴，简化表单填写与代码重构。',
      features: [
        { icon: '›', title: 'FIFO / LIFO 队列：', desc: '批量复制多段内容，一键依序粘贴，减少窗口来回切换。' },
        { icon: '›', title: '快速搜索：', desc: '毫秒级检索历史剪贴板，支持代码与纯文本。' },
        { icon: '›', title: '常用固定项：', desc: '分类固定高频命令、代码片段与文本模板。' },
        { icon: '›', title: '轻巧省心：', desc: '本地轻量数据库存储，后台静默运行无弹窗打扰，随手唤出。' },
      ],
      cta: '查看 VloamClip ↗',
    },
    mermaid: {
      tag: '在线图表编辑',
      badge: 'Web 在线应用',
      title: 'Vloam Mermaid',
      slogan: '免安装的 Mermaid 实时图表编辑器',
      desc: '极简流畅的浏览器端 Mermaid 语法编辑器。支持流程图、时序图、类图与状态图实时双向预览，并提供无损 SVG 和高清 PNG 一键导出。',
      features: [
        { icon: '›', title: '实时零延迟渲染：', desc: '输入语法即刻呈现专业图表，所见即所得。' },
        { icon: '›', title: '多格式无损导出：', desc: '一键导出高保真矢量 SVG、高清 PNG 或复制 Markdown。' },
        { icon: '›', title: '深浅主题预设：', desc: '提供清晰适配的暗黑与高对比度浅色主题。' },
        { icon: '›', title: '纯前端即时渲染：', desc: '图表语法在浏览器内即时解析呈现，无需后端传输等待。' },
      ],
      cta: '打开编辑器 ↗',
    },
    adhd: {
      tag: '心理自评网站',
      badge: '标准化量表',
      title: 'ADHD Test',
      slogan: '成人 ADHD 注意力缺陷与专注倾向自测评估',
      desc: '参照标准化临床自评标准编制的成人专注力筛查工具。从专注力、冲动性等多维度进行量化评估，即时生成清晰自评结果。',
      features: [
        { icon: '›', title: '标准化题目参考：', desc: '参考公认成人 ADHD 评估问卷逻辑编制。' },
        { icon: '›', title: '即时多维报告：', desc: '细分维度得分与生活应对建议即刻展示。' },
        { icon: '›', title: '免费且免注册：', desc: '答题与评分完全在前端即时完成，保护个人隐私。' },
        { icon: '›', title: '10 国语言支持：', desc: '支持中文、英文、西语、法语、德语等主流语言。' },
      ],
      cta: '进入自测 ↗',
    },
    bpd: {
      tag: '性格自评网站',
      badge: '心理参考量表',
      title: 'BPD Test',
      slogan: '边缘型人格倾向（BPD）专业自评评估工具',
      desc: '用于辅助识别情绪起伏、人际关系敏感度与自我认知的自评问卷，提供客观参考与心理健康常识指引。',
      features: [
        { icon: '›', title: '标准化量表设计：', desc: '依据人格特质评估标准进行结构化题目设计。' },
        { icon: '›', title: '多维度特征评估：', desc: '辅助分析情绪波动度与人际交往感受。' },
        { icon: '›', title: '免注册自查：', desc: '答题数据不留存，直接生成详尽报告与参考。' },
        { icon: '›', title: '专业建议引导：', desc: '提供清晰的科普解读、心理调节方向与就医建议指引。' },
      ],
      cta: '进入自测 ↗',
    },
  },
  specsSection: {
    label: '产品规格',
    title: '生态产品规格与技术参数',
    subtitle: '公开透明的平台兼容性、底层架构引擎、数据存放位置与获取方式。',
    headers: {
      product: '产品名称',
      category: '产品定位',
      platforms: '支持平台',
      engine: '底层架构引擎',
      dataStorage: '数据存放位置',
      license: '获取方式',
    },
    rows: [
      {
        product: 'VloamDb',
        category: '数据库客户端',
        platforms: 'macOS (Apple Silicon/Intel), Windows x64',
        engine: '原生桌面应用 (Go / 原生安全通道)',
        dataStorage: '本地设备 (macOS Keychain / DPAPI 加密)',
        license: '15 天全功能免费试用 · 一次性买断终身授权',
      },
      {
        product: 'VloamClip',
        category: '剪贴板管理',
        platforms: 'macOS (Apple Silicon/Intel), Windows x64',
        engine: '原生桌面应用 (系统级钩子与本地引擎)',
        dataStorage: '本地设备 (SQLite 本地加密存储)',
        license: '15 天全功能免费试用 · 一次性买断终身授权',
      },
      {
        product: 'Vloam Mermaid',
        category: '图表编辑器',
        platforms: '主流网页浏览器 (Chrome, Safari, Firefox, Edge)',
        engine: 'Astro (SSG) + 客户端实时解析渲染群岛',
        dataStorage: '当前浏览器内存 (无后端存储)',
        license: '100% 免费开放的 Web 工具',
      },
      {
        product: 'ADHD Test',
        category: '专注力自测评定',
        platforms: '全平台现代浏览器 (支持移动端与桌面端)',
        engine: '静态 Web 应用 (浏览器端计算)',
        dataStorage: '当前浏览器内存 (不留存任何个人数据)',
        license: '100% 免费开放',
      },
      {
        product: 'BPD Test',
        category: '人格倾向自测',
        platforms: '全平台现代浏览器 (支持移动端与桌面端)',
        engine: '静态 Web 应用 (浏览器端计算)',
        dataStorage: '当前浏览器内存 (不留存任何个人数据)',
        license: '100% 免费开放',
      },
    ],
  },
  radarSection: {
    label: '研发动态',
    title: '近期发布与更新记录',
    subtitle: '保持持续迭代与日常维护。实时跟踪 Vloam 矩阵产品线的关键更新。',
    items: [
      {
        version: 'v3.3.4',
        product: 'VloamDb',
        date: '2026 年 10 月',
        tag: '桌面端应用',
        highlights: [
          '新增生产环境醒目颜色隔离与严苛的只读保护锁，从机制上杜绝误删误改。',
          '优化双击 Shift 全局表检索算法，万级数据表秒级秒出，丝滑无延迟。',
          '针对 Apple Silicon M系列与 x86_64 深度编译优化，空闲静默内存小于 38MB。',
        ],
      },
      {
        version: 'v1.2.0',
        product: 'VloamClip',
        date: '2026 年 10 月',
        tag: '桌面端应用',
        highlights: [
          '重构先进先出（FIFO）与后进先出（LIFO）粘贴队列逻辑，支持复杂数据依序录入。',
          '支持高频 Shell 命令与 SQL 模版分类固定收藏，支持全局快捷键秒级呼出。',
          '严格离线审计：通过安全审查，完全切断网络遥测与剪贴板外部数据流通。',
        ],
      },
      {
        version: 'v1.1.0',
        product: 'Vloam Mermaid',
        date: '2026 年 9 月',
        tag: 'Web 在线应用',
        highlights: [
          '双屏实时双向预览，语法解析延迟小于 10 毫秒，所见即所得。',
          '支持无损矢量 SVG 与超高清 PNG 一键导出，适配专业技术文档排版。',
          '新增专为极客开发者量身定制的深浅对比度配色预设方案。',
        ],
      },
      {
        version: 'v2.1.0',
        product: 'ADHD 与 BPD 在线自测',
        date: '2026 年 9 月',
        tag: '健康测评 Web 应用',
        highlights: [
          '严格对照国际公认的精神心理诊断量表基准完成多维度计分算法校准。',
          '完成全球 10 种主流语言的本土化翻译与常模适配上线。',
          '实现全沙盒前端运算，确保用户的每一项答题与报告绝不离开本地浏览器。',
        ],
      },
    ],
  },
  articlesSection: {
    label: '思考与沉淀',
    title: '技术文章',
    subtitle: '分享桌面端原生开发、数据安全与 Web 实践中的思考与经验。',
    readMore: '阅读全文 →',
  },
  securitySection: {
    label: '安全与隐私',
    title: '数据安全与隐私设计',
    subtitle: '我们如何通过系统原生安全区与前端隔离，切实保护你的数据。',
    readWhitepaper: '查看完整安全与数据设计说明 →',
    pillars: [
      {
        title: '敏感凭据由操作系统底层保护',
        desc: '不搞非必要的云端上传。Vloam 桌面软件将密码与密钥托付给操作系统成熟的安全体系。',
        details: [
          'macOS：借助系统原生 Keychain Services 进行硬件级加密保护。',
          'Windows：通过绑定当前登录用户的 CryptProtectData (DPAPI) 机制妥善隔离。',
          '所有连接密码与配置绝不以明文形式散落保存在磁盘。',
        ],
      },
      {
        title: '在线工具即时运算，不留存个人答卷',
        desc: '在线自评工具与图表编辑器均在浏览器前端执行计算，不收集用户答题记录。',
        details: [
          '所有题目答案通过前端 JavaScript 即时计算得分。',
          '无需注册账号，不植入任何跨站行为追踪打点代码。',
          '关闭页面即数据完全清空，在外部服务器上不留任何记录。',
        ],
      },
      {
        title: '轻量原生交付，拒绝冗余膨胀',
        desc: '精简依赖与技术栈，不仅带来轻巧流畅的体验，也大大收敛潜在的安全隐患。',
        details: [
          '纯粹的原生二进制与静态 Web 交付，冷启动时间小于 500 毫秒。',
          '极度收敛的攻击面，静默状态下零额外 CPU 负载。',
          '公开透明的问题反馈渠道与官方安全校验机制。',
        ],
      },
    ],
  },
  values: {
    label: '产品理念',
    title: '我们的设计原则',
    items: {
      speedTitle: '轻快省心',
      speedDesc: '拒绝臃肿与冗余开销。软件启动迅速、资源占用克制，安静高效。',
      privacyTitle: '注重隐私与安全',
      privacyDesc: '该在本地的数据就在本地。密码交由系统钥匙串保管，在线自测不保存答卷。',
      kbdTitle: '顺手好用',
      kbdDesc: '清晰直观的界面，合理的快捷操作，让工具真正服务于你的任务。',
    },
  },
  faq: {
    label: '答疑解惑',
    title: '常见问题与解答',
    items: [
      {
        q: '什么是 Vloam？',
        a: 'Vloam 是一家独立的数字化软件工作室，旗下涵盖桌面客户端软件（VloamDb、VloamClip）、Web 在线工具（Vloam Mermaid）以及免注册的专业自测网站（ADHD Test、BPD Test）。',
      },
      {
        q: '我的数据或测评结果会被上传到云端服务器吗？',
        a: '不会。桌面软件本地存储密码与记录，Web 测评工具直接在浏览器前端完成打分计算，服务器不留存任何个人答卷或记录。',
      },
      {
        q: '支持哪些操作系统与运行环境？',
        a: '桌面软件原生支持 macOS（Apple Silicon 与 Intel）和 Windows（10/11 x64）；Web 工具在所有现代移动端与桌面端浏览器中均可流畅运行。',
      },
      {
        q: '收费模式与授权政策是怎样的？',
        a: '在线测评与图表工具完全免费开放；桌面软件提供 15 天全功能免费试用，结束后为一次性终身买断，无订阅困扰。',
      },
      {
        q: '如何反馈使用问题或提出建议？',
        a: '欢迎发送邮件至 support@vloam.com，或通过我们公开的 GitHub 社区提交建议。',
      },
    ],
  },
  aboutPage: {
    title: '关于 Vloam 独立工作室',
    subtitle: '致力于打造实用、轻快、尊重隐私的桌面软件与在线网站。',
    storyTitle: '我们的初衷',
    storyP1: '现在的很多数字工具正变得越来越臃肿。一个简单的实用程序动辄需要数百兆内存，强制要求联网登录，甚至在后台持续扫描或收集用户数据。',
    storyP2: 'Vloam 诞生就是为了抵抗这种浮躁与臃肿。从高效实用的桌面原生客户端，到即开即用的 Web 效率工具与专业自测网站，我们崇尚纯粹好用、克制设计，让数字工具回归服务用户的本质。',
    missionTitle: '团队愿景',
    missionP1: '为追求专注、高效与数据安全的人群提供启动即用、无干扰、绝不将用户数据商业化的纯净产品。',
    pillarsTitle: '我们的核心原则',
  },
  securityPage: {
    title: '安全与数据隐私说明',
    subtitle: '公开透明的工程安全实践、密钥存储机制与数据隔离规范。',
    localFirstTitle: '1. 本地存储优先',
    localFirstP1: '我们坚信：数据库连接串、SQL 历史日志、剪贴板历史以及心理测评答卷等核心数据，除非用户手动导出，否则绝无任何理由擅自上传到外部服务器。',
    credentialTitle: '2. 操作系统级安全区集成',
    credentialP1: 'Vloam 桌面端软件直接委托操作系统底层安全区（macOS Keychain 与 Windows DPAPI）存储关键密码，绝不在磁盘以明文形式保存敏感数据。',
    telemetryTitle: '3. 拒绝隐蔽遥测',
    telemetryP1: '我们的工具不扫描剪贴板内容、不分析执行的 SQL 语义、不上传数据库表结构信息，杜绝任何侵犯用户隐私的隐蔽行为。',
    healthTitle: '4. 纯前端离线自测机制',
    healthP1: 'ADHD Test 和 BPD Test 均采用纯前端离线运算模型。测评题目回答只保留在当前标签页内存中，关闭页面即刻销毁，无任何服务器数据库留存。',
    contactTitle: '5. 安全问题联络通道',
    contactP1: '如果你在 Vloam 旗下任何产品中发现安全隐患或漏洞，请直接发送邮件至 security@vloam.com，我们将第一时间评估并响应。',
  },
  privacyPage: {
    title: '隐私政策与说明',
    subtitle: '公开透明的数据处理准则，全面保障你在使用 Vloam 桌面软件与在线网站时的隐私与安全。',
    updatedDate: '最近更新：2026 年 10 月',
    sections: [
      {
        title: '1. 我们的核心隐私原则',
        content: 'Vloam 坚守纯粹好用、数据克制的原则。我们依靠提供实用的桌面客户端软件获得收入，绝不出售用户数据、不进行隐蔽行为追踪，更不以牺牲用户隐私为代价进行商业化。我们从产品设计之初就贯彻最小化数据收集的理念。',
      },
      {
        title: '2. 原生桌面客户端软件（VloamDb 与 VloamClip）',
        content: '针对我们开发的桌面客户端工具，我们确立了严格的本地隔离边界：',
        points: [
          '数据库连接密码等敏感信息由系统原生安全区（macOS Keychain / Windows DPAPI）加密保管，不以明文保存在磁盘。',
          '所有的数据库连接串、SQL 查询历史、剪贴板历史记录均保存在你自己的电脑本地磁盘中。',
          '绝无任何隐蔽遥测，不扫描、不上传你的数据库结构、SQL 语句或剪贴板文本。',
        ],
      },
      {
        title: '3. Web 在线应用与工具网站',
        content: '针对 Vloam Mermaid、ADHD Test 与 BPD Test 等在浏览器中运行的 Web 工具：',
        points: [
          'Mermaid 图表语法的解析与渲染完全在当前浏览器窗口内即时完成，无需后端传输等待。',
          '心理与性格倾向测评的计分算法由浏览器端 JavaScript 在前端内存中即时计算。',
          '无需注册账号，我们的服务器绝不存储任何用户的答题选项与测评报告。',
          '关闭或刷新当前网页标签页后，所有临时运算内存立即自动销毁，不留任何痕迹。',
        ],
      },
      {
        title: '4. 网络基础设施与日志',
        content: '我们的网站部署在经过行业验证的全球 CDN 网络（如 Cloudflare）。基础设施产生的临时网络访问日志（如访问 IP、User-Agent 等）仅用于网络层安全防护、防范恶意 DDoS 攻击与保障服务连通性，绝不用于构建跨站行为画像。',
      },
      {
        title: '5. 隐私咨询与联络',
        content: '如果你对本隐私政策有任何疑问，或需要了解具体技术实现，欢迎直接发送邮件至 privacy@vloam.com 与我们沟通。',
      },
    ],
  },
  termsPage: {
    title: '服务条款与使用协议',
    subtitle: '规范并保障你合法、公平使用 Vloam 旗下桌面软件与 Web 在线工具的条款细则。',
    updatedDate: '最近更新：2026 年 10 月',
    sections: [
      {
        title: '1. 条款适用与协议接受',
        content: '欢迎使用 Vloam 提供的数字化产品与服务。通过访问我们的网站、下载安装桌面软件或使用 Web 工具，即表示你已阅读并同意受本服务条款的约束。如果你不同意本条款的任何部分，请停止使用我们的软件与服务。',
      },
      {
        title: '2. 桌面软件授权与使用',
        content: 'Vloam 桌面客户端（如 VloamDb、VloamClip）提供为期 15 天的全功能免费试用。试用期结束后，用户可通过购买一次性终身授权继续使用。该授权授予你在受支持的设备上运行本软件的非排他性、不可转让的权利。Vloam 保留所有软件代码、界面设计、商标与知识产权所有权。',
      },
      {
        title: '3. 在线工具与心理测评免责声明',
        content: 'Vloam Mermaid、ADHD Test 与 BPD Test 等在线工具面向公众免费开放。请注意：心理与性格自评工具仅供个人自我筛查认知与常识科普参考，不能替代执业医师、心理学家或专科医疗机构的临床诊断与治疗方案。如有身心健康疑虑，请务必咨询专业医疗人员。',
      },
      {
        title: '4. 合理合规使用规范',
        content: '你同意仅在法律法规允许的范围内使用 Vloam 产品。严禁对软件进行逆向破解、未经授权的恶意分发盗版，或利用自动化工具对我们的在线网站与网络基础设施发起恶意扫描或攻击。',
      },
      {
        title: '5. 免责声明与责任限制',
        content: '在法律允许的最大范围内，Vloam 软件与在线服务均按“现状”（AS-IS）和“可提供状态”提供。虽然我们竭力保证代码的稳定健壮，但不对完全无缺陷或满足所有特定使用场景作默示保证。在任何情况下，Vloam 均不对因使用或无法使用本软件导致的任何间接或连带损失承担赔偿责任。',
      },
      {
        title: '6. 条款修订与法律联络',
        content: '我们可能会根据产品演进和法律要求不时更新本条款。更新后的条款一旦在网站公布即行生效。如对本条款有任何法律相关的咨询，请联系 legal@vloam.com。',
      },
    ],
  },
  productsPage: {
    title: '软件与工具索引清单',
    subtitle: '提供 Vloam 旗下原生客户端安装包下载、运行环境要求及 Web 在线工具直达通道。',
    desktopSectionTitle: '桌面客户端软件',
    desktopSectionDesc: '原生编译的高性能桌面工具，启动迅速、内存受控，支持 macOS 与 Windows。',
    webSectionTitle: 'Web 在线应用与工具网站',
    webSectionDesc: '无需安装、浏览器即开即用的实用工具与专业心理健康自评网站。',
    btnDownload: '官方页面 / 获取 ↗',
    btnLaunch: '打开在线工具 ↗',
    integrityTitle: '构建完整性与安全签名说明',
    integrityDesc: '所有桌面二进制程序均采用本地原生编译。macOS 版本遵循 Apple 严格的安全公证规范，Windows 安装包采用标准代码安全验证，确保无后门与恶意篡改。',
  },
  footer: {
    brandDesc: '独立软件工作室，专注打造轻快实用的原生桌面软件，以及开箱即用的在线工具与自测网站。',
    devTitle: '桌面软件',
    healthTitle: 'Web 应用与网站',
    trustTitle: '关于与支持',
    rights: '保留所有权利。',
    motto: '轻快启动 · 实用顺手 · 拒绝臃肿',
    privacy: '隐私说明',
    terms: '使用条款',
    about: '关于 Vloam',
    security: '安全与隐私',
    contact: '联系技术支持',
  },
};

const es: Translation = {
  ...en,
  meta: {
    title: 'Vloam — Herramientas digitales y utilidades privadas en línea',
    description: 'Explora el ecosistema Vloam: VloamDb (cliente MySQL), VloamClip (portapapeles), Vloam Mermaid, test de TDAH y test de TLP.',
  },
  nav: {
    ...en.nav,
    products: 'Productos',
    specs: 'Especificaciones',
    radar: 'Actualizaciones',
    notes: 'Notas de ingeniería',
    security: 'Seguridad',
    about: 'Acerca de',
    faq: 'FAQ',
  },
};

const fr: Translation = {
  ...en,
  meta: {
    title: 'Vloam — Outils numériques et services en ligne privés',
    description: 'Explorez l’écosystème Vloam : VloamDb, VloamClip, Vloam Mermaid, tests TDAH et TPL.',
  },
  nav: {
    ...en.nav,
    products: 'Produits',
    specs: 'Spécifications',
    radar: 'Versions',
    notes: 'Notes techniques',
    security: 'Sécurité',
    about: 'À propos',
    faq: 'FAQ',
  },
};

function createMirror(devNav: string, healthNav: string, dbCta: string, clipCta: string, mermaidCta: string, adhdCta: string, bpdCta: string): Translation {
  return {
    ...en,
    nav: {
      ...en.nav,
      products: devNav,
      security: 'Security & Privacy',
      about: 'About Studio',
    },
    products: {
      db: { ...en.products.db, cta: dbCta },
      clip: { ...en.products.clip, cta: clipCta },
      mermaid: { ...en.products.mermaid, cta: mermaidCta },
      adhd: { ...en.products.adhd, cta: adhdCta },
      bpd: { ...en.products.bpd, cta: bpdCta },
    },
  };
}

export const translations: Record<Locale, Translation> = {
  en,
  zh,
  es,
  fr,
  de: createMirror('Produkte', 'Selbsttests', 'VloamDb öffnen →', 'VloamClip öffnen →', 'Mermaid Editor öffnen →', 'ADHD Test starten →', 'BPD Test starten →'),
  pt: createMirror('Produtos', 'Autoavaliação', 'Abrir VloamDb →', 'Abrir VloamClip →', 'Abrir Editor Mermaid →', 'Fazer Teste TDAH →', 'Fazer Teste TPB →'),
  it: createMirror('Prodotti', 'Autovalutazione', 'Apri VloamDb →', 'Apri VloamClip →', 'Apri Mermaid Editor →', 'Inizia Test ADHD →', 'Inizia Test BPD →'),
  nl: createMirror('Producten', 'Zelftests', 'Open VloamDb →', 'Open VloamClip →', 'Open Mermaid Editor →', 'Start ADHD-test →', 'Start BPD-test →'),
  pl: createMirror('Produkty', 'Autodiagnoza', 'Otwórz VloamDb →', 'Otwórz VloamClip →', 'Otwórz Mermaid Editor →', 'Rozpocznij test ADHD →', 'Rozpocznij test BPD →'),
  ro: createMirror('Produse', 'Autoevaluare', 'Deschide VloamDb →', 'Deschide VloamClip →', 'Deschide Editor Mermaid →', 'Începe testul ADHD →', 'Începe testul BPD →'),
};

export function useTranslations(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
