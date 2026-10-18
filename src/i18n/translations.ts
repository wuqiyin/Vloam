import type { Locale } from './config';

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    products: string;
    philosophy: string;
    faq: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  dbCard: {
    tag: string;
    os: string;
    title: string;
    slogan: string;
    desc: string;
    features: {
      speedTitle: string;
      speedDesc: string;
      safetyTitle: string;
      safetyDesc: string;
      kbdTitle: string;
      kbdDesc: string;
      privacyTitle: string;
      privacyDesc: string;
    };
    cta: string;
    links: {
      features: string;
      alternatives: string;
      guides: string;
      pricing: string;
    };
  };
  clipCard: {
    tag: string;
    os: string;
    title: string;
    slogan: string;
    desc: string;
    features: {
      queueTitle: string;
      queueDesc: string;
      searchTitle: string;
      searchDesc: string;
      favTitle: string;
      favDesc: string;
      privacyTitle: string;
      privacyDesc: string;
    };
    cta: string;
    links: {
      features: string;
      guides: string;
      changelog: string;
    };
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
    items: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    brandDesc: string;
    productsTitle: string;
    resourcesTitle: string;
    legalTitle: string;
    rights: string;
    motto: string;
    navicatAlt: string;
    mysqlGuides: string;
    releaseNotes: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
  };
}

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: 'Vloam — Focused, Lightweight Developer Tools',
      description: 'Vloam builds fast, local-first desktop developer tools for macOS and Windows. Discover VloamDb (lean MySQL client) and VloamClip (clipboard manager with paste queue).',
    },
    nav: {
      products: 'Products',
      philosophy: 'Philosophy',
      faq: 'FAQ',
    },
    hero: {
      badge: 'Developer Productivity Suite',
      title: 'Focused, Lightweight Developer Tools',
      subtitle: 'High-speed desktop utilities built with native ergonomics, low memory overhead, and local-first privacy. Designed for developers on macOS & Windows.',
    },
    dbCard: {
      tag: 'Database Client',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'The Fast, Focused MySQL Client for Developers',
      desc: 'A lightning-fast, keyboard-first MySQL GUI designed to eliminate the bloat of traditional tools. Features production safety guards, environment color tags, instant table fuzzy search, and local-first privacy.',
      features: {
        speedTitle: 'Instant Startup:',
        speedDesc: 'Starts in under 0.5s with near-zero memory footprint. No Electron lag.',
        safetyTitle: 'Production Safe Guard:',
        safetyDesc: 'Color-coded environment tags and dedicated read-only locks prevent accidental data destruction.',
        kbdTitle: 'Keyboard-First:',
        kbdDesc: 'Double-tap Shift for instant table switching, Ctrl+F12 column navigation, and snippet expansion.',
        privacyTitle: 'Local-First Privacy:',
        privacyDesc: 'Database connection strings, credentials, and query histories remain safely on your hardware.',
      },
      cta: 'Visit VloamDb Website →',
      links: {
        features: 'Features Overview',
        alternatives: 'Compare vs Navicat / DataGrip',
        guides: 'MySQL Guides',
        pricing: 'Pricing & Trial',
      },
    },
    clipCard: {
      tag: 'Clipboard & Productivity',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Local-First Clipboard Manager with FIFO/LIFO Queue',
      desc: 'A modern, distraction-free desktop clipboard manager. Streamline repetitive data entry, multi-step code refactoring, and daily multitasking with sequential multi-item copy and ordered paste queues.',
      features: {
        queueTitle: 'FIFO / LIFO Paste Queue:',
        queueDesc: 'Copy multiple code snippets or form values in sequence and paste them one by one automatically.',
        searchTitle: 'Instant Fuzzy Search:',
        searchDesc: 'Sub-millisecond full-text history search across plain text, formatted code, and URLs.',
        favTitle: 'Pinned Favorites:',
        favDesc: 'Organize reusable shell commands, frequent SQL snippets, and templates that persist forever.',
        privacyTitle: 'Zero Cloud Tracking:',
        privacyDesc: '100% on-device storage. No external telemetry or cloud sync on sensitive clipboard data.',
      },
      cta: 'Visit VloamClip Website →',
      links: {
        features: 'Features',
        guides: 'Usage Guides',
        changelog: 'Changelog',
      },
    },
    values: {
      label: 'Philosophy',
      title: 'Built for Developer Flow',
      items: {
        speedTitle: 'Peak Performance',
        speedDesc: 'We refuse bloated runtimes that consume gigabytes of memory for simple tasks. Vloam tools start instantly and run quietly in the background.',
        privacyTitle: 'Strict Local-First Privacy',
        privacyDesc: 'Your database credentials and clipboard history represent sensitive intellectual property. They belong strictly on your local device, never on third-party servers.',
        kbdTitle: 'Keyboard-Driven Ergonomics',
        kbdDesc: 'Carefully mapped shortcuts, fuzzy command pickers, and intuitive navigation allow developers to stay in deep flow without reaching for the mouse.',
      },
    },
    faq: {
      label: 'Questions & Answers',
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What is Vloam?',
          a: 'Vloam is an independent software studio building high-performance, distraction-free desktop developer tools. We focus on native performance, clean ergonomics, and local-first data privacy for software engineers.',
        },
        {
          q: 'Do Vloam tools upload database credentials or clipboard contents to the cloud?',
          a: 'No. All Vloam tools (including VloamDb and VloamClip) are engineered with a strict local-first architecture. Database connection strings, passwords, query history, and clipboard contents stay exclusively on your local machine and never touch external cloud servers.',
        },
        {
          q: 'Which operating systems and processor architectures are supported?',
          a: 'Both VloamDb and VloamClip offer native desktop builds for macOS (Apple Silicon M1/M2/M3/M4 & Intel x86_64) and modern Windows (10/11 x64).',
        },
        {
          q: 'What is the pricing model and trial policy?',
          a: 'Each tool provides a generous 15-day unrestricted full trial upon launch. After the trial period, users can unlock the software via a simple, affordable one-time purchase for perpetual lifetime access. There are no forced subscriptions or recurring fees.',
        },
        {
          q: 'How can I submit feature requests or report bugs?',
          a: 'We welcome developer feedback! You can reach our engineering team directly via email at support@vloam.com, or check out our public changelogs and community issue trackers.',
        },
      ],
    },
    footer: {
      brandDesc: 'Focused, lightweight developer tools built for speed, local-first privacy, and distraction-free daily workflows.',
      productsTitle: 'Products',
      resourcesTitle: 'Resources',
      legalTitle: 'Legal & Trust',
      rights: 'All rights reserved.',
      motto: 'Local-First · Zero Bloat · Native Ergonomics',
      navicatAlt: 'Navicat & DataGrip Alternative',
      mysqlGuides: 'MySQL Guides',
      releaseNotes: 'Release Notes',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      about: 'About Team',
      contact: 'Contact Support',
    },
  },

  zh: {
    meta: {
      title: 'Vloam — 专注、轻量、高生产力的开发者工具矩阵',
      description: 'Vloam 为 macOS 和 Windows 构建快速、本地离线优先的桌面开发者工具。探索 VloamDb（轻量 MySQL 客户端）与 VloamClip（带粘贴队列的剪贴板管理工具）。',
    },
    nav: {
      products: '产品矩阵',
      philosophy: '设计理念',
      faq: '常见问题',
    },
    hero: {
      badge: '开发者效能工具套件',
      title: '专注、轻量、高生产力的开发者工具',
      subtitle: '为 macOS 与 Windows 开发者匠心打造：极速响应、极低内存占用、本地隐私至上，助你在专注沉浸的心流中高效编码。',
    },
    dbCard: {
      tag: '数据库客户端',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: '专为开发者打造的轻快、专注 MySQL 客户端',
      desc: '告别笨重庞大的传统数据库工具。原生极速启动、多环境醒目颜色标识、严谨的生产只读保护、双击 Shift 极速表检索与本地数据绝对安全。',
      features: {
        speedTitle: '瞬时启动：',
        speedDesc: '启动时间小于 0.5 秒，内存消耗极低，无 Electron 卡顿感。',
        safetyTitle: '生产安全防护：',
        safetyDesc: '醒目的环境颜色标签与强制只读锁定，彻底防范误改、误删生产数据的惨剧。',
        kbdTitle: '键盘优先体验：',
        kbdDesc: '双击 Shift 模糊直达数据表，Ctrl+F12 快速定位字段，内置高效 SQL 片段。',
        privacyTitle: '本地离线隐私：',
        privacyDesc: '数据库连接配置、账号密码和查询历史仅驻留本地设备，绝不上传云端。',
      },
      cta: '访问 VloamDb 官网 →',
      links: {
        features: '核心功能概览',
        alternatives: 'Navicat / DataGrip 深度对比',
        guides: 'MySQL 客户端实操指南',
        pricing: '试用与授权方案',
      },
    },
    clipCard: {
      tag: '剪贴板与生产力',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: '本地优先、支持先进粘贴队列的剪贴板管理利器',
      desc: '专为程序员和重度文字工作者设计的现代剪贴板工具。连续批量复制，按先进先出（FIFO）或后进先出（LIFO）队列依次粘贴，彻底简化表单录入与代码重构。',
      features: {
        queueTitle: 'FIFO / LIFO 粘贴队列：',
        queueDesc: '按顺序批量复制多段代码或配置，随后一键依序粘贴，告别频繁来回切换窗口。',
        searchTitle: '微秒级模糊搜索：',
        searchDesc: '全文本历史毫秒级极速定位，覆盖纯文本、富文本代码块与链接。',
        favTitle: '常用模板与收藏：',
        favDesc: '分类固定高频 Shell 脚本、常用 SQL 片段与代码模版，永不丢失。',
        privacyTitle: '零云端追踪：',
        privacyDesc: '100% 本地加密存储，绝无任何网络遥测与剪贴板数据云端同步，守护隐私资产。',
      },
      cta: '访问 VloamClip 官网 →',
      links: {
        features: '功能介绍',
        guides: '使用指南',
        changelog: '更新日志',
      },
    },
    values: {
      label: '设计哲学',
      title: '为极客心流而生',
      items: {
        speedTitle: '极致原生性能',
        speedDesc: '我们坚决拒绝为了一个简单小工具引入数吉字节内存开销的臃肿架构。Vloam 工具秒开秒关，在后台安静守候。',
        privacyTitle: '严格本地离线优先',
        privacyDesc: '数据库凭证与剪贴板历史是开发者的核心资产与敏感隐私。它们必须且只能安全保存在本地硬件之中。',
        kbdTitle: '沉浸式键盘人体工学',
        kbdDesc: '精心推敲的快捷键映射、全局模糊指令盘与直觉化操作流，让你无需触碰鼠标即可畅快完成高频操作。',
      },
    },
    faq: {
      label: '答疑解惑',
      title: '常见问题与解答',
      items: [
        {
          q: '什么是 Vloam 开发者生态？',
          a: 'Vloam 是一家独立的桌面软件开发工作室，致力于为软件工程师打造高性能、无干扰、纯粹好用的本地桌面工具。',
        },
        {
          q: 'Vloam 工具会把我的数据库配置或剪贴板内容同步到云端吗？',
          a: '绝不。Vloam 系列工具（包括 VloamDb 与 VloamClip）全部采用严格的本地离线优先（Local-First）架构，连接配置、密码、查询日志和剪贴板数据仅存储在本地设备，绝不经过外部服务器。',
        },
        {
          q: '支持哪些操作系统与芯片架构？',
          a: 'VloamDb 与 VloamClip 均针对 macOS（支持 Apple Silicon M系列与 Intel x86_64）以及主流 Windows（10/11 x64）提供独立原生编译版本。',
        },
        {
          q: '授权政策与免费试用机制是怎样的？',
          a: '每个工具首次打开均提供 15 天无任何功能阉割的完整免费试用期。试用结束后，用户可通过实惠透明的一次性买断方式解锁永久使用，无强制按月按年订阅。',
        },
        {
          q: '如何反馈使用问题或提出功能建议？',
          a: '我们非常重视每位开发者的声音！你可以直接发送邮件至 support@vloam.com 与开发团队沟通，或在公开的 GitHub issue 列表中提出反馈。',
        },
      ],
    },
    footer: {
      brandDesc: '专注、轻量、高生产力的桌面开发者工具，致力于为日常编程工作流提供极速响应与本地隐私守护。',
      productsTitle: '旗下产品',
      resourcesTitle: '技术资源',
      legalTitle: '团队与信任',
      rights: '保留所有权利。',
      motto: '本地优先 · 拒绝臃肿 · 原生人体工学',
      navicatAlt: 'Navicat / DataGrip 替代方案',
      mysqlGuides: 'MySQL 实战指南',
      releaseNotes: '发布说明',
      privacy: '隐私政策',
      terms: '服务条款',
      about: '关于我们',
      contact: '联系技术支持',
    },
  },

  es: {
    meta: {
      title: 'Vloam — Herramientas para desarrolladores ligeras y enfocadas',
      description: 'Vloam crea herramientas de escritorio rápidas y locales para macOS y Windows. Descubre VloamDb (cliente MySQL ligero) y VloamClip (gestor de portapapeles con cola).',
    },
    nav: { products: 'Productos', philosophy: 'Filosofía', faq: 'Preguntas frecuentes' },
    hero: {
      badge: 'Suite de productividad para desarrolladores',
      title: 'Herramientas enfocadas y ligeras para desarrolladores',
      subtitle: 'Utilidades de escritorio de alta velocidad creadas con ergonomía nativa, bajo consumo de memoria y privacidad local para macOS y Windows.',
    },
    dbCard: {
      tag: 'Cliente de base de datos',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'El cliente MySQL rápido y enfocado para desarrolladores',
      desc: 'Una interfaz gráfica MySQL ultrarrápida pensada para el teclado, sin la pesadez de las herramientas tradicionales. Protección de producción, etiquetas de color y búsqueda instantánea.',
      features: {
        speedTitle: 'Inicio instantáneo:',
        speedDesc: 'Arranca en menos de 0.5 s con memoria mínima. Sin retrasos de Electron.',
        safetyTitle: 'Protección de producción:',
        safetyDesc: 'Etiquetas de entorno con código de color y bloqueo de solo lectura.',
        kbdTitle: 'Diseñado para el teclado:',
        kbdDesc: 'Doble pulsación de Shift para buscar tablas y Ctrl+F12 para columnas.',
        privacyTitle: 'Privacidad local:',
        privacyDesc: 'Credenciales e historial de consultas permanecen en tu equipo.',
      },
      cta: 'Visitar sitio web de VloamDb →',
      links: {
        features: 'Características',
        alternatives: 'Comparativa vs Navicat / DataGrip',
        guides: 'Guías de MySQL',
        pricing: 'Precios y prueba',
      },
    },
    clipCard: {
      tag: 'Portapapeles y productividad',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Gestor de portapapeles local con cola de pegado FIFO/LIFO',
      desc: 'Gestor de portapapeles moderno sin distracciones. Copia múltiple secuencial y pegado ordenado para formularios y refactorizaciones.',
      features: {
        queueTitle: 'Cola de pegado FIFO / LIFO:',
        queueDesc: 'Copia varios fragmentos y pégalos en orden automáticamente.',
        searchTitle: 'Búsqueda difusa instantánea:',
        searchDesc: 'Búsqueda en todo el historial en milisegundos.',
        favTitle: 'Favoritos fijados:',
        favDesc: 'Organiza comandos shell y fragmentos SQL permanentes.',
        privacyTitle: 'Sin rastreo en la nube:',
        privacyDesc: 'Almacenamiento 100% en el dispositivo sin telemetría.',
      },
      cta: 'Visitar sitio web de VloamClip →',
      links: {
        features: 'Características',
        guides: 'Guías de uso',
        changelog: 'Registro de cambios',
      },
    },
    values: {
      label: 'Filosofía',
      title: 'Diseñado para el ritmo del desarrollador',
      items: {
        speedTitle: 'Rendimiento máximo',
        speedDesc: 'Rechazamos los entornos pesados. Vloam inicia al instante y trabaja en silencio.',
        privacyTitle: 'Privacidad estricta y local',
        privacyDesc: 'Tus credenciales y datos pertenecen exclusivamente a tu máquina.',
        kbdTitle: 'Ergonomía con el teclado',
        kbdDesc: 'Atajos y navegación intuitiva para no tener que usar el ratón.',
      },
    },
    faq: {
      label: 'Preguntas y respuestas',
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué es Vloam?',
          a: 'Vloam es un estudio de software que crea herramientas de escritorio de alto rendimiento y sin distracciones para programadores.',
        },
        {
          q: '¿Se suben mis credenciales o portapapeles a la nube?',
          a: 'No. Todas las herramientas de Vloam operan 100% en local y nunca envían información a servidores externos.',
        },
        {
          q: '¿Qué sistemas operativos son compatibles?',
          a: 'VloamDb y VloamClip ofrecen binarios nativos para macOS (Apple Silicon e Intel) y Windows (10/11 x64).',
        },
        {
          q: '¿Cuál es el modelo de precios?',
          a: 'Ofrecemos 15 días de prueba gratuita sin restricciones y luego compra única de por vida, sin suscripciones.',
        },
        {
          q: '¿Cómo puedo obtener soporte?',
          a: 'Escríbenos directamente a support@vloam.com o mediante nuestros repositorios comunitarios en GitHub.',
        },
      ],
    },
    footer: {
      brandDesc: 'Herramientas de escritorio ligeras y enfocadas para desarrolladores, diseñadas para velocidad y privacidad.',
      productsTitle: 'Productos',
      resourcesTitle: 'Recursos',
      legalTitle: 'Legal y confianza',
      rights: 'Todos los derechos reservados.',
      motto: 'Local · Sin sobrecarga · Ergonomía nativa',
      navicatAlt: 'Alternativa a Navicat y DataGrip',
      mysqlGuides: 'Guías de MySQL',
      releaseNotes: 'Notas de versión',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      about: 'Sobre nosotros',
      contact: 'Soporte técnico',
    },
  },

  fr: {
    meta: {
      title: 'Vloam — Outils légers et ciblés pour développeurs',
      description: 'Vloam conçoit des outils bureautiques rapides et locaux pour macOS et Windows. Découvrez VloamDb (client MySQL) et VloamClip (presse-papiers avec file).',
    },
    nav: { products: 'Produits', philosophy: 'Philosophie', faq: 'FAQ' },
    hero: {
      badge: 'Suite de productivité développeur',
      title: 'Outils légers et ciblés pour développeurs',
      subtitle: 'Utilitaires de bureau ultra-rapides, sobres en mémoire et respectueux de la vie privée locale pour macOS et Windows.',
    },
    dbCard: {
      tag: 'Client Base de données',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'Le client MySQL rapide et ciblé pour les développeurs',
      desc: 'Une interface MySQL ultra-rapide axée sur le clavier pour éliminer la lourdeur des outils classiques. Balises de couleur d’environnement et mode lecture seule.',
      features: {
        speedTitle: 'Démarrage instantané :',
        speedDesc: 'Lance en moins de 0,5 s avec une empreinte mémoire minime. Sans lag Electron.',
        safetyTitle: 'Protection en production :',
        safetyDesc: 'Codes couleur et verrou lecture seule pour éviter les suppressions accidentelles.',
        kbdTitle: 'Clavier d’abord :',
        kbdDesc: 'Double Shift pour naviguer dans les tables et Ctrl+F12 pour les colonnes.',
        privacyTitle: 'Confidentialité locale :',
        privacyDesc: 'Vos identifiants et l’historique des requêtes restent sur votre appareil.',
      },
      cta: 'Visiter le site de VloamDb →',
      links: {
        features: 'Fonctionnalités',
        alternatives: 'Comparatif vs Navicat / DataGrip',
        guides: 'Guides MySQL',
        pricing: 'Tarifs et essai',
      },
    },
    clipCard: {
      tag: 'Presse-papiers & Productivité',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Gestionnaire de presse-papiers local avec file FIFO/LIFO',
      desc: 'Gestionnaire moderne sans distraction. Copiez plusieurs éléments en séquence et collez-les dans l’ordre.',
      features: {
        queueTitle: 'File de collage FIFO / LIFO :',
        queueDesc: 'Copiez plusieurs blocs et collez-les séquentiellement sans changer de fenêtre.',
        searchTitle: 'Recherche floue instantanée :',
        searchDesc: 'Retrouvez n’importe quel élément de l’historique en une fraction de seconde.',
        favTitle: 'Favoris épinglés :',
        favDesc: 'Conservez vos commandes shell et fragments SQL réutilisables.',
        privacyTitle: 'Zéro suivi cloud :',
        privacyDesc: 'Stockage 100% sur l’appareil sans télémétrie externe.',
      },
      cta: 'Visiter le site de VloamClip →',
      links: {
        features: 'Fonctionnalités',
        guides: 'Guides d’utilisation',
        changelog: 'Historique des versions',
      },
    },
    values: {
      label: 'Philosophie',
      title: 'Pensé pour le flux de travail',
      items: {
        speedTitle: 'Performance native',
        speedDesc: 'Nous rejetons les applications lourdes. Vloam démarre à la seconde et travaille en silence.',
        privacyTitle: 'Données strictement locales',
        privacyDesc: 'Vos mots de passe et données restent exclusivement sur votre machine locale.',
        kbdTitle: 'Ergonomie clavier',
        kbdDesc: 'Raccourcis soignés pour coder sans quitter le clavier.',
      },
    },
    faq: {
      label: 'Questions & Réponses',
      title: 'Foire aux questions',
      items: [
        {
          q: 'Qu’est-ce que Vloam ?',
          a: 'Vloam est un studio logiciel indépendant créant des outils de bureau rapides et ciblés pour développeurs.',
        },
        {
          q: 'Mes données sont-elles envoyées sur le cloud ?',
          a: 'Non. Tous les outils Vloam fonctionnent strictement en local sans aucun transfert sur des serveurs tiers.',
        },
        {
          q: 'Quels systèmes d’exploitation sont supportés ?',
          a: 'VloamDb et VloamClip sont compilés nativement pour macOS (Apple Silicon et Intel) et Windows (10/11 x64).',
        },
        {
          q: 'Quel est le modèle tarifaire ?',
          a: 'Un essai complet de 15 jours sans limitation, suivi d’un achat unique à vie sans abonnement récurrent.',
        },
        {
          q: 'Comment obtenir de l’aide ?',
          a: 'Contactez-nous à support@vloam.com ou via nos dépôts communautaires GitHub.',
        },
      ],
    },
    footer: {
      brandDesc: 'Outils de bureau légers et focalisés pour les développeurs, conçus pour la vitesse et la confidentialité.',
      productsTitle: 'Produits',
      resourcesTitle: 'Ressources',
      legalTitle: 'Confiance & Légal',
      rights: 'Tous droits réservés.',
      motto: 'Local · Sans lourdeur · Ergonomie native',
      navicatAlt: 'Alternative à Navicat & DataGrip',
      mysqlGuides: 'Guides MySQL',
      releaseNotes: 'Notes de version',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d’utilisation',
      about: 'À propos',
      contact: 'Support client',
    },
  },

  de: {
    meta: {
      title: 'Vloam — Fokussierte, leichtgewichtige Entwicklertools',
      description: 'Vloam entwickelt schnelle, lokale Desktop-Tools für macOS und Windows. Entdecken Sie VloamDb (schlanker MySQL-Client) und VloamClip (Zwischenablage mit Warteschlange).',
    },
    nav: { products: 'Produkte', philosophy: 'Philosophie', faq: 'FAQ' },
    hero: {
      badge: 'Entwickler-Produktivitäts-Suite',
      title: 'Fokussierte, leichtgewichtige Entwicklertools',
      subtitle: 'Rasante Desktop-Tools mit nativer Ergonomie, minimalem Speicherbedarf und kompromisslosem lokalem Datenschutz für macOS & Windows.',
    },
    dbCard: {
      tag: 'Datenbank-Client',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'Der schnelle, fokussierte MySQL-Client für Entwickler',
      desc: 'Eine blitzschnelle, tastaturzentrierte MySQL-GUI ohne den Ballast herkömmlicher Werkzeuge. Farbige Umgebungskennzeichnung und Schreibschutz.',
      features: {
        speedTitle: 'Sofortiger Start:',
        speedDesc: 'Startet in unter 0,5 Sekunden mit minimalem RAM-Verbrauch. Kein Electron-Lag.',
        safetyTitle: 'Produktions-Sicherheit:',
        safetyDesc: 'Farbliche Tags und Read-Only-Sperre verhindern unbeabsichtigte Löschungen.',
        kbdTitle: 'Tastatur-Fokus:',
        kbdDesc: 'Doppel-Shift zur schnellen Tabellensuche, Strg+F12 zur Spaltennavigation.',
        privacyTitle: 'Lokale Privatsphäre:',
        privacyDesc: 'Verbindungsdaten und Abfragehistorie verbleiben ausschließlich lokal.',
      },
      cta: 'VloamDb Website besuchen →',
      links: {
        features: 'Funktionsübersicht',
        alternatives: 'Vergleich mit Navicat / DataGrip',
        guides: 'MySQL Leitfäden',
        pricing: 'Preise & Testversion',
      },
    },
    clipCard: {
      tag: 'Zwischenablage & Produktivität',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Lokaler Clipboard-Manager mit FIFO/LIFO-Warteschlange',
      desc: 'Moderner Zwischenablage-Manager ohne Ablenkung. Mehrfach kopieren und nacheinander geordnet einfügen für Formulare und Refactoring.',
      features: {
        queueTitle: 'FIFO / LIFO Warteschlange:',
        queueDesc: 'Kopieren Sie Code-Blöcke in Reihe und fügen Sie diese automatisch nacheinander ein.',
        searchTitle: 'Sofortige Fuzzy-Suche:',
        searchDesc: 'Durchsuchen Sie den gesamten Verlauf in Millisekunden.',
        favTitle: 'Angeheftete Favoriten:',
        favDesc: 'Organisieren Sie Shell-Befehle und SQL-Snippets dauerhaft.',
        privacyTitle: 'Kein Cloud-Tracking:',
        privacyDesc: '100% lokaler Speicher ohne externe Telemetrie.',
      },
      cta: 'VloamClip Website besuchen →',
      links: {
        features: 'Funktionen',
        guides: 'Anleitungen',
        changelog: 'Änderungsprotokoll',
      },
    },
    values: {
      label: 'Philosophie',
      title: 'Für den Entwickler-Flow entwickelt',
      items: {
        speedTitle: 'Native Höchstleistung',
        speedDesc: 'Wir lehnen überladene Runtimes ab. Vloam startet blitzschnell und arbeitet unbemerkt im Hintergrund.',
        privacyTitle: 'Strikter lokaler Datenschutz',
        privacyDesc: 'Passwörter und Zwischenablagedaten gehören auf Ihr Gerät, niemals auf fremde Server.',
        kbdTitle: 'Tastatur-Ergonomie',
        kbdDesc: 'Durchdachte Shortcuts und Befehlspaletten für ununterbrochene Konzentration.',
      },
    },
    faq: {
      label: 'Fragen & Antworten',
      title: 'Häufig gestellte Fragen',
      items: [
        {
          q: 'Was ist Vloam?',
          a: 'Vloam ist ein unabhängiges Studio für performante und ablenkungsfreie Desktop-Entwicklertools.',
        },
        {
          q: 'Werden Daten in die Cloud übertragen?',
          a: 'Nein. Alle Vloam-Tools laufen streng lokal und senden keinerlei sensible Daten an externe Server.',
        },
        {
          q: 'Welche Betriebssysteme werden unterstützt?',
          a: 'VloamDb und VloamClip bieten native Versionen für macOS (Apple Silicon & Intel) und Windows (10/11 x64).',
        },
        {
          q: 'Wie sieht das Preismodell aus?',
          a: '15 Tage uneingeschränkte Testphase, danach einmaliger Kauf für unbegrenzte Nutzung ohne Abonnement.',
        },
        {
          q: 'Wo erhalte ich Unterstützung?',
          a: 'Schreiben Sie uns an support@vloam.com oder besuchen Sie unsere GitHub-Community.',
        },
      ],
    },
    footer: {
      brandDesc: 'Leichtgewichtige Entwicklertools für maximale Geschwindigkeit und kompromisslose Privatsphäre.',
      productsTitle: 'Produkte',
      resourcesTitle: 'Ressourcen',
      legalTitle: 'Rechtliches',
      rights: 'Alle Rechte vorbehalten.',
      motto: 'Lokal · Schlank · Native Ergonomie',
      navicatAlt: 'Alternative zu Navicat & DataGrip',
      mysqlGuides: 'MySQL Ratgeber',
      releaseNotes: 'Versionshinweise',
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      about: 'Über uns',
      contact: 'Support kontaktieren',
    },
  },

  pt: {
    meta: {
      title: 'Vloam — Ferramentas leves e focadas para desenvolvedores',
      description: 'Vloam desenvolve ferramentas desktop rápidas e locais para macOS e Windows. Conheça o VloamDb (cliente MySQL) e o VloamClip (gerenciador de área de transferência).',
    },
    nav: { products: 'Produtos', philosophy: 'Filosofia', faq: 'Perguntas frequentes' },
    hero: {
      badge: 'Suíte de produtividade para devs',
      title: 'Ferramentas leves e focadas para desenvolvedores',
      subtitle: 'Utilitários desktop de alta velocidade com ergonomia nativa, baixo consumo de memória e privacidade local para macOS e Windows.',
    },
    dbCard: {
      tag: 'Cliente de Banco de Dados',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'O cliente MySQL rápido e focado para desenvolvedores',
      desc: 'Uma interface gráfica MySQL veloz orientada ao teclado, sem a sobrecarga das ferramentas antigas. Proteção de produção com etiquetas coloridas e modo somente leitura.',
      features: {
        speedTitle: 'Início instantâneo:',
        speedDesc: 'Inicia em menos de 0,5s com uso mínimo de memória. Sem lentidão de Electron.',
        safetyTitle: 'Proteção de Produção:',
        safetyDesc: 'Etiquetas de ambiente e trava somente leitura para evitar desastres em produção.',
        kbdTitle: 'Teclado em primeiro lugar:',
        kbdDesc: 'Toque duplo no Shift para busca rápida de tabelas e Ctrl+F12 para colunas.',
        privacyTitle: 'Privacidade Local:',
        privacyDesc: 'Credenciais e histórico de queries ficam armazenados apenas no seu computador.',
      },
      cta: 'Visitar site do VloamDb →',
      links: {
        features: 'Recursos',
        alternatives: 'Comparativo vs Navicat / DataGrip',
        guides: 'Guias de MySQL',
        pricing: 'Preços e Teste',
      },
    },
    clipCard: {
      tag: 'Área de Transferência',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Gerenciador de área de transferência com fila FIFO/LIFO',
      desc: 'Gerenciador moderno e sem distrações. Copie múltiplos itens em sequência e cole em ordem para preenchimento de formulários e refatorações.',
      features: {
        queueTitle: 'Fila de Colagem FIFO / LIFO:',
        queueDesc: 'Copie blocos de código em sequência e cole um por um de forma automatizada.',
        searchTitle: 'Busca difusa instantânea:',
        searchDesc: 'Localize qualquer item no histórico completo em milissegundos.',
        favTitle: 'Favoritos fixados:',
        favDesc: 'Organize comandos shell e snippets de SQL reutilizáveis.',
        privacyTitle: 'Zero rastreamento em nuvem:',
        privacyDesc: 'Armazenamento 100% no dispositivo sem telemetria externa.',
      },
      cta: 'Visitar site do VloamClip →',
      links: {
        features: 'Recursos',
        guides: 'Guias de uso',
        changelog: 'Notas de atualização',
      },
    },
    values: {
      label: 'Filosofia',
      title: 'Feito para o foco do desenvolvedor',
      items: {
        speedTitle: 'Desempenho Nativo',
        speedDesc: 'Rejeitamos softwares pesados. O Vloam abre no instante e trabalha em silêncio.',
        privacyTitle: 'Privacidade estritamente local',
        privacyDesc: 'Suas senhas e histórico pertencem unicamente ao seu computador.',
        kbdTitle: 'Ergonomia de Teclado',
        kbdDesc: 'Atalhos intuitivos para programar sem necessidade constante do mouse.',
      },
    },
    faq: {
      label: 'Perguntas e Respostas',
      title: 'Perguntas Frequentes',
      items: [
        {
          q: 'O que é a Vloam?',
          a: 'A Vloam é um estúdio independente que desenvolve utilitários desktop de alta velocidade para programadores.',
        },
        {
          q: 'Meus dados são enviados para a nuvem?',
          a: 'Não. Todas as ferramentas da Vloam funcionam 100% de forma local e segura.',
        },
        {
          q: 'Quais sistemas operacionais são suportados?',
          a: 'O VloamDb e o VloamClip possuem builds nativas para macOS (Apple Silicon e Intel) e Windows (10/11 x64).',
        },
        {
          q: 'Qual é o modelo de preços?',
          a: '15 dias de teste gratuito sem limitações e compra única definitiva sem assinaturas recorrentes.',
        },
        {
          q: 'Como obter suporte?',
          a: 'Envie um e-mail para support@vloam.com ou consulte nossos repositórios no GitHub.',
        },
      ],
    },
    footer: {
      brandDesc: 'Ferramentas de desenvolvedor focadas e leves para máxima velocidade e privacidade.',
      productsTitle: 'Produtos',
      resourcesTitle: 'Recursos',
      legalTitle: 'Legal & Confiança',
      rights: 'Todos os direitos reservados.',
      motto: 'Local · Sem sobrecarga · Ergonomia nativa',
      navicatAlt: 'Alternativa ao Navicat e DataGrip',
      mysqlGuides: 'Guias MySQL',
      releaseNotes: 'Notas de versão',
      privacy: 'Política de privacidade',
      terms: 'Termos de serviço',
      about: 'Sobre nós',
      contact: 'Suporte técnico',
    },
  },

  it: {
    meta: {
      title: 'Vloam — Strumenti per sviluppatori leggeri e mirati',
      description: 'Vloam crea strumenti desktop veloci e locali per macOS e Windows. Scopri VloamDb (client MySQL) e VloamClip (gestore appunti con coda).',
    },
    nav: { products: 'Prodotti', philosophy: 'Filosofia', faq: 'Domande frequenti' },
    hero: {
      badge: 'Suite di produttività per sviluppatori',
      title: 'Strumenti per sviluppatori veloci e leggeri',
      subtitle: 'Utility desktop ad alte prestazioni con ergonomia nativa, consumo minimo di RAM e privacy strettamente locale per macOS e Windows.',
    },
    dbCard: {
      tag: 'Client Database',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'Il client MySQL veloce e mirato per sviluppatori',
      desc: 'Un’interfaccia grafica MySQL fulminea progettata per la tastiera, senza la lentezza dei tool tradizionali. Protezione produzione e ricerca immediata delle tabelle.',
      features: {
        speedTitle: 'Avvio istantaneo:',
        speedDesc: 'Avvio in meno di 0,5 secondi con consumo di memoria minimo.',
        safetyTitle: 'Sicurezza in Produzione:',
        safetyDesc: 'Etichette colorate per ambiente e blocco sola lettura per prevenire modifiche errate.',
        kbdTitle: 'Prima la tastiera:',
        kbdDesc: 'Doppio Shift per passare subito alle tabelle e Ctrl+F12 per le colonne.',
        privacyTitle: 'Privacy locale:',
        privacyDesc: 'Credenziali e cronologia query rimangono al sicuro sul tuo dispositivo.',
      },
      cta: 'Visita il sito VloamDb →',
      links: {
        features: 'Funzionalità',
        alternatives: 'Confronto vs Navicat / DataGrip',
        guides: 'Guide MySQL',
        pricing: 'Prezzi e Prova',
      },
    },
    clipCard: {
      tag: 'Appunti e Produttività',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Gestore appunti locale con coda di incolla FIFO/LIFO',
      desc: 'Gestore appunti moderno e privo di distrazioni. Copia multipla e incolla sequenziale per compilare moduli o refactoring di codice.',
      features: {
        queueTitle: 'Coda di incolla FIFO / LIFO:',
        queueDesc: 'Copia più frammenti di codice e incollali uno alla volta in ordine sequenziale.',
        searchTitle: 'Ricerca fuzzy istantanea:',
        searchDesc: 'Trova qualsiasi elemento nella cronologia in pochi millisecondi.',
        favTitle: 'Preferiti salvati:',
        favDesc: 'Organizza comandi shell e snippet SQL riutilizzabili per sempre.',
        privacyTitle: 'Zero tracciamento cloud:',
        privacyDesc: 'Archiviazione 100% sul dispositivo senza telemetria esterna.',
      },
      cta: 'Visita il sito VloamClip →',
      links: {
        features: 'Funzionalità',
        guides: 'Guide all’uso',
        changelog: 'Registro modifiche',
      },
    },
    values: {
      label: 'Filosofia',
      title: 'Creato per il flusso dello sviluppatore',
      items: {
        speedTitle: 'Prestazioni Native',
        speedDesc: 'Rifiutiamo i framework gonfiati. Vloam si avvia in un lampo e opera in silenzio.',
        privacyTitle: 'Privacy Locale Rigorosa',
        privacyDesc: 'Password e appunti appartengono solo al tuo dispositivo, mai a server terzi.',
        kbdTitle: 'Ergonomia da Tastiera',
        kbdDesc: 'Scorciatoie studiate con cura per navigare senza toccare il mouse.',
      },
    },
    faq: {
      label: 'Domande e Risposte',
      title: 'Domande frequenti',
      items: [
        {
          q: 'Cos’è Vloam?',
          a: 'Vloam è uno studio indipendente che sviluppa utility desktop ad alte prestazioni per programmatori.',
        },
        {
          q: 'I miei dati vengono inviati al cloud?',
          a: 'No. Tutti gli strumenti Vloam operano rigorosamente in locale sul tuo computer.',
        },
        {
          q: 'Quali sistemi operativi sono supportati?',
          a: 'VloamDb e VloamClip supportano nativamente macOS (Apple Silicon e Intel) e Windows (10/11 x64).',
        },
        {
          q: 'Come funziona la licenza?',
          a: '15 giorni di prova gratuita completa, seguiti da un acquisto una tantum a vita senza abbonamenti.',
        },
        {
          q: 'Come posso contattare il supporto?',
          a: 'Invia un’email a support@vloam.com o visita i nostri repository pubblici su GitHub.',
        },
      ],
    },
    footer: {
      brandDesc: 'Strumenti desktop leggeri e mirati per sviluppatori, pensati per velocità e privacy.',
      productsTitle: 'Prodotti',
      resourcesTitle: 'Risorse',
      legalTitle: 'Legale e Fiducia',
      rights: 'Tutti i diritti riservati.',
      motto: 'Locale · Senza pesantezze · Ergonomia nativa',
      navicatAlt: 'Alternativa a Navicat e DataGrip',
      mysqlGuides: 'Guide pratiche MySQL',
      releaseNotes: 'Note di rilascio',
      privacy: 'Informativa sulla privacy',
      terms: 'Termini di servizio',
      about: 'Chi siamo',
      contact: 'Supporto tecnico',
    },
  },

  nl: {
    meta: {
      title: 'Vloam — Gefocuste, lichte ontwikkelaarstools',
      description: 'Vloam bouwt snelle, lokale desktoptools voor macOS en Windows. Ontdek VloamDb (slanke MySQL-client) en VloamClip (klembordbeheerder met wachtrij).',
    },
    nav: { products: 'Producten', philosophy: 'Filosofie', faq: 'Veelgestelde vragen' },
    hero: {
      badge: 'Productiviteitssuite voor ontwikkelaars',
      title: 'Gefocuste, lichte ontwikkelaarstools',
      subtitle: 'Razendsnelle desktoptools met native ergonomie, laag geheugengebruik en lokale privacy voor macOS en Windows.',
    },
    dbCard: {
      tag: 'Databaseclient',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'De snelle, gefocuste MySQL-client voor ontwikkelaars',
      desc: 'Een razendsnelle toetsenbordgerichte MySQL-interface zonder logge ballast. Productiebeveiliging met kleurlabels en alleen-lezen-modus.',
      features: {
        speedTitle: 'Directe start:',
        speedDesc: 'Start in minder dan 0,5s met minimaal RAM-gebruik. Geen Electron-vertraging.',
        safetyTitle: 'Productiebeveiliging:',
        safetyDesc: 'Omgevingskleurlabels en alleen-lezen-slot voorkomen per ongeluk verwijderen van data.',
        kbdTitle: 'Toetsenbord eerst:',
        kbdDesc: 'Dubbelklik Shift voor tabellen en Ctrl+F12 voor kolommen.',
        privacyTitle: 'Lokale privacy:',
        privacyDesc: 'Verbindingsgegevens en querygeschiedenis blijven strikt op je apparaat.',
      },
      cta: 'Bezoek VloamDb Website →',
      links: {
        features: 'Functies',
        alternatives: 'Vergelijk met Navicat / DataGrip',
        guides: 'MySQL-handleidingen',
        pricing: 'Prijzen & Proefversie',
      },
    },
    clipCard: {
      tag: 'Klembord & Productiviteit',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Lokaal klembordbeheer met FIFO/LIFO-plakwachtrij',
      desc: 'Moderne klembordbeheerder zonder afleiding. Kopieer meerdere items achter elkaar en plak ze op volgorde.',
      features: {
        queueTitle: 'FIFO / LIFO Plakwachtrij:',
        queueDesc: 'Kopieer codefragmenten in serie en plak ze automatisch een voor een.',
        searchTitle: 'Directe fuzzy zoekfunctie:',
        searchDesc: 'Vind elk item in de volledige geschiedenis binnen milliseconden.',
        favTitle: 'Vastgezette favorieten:',
        favDesc: 'Organiseer herbruikbare shell-opdrachten en SQL-snippets.',
        privacyTitle: 'Geen cloudtracking:',
        privacyDesc: '100% lokale opslag zonder externe telemetrie.',
      },
      cta: 'Bezoek VloamClip Website →',
      links: {
        features: 'Functies',
        guides: 'Handleidingen',
        changelog: 'Wijzigingslogboek',
      },
    },
    values: {
      label: 'Filosofie',
      title: 'Gebouwd voor de flow van ontwikkelaars',
      items: {
        speedTitle: 'Maximale prestaties',
        speedDesc: 'Geen logge applicaties. Vloam start direct en draait geruisloos op de achtergrond.',
        privacyTitle: 'Strikte lokale privacy',
        privacyDesc: 'Gevoelige gegevens horen op jouw computer, nooit op externe servers.',
        kbdTitle: 'Toetsenbordergonomie',
        kbdDesc: 'Doordachte sneltoetsen om te werken zonder de muis aan te raken.',
      },
    },
    faq: {
      label: 'Vraag & Antwoord',
      title: 'Veelgestelde vragen',
      items: [
        {
          q: 'Wat is Vloam?',
          a: 'Vloam is een onafhankelijke softwarestudio die snelle desktoptools voor programmeurs ontwikkelt.',
        },
        {
          q: 'Worden mijn gegevens geüpload naar de cloud?',
          a: 'Nee. Alle Vloam-tools werken 100% lokaal en verzenden geen gegevens naar servers.',
        },
        {
          q: 'Welke besturingssystemen worden ondersteund?',
          a: 'VloamDb en VloamClip bieden native builds voor macOS (Apple Silicon en Intel) en Windows (10/11 x64).',
        },
        {
          q: 'Hoe zit het prijsmodel in elkaar?',
          a: '15 dagen gratis proefperiode zonder beperkingen, daarna een eenmalige aankoop voor het leven.',
        },
        {
          q: 'Hoe kan ik contact opnemen voor ondersteuning?',
          a: 'Mail ons via support@vloam.com of bezoek onze GitHub-community.',
        },
      ],
    },
    footer: {
      brandDesc: 'Gefocuste, lichte tools voor ontwikkelaars, ontworpen voor snelheid en privacy.',
      productsTitle: 'Producten',
      resourcesTitle: 'Bronnen',
      legalTitle: 'Juridisch & Vertrouwen',
      rights: 'Alle rechten voorbehouden.',
      motto: 'Lokaal · Geen overbodige ballast · Native ergonomie',
      navicatAlt: 'Alternatief voor Navicat en DataGrip',
      mysqlGuides: 'MySQL-gidsen',
      releaseNotes: 'Releaseopmerkingen',
      privacy: 'Privacybeleid',
      terms: 'Servicevoorwaarden',
      about: 'Over ons',
      contact: 'Ondersteuning',
    },
  },

  pl: {
    meta: {
      title: 'Vloam — Zwinne, lekkie narzędzia dla programistów',
      description: 'Vloam tworzy szybkie, lokalne narzędzia na macOS i Windows. Poznaj VloamDb (klient MySQL) oraz VloamClip (menedżer schowka z kolejką wklejania).',
    },
    nav: { products: 'Produkty', philosophy: 'Filozofia', faq: 'FAQ' },
    hero: {
      badge: 'Pakiet produktywności dla programistów',
      title: 'Zwinne, lekkie narzędzia dla programistów',
      subtitle: 'Błyskawiczne aplikacje desktopowe o natywnej ergonomii, znikomym zużyciu pamięci RAM i pełnej prywatności lokalnej dla macOS i Windows.',
    },
    dbCard: {
      tag: 'Klient bazy danych',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'Szybki, zorientowany na klawiaturę klient MySQL',
      desc: 'Błyskawiczny interfejs graficzny MySQL bez zbędnego balastu. Ochrona baz produkcyjnych dzięki etykietom kolorystycznym i blokadzie tylko do odczytu.',
      features: {
        speedTitle: 'Błyskawiczny start:',
        speedDesc: 'Uruchamia się poniżej 0,5 sekundy przy minimalnym zużyciu RAM-u.',
        safetyTitle: 'Bezpieczeństwo na produkcji:',
        safetyDesc: 'Kolorowe etykiety środowisk i tryb tylko do odczytu chronią przed pomyłkami.',
        kbdTitle: 'Klawiatura na pierwszym miejscu:',
        kbdDesc: 'Dwukrotny Shift do natychmiastowego wyszukiwania tabel i Ctrl+F12 dla kolumn.',
        privacyTitle: 'Prywatność lokalna:',
        privacyDesc: 'Dane logowania i historia zapytań pozostają wyłącznie na Twoim komputerze.',
      },
      cta: 'Odwiedź stronę VloamDb →',
      links: {
        features: 'Przegląd funkcji',
        alternatives: 'Porównanie z Navicat / DataGrip',
        guides: 'Poradniki MySQL',
        pricing: 'Cennik i wersja próbna',
      },
    },
    clipCard: {
      tag: 'Schowek i produktywność',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Lokalny menedżer schowka z kolejką wklejania FIFO/LIFO',
      desc: 'Nowoczesny menedżer schowka bez rozpraszaczy. Kopiuj wiele elementów po kolei i wklejaj je sekwencyjnie w formularzach i kodzie.',
      features: {
        queueTitle: 'Kolejka wklejania FIFO / LIFO:',
        queueDesc: 'Kopiuj serię fragmentów kodu i wklejaj je po kolei automatycznie.',
        searchTitle: 'Natychmiastowe wyszukiwanie:',
        searchDesc: 'Błyskawicznie przeszukaj całą historię w ułamku sekundy.',
        favTitle: 'Przypięte ulubione:',
        favDesc: 'Organizuj często używane polecenia shell i zapytania SQL.',
        privacyTitle: 'Zero śledzenia w chmurze:',
        privacyDesc: '100% lokalnego zapisu na urządzeniu bez telemetrii.',
      },
      cta: 'Odwiedź stronę VloamClip →',
      links: {
        features: 'Funkcje',
        guides: 'Przewodniki',
        changelog: 'Dziennik zmian',
      },
    },
    values: {
      label: 'Filozofia',
      title: 'Stworzone dla skupienia programisty',
      items: {
        speedTitle: 'Maksymalna wydajność',
        speedDesc: 'Odrzucamy ociężałe platformy. Vloam uruchamia się natychmiast i działa cicho w tle.',
        privacyTitle: 'Ścisła prywatność lokalna',
        privacyDesc: 'Twoje hasła i schowek należą tylko do Ciebie, nigdy do obcych serwerów.',
        kbdTitle: 'Ergonomia klawiatury',
        kbdDesc: 'Dopracowane skróty, które pozwalają pracować bez odrywania rąk od klawiatury.',
      },
    },
    faq: {
      label: 'Pytania i odpowiedzi',
      title: 'Często zadawane pytania',
      items: [
        {
          q: 'Czym jest Vloam?',
          a: 'Vloam to niezależne studio tworzące wydajne i wolne od zbędnych dodatków narzędzia dla programistów.',
        },
        {
          q: 'Czy moje dane trafiają do chmury?',
          a: 'Nie. Wszystkie narzędzia Vloam działają wyłącznie lokalnie na Twoim urządzeniu.',
        },
        {
          q: 'Jakie systemy są obsługiwane?',
          a: 'VloamDb i VloamClip oferują natywne wersje dla macOS (Apple Silicon i Intel) oraz Windows (10/11 x64).',
        },
        {
          q: 'Jaki jest model licencjonowania?',
          a: '15 dni pełnego darmowego okresu próbnego, a następnie jednorazowy zakup bez subskrypcji.',
        },
        {
          q: 'Jak uzyskać wsparcie?',
          a: 'Napisz do nas na support@vloam.com lub skorzystaj z naszych repozytoriów na GitHubie.',
        },
      ],
    },
    footer: {
      brandDesc: 'Lekkie narzędzia dla programistów stworzone z myślą o szybkości i prywatności.',
      productsTitle: 'Produkty',
      resourcesTitle: 'Zasoby',
      legalTitle: 'Zaufanie i kwestie prawne',
      rights: 'Wszelkie prawa zastrzeżone.',
      motto: 'Lokalnie · Bez zbędnego balastu · Natywna ergonomia',
      navicatAlt: 'Alternatywa dla Navicat i DataGrip',
      mysqlGuides: 'Poradniki MySQL',
      releaseNotes: 'Informacje o wydaniu',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin świadczenia usług',
      about: 'O nas',
      contact: 'Wsparcie techniczne',
    },
  },

  ro: {
    meta: {
      title: 'Vloam — Instrumente rapide și concentrate pentru dezvoltatori',
      description: 'Vloam dezvoltă aplicații desktop rapide și locale pentru macOS și Windows. Descoperă VloamDb (client MySQL) și VloamClip (manager clipboard cu coadă).',
    },
    nav: { products: 'Produse', philosophy: 'Filosofie', faq: 'Întrebări frecvente' },
    hero: {
      badge: 'Suită de productivitate pentru dezvoltatori',
      title: 'Instrumente concentrate și rapide pentru dezvoltatori',
      subtitle: 'Utilitare desktop de mare viteză, cu ergonomie nativă, consum minim de memorie și confidențialitate strict locală pentru macOS și Windows.',
    },
    dbCard: {
      tag: 'Client bază de date',
      os: 'macOS · Windows',
      title: 'VloamDb',
      slogan: 'Clientul MySQL rapid și precis pentru dezvoltatori',
      desc: 'O interfață grafică MySQL ultrarapidă axată pe tastatură, fără povara aplicațiilor greoaie. Protecție pentru producție cu etichete colorate și mod doar-citire.',
      features: {
        speedTitle: 'Pornire instantanee:',
        speedDesc: 'Pornește în sub 0,5 secunde cu un consum minim de RAM.',
        safetyTitle: 'Protecție în producție:',
        safetyDesc: 'Etichete colorate de mediu și blocare doar-citire pentru a preveni ștergerile accidentale.',
        kbdTitle: 'Tastatura pe primul loc:',
        kbdDesc: 'Apăsați dublu Shift pentru căutare rapidă de tabele și Ctrl+F12 pentru coloane.',
        privacyTitle: 'Confidențialitate locală:',
        privacyDesc: 'Datele de conectare și istoricul interogărilor rămân doar pe dispozitivul dvs.',
      },
      cta: 'Vizitează site-ul VloamDb →',
      links: {
        features: 'Prezentare funcții',
        alternatives: 'Comparație vs Navicat / DataGrip',
        guides: 'Ghiduri MySQL',
        pricing: 'Prețuri și testare',
      },
    },
    clipCard: {
      tag: 'Clipboard și productivitate',
      os: 'macOS · Windows',
      title: 'VloamClip',
      slogan: 'Manager de clipboard local cu coadă de lipire FIFO/LIFO',
      desc: 'Manager de clipboard modern și fără distrageri. Copiere multiplă secvențială și lipire ordonată pentru formulare și refactorizare de cod.',
      features: {
        queueTitle: 'Coadă de lipire FIFO / LIFO:',
        queueDesc: 'Copiați fragmente de cod în serie și lipiți-le automat pe rând.',
        searchTitle: 'Căutare fuzzy instantanee:',
        searchDesc: 'Găsiți orice element din istoric în câteva milisecunde.',
        favTitle: 'Favorite fixate:',
        favDesc: 'Organizați comenzi shell și fragmente SQL reutilizabile.',
        privacyTitle: 'Fără urmărire în cloud:',
        privacyDesc: 'Stocare 100% pe dispozitiv fără telemetrie externă.',
      },
      cta: 'Vizitează site-ul VloamClip →',
      links: {
        features: 'Funcționalități',
        guides: 'Ghiduri de utilizare',
        changelog: 'Istoric versiuni',
      },
    },
    values: {
      label: 'Filosofie',
      title: 'Creat pentru ritmul dezvoltatorilor',
      items: {
        speedTitle: 'Performanță nativă',
        speedDesc: 'Refuzăm aplicațiile supraîncărcate. Vloam pornește instantaneu și rulează silențios.',
        privacyTitle: 'Confidențialitate strict locală',
        privacyDesc: 'Parolele și istoricul clipboard-ului vă aparțin exclusiv, niciodată serverelor externe.',
        kbdTitle: 'Ergonomie la tastatură',
        kbdDesc: 'Scurtături atent gândite pentru a lucra fără a atinge mouse-ul.',
      },
    },
    faq: {
      label: 'Întrebări și răspunsuri',
      title: 'Întrebări frecvente',
      items: [
        {
          q: 'Ce este Vloam?',
          a: 'Vloam este un studio independent care construiește aplicații desktop rapide și fără distrageri pentru programatori.',
        },
        {
          q: 'Datele mele sunt trimise în cloud?',
          a: 'Nu. Toate instrumentele Vloam funcționează 100% local pe dispozitivul dvs.',
        },
        {
          q: 'Ce sisteme de operare sunt compatibile?',
          a: 'VloamDb și VloamClip oferă versiuni native pentru macOS (Apple Silicon și Intel) și Windows (10/11 x64).',
        },
        {
          q: 'Care este modelul de preț?',
          a: '15 zile de încercare gratuită completă, urmate de o achiziție unică pe viață, fără abonamente lunare.',
        },
        {
          q: 'Cum pot primi asistență?',
          a: 'Scrieți-ne la support@vloam.com sau vizitați comunitatea noastră pe GitHub.',
        },
      ],
    },
    footer: {
      brandDesc: 'Instrumente rapide și ușoare pentru dezvoltatori, concepute pentru viteză și confidențialitate.',
      productsTitle: 'Produse',
      resourcesTitle: 'Resurse',
      legalTitle: 'Legal și încredere',
      rights: 'Toate drepturile rezervate.',
      motto: 'Local · Fără balast · Ergonomie nativă',
      navicatAlt: 'Alternativă la Navicat și DataGrip',
      mysqlGuides: 'Ghiduri practice MySQL',
      releaseNotes: 'Note de lansare',
      privacy: 'Politica de confidențialitate',
      terms: 'Termeni și condiții',
      about: 'Despre noi',
      contact: 'Asistență tehnică',
    },
  },
};

export function useTranslations(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
