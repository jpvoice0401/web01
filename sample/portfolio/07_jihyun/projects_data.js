/**
 * ==============================================================================
 * 📁 포트폴리오 프로젝트 마스터 데이터 (projects_data.js)
 * ==============================================================================
 * 
 * 💡 6대 카테고리 필터:
 * 1. "media-art" : MEDIA ART (TouchDesigner 실시간 비전 & 인터랙티브 연구 - 2편) [ALL 맨 위]
 * 2. "artwork"   : ARTWORK (엄선 큐레이션 [UN]-VEIL 시리즈 및 순수미술 대표 연작)
 * 3. "ax-ai"     : AX/AI (생성형 AI 영상, AI IP 디자인)
 * 4. "bx"        : BX (브랜드 아이덴티티, 럭셔리 패키지, 룸키 카드, 공간 그래픽 - 10편)
 * 5. "academic"  : ACADEMIC (생성형 AI 릴레이 특강, 산학 융합 V컬러링, 학술 연구논문 - 3편)
 * ==============================================================================
 */

const PORTFOLIO_PROJECTS = [
    {
        "id": "jihyunpark-art-official-web",
        "category": "bx",
        "categoryName": "BX & DIGITAL ARCHIVE",
        "title": "JIHYUN PARK — AX VISUAL DIRECTOR · ARTIST · EDUCATOR\n박지현 공식 디지털 아카이브 & 인터랙티브 웹 플랫폼",
        "subtitle": "기획 · 비주얼 디자인 · 프론트엔드 인터랙션 개발 1인 총괄 직접 디렉팅 (Solo Directing & Engineering)",
        "year": "2026",
        "client": "JIHYUN PARK STUDIO (www.jihyunpark.art)",
        "image": "work_images/bx/jihyunparkhomepage/jihyunparkhomepage_thumb.jpg",
        "video": "work_images/bx/jihyunparkhomepage/jihyunparkhomepage_web.mp4",
        "gallery": [
            "work_images/bx/jihyunparkhomepage/jihyunparkhomepage_thumb.jpg",
            "work_images/poster/poster00.jpg",
            "images/hero_portrait.jpg",
            "work_images/poster/poster01.jpg"
        ],
        "tags": [
            "Solo Total Directing",
            "Direct Planning & Design",
            "Full-Stack Frontend Dev",
            "Digital BX",
            "AX (AI Experience)",
            "Web Architecture",
            "0G Physics Typography",
            "Web Audio Synthesizer",
            "Swiss International Style",
            "Multilingual (KOR·ENG·CHN)"
        ],
        "description": "예술과 디자인, AI 기술의 융합을 담은 박지현 공식 디지털 아카이브(www.jihyunpark.art)입니다. 인터랙티브 비주얼 시스템부터 글로벌 다국어 웹 플랫폼 구축까지 전 과정을 1인 총괄 직접 기획·디자인·개발했습니다.",
        "featured": true,
        "link": "http://jihyunpark.art/sample/portfolio/07_jihyun/index.html"
    },
    {
        "id": "hansei-univ-web-bx",
        "category": "bx",
        "categoryName": "BX",
        "title": "HANSEI UNIVERSITY : DIGITAL INTERFACE DESIGN\n한세대학교 메인페이지 디자인",
        "subtitle": "신규 대표홈페이지 구축 TF 디자인 부문 총괄 — 기획부터 디자인 시스템 수립까지",
        "year": "2026",
        "client": "한세대학교 (대표홈페이지 구축 TF)",
        "image": "work_images/bx/hansei/hansei_seg01_hero_heritage.jpg",
        "gallery": [
            "work_images/bx/hansei/hansei_seg01_hero_heritage.jpg",
            "work_images/bx/hansei/hansei_seg02_people_campus.jpg",
            "work_images/bx/hansei/hansei_seg03_news_footer.jpg",
            "work_images/bx/hansei/hansei_univ_web_full.png"
        ],
        "tags": [
            "Digital BX",
            "Web Architecture",
            "HANSEI 6-Blocks",
            "Design System",
            "UI/UX Strategy",
            "CHATBIRD Character",
            "University Branding"
        ],
        "description": "한세대학교 신규 대표홈페이지 구축 TF 디자인 부문 총괄로서, 대학의 브랜드 정체성과 사용자 경험을 위한 전체 기획부터 메인 UI/UX 인터페이스 디자인, 비주얼 가이드라인 수립까지 전 과정을 총괄 지휘했습니다.",
        "featured": true,
        "link": "https://hansei.ac.kr"
    },
    {
        "id": "touchdesigner-vision-tracking",
        "category": "media-art",
        "categoryName": "MEDIA ART & AX",
        "title": "TOUCHDESIGNER : VISION & POSE\n터치디자이너 실시간 비전 & 포즈 트래킹 연구",
        "subtitle": "Real-time Hand Tracking & Interactive Camera Systems",
        "year": "2024 - 2026",
        "client": "VIA.J MEDIA LAB (@mediaart.with.ai)",
        "image": "work_images/mediaart_instagram/KakaoTalk_20260820_062508424_03.png",
        "gallery": [
            "work_images/mediaart_instagram/KakaoTalk_20260820_062508424_03.png",
            "work_images/mediaart_instagram/KakaoTalk_20260820_062508424_01.jpg"
        ],
        "tags": [
            "TouchDesigner",
            "MediaPipe",
            "Hand Tracking",
            "Pose Detection",
            "Realtime Visuals"
        ],
        "description": "Real-time interactive experiments in TouchDesigner exploring hand tracking and pose detection for generative visual synthesis.",
        "featured": true
    },
    {
        "id": "touchdesigner-segmentation-landmarks",
        "category": "media-art",
        "categoryName": "MEDIA ART & AX",
        "title": "TOUCHDESIGNER : FACE MESH & SEGMENTATION\n터치디자이너 실시간 페이스 메시 & 인물 분할 연구",
        "subtitle": "Real-time Face Landmark Tracking & Person Segmentation",
        "year": "2024 - 2026",
        "client": "VIA.J MEDIA LAB (@mediaart.with.ai)",
        "image": "work_images/mediaart_instagram/KakaoTalk_20260820_062508424.png",
        "gallery": [
            "work_images/mediaart_instagram/KakaoTalk_20260820_062508424.png",
            "work_images/mediaart_instagram/KakaoTalk_20260820_062508424_02.png"
        ],
        "tags": [
            "TouchDesigner",
            "Face Mesh",
            "Person Segmentation",
            "Facial Landmark",
            "Realtime Visuals"
        ],
        "description": "Real-time visual experiments in TouchDesigner focusing on facial landmark tracking and person silhouette segmentation.",
        "featured": true
    },
    {
        "id": "the-wilds-bx",
        "category": "bx",
        "categoryName": "BX",
        "title": "THE WILDS : HWANGYA LITERARY\n더 와일즈(황야문학) 브랜드 아이덴티티 & 비주얼 시스템",
        "subtitle": "2008년부터 현재까지 이어온 계간 황야문학 문예지의 에디토리얼 북커버 및 시각 아이덴티티 시스템",
        "year": "2008 - 현재",
        "client": "THE WILDS (황야문학)",
        "image": "work_images/bx/thewilds/thewilds01.jpg",
        "gallery": [
            "work_images/bx/thewilds/thewilds01.jpg",
            "work_images/bx/thewilds/thewilds02.jpg",
            "work_images/bx/thewilds/thewilds03.png",
            "work_images/bx/thewilds/thewilds04.jpg"
        ],
        "tags": [
            "Since 2008",
            "Editorial Design",
            "Book Cover System",
            "Literary Magazine",
            "Visual Identity",
            "Typography",
            "Color Grid"
        ],
        "description": "2008년부터 현재까지 꾸준히 이어오고 있는 장기 프로젝트로, 인문학적 사유와 야성적 문학성을 담아내는 계간 '황야문학(The Wilds)'의 브랜드 아이덴티티 및 북커버 에디토리얼 비주얼 시스템을 총괄하고 있습니다. 호수별로 변주되는 감각적인 컬러 블록과 절제된 타이포그래피 그리드를 통해 문예지의 지적 깊이와 동시대적 시각성을 완성했습니다.",
        "featured": true
    },
    {
        "id": "wilderness-bx",
        "category": "bx",
        "categoryName": "BX",
        "title": "WILDERNESS : LITERARY EDITORIAL\n윌더니스 문예지 북커버 디자인",
        "subtitle": "자연의 원초적 질감과 문학적 깊이를 담아낸 에디토리얼 북커버 시스템",
        "year": "2016 - 2020",
        "client": "WILDERNESS",
        "image": "work_images/bx/willderness/willderness01.jpg",
        "gallery": [
            "work_images/bx/willderness/willderness01.jpg"
        ],
        "tags": [
            "Editorial Design",
            "Book Cover Design",
            "Literary Magazine",
            "Typography Grid"
        ],
        "description": "자연의 원초적 지층 질감과 문학적 깊이를 클래식한 타이포그래피 및 유기적 그리드로 시각화한 윌더니스(WILDERNESS) 문예지의 에디토리얼 북커버 디자인입니다.",
        "featured": false
    },
    {
        "id": "wilderness-logo-bx",
        "category": "bx",
        "categoryName": "BX",
        "title": "WILDERNESS : BRAND LOGO & SYMBOL\n윌더니스문학 브랜드 로고 & 심볼 시스템",
        "subtitle": "문학적 정체성과 조형적 상징성을 구조화한 윌더니스문학 CI / 로고 디자인",
        "year": "2016 - 2020",
        "client": "WILDERNESS (윌더니스문학)",
        "image": "work_images/bx/willderness/willdernesslogo_white.jpg",
        "gallery": [
            "work_images/bx/willderness/willdernesslogo_white.jpg"
        ],
        "tags": [
            "Logo Design",
            "Brand Symbol",
            "CI / BI System",
            "Emblem System",
            "Typography",
            "Visual Identity"
        ],
        "description": "윌더니스문학의 브랜드 철학과 지적 아이덴티티를 조형적인 심볼과 한글/영문 타이포그래피 조합으로 정립한 공식 브랜드 로고 및 엠블럼 시스템입니다. 문예지의 고유한 정체성을 직관적으로 전달할 수 있도록 기하학적 곡선과 상징적 실루엣을 융합하여 개발했습니다.",
        "featured": false
    },
    {
        "id": "art-0g-zerogravity",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "0g ZERO-GRAVITY",
        "subtitle": "육중한 쇳덩이 활자와 '0g'의 충돌, 2016년부터 지속 업데이트되는 개념 조각 연작 (ing)",
        "year": "2016 - 2026 (ing)",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/0g/0g01.jpg",
        "gallery": [
            "work_images/art/0g/0g01.jpg",
            "work_images/art/0g/0g05.jpg",
            "work_images/art/0g/0g00.jpg",
            "work_images/art/0g/0g03.jpg",
            "work_images/art/0g/0g04.jpg"
        ],
        "tags": [
            "0g Gravity",
            "Long-term Project (ing)",
            "Conceptual Sculpture",
            "Visual Paradox",
            "Installation Art",
            "Fine Art"
        ],
        "description": "녹슨 기계식 저울 위에 손으로 들기조차 버거워 보이는 육중한 활자 덩어리를 얹어두었지만, 그 활자 자체가 가리키는 기호도 저울의 눈금도 정확히 '0g(무게 없음)'을 선언하는 개념 조각 연작입니다. 2016년부터 시작되어 현재(2026 ing)까지 지속적으로 물질과 개념, 다양한 활자 조형과 저울의 형태로 확장하며 끊임없이 업데이트하고 있는 장기 프로젝트입니다. 압도적인 부피와 거친 금속의 물리적 실재감(Materiality)을 과시하면서도, 텍스트를 읽는 순간 '무게가 0'으로 환원되어버리는 시각적 역설(Visual Paradox)을 통해, 우리가 사물을 인식하고 무게를 가늠하는 지각 체계의 모순을 날카롭게 전복합니다.",
        "featured": true
    },
    {
        "id": "art-unveil-three-desires",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : THREE GREAT DESIRES\n언베일 : 인간의 3대 욕망",
        "subtitle": "자동차 크롬 도장 기법 위에 가리고 드러낸 인간의 3대 본능과 팽팽한 장력",
        "year": "2017",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil_threegreatdesires/threegreatdesires.jpg",
        "gallery": [
            "work_images/art/unveil_threegreatdesires/threegreatdesires.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Chrome Coating",
            "Human Desire",
            "Fine Art",
            "Contemporary Object"
        ],
        "description": "인간을 움직이는 가장 원초적인 세 가지 본능과 욕망의 형태를 고광택 자동차 크롬 도장(Chrome Coating) 기법으로 완성한 3색 패널 위에 물질화한 연작입니다. 사회적 규범과 체면이라는 얇은 막으로 스스로 감추거나 타의에 의해 가려지는 억압 속에서도, 결코 숨겨지지 않고 막을 밀어내며 솟구쳐 오르는 입체 텍스트를 통해, 은폐(Veil)와 분출(Unveil) 사이에서 요동치는 본능의 원초적 생명력과 긴장감을 감각적으로 포착했습니다.",
        "featured": true
    },
    {
        "id": "art-honorable-awards",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "HONORABLE AWARDS\n명예로운 상장 연작",
        "subtitle": "공인들의 무책임한 망언을 권위의 상장(Award)으로 박제해 되돌려주는 통렬한 풍자",
        "year": "2014 - 2026 (ing)",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/honorableawards/HonarableAwards01.jpg",
        "gallery": [
            "work_images/art/honorableawards/HonarableAwards01.jpg",
            "work_images/art/honorableawards/HonarableAwards02.jpg"
        ],
        "tags": [
            "Lifetime Project",
            "Honorable Awards",
            "Political Satire",
            "Conceptual Art",
            "Typography Object",
            "Installation"
        ],
        "description": "국가적 권위와 칭송의 상징인 '상장'과 '트로피'의 형식을 차용하여, 사회적 책무를 망각하고 망언을 일삼는 공인들의 어록을 역설적으로 헌정하는 풍자적 개념 미술 연작입니다. 2014년부터 현재까지 지속되고 있는 이 프로젝트는, 엄숙한 금빛 상장 프레임 위에 공인들이 내뱉은 부끄러운 언어의 실체를 정갈하게 새겨둠으로써, 그들이 회피해 온 발언의 무게와 역사적 책임을 가장 위트 있고 날카로운 방식으로 되묻습니다.",
        "featured": true
    },
    {
        "id": "art-honorable-awards-transparent",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "HONORABLE AWARDS : TRANSPARENT FRAME\n명예로운 상장 : 투명 프레임 아카이브",
        "subtitle": "빛의 반사 속에 숨고 드러나는 투명한 프레임과 은폐된 차별·기만의 언어",
        "year": "2014 - 2026 (ing)",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/honorableawards/HonarableAwards03.png",
        "gallery": [
            "work_images/art/honorableawards/HonarableAwards03.png"
        ],
        "tags": [
            "Lifetime Project",
            "Transparent Frame",
            "Honorable Awards",
            "Optical Illusion",
            "Political Satire",
            "Installation"
        ],
        "description": "'HONORABLE AWARDS' 연작의 일환으로, 물성과 형식을 끊임없이 확장하며 실험한 투명 프레임 설치 작업입니다. 투명한 아크릴 액자는 조명과 빛의 각도에 따라 글자가 사라지거나 희미하게 숨어 있다가, 관람객이 가까이 다가서야 비로소 실체를 드러냅니다. 공인들이 평소 마음 깊은 곳에 은폐(Veil)해 두었던 차별과 혐오, 기만의 언어들이 일상의 틈새에서 언뜻언뜻 노출되는 순간을 포착하여, 투명성의 착시를 뚫고 수면 위로 떠오르는(Unveil) 진실의 무게를 감각적으로 폭로합니다.",
        "featured": true
    },
    {
        "id": "lore-color-award-excellence",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "LORE : INTERNATIONAL COLOR AWARDS\nLORE : 대학생국제색채대상 \"우수상\" 수상",
        "subtitle": "감각적인 틴케이스 및 캔들 패키지 브랜딩 지도 — 2025 국제색채대상 우수상",
        "year": "2025",
        "client": "(사)한국색채학회 · 국제색채위원회",
        "image": "work_images/academic/lore/lore_package_hero.jpg",
        "gallery": [
            "work_images/academic/lore/lore_package_hero.jpg"
        ],
        "tags": [
            "Excellence Award (우수상)",
            "International Color Award",
            "Tin-case Package",
            "Candle Branding",
            "Student Mentorship"
        ],
        "description": "2025 대학생국제색채대상 공모전에서 '우수상'을 수상한 라이프스타일 캔들 브랜드 <LORE>의 패키지 브랜딩 지도 프로젝트입니다. 빈티지한 틴케이스 금속 질감과 신비로운 색채 그라디언트를 결합하여, 제품의 향기와 스토리가 시각적 촉각성으로 고스란히 전달되는 고급스러운 패키지 디자인을 완성했습니다.",
        "featured": true
    },
    {
        "id": "skt-vcoloring-academic",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "SKT V-COLORING : REGIONAL SHORT-FORM\nSKT 보이는 V컬러링 지자체 영상 67건 런칭",
        "subtitle": "SKT V컬러링 공식 구좌 개설을 통한 67건 이상의 지자체 숏폼 영상 런칭 및 학생 인턴십 연계",
        "year": "2024 - 2025",
        "client": "SK텔레콤 (SKT) · 당진시 · 충남산학융합원",
        "image": "work_images/academic/skt_vcoloring/skt_vcoloring_motion.gif",
        "gallery": [
            "work_images/academic/skt_vcoloring/skt_vcoloring_motion.gif"
        ],
        "tags": [
            "SKT V-Coloring",
            "Regional Branding",
            "Short-form Video",
            "Industry Collaboration",
            "Student Internship"
        ],
        "description": "SK텔레콤(SKT)의 대표 숏폼 영상 서비스 '보이는 V컬러링'에 당진시 공식 구좌를 개설하고, 학생들과 함께 지자체 정책 및 지역 관광 자원을 테마로 한 모션 그래픽 영상을 2024년 37건, 2025년 30건 등 총 67건 이상 정식 런칭한 산학 협력 프로젝트입니다. 학생 작품의 대기업 플랫폼 정식 송출과 함께 실무 역량을 인정받아 대기업 인턴십 채택으로 직결되는 교육적 결실을 맺었습니다.",
        "featured": true
    },
    {
        "id": "art-disney-dejavu",
        "category": "media-art",
        "categoryName": "MEDIA ART & AX",
        "title": "DISNEY DÉJÀ VU : A CREATIVE REMIX\n디즈니 데자뷰 : 크리에이티브 리믹스",
        "subtitle": "생성형 AI와 동시대 회화 언어로 대중문화 아이콘을 해체·재해석한 크리에이티브 리믹스 연작",
        "year": "2024",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/dejavu_desiney/dejavu_desiney01.png",
        "gallery": [
            "work_images/art/dejavu_desiney/dejavu_desiney01.png",
            "work_images/art/dejavu_desiney/dejavu_desiney00.jpg",
            "work_images/art/dejavu_desiney/dejavu_desiney02.jpg"
        ],
        "tags": [
            "Generative AI Pop Art",
            "Creative Remix",
            "Appropriation Art",
            "Mickey Motif",
            "Glitch & Graffiti",
            "Contemporary Art"
        ],
        "description": "<Disney Déjà vu : A Creative Remix> 시리즈는 생성형 AI(Generative AI) 기술을 예술적 탐구의 도구로 적극 활용하여, 인류의 집단 무의식 속에 가장 친숙하게 각인된 디즈니의 클래식 캐릭터들을 현대적인 시각으로 재해석한 팝아트 연작입니다. 미키마우스와 같은 상징적 캐릭터의 시각적 유전자를 AI 알고리즘과 회화적 글리치(Glitch), 그라피티 질감의 결합을 통해 창의적으로 변형함으로써, 디지털 시대의 '익숙하지만 낯선(Déjà vu)' 시각적 경험을 창출했습니다. 기술과 대중문화, 원본과 복제의 경계를 넘나드는 생성형 AI 실험을 통해 동시대 팝아트의 새로운 가능성과 조화로운 조형적 확장을 선구적으로 제시합니다.",
        "featured": true
    },
    {
        "id": "cjenm-kakao-emoticon",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "CJ ENM IP : KAKAO EMOTICON LAUNCHING\nCJ ENM 콘텐츠 IP 카카오 이모티콘 런칭",
        "subtitle": "CJ ENM 엔터테인먼트 콘텐츠 IP 기반 카카오 공식 이모티콘 상용화 출시 지도",
        "year": "2024",
        "client": "CJ ENM · 카카오 (Kakao)",
        "image": "work_images/academic/cjenm_kakao/emoticon_01.gif",
        "gallery": [
            "work_images/academic/cjenm_kakao/emoticon_01.gif",
            "work_images/academic/cjenm_kakao/emoticon_02.gif",
            "work_images/academic/cjenm_kakao/emoticon_03.gif",
            "work_images/academic/cjenm_kakao/emoticon_04.gif",
            "work_images/academic/cjenm_kakao/kakao_emoticon_launch.png"
        ],
        "tags": [
            "CJ ENM IP",
            "Kakao Emoticon",
            "Industry Collaboration",
            "Motion Design",
            "Character IP",
            "Commercialization"
        ],
        "description": "CJ ENM의 엔터테인먼트 콘텐츠 IP를 활용한 '그래픽 기반 콘텐츠 제작' 산학 연계 수업을 총괄하여, 학생들이 제작한 캐릭터 모션 그래픽을 카카오톡 공식 이모티콘으로 상용화 출시한 프로젝트입니다. 산업체와 대학 간의 긴밀한 산학 연구를 바탕으로 IP 라이선스 실무부터 모션 최적화, 스토어 승인 및 런칭까지 전 과정을 지도하여 살아있는 현장 중심의 실무 교육 성과를 창출했습니다.",
        "featured": true
    },
    {
        "id": "cjenm-line-sticker",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "CJ ENM IP : LINE STICKER & CHARACTER\nCJ ENM 콘텐츠 IP 글로벌 라인 스티커 런칭",
        "subtitle": "글로벌 메신저 LINE 스티커 공식 상용화 출시 및 디지털 캐릭터 그래픽 지도",
        "year": "2024",
        "client": "CJ ENM · 네이버 라인 (LINE)",
        "image": "work_images/academic/cjenm_line/line_sticker_03.gif",
        "gallery": [
            "work_images/academic/cjenm_line/line_sticker_03.gif",
            "work_images/academic/cjenm_line/line_sticker_01.gif",
            "work_images/academic/cjenm_line/line_sticker_02.gif",
            "work_images/academic/cjenm_line/line_sticker_04.gif",
            "work_images/academic/cjenm_line/line_sticker_launch.jpg"
        ],
        "tags": [
            "LINE Sticker",
            "CJ ENM IP",
            "Global Platform",
            "Character Design",
            "Digital Content",
            "Industry Collaboration"
        ],
        "description": "글로벌 메신저 플랫폼 네이버 라인(LINE) 스토어에 CJ ENM 콘텐츠 IP를 기반으로 한 디지털 스티커 및 캐릭터 상품을 공식 출시한 산학협력 프로젝트입니다. 글로벌 사용자 경험을 고려한 표정 연출과 타이포그래피, 애니메이션 프레임 제어를 지도하여 스토어 정식 등록 및 글로벌 유통을 성공시켰습니다.",
        "featured": true
    },
    {
        "id": "neoul-asia-design-winner",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "NEOUL : ASIA NEW ART & DESIGN WINNER\nNEOUL : 아시아 신예 예술 및 디자인 공모전 \"1등\" 석권",
        "subtitle": "생성형 AI와 브랜딩의 융합 지도 — 아시아 국제 공모전 \"1등(Winner)\" 수상",
        "year": "2024",
        "client": "아시아 신예 예술 및 디자인 공모전 연맹",
        "image": "work_images/academic/neoul/neoul_01_perfume_hero.png",
        "gallery": [
            "work_images/academic/neoul/neoul_01_perfume_hero.png",
            "work_images/academic/neoul/neoul_brand_system.png",
            "work_images/academic/neoul/neoul_winner_certificate01.png",
            "work_images/academic/neoul/neoul_winner_certificate02.png"
        ],
        "tags": [
            "1st Prize Winner (1등)",
            "Asia Design Awards",
            "Generative AI",
            "Brand System",
            "Student Mentorship"
        ],
        "description": "아시아 전역의 신예 디자이너들이 경쟁하는 국제 공모전에서 '1등(Winner)'을 수상한 <NEOUL> 브랜드 디자인 프로젝트입니다. 생성형 AI 도구를 브랜드 무드보드와 비주얼 아이덴티티 수립 과정에 선구적으로 접목하여, 전통적인 그래픽 디자인의 한계를 뛰어넘는 독창적 조형 언어와 미래지향적 브랜딩 파이프라인을 학생과 함께 성공적으로 구축했습니다.",
        "featured": true
    },
    {
        "id": "art-confusion",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "CONFUSION : PERCEPTION & MATRIX\n혼돈 : 인식과 매트릭스",
        "subtitle": "옵티컬 일루전과 키네틱 움직임을 통해 지각의 불확실성을 탐구한 개념 미술",
        "year": "2016",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/cunfusion/confusion02.jpg",
        "gallery": [
            "work_images/art/cunfusion/confusion02.jpg",
            "work_images/art/cunfusion/confusion01.gif"
        ],
        "tags": [
            "Confusion",
            "Optical Illusion",
            "Kinetic Art",
            "Visual Paradox",
            "Conceptual Art",
            "Perception"
        ],
        "description": "시각적 착시(Optical Illusion)와 동적인 움직임(Kinetic Motion)을 결합하여, 인간이 사물과 세계를 인지하는 방식의 불완전성과 '혼돈(Confusion)'의 상태를 시각화한 개념 미술 작업입니다. 정지된 평면과 움직이는 이미지의 경계를 넘나들며, 관람자의 시선과 뇌의 해석 사이에서 발생하는 지각적 왜곡과 미결정성의 긴장을 포착합니다.",
        "featured": true
    },
    {
        "id": "art-foreplay",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "FOREPLAY (FOR PLAY)\n포어플레이",
        "subtitle": "음악 Play 기호를 통한 성적 은유와 비가시적 감각의 개념적 시각화",
        "year": "2008",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/foreplay/foreplay.jpg",
        "gallery": [
            "work_images/art/foreplay/foreplay.jpg"
        ],
        "tags": [
            "2008",
            "Foreplay",
            "For Play",
            "Conceptual Art",
            "Music Play Symbols",
            "Sexual Metaphor",
            "Invisible Visualization",
            "Graphic Art"
        ],
        "description": "'For Play(유희를 위하여)'와 'Foreplay(전희)'라는 이중적 언어유희를 바탕으로, 음악 재생(Play) 기호들을 차용하여 성적인(Sexual) 감각과 뉘앙스를 보이지 않게 은유적으로 시각화한 개념 미술 작업입니다. 직설적인 재현이나 노골적인 묘사를 배제하고 보편적인 음악 기호 체계를 재해석하여, 눈에 보이지 않는 감각적 긴장과 상상력을 촉발하는 개념적 비주얼화를 탐구했습니다.",
        "featured": true
    },
    {
        "id": "art-unveil-capitalism",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : MONEY & CURRENCY\n언베일 : 자본과 화폐의 기호학",
        "subtitle": "고광택 자동차 크롬 도장 위에 가리고 드러낸 자본의 기호와 팽팽한 장력",
        "year": "2023 - 2024",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil_moneyseries_c/money.jpg",
        "gallery": [
            "work_images/art/unveil_moneyseries_c/money.jpg",
            "work_images/art/unveil_moneyseries_c/un_veil_bitcoin.jpg",
            "work_images/art/unveil_moneyseries_c/un_veil_moneyseries.jpg",
            "work_images/art/unveil_moneyseries_c/un_veil_w.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Chrome Coating",
            "Money Art",
            "Bitcoin & Capital",
            "Contemporary Art"
        ],
        "description": "달러, 파운드, 유로 등 세계 주요 법정 화폐부터 가상자산 비트코인까지, 자본주의 사회를 지배하는 절대적 교환 가치의 기호들을 고광택 자동차 크롬 도장(Chrome Coating) 기법으로 완성한 대형 연작입니다. 자본을 은밀하게 가리거나 가려지는 현실 속에서도, 팽팽한 막의 장력을 뚫고 선명하게 존재감을 드러내는 화폐 심볼들을 통해 우리 삶을 움직이는 자본의 위력과 시각적 긴장을 직관적으로 드러냅니다.",
        "featured": true
    },
    {
        "id": "art-unveil-trans",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL : ECO-TRANSPARENCY\n[UN]-VEIL : 생태적 투명성",
        "subtitle": "투명한 프레임 안으로 투영되는 또 다른 이미지와 생태계의 숨결",
        "year": "2023 - 2024",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil_trans/unveil_trans00.jpg",
        "gallery": [
            "work_images/art/unveil_trans/unveil_trans00.jpg",
            "work_images/art/unveil_trans/unveil_trans01.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Eco-Transparency",
            "Ecological Art",
            "Layered Transparency",
            "Contemporary Installation",
            "Fine Art"
        ],
        "description": "[UN]-VEIL 시리즈의 조형 언어를 투명하고 가벼운 소재로 확장하여 생태계의 본질적 가치를 포착한 입체 회화입니다. 프레임의 투명성은 고정된 이미지를 넘어, 관람자의 시점과 공간적 배경, 그리고 내부에 투영된 자연의 상이 겹쳐지며 다층적인 시각적 대화를 만들어냅니다. 얇고 투명한 막 사이로 드러나는 겹겹의 이미지는 파괴와 소멸 속에서도 끊임없이 순환하는 자연 생태계의 숭고한 가치와, 물질과 비물질의 경계에서 생동하는 생명력을 역설적으로 증명합니다.",
        "featured": true
    },
    {
        "id": "art-unveil-omg",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : WHAT THE FUCK OMG\n언베일 : 왓 더 퍽 오마이갓",
        "subtitle": "고광택 자동차 크롬 도장 위에 가리고 드러낸 원초적 비명과 날것의 리액션",
        "year": "2017",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil_whathefuckomg/whathefuckomg.jpg",
        "gallery": [
            "work_images/art/unveil_whathefuckomg/whathefuckomg.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Chrome Coating",
            "Pop Statement",
            "Typography Object",
            "Contemporary Art"
        ],
        "description": "정치와 자본, 미디어와 정보의 과잉 속에서 개인이 느끼는 무력감과 실존적 충격을 'WTF?'와 'OMG!'라는 날것의 비속어와 감탄사로 디자인하여, 고광택 자동차 크롬 도장(Chrome Coating) 기법으로 박제한 연작입니다. 감정을 숨기거나 침묵 속에 가려진 상태 속에서도, 팽팽한 막을 뚫고 솟구쳐 올라 스스로의 존재를 드러내는 입체 텍스트를 통해 현대인의 가장 솔직한 저항이자 생생한 조형적 긴장감을 포착했습니다.",
        "featured": true
    },
    {
        "id": "art-oathincludingsound",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "PRESIDENTIAL OATH : INCLUDING SOUND\n대통령 선서",
        "subtitle": "헌법 선서문 속 글자를 재조합하여 대통령의 시대를 풍자한 평생의 연작 (2014 - ing)",
        "year": "2014 - 2026 (ing)",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/oathincludingsound/oath01.jpg",
        "gallery": [
            "work_images/art/oathincludingsound/oath01.jpg",
            "work_images/art/oathincludingsound/oath01_left_detail.jpg",
            "work_images/art/oathincludingsound/oath01_right_detail.jpg",
            "work_images/art/oathincludingsound/oath02.jpg",
            "work_images/art/oathincludingsound/oath03.jpg"
        ],
        "tags": [
            "Lifetime Project",
            "Presidential Oath",
            "Sound Art",
            "Text Reassembly",
            "Political Satire",
            "Installation"
        ],
        "audio": "work_images/art/oathincludingsound/oathsound.mp3",
        "description": "대한민국 헌법 제69조에 명시된 대통령 취임 선서문의 정형화된 문장 속에서 특정 글자들만을 선별적으로 드러내어, 각 대통령의 실제 행적과 통치 이면의 진실에 맞게 새로운 언어로 재조합(Reassembly)한 설치 및 사운드 아트 연작입니다. 2014년부터 시작되어 평생에 걸쳐 지속되는 작가의 라이프타임 프로젝트(Lifetime Project)로, 맹세(Oath)라는 언약의 숭고함 뒤에 감춰진 권력의 민낯과 역사의 아이러니를 실시간 사운드 파동과 함께 공감각적으로 폭로합니다.",
        "featured": true
    },
    {
        "id": "art-unveil-pocket",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : POCKET\n언베일 : 포켓 연작",
        "subtitle": "주머니 속에 은밀히 가리고 드러내는 사적 소지품과 기호의 긴장감",
        "year": "2017",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil_pocket/unveil_pocket01.jpg",
        "gallery": [
            "work_images/art/unveil_pocket/unveil_pocket01.jpg",
            "work_images/art/unveil_pocket/unveil_pocket02.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Pocket Object",
            "Everyday Secret",
            "Fine Art",
            "Contemporary Art"
        ],
        "description": "인간이 일상에서 가장 은밀하게 무언가를 숨겨두거나 꺼내어 사용하는 '주머니(Pocket)'라는 공간을 'Veil & Unveil'의 조형 언어로 재해석한 연작입니다. 주머니의 팽팽한 막 아래에서 형태의 실루엣을 드러내는 오브제들을 통해, 개인이 감추고 싶은 비밀과 무의식적인 노출의 이중성을 감각적인 부조로 포착했습니다.",
        "featured": true
    },
    {
        "id": "art-human",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "HUMAN : DESIRE & EXISTENCE\n휴먼 : 욕망과 실존",
        "subtitle": "현대 사회 속 인간의 욕망과 실존적 조건을 매핑하고 아카이빙한 개념 조형",
        "year": "2016",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/human/human01.png",
        "gallery": [
            "work_images/art/human/human01.png"
        ],
        "tags": [
            "Human",
            "Desire & Existence",
            "Archive & Mapping",
            "Conceptual Art",
            "Fine Art",
            "Contemporary Object"
        ],
        "description": "현대 문명 속에서 살아가는 '인간(Human)'의 다층적 욕망 구조와 실존적 조건을 아카이브 및 맵핑의 개념 미술 방법론으로 탐구한 연작입니다. 흩어지고 파편화된 인간의 조건들을 기호와 조형 오브제로 재구성하여, 우리가 살아가는 시대의 인간성에 대한 근원적 질문을 던집니다.",
        "featured": true
    },
    {
        "id": "art-mirror-mirror",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "MIRROR MIRROR ON THE WALL\n거울아 거울아",
        "subtitle": "거울의 반사성과 텍스트의 긴장으로 질문하는 인간의 자기애와 욕망",
        "year": "2020",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/mirrormirroronthewall/mirrormirroronthewall.jpg",
        "gallery": [
            "work_images/art/mirrormirroronthewall/mirrormirroronthewall.jpg"
        ],
        "tags": [
            "Mirror Art",
            "Text & Reflection",
            "Spatial Installation",
            "Contemporary Art",
            "Fine Art"
        ],
        "description": "동화 속 주술적 문구인 <거울아 거울아(Mirror Mirror on the Wall)>를 모티프로, 거울이라는 물질이 지닌 반사성과 투영성을 통해 인간의 내밀한 자기애와 타인의 시선, 그리고 욕망의 허상을 공간 속에서 탐구한 설치 및 텍스트 작업입니다.",
        "featured": true
    },
    {
        "id": "art-life-is-short",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "LIFE IS SHORT\n인생은 짧고",
        "subtitle": "유한한 삶의 시간성과 흐르는 물속 텍스트의 조형적 긴장을 담아낸 설치 작업",
        "year": "2017",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/life/life.jpg",
        "gallery": [
            "work_images/art/life/life.jpg",
            "work_images/art/life/life02.jpg"
        ],
        "tags": [
            "2017",
            "Installation",
            "Typography Object",
            "Existential Art",
            "Life is Short",
            "Contemporary Art",
            "Fine Art",
            "Time & Life"
        ],
        "description": "\"인생은 짧고(Life is Short)\"라는 실존적 명제를 세면대 오브제와 흐르는 물, 그리고 그 안에 새겨진 활자들의 상호작용으로 물질화한 설치 작업입니다. 물의 흐름 속에서 부유하고 씻겨 내려가는 글자들의 파편을 통해, 유한한 시간 속을 살아가는 인간의 덧없음과 찰나의 생명력을 감각적인 공간 조형으로 포착했습니다.",
        "featured": true
    },
    {
        "id": "ato-september-grand-prize",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "ATO OF SEPTEMBER : COLOR AWARD GRAND PRIZE\n9월의 아토 : 대한민국대학생색채대상 \"대상\" 수상",
        "subtitle": "커피전문브랜드 <9월의 아토> 브랜딩 지도 — 전국 공모전 최고 영예 \"대상\" 수상",
        "year": "2023",
        "client": "(사)한국색채학회",
        "image": "work_images/academic/ato_september/ato_01_dripbag_boxes.png",
        "gallery": [
            "work_images/academic/ato_september/ato_01_dripbag_boxes.png",
            "work_images/academic/ato_september/ato_02_box_coaster.png",
            "work_images/academic/ato_september/ato_brand_poster02.png",
            "work_images/academic/ato_september/ato_package_system.png",
            "work_images/academic/ato_september/ato_brand_poster01.png"
        ],
        "tags": [
            "Grand Prize (대상)",
            "Color Award",
            "Student Mentorship",
            "Coffee Branding",
            "Package Design",
            "Visual Identity"
        ],
        "description": "(사)한국색채학회가 주관한 대한민국대학생색채대상에서 최고 영예인 '대상(1등)'을 수상한 커피전문 브랜드 <9월의 아토> 브랜딩 지도 프로젝트입니다. 9월의 계절감과 원두의 깊은 풍미를 조화로운 색채 스펙트럼과 서정적인 타이포그래피, 패키지 시스템으로 일관성 있게 확장하여 전국 유수 대학 출품작 중 가장 뛰어난 색채 조형성과 브랜드 완성도를 인정받았습니다.",
        "featured": true
    },
    {
        "id": "suzip-startup-design",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "SUZIP : STARTUP DESIGN & BX\n수집 : 청년 창업디자인 사업계획서 및 BX 런칭 지도",
        "subtitle": "친환경 리사이클링 청년 창업 사업계획서 지도 및 토털 브랜드 아이덴티티 구축",
        "year": "2023",
        "client": "중소벤처기업부 · 창업진흥원",
        "image": "work_images/academic/suzip/suzip_01_logo_symbol.jpg",
        "gallery": [
            "work_images/academic/suzip/suzip_01_logo_symbol.jpg",
            "work_images/academic/suzip/suzip_brand_identity.jpg",
            "work_images/academic/suzip/suzip_package_set.jpg",
            "work_images/academic/suzip/suzip_business_plan.jpg"
        ],
        "tags": [
            "Startup Design",
            "Business Plan",
            "SUZIP BX",
            "Recycling Brand",
            "Packaging System",
            "Mentorship"
        ],
        "description": "학생들의 실전 창업 역량을 배양하기 위해 지도교수로서 사업계획서 수립부터 네이밍, 로고마크, 패키지 시스템까지 전 과정을 총괄 디렉팅한 청년 창업 브랜드 <수집(SUZIP)> 프로젝트입니다. 버려지는 자원에 새로운 가치를 부여하는 리사이클링 철학을 볼드하고 모던한 타이포그래피와 친환경 패키지 구조로 구현하여 실제 시장 런칭을 성공적으로 견인했습니다.",
        "featured": true
    },
    {
        "id": "geosan-cafe-livinglab",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "GEOSAN CAFE : REGIONAL DESIGN LIVING LAB\n거산카페 : 당진 지역상생 디자인 리빙랩 프로젝트 총괄",
        "subtitle": "당진 지역 소상공인 상생을 위한 디자인 리빙랩 프로젝트 총괄 및 메뉴판·비주얼 개선",
        "year": "2023",
        "client": "당진시 · 디자인 리빙랩 추진단",
        "image": "work_images/academic/geosan/geosan_detail01.png",
        "gallery": [
            "work_images/academic/geosan/geosan_detail01.png",
            "work_images/academic/geosan/geosan_detail02.png",
            "work_images/academic/geosan/geosan_branding_concept.png",
            "work_images/academic/geosan/geosan_season03.png",
            "work_images/academic/geosan/geosan_season04.png",
            "work_images/academic/geosan/geosan_season01.png",
            "work_images/academic/geosan/geosan_season02.png",
            "work_images/academic/geosan/geosan_menu_board.png"
        ],
        "tags": [
            "Design Living Lab",
            "Regional Synergy",
            "Menu Design",
            "Local Store BX",
            "Dangjin City"
        ],
        "description": "지역 소상공인과 대학이 함께 호흡하는 '디자인 리빙랩(Living Lab)' 프로젝트의 총괄 책임자로서, 당진 지역 카페 <거산카페>의 브랜드 시인성과 매출 증대를 위한 통합 비주얼 개선을 이끌었습니다. 복잡했던 기존 메뉴판 체계를 소비자의 시선 동선에 맞춰 직관적인 인포그래픽형 메뉴판으로 전면 리뉴얼하고 매장 내 사이니지 시스템을 현대적으로 재구축했습니다.",
        "featured": true
    },
    {
        "id": "yeomiomi-tofu-package-copyright",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "YEOMI OMI : LOCAL TOFU PACKAGE & COPYRIGHT\n여미오미 : 로컬푸드 두부 패키지 캡스톤 & 공식 저작권 등록",
        "subtitle": "지역 로컬푸드 두부/순두부 패키지 캡스톤 디자인 총괄 및 한국저작권위원회 공식 저작권 등록",
        "year": "2023",
        "client": "한국저작권위원회 · 여미오미 로컬푸드",
        "image": "work_images/academic/yeomiomi_tofu/yeomiomi_01_char_sundubu.png",
        "gallery": [
            "work_images/academic/yeomiomi_tofu/yeomiomi_01_char_sundubu.png",
            "work_images/academic/yeomiomi_tofu/yeomiomi_02_char_tofu.png",
            "work_images/academic/yeomiomi_tofu/yeomiomi_03_classic_sundubu.png",
            "work_images/academic/yeomiomi_tofu/yeomiomi_04_classic_tofu.png",
            "work_images/academic/yeomiomi_tofu/yeomiomi_tofu_package_prev.jpg"
        ],
        "tags": [
            "Capstone Design",
            "Package Copyright",
            "Yeomi Omi",
            "Local Food BX",
            "Regional Industry"
        ],
        "description": "지역 농식품 브랜드 <여미오미>의 두부 및 순두부 라인업을 대상으로 진행한 산학 캡스톤 디자인 지도 프로젝트입니다. 전통적인 두부 포장의 관행을 벗어나 국산 콩의 신선함과 프리미엄 로컬푸드의 정체성을 살린 세련된 일러스트와 레이아웃을 도입했습니다. 디자인 완성 후 한국저작권위원회에 공식 저작권 등록을 완료하여 학생들의 지식재산권(IP) 창출을 실현했습니다.",
        "featured": true
    },
    {
        "id": "yeomiomi-center-guidemap",
        "category": "academic",
        "categoryName": "ACADEMIC",
        "title": "YEOMI OMI CENTER : INFOGRAPHIC GUIDEMAP\n여미오미 로컬푸드센터 : 인포그래픽 가이드맵 디자인 개선",
        "subtitle": "지역 농식품 복합문화공간을 위한 인포그래픽 가이드맵 및 사이니지 디자인 개선",
        "year": "2023",
        "client": "여미오미 로컬푸드센터",
        "image": "work_images/academic/yeomiomi_map/yeomiomi_center_view01.png",
        "gallery": [
            "work_images/academic/yeomiomi_map/yeomiomi_center_view01.png",
            "work_images/academic/yeomiomi_map/yeomiomi_center_view02.png",
            "work_images/academic/yeomiomi_map/yeomiomi_guidemap_main.png",
            "work_images/academic/yeomiomi_map/yeomiomi_guidemap_illust.png",
            "work_images/academic/yeomiomi_map/yeomiomi_guidemap_sub.png",
            "work_images/academic/yeomiomi_map/yeomiomi_signboard.jpg"
        ],
        "tags": [
            "Infographic Map",
            "Space Signage",
            "Wayfinding",
            "Yeomi Omi Center",
            "Local Culture Space"
        ],
        "description": "여미오미 로컬푸드센터를 방문하는 고객들의 공간 경험을 돕기 위해 기획된 인포그래픽 가이드맵 디자인 프로젝트입니다. 로컬푸드 직매장, 가공 체험장, 카페테리아 등 광범위한 복합 공간의 동선을 아기자기하고 명쾌한 일러스트 맵으로 설계하여 방문객의 공간 인지성과 체류 만족도를 대폭 향상시켰습니다.",
        "featured": true
    },
    {
        "id": "art-pinkofdreamshopes-bluingofhopes",
        "category": "media-art",
        "categoryName": "MEDIA ART & AX",
        "title": "BLUING OF HOPES · PINK OF DREAMS\n블루잉 오브 호프스 & 핑크 오브 드림스",
        "subtitle": "순수 회화로 위장된 생성형 AI와 캔버스 리터칭의 감각적 조우",
        "year": "2022",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/pinkofdreamshopes, bluingofhopes/BluingofHopes.jpg",
        "gallery": [
            "work_images/art/pinkofdreamshopes, bluingofhopes/BluingofHopes.jpg",
            "work_images/art/pinkofdreamshopes, bluingofhopes/PinkofDreamsHopes.jpg"
        ],
        "tags": [
            "Generative AI Painting",
            "Early AI Art (2022)",
            "Canvas Retouching",
            "Museum Exhibition",
            "Color & Emotion",
            "Fine Art"
        ],
        "description": "인간 내면의 순수한 열망과 이상향을 <Bluing of Hopes>의 푸른빛과 <Pink of Dreams>의 분홍빛 서정으로 담아낸 대형 캔버스 연작입니다. 생성형 AI가 빚어낸 정교한 비현실적 공간감 위에 작가의 터치를 덧입혀 기계적 차가움을 온기 어린 감성으로 전환했습니다. '기술이 예술을 흉내 내는 것이 아니라, 예술이 기술을 완벽하게 품어내는' 역전의 미학을 통해, 미술관 현장에서 전통 회화의 믿음을 전복시키며 인공지능 시대 회화의 새로운 가능성을 가장 앞서 증명했습니다.",
        "featured": true
    },
    {
        "id": "hotel-dawson-christmas-film",
        "category": "bx",
        "categoryName": "BX",
        "title": "HOTEL DAWSON : CHRISTMAS MOOD FILM\n호텔도슨 : 크리스마스 시즌 무드 필름",
        "subtitle": "크리스마스 홀리데이 시즌을 위해 특별 제작된 호텔도슨 시네마틱 무드 필름 & 모션 그래픽",
        "year": "2021 - 2022",
        "client": "HOTEL DAWSON",
        "image": "work_images/bx/hoteldawson/hoteldawsonchristmasmov.jpg",
        "video": "work_images/bx/hoteldawson/hoteldawsonchristmasmov.mp4",
        "gallery": [
            "work_images/bx/hoteldawson/hoteldawsonchristmasmov.jpg"
        ],
        "tags": [
            "Christmas Season",
            "Mood Film",
            "Motion Graphic",
            "Holiday Special",
            "Hotel Dawson BX",
            "Cinematic Video",
            "Castle Window Lights",
            "Twinkle Lighting"
        ],
        "description": "프리미엄 라이프스타일 브랜드 '호텔도슨(HOTEL DAWSON)'의 크리스마스 홀리데이 시즌을 위해 특별 기획·제작된 시네마틱 무드 필름 영상입니다. 밤하늘에 흩날리는 새하얀 눈송이와 함께 반짝이는 'HOTEL DAWSON' 조명 타이포그래피, 캐슬 창문 사이로 따뜻하게 뿜어져 나오는 홀리데이 불빛, 그리고 감미로운 크리스마스 선율이 어우러져 호텔도슨만의 신비롭고 클래식한 겨울 정취를 완벽하게 선사합니다.",
        "featured": true
    },
    {
        "id": "hotel-dawson-bx",
        "category": "bx",
        "categoryName": "BX",
        "title": "HOTEL DAWSON\n호텔도슨 : 홀리데이 스페셜 패키지",
        "subtitle": "한국의 미학을 담은 럭셔리 명절 선물 세트 & 패키지 디자인",
        "year": "2021 - 2022",
        "client": "HOTEL DAWSON",
        "image": "work_images/bx/hoteldawson/package/hoteldawson5-2.jpg",
        "gallery": [
            "work_images/bx/hoteldawson/package/hoteldawson5-2.jpg",
            "work_images/bx/hoteldawson/package/hoteldawson5-1.jpg",
            "work_images/bx/hoteldawson/package/hoteldawson5-3.jpg"
        ],
        "tags": [
            "Holiday Special Package",
            "Korean Heritage",
            "Luxury Gift Box",
            "Traditional Pattern",
            "Foil Stamping",
            "Package Design"
        ],
        "description": "프리미엄 라이프스타일 브랜드 '호텔도슨(HOTEL DAWSON)'의 명절 시즌을 기념하여 기획된 코리안 헤리티지 리미티드 기프트 패키지입니다. 한국 고유의 전통 창호와 격자 문양의 기하학적 조형미를 호텔도슨의 정제된 클래식 감성으로 재해석하고, 전통 문살의 구조적인 그래픽 패턴과 우아한 옥색 컬러 팔레트를 매치하여 오리엔탈적인 고요함과 우아함을 시각화했습니다. 전통의 기품과 동시대적 감각이 공존하는 고급스러운 지함 구조를 통해, 소중한 이에게 전하는 명절 선물의 가치와 브랜드의 예술적 감도를 극대화했습니다.",
        "featured": true
    },
    {
        "id": "hotel-dawson-cards",
        "category": "bx",
        "categoryName": "BX",
        "title": "HOTEL DAWSON : BRAND CARDS\n호텔도슨 브랜드 그래픽 카드",
        "subtitle": "호텔도슨 브랜드 그래픽 카드",
        "year": "2021 - 2022",
        "client": "HOTEL DAWSON",
        "image": "work_images/bx/hoteldawson/card/hoteldawson1-1.jpg",
        "gallery": [
            "work_images/bx/hoteldawson/card/hoteldawson1-1.jpg",
            "work_images/bx/hoteldawson/card/hoteldawson1-2.jpg",
            "work_images/bx/hoteldawson/card/hoteldawson2-1.jpg",
            "work_images/bx/hoteldawson/card/hoteldawson2-2.jpg",
            "work_images/bx/hoteldawson/card/hoteldawson3-1.jpg",
            "work_images/bx/hoteldawson/card/hoteldawson3-2.jpg",
            "work_images/bx/hoteldawson/card/hoteldawson4-1.jpg"
        ],
        "tags": [
            "Card Design",
            "Editorial Graphic",
            "Luxury Print",
            "Typography"
        ],
        "description": "호텔도슨 특유의 클래식하고 감각적인 호텔리어 무드를 담아낸 카드 및 고객 경험용 그래픽 카드 전 라인업입니다.",
        "featured": true
    },
    {
        "id": "hotel-dawson-golf",
        "category": "bx",
        "categoryName": "BX",
        "title": "HOTEL DAWSON : GOLF PACKAGE\nLIMITED 호텔도슨 골프공 패키지",
        "subtitle": "직접 펜으로 정밀하게 드로잉한 빈티지 골퍼 일러스트와 럭셔리 패키지 디자인",
        "year": "2021 - 2022",
        "client": "HOTEL DAWSON",
        "image": "work_images/bx/hoteldawson/golf/hoteldawsongolf01.jpg",
        "gallery": [
            "work_images/bx/hoteldawson/golf/hoteldawsongolf01.jpg",
            "work_images/bx/hoteldawson/golf/detail_3139685_16784238657200_big.webp",
            "work_images/bx/hoteldawson/golf/hoteldawson_golf_handdrawing.jpg",
            "work_images/bx/hoteldawson/golf/hoteldawsongolf02.jpg"
        ],
        "tags": [
            "VIP Limited Edition",
            "Hand Drawing",
            "Vintage Golfer Illustration",
            "Ball for Albatross",
            "Luxury Package",
            "Pen & Ink Art",
            "Package Design"
        ],
        "description": "호텔도슨의 LIMITED VIP를 위한 스페셜 패키지였던 'Ball for Albatross' 골프공 스페셜 패키지 프로젝트입니다. 작가가 직접 섬세한 펜화 에칭 기법으로 정밀하게 완성한 빈티지 골퍼 핸드 드로잉(Hand-drawing) 캐릭터 일러스트레이션을 중심으로, 삼원페이퍼 시리오 러프 350g 지류와 금박·먹박·블루박의 정교한 후가공 인쇄 설계를 디렉팅했습니다. 정밀한 수작업 펜 드로잉 스킬과 스페셜 골프공 디자인 패키지 구조가 결합된 완성도 높은 기프트 에디션입니다.",
        "featured": true
    },
    {
        "id": "hotel-dawson-mini",
        "category": "bx",
        "categoryName": "BX",
        "title": "HOTEL DAWSON : MINI PACKAGE\n호텔도슨 핸드케어 & 룸스프레이 미니 패키지",
        "subtitle": "호텔도슨 핸드케어 & 룸 스프레이 미니 패키지 에디션",
        "year": "2021 - 2022",
        "client": "HOTEL DAWSON",
        "image": "work_images/bx/hoteldawson/minipackage/mini01.jpg",
        "gallery": [
            "work_images/bx/hoteldawson/minipackage/mini01.jpg",
            "work_images/bx/hoteldawson/minipackage/mini02_left.jpg",
            "work_images/bx/hoteldawson/minipackage/mini02_right.jpg",
            "work_images/bx/hoteldawson/minipackage/mini03.jpg"
        ],
        "tags": [
            "Mini Package",
            "Luxury Beauty",
            "Brand Identity",
            "Packaging"
        ],
        "description": "호텔도슨의 시그니처 엠블럼과 섬세한 타이포그래피를 적용한 핸드케어 및 룸 스프레이 미니 패키지 라인업 디자인입니다.",
        "featured": true
    },
    {
        "id": "changshin-shoppingbag",
        "category": "bx",
        "categoryName": "BX",
        "title": "CHANGSHIN UNIVERSITY\n창신대학교 쇼핑백 & 패키지 디자인",
        "subtitle": "대학 공식 브랜딩 쇼핑백 및 지기구조 그래픽",
        "year": "2018 - 2020",
        "client": "창신대학교",
        "image": "work_images/bx/changshinuniv/changshin01.jpg",
        "gallery": [
            "work_images/bx/changshinuniv/changshin01.jpg",
            "work_images/bx/changshinuniv/changshin02.jpg"
        ],
        "tags": [
            "Shopping Bag",
            "Package Design",
            "Campus Identity"
        ],
        "description": "창신대학교의 브랜드 정체성을 담아낸 공식 쇼핑백 및 패키지 인쇄물 그래픽 시스템입니다.",
        "featured": true
    },
    {
        "id": "changshin-artwall",
        "category": "bx",
        "categoryName": "BX",
        "title": "CHANGSHIN UNIVERSITY : CAMPUS ART WALL\n창신대학교 캠퍼스 환경 그래픽 & 슈퍼그래픽 아트월",
        "subtitle": "역동적인 타이포그래피 레이어와 웜 탠저린 컬러로 탈바꿈한 학생 복합문화 라운지",
        "year": "2018",
        "client": "창신대학교",
        "image": "work_images/bx/changshinuniv/changshinartwall_left.jpg",
        "gallery": [
            "work_images/bx/changshinuniv/changshinartwall_left.jpg",
            "work_images/bx/changshinuniv/changshinartwall_right.jpg",
            "work_images/bx/changshinuniv/changshinartwall02_left.jpg",
            "work_images/bx/changshinuniv/changshinartwall02_right.jpg"
        ],
        "tags": [
            "Campus Art Wall",
            "Super-graphic",
            "Spatial Typography",
            "Environmental Design",
            "Tangerine Palette"
        ],
        "description": "창신대학교 학생 식당 및 휴게 복합 공간의 환경 개선을 위해 기획된 대형 슈퍼그래픽(Super-graphic) 환경 디자인 프로젝트입니다. <PASSION, INTEGRITY, CARING, GLOBAL, FUN> 등 대학의 핵심 비전과 청년의 가치 키워드들을 볼드하게 배치하였으며, 평면의 벽면에 리드미컬한 시각적 깊이감과 에너지를 불어넣었습니다. 따뜻하고 생동감 넘치는 컬러 시스템을 함께 디자인하여, 학생들의 휴게공간을 영감을 나누는 트렌디한 캠퍼스 라운지로 재탄생시켰습니다.",
        "featured": true
    },
    {
        "id": "wedding-card-bx",
        "category": "bx",
        "categoryName": "BX",
        "title": "WEDDING INVITATION : SAVE THE DATE\n웨딩 인비테이션 : 프라이빗 골드 에디션",
        "subtitle": "딥 포레스트 그린 지류와 섬세한 골드 포일 스탬핑으로 완성한 하이엔드 청첩장 디자인 (2017)",
        "year": "2017",
        "client": "Custom Edition",
        "image": "work_images/bx/weddingcard/weddingcard01.jpg",
        "gallery": [
            "work_images/bx/weddingcard/weddingcard01.jpg",
            "work_images/bx/weddingcard/weddingcard02.jpg"
        ],
        "tags": [
            "Wedding Stationery",
            "Gold Foil Stamping",
            "Editorial Layout",
            "Typography",
            "Infographic Map",
            "Custom Edition"
        ],
        "description": "인생의 가장 고귀한 서약을 알리기 위해 기획된 프라이빗 커스텀 웨딩 인비테이션 카드입니다. 묵직하고 깊이 있는 딥 포레스트 그린(Deep Forest Green)과 다크 차콜 톤의 프리미엄 지류 위에, 섬세한 캘리그라피와 정제된 세리프 서체를 정교한 골드 포일 스탬핑(Gold Foil / 금박)으로 압인하여 클래식 럭셔리의 정수를 담아냈습니다. 카드 앞면의 우아한 타이포그래피와 뒷면의 정갈한 초대 문구, 그리고 예식 공간의 위치를 한눈에 전달하는 미니멀한 약도 인포그래픽까지 완벽한 비례의 그리드로 설계하여 받는 이에게 잊지 못할 특별한 감동을 선사합니다.",
        "featured": false
    },
    {
        "id": "art-no-hum-yes",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : NO, HUM…, YES\n아니오, 글쎄…, 예",
        "subtitle": "숨기거나 가려지는 침묵 속에서도 막을 밀어내며 드러나는 망설임의 찰나",
        "year": "2016",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/no.hum.yes/NO, hum…, yes.jpg",
        "gallery": [
            "work_images/art/no.hum.yes/NO, hum…, yes.jpg",
            "work_images/art/no.hum.yes/NO, hum…, yes 02.jpg",
            "work_images/art/no.hum.yes/NO, hum…, yes 03.jpg"
        ],
        "tags": [
            "Veil & Unveil",
            "Fine Art",
            "Typography Object",
            "Color Panel",
            "Contemporary Art"
        ],
        "description": "'아니오(No)'와 '예(Yes)'라는 확답 사이, 결정을 유보하는 '글쎄(Hum…)'의 찰나를 'Veil과 Unveil 사이'의 시각 언어로 포착한 연작입니다. 생각을 스스로 감추거나 외부 규범에 의해 가려지는 상태 속에서도, 팽팽한 얇은 막을 밀어내며 윤곽을 드러내고야 마는 입체 텍스트를 통해 인간 내면의 미묘한 심리적 긴장감을 3색 패널 위에 가시화했습니다.",
        "featured": true
    },
    {
        "id": "art-unveil-main",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "UN_VEIL : VEIL OR UNVEIL\n언베일 : 가려짐과 드러냄 사이",
        "subtitle": "은폐와 비은폐, 감춤과 드러남의 경계에서 솟아오르는 사회적 상징 기호의 입체 회화",
        "year": "2015",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil series/art-together-to-gather_p38.jpeg",
        "gallery": [
            "work_images/art/unveil series/art-together-to-gather_p38.jpeg",
            "work_images/art/unveil series/un_veil01.jpg",
            "work_images/art/unveil series/un_veil_qm.jpg",
            "work_images/art/unveil series/un_veil_gov.jpg",
            "work_images/art/unveil series/un_veil_mike.jpg",
            "work_images/art/unveil series/un_veil_money.jpg",
            "work_images/art/unveil series/un_veil 01.png"
        ],
        "tags": [
            "Solo Exhibition",
            "Veil or Unveil",
            "Concealment & Unconcealment",
            "Symbol & Power",
            "Contemporary Painting",
            "Installation"
        ],
        "description": "스스로 무언가를 감추는 자발적 행위이든, 권력과 사회적 상황에 의해 강제로 가려지는 억압이든, 인간과 사회의 모든 관계는 '은폐(Veil)'와 '비은폐(Unveil)'의 연속된 긴장 속에 존재합니다. 이 연작은 국가 권력, 발언의 마이크, 자본(돈), 의문의 물음표 등 사회를 지배하는 핵심 상징 기호들이 표면 아래로 은폐당하면서도, 동시에 팽팽한 장력을 밀어내며 기어이 자신의 실루엣을 비은폐(드러냄)하고야 마는 이중적 순간을 입체적인 조형 회화로 포착했습니다. 감추려 할수록 더욱 완강하게 솟구쳐 오르고, 가려질수록 더욱 선명해지는 기호들의 저항을 통해, 진실의 은폐와 폭로가 충돌하는 동시대 사회의 보이지 않는 권력 구조와 인간 실존의 팽팽한 긴장감을 생생하게 증언합니다.",
        "featured": true
    },
    {
        "id": "art-rockpaperscissors",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : ROCK PAPER SCISSORS\n가위바위보 : 순환하는 관계의 막",
        "subtitle": "상대를 가리거나 가려지는 관계, 그리고 표면 위로 드러나는 세 가지 제스처",
        "year": "2015",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/rockpaperscissors01/rockpaperscissors01.jpg",
        "gallery": [
            "work_images/art/rockpaperscissors01/rockpaperscissors01.jpg",
            "work_images/art/rockpaperscissors01/rockpaperscissors02.jpg",
            "work_images/art/rockpaperscissors01/rockpaperscissors03.jpg",
            "work_images/art/rockpaperscissors01/rockpaperscissors04.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Rock Paper Scissors",
            "Fine Art",
            "Contemporary Art"
        ],
        "description": "절대적 승자도 패자도 없이 서로를 가리고 가려지는 '가위, 바위, 보'의 상대적 역학을 'Veil과 Unveil 사이'의 긴장으로 풀어낸 연작입니다. 물고 물리는 관계 속에서도 팽팽한 막을 밀어내며 솟아오르는 세 가지 손의 제스처를 통해, 보이지 않는 규칙과 관계의 유기적 긴장감을 감각적인 조형적 환영으로 담아냈습니다.",
        "featured": true
    },
    {
        "id": "art-unveil-nothinghappens",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : CERAMIC — NOTHING HAPPENS\n[un]veil : 아무것도 일어나지 않는다.",
        "subtitle": "도자 활자의 의도적 이탈과 중력의 개입으로 '아무 일도 일어나지 않음'을 역설하는 공간 설치",
        "year": "2015",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil_nothinghappens/nothinghappens01.jpg",
        "gallery": [
            "work_images/art/unveil_nothinghappens/nothinghappens01.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Ceramic Installation",
            "Typography Object",
            "Spatial Paradox",
            "Nothing Happens",
            "Physical Gravity",
            "Contemporary Art",
            "Fine Art"
        ],
        "description": "흙을 빚어 고온의 가마에서 소성한 딥블루 도자(Ceramic) 활자 타일로 <NOTHING HAPPENS(아무 일도 일어나지 않는다)>라는 명제를 벽면과 바닥의 공간적 차원으로 확장한 세라믹 설치 작업입니다. 벽면 위에 단정히 도열된 문자 그리드 중 글자 타일 하나('P')를 의도적으로 바닥으로 떨어뜨려 비스듬히 배치함으로써, '아무 일도 일어나지 않는다'는 언어적 선언을 '글자의 추락'이라는 물리적 사건이 스스로 배반하고 뒤흔들게 만듭니다. 단단하게 구워졌으나 언제든 깨어질 수 있는 도자의 취약한 물성, 중력과 여백의 개입, 그리고 완결된 질서에서 이탈한 단 하나의 파편이 만들어내는 시각적 긴장은 관람자로 하여금 언어의 허상과 실존적 사건 사이의 팽팽한 역설을 사유하게 합니다.",
        "featured": true
    },
    {
        "id": "art-unveil-ceramic-silence",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : CERAMIC\n너희들의 침묵은 못견디게 시끄러워",
        "subtitle": "오랜 인내로 구워낸 단단함과 언제든 깨질 수 있는 침묵의 취약성을 흙으로 빚다",
        "year": "2015",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil_ceramic_너희들의침묵은못견디게시끄러워/unveil_ceramic_너희들의침묵은못견디게시끄러워.jpg",
        "gallery": [
            "work_images/art/unveil_ceramic_너희들의침묵은못견디게시끄러워/unveil_ceramic_너희들의침묵은못견디게시끄러워.jpg",
            "work_images/art/unveil_ceramic_너희들의침묵은못견디게시끄러워/ceramic_silence_black.jpg",
            "work_images/art/unveil_ceramic_너희들의침묵은못견디게시끄러워/ceramic_silence_white.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Ceramic Art",
            "Tile Typography",
            "Fragility & Silence",
            "Social Critique"
        ],
        "description": "흙을 빚어 오랜 시간 말리고, 유약을 입혀 고온의 가마에서 구워낸 세라믹 타일 패널 연작입니다. 단단하게 구워졌지만 작은 충격에도 산산조각 날 수 있는 도자의 역설적인 물성은, 영원할 것처럼 견고해 보이지만 실상은 한순간에 깨어질 듯 위태로운 '사회적 침묵(Veil)'의 속성을 투영합니다. 오랜 인내로 빚어낸 흙의 표면 위에 솟아오른 <너희들의 침묵은 못견디게 시끄러워>라는 활자는, 방조된 침묵 뒤에 숨겨진 거대한 소음과 부서지기 쉬운 위선을 단호하게 폭로하고 드러냅니다(Unveil).",
        "featured": true
    },
    {
        "id": "art-unveil-ceramic-politics",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "[UN]-VEIL SERIES : CERAMIC\n정치냐 치정이냐",
        "subtitle": "단단하게 소성되었으나 쉽게 깨지는 도자의 물성으로 조롱한 권력의 허상",
        "year": "2015",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/unveil_ceramic_정치냐치정이냐/unveil_ceramic_정치냐치정이냐.jpg",
        "gallery": [
            "work_images/art/unveil_ceramic_정치냐치정이냐/unveil_ceramic_정치냐치정이냐.jpg"
        ],
        "tags": [
            "[Un]-veil Series",
            "Ceramic Sculpture",
            "Political Satire",
            "Wordplay Art",
            "Installation"
        ],
        "description": "흙과 불의 인내를 거쳐 거칠고 단단하게 소성된 도자 활자 오브제로 <정치냐 치정이냐>라는 날카로운 언어유희를 벽면에 설치한 작업입니다. 영구히 보존될 듯 단단하지만 사소한 진실 앞에서도 쉽게 깨져버리는 도자의 물성적 취약성은, 거창한 대의명분(Veil) 뒤에 사적 탐욕을 감춘 권력의 위선과 덧없음을 날카롭게 풍자하고 폭로합니다(Unveil).",
        "featured": true
    },
    {
        "id": "art-kickback",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "KICKBACK : 請濁\n청탁(請濁) : 속고 속이고 썩고",
        "subtitle": "사과박스 속 만원 지폐의 색채로 구워낸 도자 활자와 부정부패의 범람",
        "year": "2015",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/kickback/kickback01.png",
        "gallery": [
            "work_images/art/kickback/kickback01.png",
            "work_images/art/kickback/kickback02_detail.png"
        ],
        "tags": [
            "Ceramic Sculpture",
            "Kickback & Corruption",
            "Political Critique",
            "Typography Object",
            "Spatial Installation",
            "Fine Art"
        ],
        "description": "과거 사과박스에 만원권 지폐를 은밀히 가득 채워 주고받던 한국 사회의 고질적인 정경유착과 부정부패를 비판한 도자 설치 작업입니다. '청할 청(請)'과 '흐릴 탁(濁)'을 조합한 '청탁(請濁)'이라는 표제 아래, 만원권 지폐의 고유한 청록빛 유약으로 <속고, 속이고, 썩고>라는 단어들을 도자로 구워냈습니다. 박스 밖으로 끊임없이 흘러넘쳐 쏟아져 나오는 도자 활자들의 무더기를 통해, 보이지 않는 어둠 속에서 사회 전체를 갉아먹는 병리적 부패의 순환을 통렬하게 폭로합니다.",
        "featured": true
    },
    {
        "id": "art-news-invisiblehand",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "NEWS : THE INVISIBLE HAND\n보이지 않는 손 : 삭제된 기사의 아카이브",
        "subtitle": "실제 삭제·수정된 기사들을 4대 색채 블라인드로 추적한 미디어 권력 비판 아카이브 (2015)",
        "year": "2015",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/news_invisiblehands/news01.jpg",
        "gallery": [
            "work_images/art/news_invisiblehands/news01.jpg",
            "work_images/art/news_invisiblehands/news02.jpg",
            "work_images/art/news_invisiblehands/news_invisiblehand.jpg"
        ],
        "tags": [
            "Media Archive",
            "Deleted News",
            "Invisible Hand",
            "Watchdog & Power",
            "Political Satire",
            "Installation"
        ],
        "description": "언론 보도 과정에서 실제로 삭제되거나 교묘히 수정된 기사들을 직접 추적하고 아카이브하여 시각화한 대형 미디어 비판 연작입니다. 화이트아웃(Whiteout), 블랙아웃(Blackout), 레드 블라인드(Red-Blindness), 블루 블라인드(Blue-Blindness)라는 4가지 색채 패널은 사라진 기사의 맥락과 단어의 의미를 정확히 조응하며 미디어 통제의 현장을 가시화합니다. 권력을 감시하고 견제해야 할 언론이 '보이지 않는 손'에 의해 통제당하거나 권력과 결탁하여 진실을 은폐하는 시대, 보이지 않는 통로 속에서 자행되는 여론 조작과 삭제의 실체를 백일하에 폭로합니다.",
        "featured": true
    },
    {
        "id": "art-motel-desire",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "DESIRE\n욕망",
        "subtitle": "한 시야(View)에 담긴 모텔과 십자가, 209장의 폴라로이드로 기록한 서울의 밤",
        "year": "2011",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/motelseries/motel00.png",
        "gallery": [
            "work_images/art/motelseries/motel00.png",
            "work_images/art/motelseries/motel01.jpg",
            "work_images/art/motelseries/motel02.png",
            "work_images/art/motelseries/motel03.jpg",
            "work_images/art/motelseries/motel04.jpg",
            "work_images/art/motelseries/motel05.jpg",
            "work_images/art/motelseries2/desire01.jpg",
            "work_images/art/motelseries2/desire03.jpg",
            "work_images/art/motelseries2/desire04.jpg"
        ],
        "tags": [
            "209 Polaroids",
            "Neon Installation",
            "Urban Archive",
            "Desire & Salvation",
            "Motel & Church",
            "Spatial Art"
        ],
        "description": "서울의 밤거리를 거닐다 보면 가장 세속적인 욕망의 공간인 '모텔'과 성스러운 구원의 상징인 '교회 십자가'가 한 시야(View) 안에 붉은 네온으로 기이하게 겹쳐지는 풍경을 비일비재하게 마주합니다. 작가는 이러한 이중적 모순의 지점을 의도적으로 집요하게 찾아다니며 촬영한 209장의 폴라로이드 사진과 'MOTEL & ┼' 네온 조형을 전시 공간에 그리드로 설치했습니다. 구원과 쾌락, 신성과 세속이라는 상반된 인간의 원초적 욕망이 서울의 어두운 밤하늘 아래 하나의 붉은빛으로 뒤엉키는 기묘한 도시의 지형도를 포착하며, 가장 은밀하게 숨겨진 욕망과 가장 공개적으로 구원을 외치는 기호의 모순된 조우를 통해 현대 도시인이 품은 결핍과 갈망의 실체를 생생한 아카이브로 구축했습니다.",
        "featured": true
    },
    {
        "id": "art-calendar-archive",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "CALENDAR : EXP : 2010\n캘린더 : 유통기한 2010",
        "subtitle": "일상의 모든 소비 공간에서 채집한 365일 서로 다른 상품의 유통기한(EXP)으로 맵핑한 달력",
        "year": "2010",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/exp_Calender/exp_Calender01.jpg",
        "gallery": [
            "work_images/art/exp_Calender/exp_Calender01.jpg",
            "work_images/art/exp_Calender/exp_Calender02.jpg",
            "work_images/art/exp_Calender/exp_Calender03.jpg"
        ],
        "tags": [
            "Calendar Archive",
            "Expiration Date (EXP)",
            "Consumerism",
            "365 Days Grid",
            "Everyday Object",
            "Fine Art"
        ],
        "description": "대량 생산된 상품마다 찍혀 나오는 '유통기한(EXP)'을 자본주의 소비 사회 속 인간에게 주어진 '하루의 유통기한'으로 재해석한 대형 아카이브 연작입니다. 끊임없이 소비하며 살아가는 현대인의 삶의 패턴을 기록하기 위해, 작가는 백화점, 대형마트, 동네 슈퍼, 24시간 편의점 등을 직접 발로 누비며 2010년 1월 1일부터 12월 31일까지 365일의 날짜가 각각 다른 실제 상품에 인쇄된 유통기한 표기들을 낱낱이 수집했습니다. 이렇게 채집된 365개의 소비 파편들을 12개월의 달력 그리드로 정밀하게 맵핑함으로써, 시간마저 상품처럼 소비되고 만료되는 동시대 소비 문명의 풍경을 집요하고 위트 있게 증언합니다. 끝없이 버려지고 새로 채워지는 매대의 순환 속에서 우리가 무감각하게 흘려보내는 일상의 시간성을 날카롭게 되돌아보게 합니다.",
        "featured": true
    },
    {
        "id": "art-news-shredded",
        "category": "artwork",
        "categoryName": "ARTWORK",
        "title": "DISTORTION\n왜곡",
        "subtitle": "5대 일간지 기사를 뜯어내어 전복시킨 언론의 부조리와 파쇄된 텍스트 설치 (2008)",
        "year": "2008",
        "client": "ARTIST JIHYUN PARK",
        "image": "work_images/art/news/newspaper01.jpg",
        "gallery": [
            "work_images/art/news/newspaper01.jpg",
            "work_images/art/news/newspaper02.jpg"
        ],
        "tags": [
            "Newspaper Archive",
            "Distortion",
            "Media Deconstruction",
            "Spatial Installation",
            "Political Critique",
            "Fine Art"
        ],
        "description": "현대인은 미디어의 범람 속에서 항상 정보를 소비하지만, 우리가 마주하는 '사실'은 매체의 성향에 따라 교묘히 재가공되고 본말이 전도된 왜곡의 결과물일 뿐입니다. 진실 전달과 정론직필의 의무를 저버린 신문은 무의미한 글자 덩어리에 불과하다는 질문에서 출발한 이 작업은, 조선·중앙·동아·한겨레·경향신문의 실제 기사들을 아카이빙한 뒤 활자의 일부를 물리적으로 뜯어내어(Tear) 전혀 다른 맥락의 텍스트가 읽히도록 재구성했습니다. 벽면 위에 왜곡되어 다시 읽히는 신문과, 그 아래 거대한 쓰레기 더미처럼 파쇄되어 쏟아진 활자의 파편들을 통해 동시대 언론의 부조리와 허위의 실체를 통렬하게 폭로합니다.",
        "featured": true
    }
];

// 전역 내보내기 (브라우저 스크립트용)
if (typeof window !== "undefined") {
    window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
}
