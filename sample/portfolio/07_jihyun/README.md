# 🎨 박지현 포트폴리오 사이트 (07_jihyun) — 커스텀 가이드

`poster_from_paris_with_love.jpg`의 **스위스 포스터 레이아웃(초볼드 산세리프 + 인물 앞뒤 레이어링)**과 **사이버 에디토리얼 제너레이티브 랩** 스타일을 믹스매치하여 완성된 포트폴리오입니다.

---

## 📸 1. 히어로 인물 사진 교체 방법

1. 사용할 본인 사진(또는 누끼 배경 투명 PNG / JPG)을 준비합니다.
2. `sample/portfolio/07_jihyun/images/` 폴더에 이미지를 저장합니다 (예: `my_photo.png`).
3. `index.html` 파일의 **67번 라인** 근처를 열고 이미지 경로를 수정합니다:

```html
<!-- 📸 HERO PORTRAIT IMAGE -->
<img src="images/my_photo.png" 
     alt="Jihyun Park - AX Visual Director" 
     class="character-image" 
     id="heroPortraitImg">
```

---

## 💼 2. 포트폴리오 프로젝트 & 이미지 수정 방법

모든 프로젝트 데이터는 **`projects_data.js`** 파일에서 한곳에 모아 관리됩니다.

```javascript
// sample/portfolio/07_jihyun/projects_data.js
{
    id: "skt-ai-vcoloring",
    category: "ax",                         // ax, brand, art, academic 중 선택
    categoryName: "AX & AI Video",
    title: "SKT AI V컬러링 & CJ ENM IP",
    subtitle: "생성형 AI 기반 통신사 숏폼 영상 콘텐츠 총괄",
    year: "2024 - 2025",
    client: "SKT · CJ ENM",
    image: "images/내_프로젝트_이미지.jpg",     // 여기에 이미지 파일 경로 입력
    tags: ["Generative AI", "Motion Video"],
    description: "프로젝트 상세 설명...",
    stats: "카카오·라인 정식 출시"
}
```

* **새 프로젝트 추가**: 위 객체를 복사해서 배열에 추가하면 웹사이트에 자동으로 새 카드가 생성됩니다.
* **이미지 변경**: `image: "images/내이미지.jpg"` 또는 외부 URL (`https://...`)을 입력하시면 됩니다.

---

## 🌐 3. 로컬 테스트 및 확인

* **로컬 서버 URL**: [http://localhost:9000/sample/portfolio/07_jihyun/index.html](http://localhost:9000/sample/portfolio/07_jihyun/index.html)
