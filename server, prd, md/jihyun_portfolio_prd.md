# 🌌 PRD: Jihyun Park Portfolio (Cyber-Editorial Generative Lab)

> **컨셉**: B1 (사이버 에디토리얼 럭셔리) ✕ B2 (인터랙티브 제너레이티브 랩) 믹스매치  
> **대상자**: 박지현 (Jihyun Park) — Artist · Designer · Educator  
> **플랫폼**: PC (1920×1080) & Mobile (반응형 터치 완벽 대응)  
> **개발 위치**: `sample/portfolio/07_jihyun/` (`index.html`, `style.css`, `main.js`)

---

## 🎨 1. 디자인 시스템 (Design System)

### 컬러 팔레트 (Dark Cyber-Obsidian & Luminous Accents)
| 역할 | HEX 코드 | 설명 |
| :--- | :--- | :--- |
| **Background (Main)** | `#060709` | 깊은 우주/흑요석 느낌의 다크 보이드 블랙 |
| **Surface (Card/Glass)** | `rgba(18, 20, 26, 0.7)` | 블러 처리된 반투명 다크 글래스 (`backdrop-filter: blur(16px)`) |
| **Border / Inner Glow** | `rgba(255, 255, 255, 0.08)` | 1px 미세한 발광 테두리 |
| **Primary Accent** | `#00FFA3` (Cyber Emerald) | AI, AX, 최신 테크놀로지 포인트 |
| **Secondary Accent** | `#8B5CF6` (Electric Violet) | 미디어아트, 예술적 신비로움 |
| **Highlight Accent** | `#FFD600` (Solar Yellow) | 주요 버튼, 핵심 통계 수치 강조 |
| **Text (Heading)** | `#FFFFFF` | 순수 화이트 |
| **Text (Body/Muted)** | `#94A3B8` / `#64748B` | 가독성 높은 슬레이트 그레이 |

### 타이포그래피 (Cyber-Editorial Pairing)
1. **Display / Main Headings**: `Cinzel Decorative` & `Fraunces Italic (Wonky)`
   - 획 끝이 우아하게 감기는 꼬불 세리프 폰트로 작가적 품격과 파격적인 예술미 부여
2. **Tech Badges / Meta Labels**: `JetBrains Mono` / `Space Mono`
   - `[AX_STATUS: ACTIVE]`, `[ROLE: ARTIST]`, `[01/06]` 등의 사이버네틱 메타데이터 표현
3. **Body / UI Navigation**: `Pretendard`
   - 국/영문 모두 완벽한 가독성을 제공하는 프리미엄 산세리프

---

## ⚡ 2. 시그니처 인터랙션 (Interactive & Generative Core)

1. **Vibe Coding Generative Canvas (HTML5 Canvas + WebGL Shader)**:
   - 히어로 영역에 마우스/터치 궤적을 따라 빛나는 파티클 노이즈와 연결선이 생성되는 실시간 비주얼.
   - 모바일 터치 이벤트(`touchstart`, `touchmove`, passive: true) 완벽 지원.
2. **Interactive View Mode Switcher (상태 전환)**:
   - `[✨ CURATOR MODE]` (에디토리얼 매거진 레이아웃 & 정돈된 아카이브 뷰)
   - `[🧪 LAB & CODE MODE]` (네온 그리드, 실시간 캔버스 파라미터 조절기, 코드 스택 뷰 활성화)
3. **3D Tilt Glass Cards & Video Hover**:
   - 프로젝트 카드에 마우스 오버 시 미세한 3D 회전 틸트와 네온 테두리 흐름 애니메이션.
   - SKT AI V컬러링, CJ ENM IP 등 영상 기반 프로젝트는 호버 시 즉각적인 모션 프리뷰.

---

## 🏛️ 3. 페이지 및 정보 구조 (Information Architecture)

```
[01. FIXED HEADER]
- Brand Logo: "JIHYUN PARK" (Cinzel Decorative)
- Interactive Mode Toggle: [CURATOR] ⟷ [LAB]
- Nav Menu: IDENTITY / SELECTED WORKS / GENERATIVE LAB / ACADEMIC / CONTACT

[02. HERO SECTION]
- Canvas: 실시간 인터랙티브 파티클 & 오로라 메쉬
- Title: "THE AX VISUAL DIRECTOR" (Fraunces Wonky Italic + Cinzel)
- Subtitle: "ARTIST ✕ DESIGNER ✕ EDUCATOR" (Interactive Badges)
- Statement: "From Fine Art to Latent Space — 개념을 구조로, 구조를 이미지로"
- Live Metrics Bar: [13 Solo Shows] · [100+ Group] · [10+ Yrs Academic] · [14 Univs]

[03. CORE IDENTITY (BENTO GRID)]
- Card 1 [THE ARTIST]: SAIC 서양화 총장장학금, 개인전 13회, 영은미술관 소장 ([un]veil, 0g)
- Card 2 [THE BX/UX DESIGNER]: 뱅크샐러드 창업멤버/AD, HOTEL DAWSON 총괄, 삼성카드 리뉴얼, EVELOM
- Card 3 [THE AX EDUCATOR]: 한세대 시각정보디자인 교수, AI디자인협회/한국색채학회 상임이사, 8회 AI 특강

[04. SELECTED WORKS SHOWCASE (FILTERABLE)]
- Filter Pills: [ALL] [AX & NEW MEDIA] [BRAND & UX] [FINE ART ARCHIVE]
- 주요 수록 프로젝트:
  • SKT AI V컬러링 & CJ ENM IP 보이는 V컬러링 (출시)
  • HOTEL DAWSON 브랜드/패키지/팝업 디자인 총괄
  • 레이니스트(뱅크샐러드) 핀테크 UX/UI 및 브랜드 아이덴티티
  • EVELOM 한국 재런칭 패키지 아트디렉션
  • [un]veil & Disney Déjà vu & 0g 작가 시리즈
  • 여미오미 / 솜이드림 로컬 디자인 리빙랩 프로젝트

[05. GENERATIVE TECH & VIBE CODING LAB]
- 터치디자이너(TouchDesigner) 실시간 비주얼 시뮬레이터 UI
- AI Tool Stack: Midjourney, Runway GEN-2, Whisk AI, NanoBanana, Python, Vibe Coding
- 인터랙티브 파라미터 조절 슬라이더 (방문자가 배경 파티클 밀도/속도 직접 조작 가능)

[06. ACADEMIC, RESEARCH & LECTURES]
- 가다머의 '놀이' 개념 박사학위 논문 & 학술지 4편 아코디언
- 생성형 AI 릴레이 특강 (2022~2025 총 8회차 커리큘럼)
- 지자체 공공디자인/도시건축 심의위원 및 수상 이력 (신진작가 발언전 대상 등)

[07. FOOTER / CONTACT]
- Direct Connect: jpvoice@naver.com (원클릭 이메일 복사)
- Institutional Link: 한세대학교 디자인학부 시각정보디자인전공
- Copyright & Status: 🟢 2026 AX Portfolio System Online
```

---

## 📁 4. 생성 및 수정 파일 목록
1. `server, prd, md/jihyun_portfolio_prd.md` (본 PRD 명세서)
2. `sample/portfolio/07_jihyun/index.html` (시맨틱 마크업, 웹폰트 로드, 캔버스)
3. `sample/portfolio/07_jihyun/style.css` (사이버 에디토리얼 디자인 시스템, 글래스모피즘, 반응형)
4. `sample/portfolio/07_jihyun/main.js` (제너레이티브 파티클 엔진, 모드 스위처, 필터링, 모바일 터치 대응)
