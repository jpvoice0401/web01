# 🏛️ JI-HYUN PARK // PORTFOLIO & INTERACTIVE ARCHIVE (v2.0)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/jpvoice0401/web01)
[![GitHub Pages](https://img.shields.io/badge/Live-Demo_Pages-00FFA3?style=for-the-badge&logo=githubpages&logoColor=black)](https://jpvoice0401.github.io/web01/sample/portfolio/07_jihyun/index.html)

> **"개념을 구조로, 구조를 이미지로 전환하는 3가지 교차점 (Artist · Designer · Educator)"**  
> 박지현(Ji-Hyun Park) 교수의 인터랙티브 포트폴리오 웹 아카이브입니다. 스위스 그래픽 스타일의 에디토리얼 타이포그래피와 실시간 제너레이티브 캔버스 물리 인터랙션을 융합하여 구축되었습니다.

---

## 🌐 라이브 사이트 & 주요 페이지 링크

| 페이지 구분 | 설명 | 바로가기 링크 |
| :--- | :--- | :--- |
| **🚀 Main Poster (Home)** | 스위스 포스터 레이아웃 & 키네틱 물리 타이포그래피 메인 | [🔗 메인 페이지 열기](https://jpvoice0401.github.io/web01/sample/portfolio/07_jihyun/index.html) |
| **💼 Curated Archive** | 45개 엄선 프로젝트 (미디어아트, BX, 파인아트, 학술) 통합 아카이브 | [🔗 아카이브 열기](https://jpvoice0401.github.io/web01/sample/portfolio/07_jihyun/archive.html) |
| **🏛️ Academic CV** | 박사 논문, 학술지 논문, 산학협력 및 대학 특강 상세 이력서 | [🔗 Academic CV 열기](https://jpvoice0401.github.io/web01/sample/portfolio/07_jihyun/about_general.html) |
| **🎨 Artist CV (Trilingual)** | 13회 개인전, 국공립미술관 소장품, 3개 국어(한·영·중) 작가 이력서 | [🔗 Artist CV 열기](https://jpvoice0401.github.io/web01/sample/portfolio/07_jihyun/about_artist.html) |
| **🧭 Perspective Gateway** | 3대 전문 영역(아티스트 / 디렉터 / 교육자) 관점 선택 게이트웨이 | [🔗 관점 선택 열기](https://jpvoice0401.github.io/web01/sample/portfolio/07_jihyun/about.html) |

* **GitHub Repository**: [https://github.com/jpvoice0401/web01](https://github.com/jpvoice0401/web01)
* **Local Web Server**: `http://localhost:3000/index.html`

---

## ⚡ v2.0 핵심 기능 상세 설명

### 1. 🔠 키네틱 물리 타이포그래피 엔진 (Kinetic Physics Typography)
메인 포스터 하단 밴드에서 작동하는 실시간 캔버스 물리 시뮬레이션 시스템입니다.
* **텍스트 물리 오브젝트화**: `ARTIST JIHYUN` ➔ `PROF.PARK` ➔ `ART DIRECTOR` 세 가지 키워드가 5초 주기로 너비 95%에 맞게 꽉 차는 형태로 유기적 모핑 순환합니다.
* **마우스 반발력 (Repulsion Explosion)**: 마우스/터치가 접근하면 거리에 비례하여 글자 입자들이 사방으로 폭발하듯 흩어집니다.
* **문자 그룹 시스템 (Glyph Group & Break)**: 글자(알파벳) 단위로 응집력을 유지하며, 마우스가 일정 거리 이내로 깊숙이 들어오면 그룹이 '깨짐(Break)' 상태로 전환됩니다.
* **자동 귀환 시스템 (Homing & Recovery)**: 깨진 후 **4.5초 뒤** 감쇠 탄성 스프링 물리에 의해 원래 위치(`homeX, homeY`)로 부드럽게 되돌아와 선명한 글자 형태로 복구됩니다.
* **캔버스 비트맵 캐싱 (Bitmap Caching)**: 고해상도 원형 비트맵 스프라이트를 오프스크린 캔버스에 사전 렌더링 및 캐싱하여 60+ FPS의 쾌적한 인터랙션을 유지합니다.

---

### 2. 🌌 0G 제너레이티브 캔버스 & Vibe Lab (Generative Interaction)
* **10단계 네온 스케일 파티클**: 바(Bar)와 서클(Circle) 형태의 파티클이 무중력 상태로 유영하는 사이버네틱 무드 연출.
* **인터랙티브 실시간 랩(Lab)**: FPS, 파티클 개수, 속도 배율 및 스위스 네온 테마 팔레트를 사용자가 직접 조작할 수 있는 컨트롤러 제공.
* **텍스트 경계 보호 레이어**: 텍스트 가독성을 위해 파티클이 글자 본문을 침범하지 않고 여백으로 자연스럽게 흐르는 3단계 영역 보호 알고리즘 적용.

---

### 3. 💼 45+ 프로젝트 통합 아카이브 & 스마트 라이트박스
* **4대 카테고리 실시간 필터링**: `ARTWORK`, `MEDIA ART & AX`, `BX`, `ACADEMIC`, `ALL` 즉각 필터링.
* **5단계 화면비 적응형 모달 (Adaptive Ratio Lightbox)**:
  * 초와이드(16:9 이상), 가로형(4:3), 정방형(1:1), 세로형(3:4), 그리고 한세대학교 웹 캡처 등 1899x7800 고해상도 전체 스크롤을 위한 **울트라 포트레이트(Ultra-Portrait)**까지 이미지 비율에 맞춰 팝업 크기가 자동 조정됩니다.
* **호텔도슨 크리스마스 시네마틱 무드 필름**:
  * 반짝이는 HOTEL DAWSON 조명 연출과 캐슬 창문 빛 효과, 크리스마스 음악이 담긴 오리지널 무드 필름 영상 단독 모달 플레이어 지원.
* **OATH 사운드 아트 오디오 플레이어**:
  * 음원이 포함된 현대미술 작품 클릭 시 `🔊 SOUND ART PLAYING` 전용 오디오 플레이어가 모달 상단에 활성화되어 감상 가능.

---

### 4. 🌐 3개 국어(한국어 · 영어 · 중국어) 국제 작가 이력서 엔진 (i18n)
* **무지연 실시간 번역**: `ARTIST CV`에서 `KOR / ENG / CHN` 언어 버튼 클릭 시 페이지 새로고침 없이 전 섹션(작가노트, 학력, 전시, 소장처, 수상 등)이 즉각 번역 전환됩니다.
* **완벽한 학술·미술 전문 용어 표준화**: 영문 및 중문 번역 검수를 통해 미술관/갤러리 제출용 국제 표준 양식 준수.

---

### 5. 🖨️ 스위스 스타일 에디토리얼 이력서 인쇄 & PDF 내보내기
* **`RESUME (PRINT / PDF)`**: 상단 우측 버튼 클릭 시 브라우저 인쇄 창 즉시 호출.
* **`@media print` 최적화**: 웹 네비게이션과 불필요한 배경 요소를 자동 제거하고, A4 규격에 맞춘 100% 순수 흑백 스위스 에디토리얼 양식으로 선명하게 PDF 저장 및 인쇄.

---

### 6. 🔘 인버티드 네거티브 스페이스 렌즈 커서 (Inverted Lens Cursor)
* 마우스 이동 시 배경 및 요소들의 색상을 그래픽적으로 실시간 반전시키는 세련된 커스텀 렌즈 마우스 포인터 적용.

---

## 📂 프로젝트 디렉토리 구조

```
sample/portfolio/07_jihyun/
├── index.html               # 🚀 메인 포스터 & 키네틱 물리 타이포그래피
├── archive.html             # 💼 45개 프로젝트 통합 아카이브 & 라이트박스 모달
├── about_general.html       # 🏛️ ACADEMIC CV (학술 연구, 논문, 산학 협력)
├── about_artist.html        # 🎨 ARTIST CV (13회 개인전, 3개 국어 다국어 엔진)
├── about.html               # 🧭 3대 관점(Artist/Director/Educator) 선택 게이트웨이
├── main.js                  # ⚙️ 메인 물리 엔진 (키네틱 타이포, 0G 파티클, 랩 컨트롤)
├── archive.js               # 🔍 아카이브 인터랙션 엔진 (필터링, 모달, 사운드, 비디오)
├── artist_i18n.js           # 🌐 작가 이력서 3개 국어(KOR/ENG/CHN) 다국어 데이터
├── projects_data.js         # 📦 45개 프로젝트 통합 데이터베이스 (JSON 기반)
├── style.css                # 🎨 스위스 국제주의 스타일 통합 디자인 시스템 (4,400+ lines)
├── images/                  # 🖼️ 메인 로고 및 인물 프로필 에셋
└── work_images/             # 📁 프로젝트별 고해상도 아카이브 미디어 (BX, Art, Media, Academic)
```

---

## 🛠️ 커스터마이징 및 데이터 관리 가이드

### 1. 새 프로젝트 추가 및 수정 (`projects_data.js`)
`projects_data.js` 파일의 `PORTFOLIO_PROJECTS` 배열에 객체를 추가하면 웹사이트에 자동으로 새 카드가 생성됩니다:

```javascript
{
    id: "hotel-dawson-christmas-film",
    category: "bx",                         // artwork, media-art, bx, academic 중 선택
    categoryName: "BX",
    title: "HOTEL DAWSON : CHRISTMAS MOOD FILM",
    subtitle: "크리스마스 홀리데이 시즌을 위해 특별 제작된 시네마틱 무드 필름",
    year: "2021 - 2022",
    client: "HOTEL DAWSON",
    image: "work_images/bx/hoteldawson/hoteldawsonchristmasmov.jpg",
    video: "work_images/bx/hoteldawson/hoteldawsonchristmasmov.mp4", // 영상 파일이 있는 경우
    gallery: [
        "work_images/bx/hoteldawson/hoteldawsonchristmasmov.jpg"
    ],
    tags: ["Christmas Season", "Mood Film", "Motion Graphic"],
    description: "프로젝트 상세 설명...",
    featured: true
}
```

---

© 2026 Christine Ji-Hyun Park. All Rights Reserved.  
*AX Visual Director · Conceptual Artist · Educator*
