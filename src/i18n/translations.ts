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

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    products: string;
    developerTools: string;
    wellnessTools: string;
    philosophy: string;
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
  footer: {
    brandDesc: string;
    devTitle: string;
    healthTitle: string;
    legalTitle: string;
    rights: string;
    motto: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
  };
}

const en: Translation = {
  meta: {
    title: 'Vloam — Focused Developer Utilities & Private Web Tools',
    description: 'Explore the Vloam ecosystem: VloamDb (fast MySQL client), VloamClip (smart clipboard manager), Vloam Mermaid (diagram editor), ADHD Test, and BPD Test.',
  },
  nav: {
    products: 'Products',
    developerTools: 'Developer Tools',
    wellnessTools: 'Self-Assessment',
    philosophy: 'Philosophy',
    faq: 'FAQ',
  },
  hero: {
    badge: 'Software Ecosystem',
    title: 'Focused Utilities & Private Web Tools',
    subtitle: 'High-speed desktop software and evidence-based browser tools built with native ergonomics, local-first privacy, and zero bloat.',
  },
  categories: {
    developerTools: 'Developer & Productivity Tools',
    developerSubtitle: 'Native desktop clients and visual utilities engineered for developer velocity.',
    assessmentTools: 'Online Self-Assessment & Wellness',
    assessmentSubtitle: 'Confidential, evidence-based self-screening tools computed 100% privately in your browser.',
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
      cta: 'Open VloamDb →',
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
      cta: 'Open VloamClip →',
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
  values: {
    label: 'Philosophy',
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
        a: 'Vloam is an independent software studio building developer tools (VloamDb, VloamClip, Vloam Mermaid) and privacy-first online self-assessment tools (ADHD Test, BPD Test).',
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
  footer: {
    brandDesc: 'Focused desktop utilities and private web tools built for speed, local-first privacy, and distraction-free workflows.',
    devTitle: 'Developer Tools',
    healthTitle: 'Self-Assessment',
    legalTitle: 'Legal & Contact',
    rights: 'All rights reserved.',
    motto: 'Local-First · Zero Bloat · Private by Design',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    about: 'About Team',
    contact: 'Support',
  },
};

const zh: Translation = {
  meta: {
    title: 'Vloam — 专注、轻量、高生产力的工具矩阵',
    description: '探索 Vloam 矩阵：VloamDb（轻量 MySQL 客户端）、VloamClip（带粘贴队列的剪贴板工具）、Vloam Mermaid（图表编辑器）、ADHD 测评与 BPD 测评。',
  },
  nav: {
    products: '产品矩阵',
    developerTools: '开发者工具',
    wellnessTools: '专业自评工具',
    philosophy: '设计理念',
    faq: '常见问题',
  },
  hero: {
    badge: 'Vloam 软件生态',
    title: '专注效能工具与隐私优先服务矩阵',
    subtitle: '为全球工程师与追求专注的用户匠心打造：极速响应、极低资源开销、严格的本地离线隐私守护，让工具回归纯粹。',
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
      cta: '访问 VloamDb 官网 →',
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
      cta: '访问 VloamClip 官网 →',
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
  values: {
    label: '设计哲学',
    title: '我们的工程核心原则',
    items: {
      speedTitle: '极致原生性能',
      speedDesc: '坚决拒绝为了简单功能消耗数吉字节内存的臃肿架构。Vloam 工具秒开秒关，安静守候。',
      privacyTitle: '严格本地离线优先',
      privacyDesc: '无论是数据库密码、剪贴板历史，还是心理自测答卷，你的数据必须且只能保存在本地。',
      kbdTitle: '以人为本的极客体验',
      kbdDesc: '精心推敲的快捷键、全局指令与直觉化界面，让你在专注心流中流畅完成一切。',
    },
  },
  faq: {
    label: '答疑解惑',
    title: '常见问题与解答',
    items: [
      {
        q: '什么是 Vloam 软件生态？',
        a: 'Vloam 是一家独立的软件工作室，旗下涵盖开发者工具（VloamDb、VloamClip、Vloam Mermaid）与隐私至上的在线专业自评工具（ADHD Test、BPD Test）。',
      },
      {
        q: '我的数据或测评结果会被上传到云端服务器吗？',
        a: '绝不。所有 Vloam 工具均遵循数据主权原则：桌面工具本地存储密码和记录，Web 测评工具直接在浏览器前端进行打分计算，服务器无任何数据沉淀。',
      },
      {
        q: '支持哪些操作系统与运行环境？',
        a: '桌面软件原生支持 macOS（Apple Silicon 与 Intel）和 Windows（10/11 x64）；Web 工具在所有现代浏览器中均可流畅运行。',
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
  footer: {
    brandDesc: '专注、轻量、高生产力的桌面工具与隐私在线服务矩阵，致力于为用户提供极速响应与本地隐私守护。',
    devTitle: '开发者工具',
    healthTitle: '自评与健康',
    legalTitle: '团队与信任',
    rights: '保留所有权利。',
    motto: '本地优先 · 拒绝臃肿 · 原生人体工学',
    privacy: '隐私政策',
    terms: '服务条款',
    about: '关于我们',
    contact: '联系支持',
  },
};

const es: Translation = {
  ...en,
  meta: {
    title: 'Vloam — Herramientas para desarrolladores y utilidades privadas',
    description: 'Explora el ecosistema Vloam: VloamDb (cliente MySQL), VloamClip (portapapeles), Vloam Mermaid (diagramas), test de TDAH y test de TLP.',
  },
  nav: {
    products: 'Productos',
    developerTools: 'Desarrollo',
    wellnessTools: 'Autoevaluación',
    philosophy: 'Filosofía',
    faq: 'FAQ',
  },
  categories: {
    developerTools: '🛠️ Herramientas de desarrollo y productividad',
    developerSubtitle: 'Clientes de escritorio nativos y utilidades visuales creadas para la máxima velocidad del desarrollador.',
    assessmentTools: '🧠 Autoevaluación en línea y bienestar',
    assessmentSubtitle: 'Herramientas de autoevaluación confidenciales y basadas en evidencia calculadas 100% en tu navegador.',
  },
  products: {
    db: { ...en.products.db, cta: 'Abrir VloamDb →' },
    clip: { ...en.products.clip, cta: 'Abrir VloamClip →' },
    mermaid: { ...en.products.mermaid, cta: 'Abrir Mermaid Editor →' },
    adhd: { ...en.products.adhd, cta: 'Iniciar test de TDAH →' },
    bpd: { ...en.products.bpd, cta: 'Iniciar test de TLP →' },
  },
};

const fr: Translation = {
  ...en,
  meta: {
    title: 'Vloam — Outils pour développeurs et utilitaires privés',
    description: 'Explorez l’écosystème Vloam : VloamDb (client MySQL), VloamClip (presse-papiers), Vloam Mermaid (diagrammes), tests TDAH et TPL.',
  },
  nav: {
    products: 'Produits',
    developerTools: 'Développement',
    wellnessTools: 'Auto-évaluation',
    philosophy: 'Philosophie',
    faq: 'FAQ',
  },
  categories: {
    developerTools: '🛠️ Outils développeur & productivité',
    developerSubtitle: 'Clients de bureau natifs et utilitaires visuels conçus pour la vitesse.',
    assessmentTools: '🧠 Auto-évaluation en ligne & bien-être',
    assessmentSubtitle: 'Outils d’auto-évaluation confidentiels et fondés sur des preuves, calculés à 100% dans votre navigateur.',
  },
  products: {
    db: { ...en.products.db, cta: 'Ouvrir VloamDb →' },
    clip: { ...en.products.clip, cta: 'Ouvrir VloamClip →' },
    mermaid: { ...en.products.mermaid, cta: 'Ouvrir Mermaid Editor →' },
    adhd: { ...en.products.adhd, cta: 'Passer le test TDAH →' },
    bpd: { ...en.products.bpd, cta: 'Passer le test TPL →' },
  },
};

function createMirror(devNav: string, healthNav: string, dbCta: string, clipCta: string, mermaidCta: string, adhdCta: string, bpdCta: string): Translation {
  return {
    ...en,
    nav: {
      ...en.nav,
      developerTools: devNav,
      wellnessTools: healthNav,
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
  de: createMirror('Entwicklertools', 'Selbsttests', 'VloamDb öffnen →', 'VloamClip öffnen →', 'Mermaid Editor öffnen →', 'ADHD Test starten →', 'BPD Test starten →'),
  pt: createMirror('Ferramentas de Desenvolvimento', 'Autoavaliação', 'Abrir VloamDb →', 'Abrir VloamClip →', 'Abrir Editor Mermaid →', 'Fazer Teste TDAH →', 'Fazer Teste TPB →'),
  it: createMirror('Strumenti di Sviluppo', 'Autovalutazione', 'Apri VloamDb →', 'Apri VloamClip →', 'Apri Mermaid Editor →', 'Inizia Test ADHD →', 'Inizia Test BPD →'),
  nl: createMirror('Ontwikkelaarstools', 'Zelftests', 'Open VloamDb →', 'Open VloamClip →', 'Open Mermaid Editor →', 'Start ADHD-test →', 'Start BPD-test →'),
  pl: createMirror('Narzędzia developerskie', 'Autodiagnoza', 'Otwórz VloamDb →', 'Otwórz VloamClip →', 'Otwórz Mermaid Editor →', 'Rozpocznij test ADHD →', 'Rozpocznij test BPD →'),
  ro: createMirror('Instrumente Dezvoltator', 'Autoevaluare', 'Deschide VloamDb →', 'Deschide VloamClip →', 'Deschide Editor Mermaid →', 'Începe testul ADHD →', 'Începe testul BPD →'),
};

export function useTranslations(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
