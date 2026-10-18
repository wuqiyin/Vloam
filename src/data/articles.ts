export interface Article {
  slug: string;
  date: string;
  readTime: string;
  category: string;
  en: {
    title: string;
    description: string;
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
  zh: {
    title: string;
    description: string;
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

export const articles: Article[] = [
  {
    slug: 'why-we-build-native',
    date: 'October 2026',
    readTime: '6 min read',
    category: 'System Engineering',
    en: {
      title: 'Why We Build Native in 2026: The Case for Zero-Cloud Local Computing',
      description: 'An architectural retrospective on memory bloat, OS secure enclave integration, and why professional developer tools should never require a remote cloud account.',
      lead: 'In an era where simple text utilities routinely consume multiple gigabytes of memory and mandate cloud logins, Vloam chooses an intentional path: lightweight native compilation, strict local-first data storage, and zero telemetry.',
      sections: [
        {
          heading: '1. The Runtime Tax of Modern Utilities',
          paragraphs: [
            'Over the past decade, desktop software development has largely converged on bundled web runtimes. While this model accelerated cross-platform distribution, it introduced an invisible tax: background processes idling at 800MB of RAM, noticeable input lag during rapid typing, and multi-second cold startup times.',
            'For developers working with dense codebases, local Docker containers, and large databases, every megabyte of physical memory counts. When a clipboard manager or database explorer takes three seconds to respond to a global hotkey, the flow state is broken.',
            'At Vloam, we build with native system targets (Go and lightweight OS bindings). VloamDb and VloamClip initialize in under 400 milliseconds, hold an idle footprint below 40MB, and interact directly with native UI events without virtualization layers.'
          ]
        },
        {
          heading: '2. Data Sovereignty and the Hardware Enclave',
          paragraphs: [
            'Software tools should not treat your hard drive as an staging area for a remote analytics warehouse. Database connection strings, SQL query history, internal table architectures, and clipboard buffers are among the highest-value attack surfaces on any engineer’s workstation.',
            'Instead of transmitting credentials to a proprietary cloud or storing them in plaintext JSON configuration files, Vloam software delegates all sensitive storage directly to the host operating system’s cryptographic enclave.',
            'On macOS, credentials are protected by hardware-backed Keychain Services. On Windows, they are encrypted via CryptProtectData (DPAPI), bound securely to the user’s local Windows account login. Even if an external actor accesses the local disk file, the keys cannot be decrypted outside the active authenticated user context.'
          ]
        },
        {
          heading: '3. The Anti-Telemetry Commitment',
          paragraphs: [
            'Many commercial utilities today embed background event trackers, session replays, and behavioural telemetry. We believe that professional instruments should behave like surgical tools: they perform the designated operation faithfully and communicate nothing to the outside world.',
            'Vloam desktop tools include zero analytical SDKs, zero background pinging, and zero tracking pixels. You can run VloamDb inside an air-gapped corporate network, on an airplane without Wi-Fi, or behind strict enterprise firewall rules with zero dropped packets.'
          ]
        },
        {
          heading: '4. Ergonomics Over Feature Creep',
          paragraphs: [
            'A tool should do one job with extraordinary precision. Instead of packing hundreds of rarely used visual dials, our roadmap is driven by keyboard ergonomics: Double-Shift fuzzy table searches, FIFO/LIFO sequential clipboard queues, and prominent environment color guards.',
            'Simplicity is not the lack of features—it is the deliberate refusal to burden the user with unneeded complexity.'
          ]
        }
      ]
    },
    zh: {
      title: '为什么我们在 2026 年依然坚持原生开发：本地优先与零云端依赖的工程思考',
      description: '探讨现代桌面软件的内存膨胀困境、操作系统底层硬件安全区集成，以及为什么专业开发者工具绝不该强制绑定云端账号。',
      lead: '在一个连简单的文本小工具动辄吞噬数吉字节内存、强制要求联网登录的时代，Vloam 选择了逆流而上的工匠路径：轻量原生编译、绝对的本地数据主权与零网络遥测。',
      sections: [
        {
          heading: '1. 现代桌面工具的“运行时税”',
          paragraphs: [
            '在过去十年中，桌面软件开发几乎全面倒向打包网页运行时的跨平台框架。虽然这极大地降低了多平台分发的开发成本，但也向用户征收了昂贵的“运行时税”：后台静默进程动辄吃掉数百兆内存、高频输入时微小的卡顿感，以及令人沮丧的冷启动延迟。',
            '对于每天同时跑着大型 Docker 容器、本地数据库和高负载 IDE 的工程师而言，物理内存的每一兆都关乎专注力。当一个剪贴板工具或数据库客户端在按下全局快捷键后需要等两三秒才弹出时，开发者的心流已经被打断了。',
            '在 Vloam，我们坚持采用原生系统编译（Go 语言与轻量底层系统 API）。VloamDb 和 VloamClip 的冷启动时间均小于 400 毫秒，待机内存占用严格压制在 40MB 以内，直接响应操作系统原生事件，无多层虚拟机中转。'
          ]
        },
        {
          heading: '2. 数据主权与操作系统级硬件安全区',
          paragraphs: [
            '工具软件绝不应该把用户的本地磁盘当成向远端数据仓库同步的暂存区。数据库连接串、线上 SQL 查询历史、表结构元数据以及剪贴板历史，是每位工程师电脑上最敏感、风险极高的数字资产。',
            '许多工具为了“多端同步”将凭证上传至自家云端，甚至直接在本地以明文 JSON 存储密码。Vloam 坚决反对这种做法，直接将密码托管给底层操作系统的安全机制。',
            '在 macOS 上，凭证受到硬件级 Keychain Services（钥匙串访问）的原生保护；在 Windows 上，密码通过与当前登录账户强绑定的 CryptProtectData（DPAPI）机制实施对称加密。哪怕磁盘文件被整体拷贝，脱离了当前用户的硬件认证环境也绝无可能被解密。'
          ]
        },
        {
          heading: '3. 零数据遥测（Anti-Telemetry）底线',
          paragraphs: [
            '商业工具普遍内置了用户行为漏斗分析、会话回放与无休止的后台上报。但我们坚信：专业级的生产力工具应当像精密的手术刀，忠实执行指令，而对外界保持绝对静默。',
            'Vloam 旗下桌面端不包含任何分析 SDK、不进行后台心跳打点、不上报用户操作习惯。你可以在完全断网的机房环境、严格合规的企业内网或没有 Wi-Fi 的长途航班上顺畅使用，不会产生哪怕一个非法网络请求。'
          ]
        },
        {
          heading: '4. 人体工学重于功能堆砌',
          paragraphs: [
            '优秀工具的核心在于将一件事情做到极致。我们不追求在界面上堆砌上百个生僻杂乱的按钮，而是专注于键盘流的人体工学交互：双击 Shift 毫秒级模糊检索表结构、FIFO/LIFO 依序粘贴队列，以及一眼识破生产环境的醒目色彩保护锁。',
            '简单不是缺乏功能，而是克制——坚决不把无意义的复杂度转嫁给用户。'
          ]
        }
      ]
    }
  },
  {
    slug: 'zero-knowledge-screening',
    date: 'September 2026',
    readTime: '5 min read',
    category: 'Privacy Architecture',
    en: {
      title: 'Zero-Knowledge Health Screening: Running Clinical Logic in Pure Browser Sandboxes',
      description: 'How to implement evidence-based psychiatric self-assessment scales strictly client-side without databases, tracking pixels, or behavioral profiling.',
      lead: 'Online psychological self-assessments touch upon a person’s most vulnerable thoughts. We outline the architectural philosophy behind keeping our screening tools 100% ephemeral and browser-confined.',
      sections: [
        {
          heading: '1. The Vulnerability of Digital Health Profiling',
          paragraphs: [
            'Over the past several years, investigative reports have exposed how widespread online mental health quizzes sell sensitive test responses, depression indicators, and behavioral traits to advertising brokers and third-party data platforms.',
            'When someone searches for ADHD symptoms or borderline personality traits late at night, they are seeking clarity and objective validation—not building a digital commercial profile to be targeted by predatory marketing campaigns.',
            'At Vloam, we decided that mental health screening tools must adhere to a strict ethical imperative: zero-knowledge computation by architectural design.'
          ]
        },
        {
          heading: '2. The Pure Client-Side Sandbox Architecture',
          paragraphs: [
            'Both ADHD Test and BPD Test are deployed as static web assets. When a user opens the screening page, all scoring matrices, clinical algorithms, and symptom weight calculations are executed locally within the active browser tab’s memory.',
            'There is no backend API endpoint that accepts answers. There is no SQL database where submissions are recorded. There is no session token tracking test-takers across web properties.',
            'The instant you close the browser tab, the evaluation state is permanently erased by the browser’s garbage collector. It leaves no trace on our servers, because our servers never receive the data.'
          ]
        },
        {
          heading: '3. Clinical Grounding Without Exploitative Gamification',
          paragraphs: [
            'Many modern self-help tools employ dark UX patterns: artificial countdown timers, high-friction paywalls before displaying results, and alarmist language intended to prompt anxiety-driven impulse purchases.',
            'Our assessment tools translate established diagnostic scales into clean, accessible digital interfaces without sensationalism. The score breakdown is presented immediately, completely free, and contextualized with sober scientific disclaimers.',
            'We emphasize that self-screening is a navigational compass for personal understanding, not a substitute for formal psychiatric evaluation by a qualified physician.'
          ]
        },
        {
          heading: '4. Structural Privacy as an Engineering Standard',
          paragraphs: [
            'A privacy policy written in legal prose can be amended or violated overnight. Architectural privacy, enforced by static code and the absence of storage infrastructure, cannot be compromised.',
            'By refusing to collect what we do not need, we ensure that our users’ trust is safeguarded not merely by good intentions, but by computer science.'
          ]
        }
      ]
    },
    zh: {
      title: '零知识自评：如何在浏览器纯前端沙盒中实现严谨的心理学评估与绝对匿名',
      description: '剖析将权威心理自测问卷（ADHD / BPD）完全运行于浏览器前端内存中的工程原理，实现零数据收集、零行为追踪的真正隐私保护。',
      lead: '在线心理与行为自评触及一个人内心最脆弱和私密的领域。我们分享了将自测工具打造成 100% 阅后即焚、受控于纯浏览器沙盒的技术与伦理实践。',
      sections: [
        {
          heading: '1. 数字化健康测评的隐私危机',
          paragraphs: [
            '近年来，多项调查揭示了许多所谓在线心理测试网站背后的商业黑幕：答题者的焦虑程度、注意力缺失倾向、抑郁指标等极其隐私的数据，被悄悄打包出售给广告追踪商或数据经纪平台。',
            '当一个人在深夜搜索 ADHD 特征或边缘型人格特质时，他们需要的是一份客观、科学的对照参考与认知启蒙，而不是为自己生成一份被精准推销针对性保健品或诱导性课程的“心理画像”。',
            '在 Vloam，我们设立了一条不可逾越的伦理底线：心理健康评估工具必须在架构设计层面实现“零知识（Zero-Knowledge）”。'
          ]
        },
        {
          heading: '2. 纯前端沙盒与瞬态内存运算',
          paragraphs: [
            'Vloam 旗下的 ADHD Test 和 BPD Test 均作为纯静态网页分发。用户在打开测评页面时，量表题目、计分算法模型与多维度加权逻辑全部一次性加载至当前浏览器标签页的内存中。',
            '这里没有任何接收答题结果的后端 API 接口；没有任何用于存储记录的云端数据库；更没有任何跨站跟踪 Cookie 或广告监测像素。',
            '当你评估完成并关闭标签页的那一刻，浏览器垃圾回收机制会即刻销毁所有答题数据。外界服务器根本没有任何数据残留，因为服务器从一开始就从未接收过任何数据。'
          ]
        },
        {
          heading: '3. 循证严谨性与拒绝“焦虑营销”',
          paragraphs: [
            '很多商业测评网站充斥着不良的交互设计：答了 50 道题后弹窗强制收费查看结果、刻意渲染惊悚结论引发焦虑、用游戏化的积分圈套诱导分享。',
            '我们的自测工具严格依照公认的精神卫生临床评估标准进行数字化呈现。测评结果全透明免费呈现，附带中立客观的多维度分值解析，并严格提示：自评工具仅作为自我探索与就医辅助参考，绝不替代专业临床精神心理医生的线下正规诊断。',
            '科学的工具应当带来理性与释怀，而不是焦虑与商业收割。'
          ]
        },
        {
          heading: '4. 架构级隐私高于合规说辞',
          paragraphs: [
            '写在纸面上的隐私条款可能会在公司战略变更时被单方面修改；但由静态代码和“无存储服务器架构”所锁定的物理级隐私，永远不会被背叛。',
            '从工程根源上拒绝收集任何数据，这是我们对用户信任最坚实的技术守护。'
          ]
        }
      ]
    }
  }
];
