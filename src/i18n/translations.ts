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
  securitySection: {
    label: string;
    title: string;
    subtitle: string;
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
    title: 'Vloam — Focused Digital Tools & Private Online Services',
    description: 'Explore the Vloam ecosystem: VloamDb (fast MySQL client), VloamClip (smart clipboard manager), Vloam Mermaid (diagram editor), ADHD Test, and BPD Test.',
  },
  nav: {
    products: 'Products',
    specs: 'Specifications',
    radar: 'Release Radar',
    security: 'Security Architecture',
    about: 'About Studio',
    faq: 'FAQ',
  },
  hero: {
    badge: 'Digital Products & Web Services',
    title: 'Focused Utilities & Private Online Services',
    subtitle: 'From high-speed desktop software and visual web utilities to evidence-based health self-assessments, Vloam builds focused, privacy-first digital tools with zero bloat.',
  },
  categories: {
    developerTools: 'Developer & Productivity Tools',
    developerSubtitle: 'Native desktop clients and visual utilities engineered for developer velocity and distraction-free workflow.',
    assessmentTools: 'Online Self-Assessment & Wellness',
    assessmentSubtitle: 'Confidential, evidence-based self-screening tools computed 100% privately in your browser sandbox.',
  },
  products: {
    db: {
      tag: 'Database Client',
      badge: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'Fast, Focused MySQL Client for Developers',
      desc: 'A lightning-fast native MySQL GUI designed to eliminate bloat. Features production safety guards, environment color tags, instant fuzzy table search, and local-first privacy.',
      features: [
        { icon: '⚡', title: 'Instant Launch:', desc: 'Starts in under 0.5s with minimal memory. No Electron lag.' },
        { icon: '🛡️', title: 'Production Guard:', desc: 'Color tags and read-only mode prevent accidental deletions.' },
        { icon: '⌨️', title: 'Keyboard-First:', desc: 'Double Shift table search and Ctrl+F12 column navigation.' },
        { icon: '🔒', title: 'Local-First:', desc: 'Credentials and queries remain strictly on your machine.' },
      ],
      cta: 'Explore VloamDb →',
    },
    clip: {
      tag: 'Clipboard Manager',
      badge: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Local-First Clipboard Manager with FIFO/LIFO Queue',
      desc: 'Distraction-free desktop clipboard utility. Copy multiple items in sequence and paste them automatically in order for fast form filling, code migration, and refactoring.',
      features: [
        { icon: '📋', title: 'Paste Queue:', desc: 'Sequential multi-copy with FIFO/LIFO ordered paste.' },
        { icon: '🔍', title: 'Fuzzy Search:', desc: 'Sub-millisecond full-text history search.' },
        { icon: '⭐', title: 'Pinned Templates:', desc: 'Save recurring shell commands and SQL snippets.' },
        { icon: '🔐', title: 'Zero Cloud Sync:', desc: '100% on-device storage with no external telemetry.' },
      ],
      cta: 'Explore VloamClip →',
    },
    mermaid: {
      tag: 'Visual Diagramming',
      badge: 'Web Utility',
      title: 'Vloam Mermaid',
      slogan: 'Live Interactive Mermaid Diagram Editor',
      desc: 'Streamlined in-browser Mermaid chart editor and visualizer. Convert markdown-like syntax into flowcharts, sequence diagrams, and architecture maps with instant SVG/PNG export.',
      features: [
        { icon: '📊', title: 'Live Preview:', desc: 'Zero-latency split-pane rendering as you write syntax.' },
        { icon: '⚡', title: 'Instant Export:', desc: 'Export crystal-clear SVG, high-res PNG, or copy markdown.' },
        { icon: '🎨', title: 'Theme Switching:', desc: 'Clean dark/light theme presets for documentation.' },
        { icon: '🔒', title: 'Client-Side Only:', desc: 'Diagram source never leaves your local browser tab.' },
      ],
      cta: 'Open Mermaid Editor →',
    },
    adhd: {
      tag: 'Psychological Screening',
      badge: 'Evidence-Based',
      title: 'ADHD Test',
      slogan: 'Adult ADHD Self-Assessment Screening Tool',
      desc: 'Scientifically validated self-assessment tool based on standardized clinical criteria. Evaluate attention, hyperactivity, and executive function tendencies with instant private scoring.',
      features: [
        { icon: '🧪', title: 'Clinical Grounding:', desc: 'Formulated following recognized ADHD symptom checklists.' },
        { icon: '📊', title: 'Instant Report:', desc: 'Clear dimensional score breakdown and symptom insights.' },
        { icon: '🔒', title: '100% Confidential:', desc: 'Runs entirely client-side. No personal health data is saved.' },
        { icon: '🌐', title: '10 Languages:', desc: 'Available in English, Chinese, Spanish, French, German, and more.' },
      ],
      cta: 'Take ADHD Assessment →',
    },
    bpd: {
      tag: 'Personality Assessment',
      badge: 'Evidence-Based',
      title: 'BPD Test',
      slogan: 'Borderline Personality Self-Evaluation Tool',
      desc: 'Evidence-based questionnaire designed to screen for patterns associated with borderline personality traits, emotional regulation, interpersonal dynamics, and self-image.',
      features: [
        { icon: '📑', title: 'Standardized Scales:', desc: 'Groundwork based on established diagnostic criteria.' },
        { icon: '🎯', title: 'Multi-Factor Analysis:', desc: 'Evaluates emotional reactivity, stability, and relationships.' },
        { icon: '🔐', title: 'Strict Privacy:', desc: 'Your responses are computed in your browser and never logged.' },
        { icon: '💡', title: 'Actionable Guidance:', desc: 'Clear educational summaries and professional consultation tips.' },
      ],
      cta: 'Take BPD Assessment →',
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
  securitySection: {
    label: 'Trust & Architecture',
    title: 'Local-First Security Manifesto',
    subtitle: 'Why our software and web services guarantee strict privacy and client-side data isolation.',
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
    title: 'Security & Privacy Architecture',
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
  footer: {
    brandDesc: 'Focused, lightweight, and privacy-first digital tools and web services—spanning native desktop applications, visual utilities, and evidence-based self-assessments.',
    devTitle: 'Developer Tools',
    healthTitle: 'Self-Assessment',
    trustTitle: 'Studio & Trust',
    rights: 'All rights reserved.',
    motto: 'Local-First · Zero Bloat · Private by Design',
    privacy: 'Privacy Commitment',
    terms: 'Terms of Service',
    about: 'About Studio',
    security: 'Security Architecture',
    contact: 'Support & Inquiries',
  },
};

const zh: Translation = {
  meta: {
    title: 'Vloam — 专注、轻量、隐私优先的实用工具与在线服务矩阵',
    description: '探索 Vloam 矩阵：涵盖 VloamDb（MySQL 客户端）、VloamClip（剪贴板利器）、Vloam Mermaid（在线图表编辑）、ADHD 心理自测与 BPD 专业测评。',
  },
  nav: {
    products: '产品矩阵',
    specs: '技术参数',
    radar: '发布雷达',
    security: '安全架构',
    about: '工坊简介',
    faq: '常见问题',
  },
  hero: {
    badge: '数字产品与在线服务生态',
    title: '专注、纯粹的实用工具与在线服务矩阵',
    subtitle: '从高性能桌面客户端、轻快 Web 在线工具，到严谨匿名的专业健康自评，Vloam 坚持本地优先、零冗余与极致体验。',
  },
  categories: {
    developerTools: '🛠️ 开发者与效能工具',
    developerSubtitle: '原生桌面客户端与可视化工具，消除冗余，大幅提升开发效率与编码流。',
    assessmentTools: '🧠 专业在线自评与健康测评',
    assessmentSubtitle: '严谨循证的心理学与行为倾向自评工具，计算完全在浏览器本地运行，100% 保护隐私。',
  },
  products: {
    db: {
      tag: '数据库客户端',
      badge: 'macOS · Windows',
      title: 'VloamDb',
      slogan: '专为开发者打造的轻快、专注 MySQL 客户端',
      desc: '告别笨重庞大的传统数据库工具。原生极速启动、多环境醒目颜色标识、严谨的生产只读保护、双击 Shift 极速表检索与本地数据绝对安全。',
      features: [
        { icon: '⚡', title: '瞬时启动：', desc: '启动时间小于 0.5 秒，内存消耗极低，无 Electron 卡顿。' },
        { icon: '🛡️', title: '生产安全防护：', desc: '醒目环境颜色标签与强制只读锁定，防范误改误删生产数据。' },
        { icon: '⌨️', title: '键盘优先体验：', desc: '双击 Shift 模糊检索表，Ctrl+F12 快速定位字段。' },
        { icon: '🔒', title: '本地离线隐私：', desc: '数据库账号密码和查询历史仅保存在本地设备，绝不上传。' },
      ],
      cta: '探索 VloamDb →',
    },
    clip: {
      tag: '剪贴板与生产力',
      badge: 'macOS · Windows',
      title: 'VloamClip',
      slogan: '本地优先、支持先进粘贴队列的剪贴板利器',
      desc: '专为程序员和重度文字工作者设计的现代剪贴板工具。连续批量复制，按先进先出（FIFO）或后进先出（LIFO）队列依次粘贴，简化表单录入与代码重构。',
      features: [
        { icon: '📋', title: 'FIFO / LIFO 队列：', desc: '批量复制代码或文本，一键依序粘贴，无需频繁来回切屏。' },
        { icon: '🔍', title: '微秒级模糊搜索：', desc: '全文本历史毫秒级极速定位，覆盖纯文本、代码与链接。' },
        { icon: '⭐', title: '常用模板与收藏：', desc: '分类固定高频 Shell 命令、SQL 片段与常用模板。' },
        { icon: '🔐', title: '零云端追踪：', desc: '100% 本地加密存储，绝无任何网络遥测与云端同步。' },
      ],
      cta: '探索 VloamClip →',
    },
    mermaid: {
      tag: '图表可视化工具',
      badge: 'Web 在线应用',
      title: 'Vloam Mermaid',
      slogan: '实时交互式 Mermaid 架构与图表编辑器',
      desc: '极简流畅的浏览器端 Mermaid 语法编辑器。支持流程图、时序图、类图与状态图实时双向预览，并提供无损 SVG 和高清 PNG 一键导出。',
      features: [
        { icon: '📊', title: '实时零延迟渲染：', desc: '输入语法即刻呈现专业图表，所见即所得。' },
        { icon: '⚡', title: '多格式无损导出：', desc: '一键导出高保真矢量 SVG、高清 PNG 或复制 Markdown。' },
        { icon: '🎨', title: '深浅主题预设：', desc: '专为工程文档与技术博客设计的现代高对比度配色方案。' },
        { icon: '🔒', title: '纯前端本地计算：', desc: '图表代码绝不传输至后端服务器，保护技术架构隐私。' },
      ],
      cta: '打开 Mermaid 编辑器 →',
    },
    adhd: {
      tag: '心理与专注力测评',
      badge: '循证心理量表',
      title: 'ADHD Test',
      slogan: '成人 ADHD 注意力缺陷与多动倾向自测评估',
      desc: '基于权威临床标准打造的成人注意力缺陷倾向自测工具。从专注力、冲动性与执行功能等多维度进行量化评估，即刻生成客观详尽的分析报告。',
      features: [
        { icon: '🧪', title: '循证医学基准：', desc: '严格依据公认的临床评估量表逻辑与诊断标准编制。' },
        { icon: '📊', title: '即时多维报告：', desc: '呈现细分维度分数分布、表现解读与生活管理建议。' },
        { icon: '🔒', title: '完全匿名与保密：', desc: '测评结果全在本地浏览器运算生成，不记录任何个人健康数据。' },
        { icon: '🌐', title: '10 国语言支持：', desc: '支持中文、英文、西语、法语、德语等全球主流语言。' },
      ],
      cta: '开始 ADHD 评估自测 →',
    },
    bpd: {
      tag: '人格倾向自测',
      badge: '循证心理量表',
      title: 'BPD Test',
      slogan: '边缘型人格倾向（BPD）专业筛查评估工具',
      desc: '循证编制的边缘型人格特质自测问卷。针对情绪波动、人际关系敏感、自我认知与行为控制等关键特征提供客观量化分析与认知指导。',
      features: [
        { icon: '📑', title: '标准化量表设计：', desc: '严格依据临床心理学界经典特质筛查体系进行结构化设计。' },
        { icon: '🎯', title: '情绪与关系评估：', desc: '深入剖析情绪易激度、分离焦虑与身份认同波动。' },
        { icon: '🔐', title: '严苛数据隐私：', desc: '无需注册，不保存任何测试记录，营造安全安心的自省空间。' },
        { icon: '💡', title: '专业建议引导：', desc: '提供清晰的科普解读、心理调节方向与就医建议指引。' },
      ],
      cta: '开始 BPD 评估自测 →',
    },
  },
  specsSection: {
    label: '技术架构全景',
    title: '生态产品规格与技术参数矩阵',
    subtitle: '公开透明的平台兼容性、底层架构引擎、数据驻留位置与授权方案一览。',
    headers: {
      product: '产品名称',
      category: '产品定位',
      platforms: '支持平台',
      engine: '底层架构引擎',
      dataStorage: '数据留存位置',
      license: '授权与获取方式',
    },
    rows: [
      {
        product: 'VloamDb',
        category: '数据库客户端',
        platforms: 'macOS (Apple Silicon/Intel), Windows x64',
        engine: '原生桌面开发 (Go / 原生安全通道)',
        dataStorage: '100% 本地 (macOS Keychain / DPAPI 加密)',
        license: '15 天全功能免费试用 · 一次性买断终身授权',
      },
      {
        product: 'VloamClip',
        category: '剪贴板增强器',
        platforms: 'macOS (Apple Silicon/Intel), Windows x64',
        engine: '原生桌面开发 (本地系统级钩子与轻量引擎)',
        dataStorage: '100% 本地 (AES 加密 SQLite 本地库)',
        license: '15 天全功能免费试用 · 一次性买断终身授权',
      },
      {
        product: 'Vloam Mermaid',
        category: '架构与图表编辑器',
        platforms: '主流现代网页浏览器 (Chrome, Safari, Firefox, Edge)',
        engine: 'Astro (SSG) + 客户端实时解析渲染群岛',
        dataStorage: '前端内存即时驻留 (无后端持久化)',
        license: '100% 永久免费开放的 Web 工具',
      },
      {
        product: 'ADHD Test',
        category: '成人注意力自评',
        platforms: '全平台现代浏览器 (支持移动端与桌面端自适应)',
        engine: '纯前端静态编译计算 (无服务端运算)',
        dataStorage: '本地浏览器运行 (绝不留存任何健康数据)',
        license: '100% 永久免费开放的公益性自测工具',
      },
      {
        product: 'BPD Test',
        category: '边缘人格倾向自测',
        platforms: '全平台现代浏览器 (支持移动端与桌面端自适应)',
        engine: '纯前端静态编译计算 (无服务端运算)',
        dataStorage: '本地浏览器运行 (绝不留存任何健康数据)',
        license: '100% 永久免费开放的公益性自测工具',
      },
    ],
  },
  radarSection: {
    label: '研发动态',
    title: '生态发布雷达与更新日志',
    subtitle: '保持高频持续迭代与严谨维护。实时跟踪 Vloam 矩阵产品线的关键里程碑。',
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
  securitySection: {
    label: '安全与信任',
    title: '本地优先（Local-First）工程安全宣言',
    subtitle: '揭秘为什么 Vloam 的软件与服务绝不擅自上传你的数据库凭证、剪贴板隐私与健康问卷。',
    pillars: [
      {
        title: '敏感凭据零云端化存储',
        desc: '传统的云端同步工具往往构成严重的数据泄露敞口。Vloam 桌面应用将一切凭证仅委托给操作系统底层的硬件级安全区。',
        details: [
          'macOS：借助系统原生 Keychain Services 进行硬件级加密保护。',
          'Windows：通过绑定当前登录用户的 CryptProtectData (DPAPI) 机制妥善隔离。',
          '所有连接密码与配置绝不以明文形式散落保存在磁盘。',
        ],
      },
      {
        title: '完全匿名的客户端沙盒计算',
        desc: '我们的在线心理健康评测工具将全部评估模型部署于浏览器本地，答题数据绝不经过后端。',
        details: [
          '所有题目答案通过前端 JavaScript 即时计算得分。',
          '不设用户注册系统，不植入任何跨站行为追踪打点代码。',
          '页面关闭即数据完全清空，在外部服务器上不留任何健康痕迹。',
        ],
      },
      {
        title: '原生轻量架构与低受攻击面',
        desc: '我们坚决不打包消耗数吉字节内存的多层臃肿框架，降低技术复杂度与安全漏洞风险。',
        details: [
          '纯粹的原生二进制与静态 Web 交付，冷启动时间小于 500 毫秒。',
          '极度收敛的攻击面，静默状态下零额外 CPU 负载。',
          '公开透明的问题反馈渠道与官方安全校验机制。',
        ],
      },
    ],
  },
  values: {
    label: '设计哲学',
    title: '我们的工程核心原则',
    items: {
      speedTitle: '极致原生性能',
      speedDesc: '坚决拒绝为了简单功能消耗数吉字节内存的臃肿架构。Vloam 工具秒开秒关，安静守候。',
      privacyTitle: '严格本地离线优先',
      privacyDesc: '无论是数据库密码、剪贴板历史，还是心理自测答卷，你的数据必须且只能保存在本地。',
      kbdTitle: '纯粹与直觉好用',
      kbdDesc: '精心推敲的交互流、全局指令与简洁界面，让你在专注心流中流畅完成一切。',
    },
  },
  faq: {
    label: '答疑解惑',
    title: '常见问题与解答',
    items: [
      {
        q: '什么是 Vloam 软件生态？',
        a: 'Vloam 是一家独立的数字化产品工作室，旗下涵盖桌面端效率软件（VloamDb、VloamClip）、Web 可视化工具（Vloam Mermaid）以及隐私至上的在线专业自评工具（ADHD Test、BPD Test）。',
      },
      {
        q: '我的数据或测评结果会被上传到云端服务器吗？',
        a: '绝不。所有 Vloam 工具均遵循数据主权原则：桌面工具本地存储密码和记录，Web 测评工具直接在浏览器前端进行打分计算，服务器无任何数据沉淀。',
      },
      {
        q: '支持哪些操作系统与运行环境？',
        a: '桌面软件原生支持 macOS（Apple Silicon 与 Intel）和 Windows（10/11 x64）；Web 工具在所有现代移动端与桌面端浏览器中均可流畅运行。',
      },
      {
        q: '收费模式与授权政策是怎样的？',
        a: '在线测评工具与图表工具完全免费开放；桌面工具提供 15 天全功能免费试用，结束后为一次性终身买断，无任何循环扣费订阅。',
      },
      {
        q: '如何反馈使用问题或提出功能建议？',
        a: '欢迎发送邮件至 support@vloam.com，或通过我们公开的 GitHub 社区提交建议。',
      },
    ],
  },
  aboutPage: {
    title: '关于 Vloam 独立工坊',
    subtitle: '致力于打造实用、轻快、尊重隐私的多维数字化产品矩阵。',
    storyTitle: '我们的缘起与初衷',
    storyP1: '今天的很多数字工具正变得越来越臃肿庞大。一个简单的实用程序动辄需要数百兆内存，强制要求云端联网注册，甚至在后台持续扫描或收集用户数据。',
    storyP2: 'Vloam 诞生就是为了抵抗这种浮躁与臃肿。从高效实用的桌面原生客户端，到即开即用的 Web 效率工具与匿名健康的专业在线自测，我们崇尚纯粹好用与本地隐私优先，让数字产品回归本源。',
    missionTitle: '工坊愿景',
    missionP1: '为追求专注、高效与数据安全的人群提供启动即用、无干扰、绝不将用户数据商业化的纯净产品矩阵。',
    pillarsTitle: '我们的不同之处',
  },
  securityPage: {
    title: '安全与本地隐私架构白皮书',
    subtitle: '公开透明的工程安全实践、密钥存储机制与数据隔离规范。',
    localFirstTitle: '1. 本地优先（Local-First）原则',
    localFirstP1: '我们坚信：数据库连接串、SQL 历史日志、剪贴板历史以及心理测评答卷等核心资产，除非用户手动导出，否则绝无任何理由上传到外部服务器。',
    credentialTitle: '2. 操作系统级安全区集成',
    credentialP1: 'Vloam 桌面端软件直接委托操作系统底层安全区（macOS Keychain 与 Windows DPAPI）存储关键密码，绝不在磁盘以明文形式保存敏感数据。',
    telemetryTitle: '3. 零云端隐私遥测',
    telemetryP1: '我们的工具不扫描剪贴板内容、不分析执行的 SQL 语义、不上传数据库表结构信息，杜绝任何侵犯用户隐私的隐蔽行为。',
    healthTitle: '4. 纯前端离线自测机制',
    healthP1: 'ADHD Test 和 BPD Test 均采用纯前端离线运算模型。测评题目回答只保留在当前标签页内存中，关闭页面即刻销毁，无任何服务器数据库留存。',
    contactTitle: '5. 安全问题联络通道',
    contactP1: '如果你在 Vloam 旗下任何产品中发现安全隐患或漏洞，请直接发送邮件至 security@vloam.com，我们将第一时间评估并响应。',
  },
  footer: {
    brandDesc: '专注、轻量、隐私优先的实用工具与在线服务矩阵，涵盖桌面端效率软件、Web 可视化工具与专业在线测评。',
    devTitle: '开发者工具',
    healthTitle: '自评与健康',
    trustTitle: '团队与信任',
    rights: '保留所有权利。',
    motto: '本地优先 · 拒绝臃肿 · 原生人体工学',
    privacy: '隐私承诺',
    terms: '服务条款',
    about: '关于工坊',
    security: '安全架构白皮书',
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
    products: 'Productos',
    specs: 'Especificaciones',
    radar: 'Actualizaciones',
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
    products: 'Produits',
    specs: 'Spécifications',
    radar: 'Versions',
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
      security: 'Security Architecture',
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
