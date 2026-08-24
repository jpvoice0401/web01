/**
 * ==============================================================================
 * 🌐 JI-HYUN PARK // ARTIST CV FULL MULTI-LANGUAGE ENGINE (i18n)
 * 100% Comprehensive Translations for Korean (KOR), English (ENG), and Chinese (CHN)
 * ==============================================================================
 */

const ARTIST_I18N_DATA = {
    ko: {
        pageTitle: "ARTIST CV // JI-HYUN PARK",
        headerBadge: "🎨 ARTIST CV (FINE ART & MEDIA)",
        switchGeneralBtn: "🏛️ ACADEMIC CV로 전환 →",
        mainHeading: "ARTIST CV // JI-HYUN PARK",
        subDesc: "박지현 작가 이력서",
        printBtn: "PRINT / SAVE PDF",
        
        // Quick Filters
        filterStatement: "STATEMENT",
        filterSolo: "SOLO SHOWS",
        filterCollections: "COLLECTIONS",
        filterAwards: "AWARDS & RESIDENCY",
        filterGroup: "GROUP SHOWS",
        filterPress: "PRESS",
        
        // Profile
        roleEn: "VISUAL ARTIST · CONCEPTUAL & MEDIA ARTIST",
        email: "jpvoice@naver.com",
        
        // Statement Heading
        statementHeading: "// ARTIST STATEMENT",
        statementLangBadge: "KOR · ENG · CHN TRILINGUAL EDITION",
        
        // Statement Body
        statementP1: "작가에게 예술은 현실의 연장선에 있다. 삶을 비추고, 삶의 어떤 면을 다시 해석하는 일이다. 그 해석의 끝에서 작가가 찾는 것은 진리다. 다만 참과 거짓을 가리는 진리는 아니다. 작가에게 진리와 비-진리는 한 장의 동전이다. 앞면을 확정하려고 뒤집는 순간 뒷면이 사라진다. 그래서 작가는 뒤집지 않는다. 어느 쪽으로도 기울지 않은 자리에 작품을 세워두고 물러선다. 도착해야 할 절대정신 같은 것은 상정하지 않는다.",
        statementP2: "드러남과 감춤 사이에는 미묘한 긴장이 있다. 아무것도 결정되지 않았기 때문에 생기는 긴장이다. 이 미결정성이 작품을 스스로 움직이게 만든다. 작가는 그 움직임을 놀이라고 부른다. 놀이는 작가가 하는 것이 아니다. 판이 깔리면 놀이가 스스로 놀이한다. 그러고는 아무도 예상하지 못한 의미를 만들어낸다. 거기서 드러나는 진리는 객관적이지도 절대적이지도 않다. 사람은 저마다 살아온 시간이 만들어놓은 선-이해를 지니고 작품 앞에 서고, 그 위에서 의미는 매번 새로 생성된다. 진리는 고정된 결론이 아니라 계속 움직이는 열린 형태다.",
        statementP3: "예술은 재거나 증명하지 않는다. 자연과학이 정해둔 지표 안에서 설명하려 할 때 예술은 아직 규정되지 않은 쪽으로 간다. 그래서 완결되지 않고, 완결되지 않기 때문에 오래 남는다. 작가가 만드는 것은 완성된 대상이 아니라 경험이 일어나는 자리다. 지평은 과거에서 현재로, 현재에서 아직 오지 않은 곳으로 옮겨 가고 그 위에 놓인 작품도 함께 옮겨 간다. 관람자가 이 놀이에 들어서는 순간, 그는 언어를 딛고 언어 바깥으로 한 걸음 나간다. 작가는 그 한 걸음을 위해 자리를 비워둔다.",
        
        // Module 1: Education
        eduHeading: "EDUCATION & HERITAGE",
        eduBadge: "학력 및 예술적 배경",
        eduTimelineHtml: `
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>이화여자대학교 일반대학원</span>
                    <span class="cv-node-role">디자인학박사 (Ph.D)</span>
                </div>
                <div class="cv-node-desc">
                    <strong>시각디자인전공 박사 졸업 (2017)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        학위논문: 언어와 표현의 해석학적 장치를 통한 시각표현 연구<br>— 가다머의 '놀이' 개념을 중심으로
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>이화여자대학교 일반대학원</span>
                    <span class="cv-node-role">디자인학석사 (M.Des)</span>
                </div>
                <div class="cv-node-desc">
                    <strong>시각디자인전공 석사 졸업 (2011)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        학위논문: ‘인간욕망’의 현대적 현상을 반영한 실험적 시각표현 연구<br>— 아카이브와 맵핑 방법론
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>The School of the Art Institute of Chicago (SAIC)</span>
                    <span class="cv-node-role">BFA</span>
                </div>
                <div class="cv-node-desc">
                    <strong>Fine Art &amp; Visual Communication Design (시카고, 미국)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        · Presidential Scholarship for 4 years (4년 총장 전액장학생)<br>
                        · Fred A. Hillbruner Artist’s Book Fellowship 수여
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>서울예술고등학교 졸업</span>
                    <span class="cv-node-role">미술과</span>
                </div>
                <div class="cv-node-desc">서양화 전공 · Smithtown Christian School (NY)</div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>선화예술중학교 졸업</span>
                    <span class="cv-node-role">미술과</span>
                </div>
                <div class="cv-node-desc">미술과 실기 전공 졸업</div>
            </div>
        `,
        
        colHeading: "PERMANENT COLLECTIONS & RESIDENCIES",
        colBadge: "미술관 영구 소장 · 해외 레지던시",
        labelMuseumCol: "MUSEUM & INSTITUTIONAL COLLECTIONS",
        collectionsTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2016 / 2017</div>
                <div class="cv-aw-info">
                    <strong>영은미술관 (Youngun Museum of Contemporary Art) 영구 소장</strong>
                    <span>한국 현대미술 대표 컬렉션 영구 보존 및 소장</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008</div>
                <div class="cv-aw-info">
                    <strong>Joan Flasch Artists' Book Collection, SAIC</strong>
                    <span>시카고예술대학 아티스트 북 컬렉션 영구 소장 및 글로벌 디지털 아카이브 등재</span>
                </div>
            </div>
        `,
        labelResidency: "ARTIST RESIDENCIES & FELLOWSHIPS",
        residencyTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2009.07</div>
                <div class="cv-aw-info">
                    <strong>L'espace des arts sans frontieres (국경없는 미술공간)</strong>
                    <span>Paris, France (프랑스 파리 해외 아티스트 레지던시 초청 입주)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.05</div>
                <div class="cv-aw-info">
                    <strong>Fred A. Hillbruner Artist’s Book Fellowship</strong>
                    <span>The School of the Art Institute of Chicago (SAIC) 펠로우십</span>
                </div>
            </div>
        `,
        
        // Module 2: Solo Shows
        soloHeading: "SOLO EXHIBITIONS",
        soloBadge: "NEW YORK · SEOUL · JINGDEZHEN",
        soloCol1Html: `
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2024.07</div>
                <div class="cv-ex-info">
                    <strong>Disney Déjà Vu — 경덕진 국제초대개인전</strong>
                    <span>중국 경덕진도자대학교 (Jingdezhen Ceramic University, China)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2023.04</div>
                <div class="cv-ex-info">
                    <strong>TOGETHER TO GATHER</strong>
                    <span>ROOM#4 박지현 개인전, 신사하우스 (SINSA HOUSE)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2022.11</div>
                <div class="cv-ex-info">
                    <strong>한국기초조형학회 세종특별전 초대개인전</strong>
                    <span>세종아트센터</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2022.11</div>
                <div class="cv-ex-info">
                    <strong>ATTENTION (박지현 개인전)</strong>
                    <span>갤러리 기획전</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.09</div>
                <div class="cv-ex-info">
                    <strong>거울아 거울아 (Mirror Mirror)</strong>
                    <span>POP-UP EXHIBITION, 인터아트채널 &amp; 퍼블릭 갤러리</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.06</div>
                <div class="cv-ex-info">
                    <strong>BLACK MIRROR, 흰 고무신</strong>
                    <span>모두의 갤러리, 도봉문화재단 기획 개인전</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.06</div>
                <div class="cv-ex-info">
                    <strong>당신의 생각을 의심하라 (Doubt Your Thoughts)</strong>
                    <span>초대 개인전, 함석헌기념관 씨알갤러리</span>
                </div>
            </div>
        `,
        soloCol2Html: `
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2018.09</div>
                <div class="cv-ex-info">
                    <strong>ￚ 십팔년 그들의 자유.민주.보수적 X kg을 아시오 ￚ?</strong>
                    <span>초대 개인전, 니트 갤러리 (Knit Gallery)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.08</div>
                <div class="cv-ex-info">
                    <strong>UNTITLED FEELING</strong>
                    <span>정우경 갤러리 기획 초대 개인전</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.09</div>
                <div class="cv-ex-info">
                    <strong>WTF? 제13회 신진작가 발언전 전국미술대전 대상작가 초대 개인전</strong>
                    <span>갤러리 미술세계 전관, 월간 미술세계 주최</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.08</div>
                <div class="cv-ex-info">
                    <strong>OMG! 3rd Solo Exhibition</strong>
                    <span>초대 개인전, Space Artwa (스페이스 아트와)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2016.11</div>
                <div class="cv-ex-info">
                    <strong>[ un ] veil — 2nd Solo Exhibition in New York</strong>
                    <span>ABLE FINE ART NY GALLERY (뉴욕 첼시, 미국)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2015.10</div>
                <div class="cv-ex-info">
                    <strong>[ un ] veil — 1st Solo Exhibition in New York</strong>
                    <span>ABLE FINE ART NY GALLERY (뉴욕 첼시, 미국)</span>
                </div>
            </div>
        `,
        
        // Module 3: Awards
        awardHeading: "KEY AWARDS & ART GRANTS",
        awardBadge: "주요 미술상 및 수상",
        awardsTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2017.09</div>
                <div class="cv-aw-info">
                    <strong>대상 (Grand Prize), 제13회 신진작가 발언전 전국미술대전</strong>
                    <span>월간 미술세계 &amp; 갤러리 미술세계 주최 전국공모 미술대전 최고 영예 '대상' 수상</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2016.03</div>
                <div class="cv-aw-info">
                    <strong>‘이 작품을 주목한다’ 선정 작가</strong>
                    <span>이화여자대학교 조형예술대학 우수 연구작품 선정</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2015.05</div>
                <div class="cv-aw-info">
                    <strong>대상후보 5인 선정</strong>
                    <span>천하제일 미술대회, 월간 미술세계 &amp; 갤러리 미술세계</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2009.03</div>
                <div class="cv-aw-info">
                    <strong>2nd place, Casamia Prize, Wave Exhibition &amp; Award 2008</strong>
                    <span>런던예술대(UAL), 캠버웰, 앨버타대, 카디프대, UCA, 이화여대 연합 국제 미술전</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.06</div>
                <div class="cv-aw-info">
                    <strong>Semifinalist</strong>
                    <span>Adobe Design Achievement Award (ADAA), Adobe Global</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.05</div>
                <div class="cv-aw-info">
                    <strong>Fred A. Hillbruner Artist’s Book Fellowship</strong>
                    <span>The School of the Art Institute of Chicago (SAIC)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2004 - 2008</div>
                <div class="cv-aw-info">
                    <strong>Presidential Scholarship for 4 years (4년 총장 전액 장학금)</strong>
                    <span>The School of the Art Institute of Chicago (SAIC)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.07</div>
                <div class="cv-aw-info">
                    <strong>Best of Show of U.S. states</strong>
                    <span>The Federal Junior Duck Stamp Art Competition, U.S. FISH &amp; Wildlife Service (미국 연방정부)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.04</div>
                <div class="cv-aw-info">
                    <strong>Honorable Mention Award of Proclamation</strong>
                    <span>Legislature Suffolk County, New York (뉴욕 서퍽 카운티 의회 공식 결의안 표창)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.04</div>
                <div class="cv-aw-info">
                    <strong>1st place of the State of New York</strong>
                    <span>The Federal Junior Duck Stamp Art Competition, U.S. F&amp;WS (뉴욕주 1위)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2002.10</div>
                <div class="cv-aw-info">
                    <strong>Gold Prize</strong>
                    <span>Korean American Youth Art Competition, Contemporary Art, The Korea Times (뉴욕)</span>
                </div>
            </div>
        `,
        
        // Module 4: Group Shows
        groupHeading: "SELECTED CURATED GROUP EXHIBITIONS & BIENNALES",
        groupBadge: "주요 미술관 기획전 및 비엔날레",
        groupCol1Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.11</div><div class="cv-ex-info"><strong>2025 추계 국제초대작품전</strong><span>전주교육대학교 황학당</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.07</div><div class="cv-ex-info"><strong>Dancing Color: KSCS International Exhibition</strong><span>중국 텐허 아트 가든</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.05</div><div class="cv-ex-info"><strong>The 44th KOCON International Digital Art Exhibition</strong><span>제주대학교</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2024.11</div><div class="cv-ex-info"><strong>조판공의 다리 (한국타이포그라피학회)</strong><span>리얼레이션 스페이스</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.10</div><div class="cv-ex-info"><strong>미술로 공감하는 우리시대의 가치 [상원미술관 개관 20주년 특별전]</strong><span>상원미술관</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.09</div><div class="cv-ex-info"><strong>예술 영원한 빛 [서울예고 개교 70주년 특별전]</strong><span>도암갤러리, 서울아트센터</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.04</div><div class="cv-ex-info"><strong>이상한 나라의 괴짜들 展 2023</strong><span>K현대미술관 (KMCA)</span></div></div>
        `,
        groupCol2Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2021.12</div><div class="cv-ex-info"><strong>GURAPA Showroom x 제이플레이스</strong><span>갤러리안목 기획전</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2021.03</div><div class="cv-ex-info"><strong>기억을 잇다 [영은미술관 특별기획전]</strong><span>영은미술관</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.12</div><div class="cv-ex-info"><strong>탐욕 (貪慾) 초대전</strong><span>부천아트벙커39</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.10</div><div class="cv-ex-info"><strong>미술관 속 철학이야기 V. 물려줄 환경</strong><span>상원미술관</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.09</div><div class="cv-ex-info"><strong>2018 LET’S MAKE TOGETHER [유니온아트페어]</strong><span>S FACTORY</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2017.07</div><div class="cv-ex-info"><strong>컬러플레이</strong><span>암웨이 미술관 &amp; 경기도 미술관</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2017.06</div><div class="cv-ex-info"><strong>조형아트서울 (Plastic &amp; Contemporary Art Show)</strong><span>COEX 청작아트</span></div></div>
        `,
        groupCol3Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2016.10</div><div class="cv-ex-info"><strong>Young &amp; Young Artist Project</strong><span>영은미술관</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2016.06</div><div class="cv-ex-info"><strong>창대한 시작 戰</strong><span>서울문화재단 서교예술실험센터</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2014.02</div><div class="cv-ex-info"><strong>개념적 비행 ; 非行 아티스트의 飛行</strong><span>암웨이 미술관</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2013.05</div><div class="cv-ex-info"><strong>예술 영원한 빛 [서울예고 60주년 특별전]</strong><span>예술의전당 한가람미술관</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2009.07</div><div class="cv-ex-info"><strong>777 현대미술전</strong><span>국경없는 미술공간 (파리, 프랑스)</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2008</div><div class="cv-ex-info"><strong>BFA Show &amp; Design Show</strong><span>시카고 설리반센터 &amp; G2 갤러리 (미국)</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2003 - 2004</div><div class="cv-ex-info"><strong>Junior Duck Stamp Original Art U.S. Tour</strong><span>미국 전역 미술관 투어</span></div></div>
        `,
        
        // Module 5: Press
        pressHeading: "SELECTED PRESS & CRITICAL BIBLIOGRAPHY",
        pressBadge: "미술 평론 & 언론 보도",
        pressListHtml: `
            <div class="cv-press-item"><span class="cv-press-year">2019</span><span class="cv-press-text"><strong>도봉문화재단</strong> – 마을극장 흰고무신 ‘박지현 작가 기획 인터뷰’</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2016</span><span class="cv-press-text"><strong>월간 미술세계 7월호</strong> – 박지현, 제13회 신진작가 발언전 대상작가 심층 특집 인터뷰 &amp; 평론</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2016</span><span class="cv-press-text"><strong>이화뉴스 &amp; 이대학보</strong> – 세계로 도약할 이화의 예술인을 주목하라 : 대상작가 박지현</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>서울 MBC</strong> – 이브닝뉴스 ‘박지현 개인전 [ un ] veil’ 집중 조명 방송</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>대전 MBC</strong> – 생방송 아침이 좋다 '임립미술관 신진작가전 대상후보 박지현' 출연</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>아트허브 (ARTHURB)</strong> – 아티스트 아카이브 포커스 작가 선정</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2008</span><span class="cv-press-text"><strong>Joan Flasch Artists’ Book Collection</strong> – 시카고예대 영구 소장 디지털 아카이브 등재</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2003</span><span class="cv-press-text"><strong>Suffolk County Legislature (NY)</strong> – 미국 뉴욕 서퍽 카운티 의회 공식 결의안 표창</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2002</span><span class="cv-press-text"><strong>미주 한국일보 (The Korea Times NY)</strong> – Gold Prize 전면 작품 사진 게재 및 작가 인터뷰</span></div>
        `,
        
        // Footer CTA
        footerCtaTitle: "EXPLORE JI-HYUN PARK'S ART PROJECTS",
        footerCtaDesc: "박지현 작가의 순수미술 회화, 미디어아트, 전시 도록 아카이브 45개 프로젝트를 확인하세요.",
        footerCtaBtn: "VIEW ART PROJECTS →"
    },
    
    en: {
        pageTitle: "ARTIST CV // JI-HYUN PARK",
        headerBadge: "🎨 ARTIST CV (FINE ART & MEDIA)",
        switchGeneralBtn: "🏛️ SWITCH TO ACADEMIC CV →",
        mainHeading: "ARTIST CV // JI-HYUN PARK",
        subDesc: "Artist CV // Ji-Hyun Park",
        printBtn: "PRINT / SAVE PDF",
        
        // Quick Filters
        filterStatement: "STATEMENT",
        filterSolo: "SOLO SHOWS",
        filterCollections: "COLLECTIONS",
        filterAwards: "AWARDS & RESIDENCY",
        filterGroup: "GROUP SHOWS",
        filterPress: "PRESS",
        
        // Profile
        roleEn: "VISUAL ARTIST · CONCEPTUAL & MEDIA ARTIST",
        email: "jpvoice@naver.com",
        
        // Statement Heading
        statementHeading: "// ARTIST STATEMENT",
        statementLangBadge: "KOR · ENG · CHN TRILINGUAL EDITION",
        
        // Statement Body
        statementP1: "Art is not somewhere apart from life. It runs alongside it, reading some part of it again. At the end of that reading, what I am looking for is truth. Not the kind that sorts right from wrong. Truth and untruth are one coin. Turn it over to settle the face, and the other side is gone. So I don't turn it over. I set the work down where it leans neither way, and step back. There is no final place it is meant to arrive.",
        statementP2: "Between what shows and what stays hidden there is a small tension. It comes from nothing being settled. And what is unsettled will not hold still — it moves on its own. I call that movement play. Play is not something I do. Once the ground is laid, the play plays itself, and it makes meanings no one saw coming. Everyone comes to the work already carrying an understanding their own years have built, and meaning is made new on top of it each time. Truth is not a conclusion. It keeps moving, and it stays open.",
        statementP3: "Art does not measure or prove. It goes toward what has not been named yet, so it is never finished — and because it is never finished, it lasts. What I make is not an object but a place where something can happen. The moment a viewer steps into the play, they push off from language and take a step outside it. I leave the space open for that step.",
        
        // Module 1: Education
        eduHeading: "EDUCATION & HERITAGE",
        eduBadge: "ACADEMIC DEGREES",
        eduTimelineHtml: `
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>Ewha Womans University Graduate School</span>
                    <span class="cv-node-role">Ph.D in Design</span>
                </div>
                <div class="cv-node-desc">
                    <strong>Ph.D in Visual Communication Design (2017)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        Doctoral Dissertation: A Study on Visual Expression through the Hermeneutic Device of Language and Expression<br>— Focused on Gadamer's Concept of 'Play'
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>Ewha Womans University Graduate School</span>
                    <span class="cv-node-role">M.Des in Design</span>
                </div>
                <div class="cv-node-desc">
                    <strong>M.Des in Visual Communication Design (2011)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        Master's Thesis: Experimental Visual Expression Reflecting Contemporary Phenomena of 'Human Desire'<br>— Archive and Mapping Methodologies
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>The School of the Art Institute of Chicago (SAIC)</span>
                    <span class="cv-node-role">B.F.A</span>
                </div>
                <div class="cv-node-desc">
                    <strong>Fine Arts &amp; Visual Communication Design (Chicago, USA)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        · 4-Year Full Presidential Scholarship Recipient<br>
                        · Awarded Fred A. Hillbruner Artist’s Book Fellowship
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>Seoul Arts High School</span>
                    <span class="cv-node-role">Fine Arts</span>
                </div>
                <div class="cv-node-desc">Western Painting Major · Attended Smithtown Christian School (NY)</div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>Sunhwa Arts Middle School</span>
                    <span class="cv-node-role">Fine Arts</span>
                </div>
                <div class="cv-node-desc">Fine Arts Studio Practice Major</div>
            </div>
        `,
        
        colHeading: "PERMANENT COLLECTIONS & RESIDENCIES",
        colBadge: "MUSEUM ARCHIVES",
        labelMuseumCol: "MUSEUM & INSTITUTIONAL COLLECTIONS",
        collectionsTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2016 / 2017</div>
                <div class="cv-aw-info">
                    <strong>Youngun Museum of Contemporary Art (Permanent Museum Collection)</strong>
                    <span>Permanent Archive &amp; Contemporary Art Collection (Gwangju, Gyeonggi, Korea)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008</div>
                <div class="cv-aw-info">
                    <strong>Joan Flasch Artists' Book Collection, SAIC</strong>
                    <span>The School of the Art Institute of Chicago Permanent Collection &amp; Global Digital Archive (Chicago, USA)</span>
                </div>
            </div>
        `,
        labelResidency: "ARTIST RESIDENCIES & FELLOWSHIPS",
        residencyTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2009.07</div>
                <div class="cv-aw-info">
                    <strong>L'espace des arts sans frontieres</strong>
                    <span>Paris, France (Visiting International Artist Residency)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.05</div>
                <div class="cv-aw-info">
                    <strong>Fred A. Hillbruner Artist’s Book Fellowship</strong>
                    <span>The School of the Art Institute of Chicago (SAIC) Fellowship Award</span>
                </div>
            </div>
        `,
        
        // Module 2: Solo Shows
        soloHeading: "SOLO EXHIBITIONS",
        soloBadge: "NEW YORK · SEOUL · JINGDEZHEN",
        soloCol1Html: `
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2024.07</div>
                <div class="cv-ex-info">
                    <strong>Disney Déjà Vu — Jingdezhen International Invitational Solo Exhibition</strong>
                    <span>Jingdezhen Ceramic University (Jingdezhen, China)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2023.04</div>
                <div class="cv-ex-info">
                    <strong>TOGETHER TO GATHER</strong>
                    <span>ROOM#4 Ji-Hyun Park Solo Exhibition, SINSA HOUSE (Seoul)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2022.11</div>
                <div class="cv-ex-info">
                    <strong>KSCS Sejong Special Invitational Solo Exhibition</strong>
                    <span>Sejong Art Center</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2022.11</div>
                <div class="cv-ex-info">
                    <strong>ATTENTION (Ji-Hyun Park Solo Show)</strong>
                    <span>Curated Solo Exhibition</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.09</div>
                <div class="cv-ex-info">
                    <strong>Mirror Mirror</strong>
                    <span>POP-UP EXHIBITION, InterArt Channel &amp; Public Gallery</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.06</div>
                <div class="cv-ex-info">
                    <strong>BLACK MIRROR, White Rubber Shoes</strong>
                    <span>Modoo Gallery, Dobong Cultural Foundation Curated Exhibition</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.06</div>
                <div class="cv-ex-info">
                    <strong>Doubt Your Thoughts</strong>
                    <span>Invitational Solo Exhibition, Ham Seok-heon Memorial Museum Gallery</span>
                </div>
            </div>
        `,
        soloCol2Html: `
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2018.09</div>
                <div class="cv-ex-info">
                    <strong>ￚ 18 Years: Do You Know Their 'Free · Democratic · Conservative' X kg? ￚ</strong>
                    <span>Invitational Solo Exhibition, Knit Gallery (Seoul)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.08</div>
                <div class="cv-ex-info">
                    <strong>UNTITLED FEELING</strong>
                    <span>Jung Woo Kyung Gallery Curated Invitational Solo Exhibition</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.09</div>
                <div class="cv-ex-info">
                    <strong>WTF? — Grand Prize Solo Exhibition of the 13th Emerging Artist's Voice</strong>
                    <span>Gallery Misulsegye, Hosted by Monthly Misulsegye</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.08</div>
                <div class="cv-ex-info">
                    <strong>OMG! — 3rd Solo Exhibition</strong>
                    <span>Invitational Solo Show, Space Artwa</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2016.11</div>
                <div class="cv-ex-info">
                    <strong>[ un ] veil — 2nd Solo Exhibition in New York</strong>
                    <span>ABLE FINE ART NY GALLERY (Chelsea, New York, USA)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2015.10</div>
                <div class="cv-ex-info">
                    <strong>[ un ] veil — 1st Solo Exhibition in New York</strong>
                    <span>ABLE FINE ART NY GALLERY (Chelsea, New York, USA)</span>
                </div>
            </div>
        `,
        
        // Module 3: Awards
        awardHeading: "KEY AWARDS & ART GRANTS",
        awardBadge: "HONORS & FELLOWSHIPS",
        awardsTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2017.09</div>
                <div class="cv-aw-info">
                    <strong>Grand Prize, 13th Emerging Artist's Voice National Fine Art Competition</strong>
                    <span>Highest Honor Grand Prize awarded by Monthly Misulsegye &amp; Gallery Misulsegye</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2016.03</div>
                <div class="cv-aw-info">
                    <strong>'Spotlighted Work' Selected Artist</strong>
                    <span>Ewha Womans University College of Art &amp; Design Outstanding Research Selection</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2015.05</div>
                <div class="cv-aw-info">
                    <strong>Top 5 Grand Prize Finalist</strong>
                    <span>National Art Competition, Monthly Misulsegye &amp; Gallery Misulsegye</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2009.03</div>
                <div class="cv-aw-info">
                    <strong>2nd Place, Casamia Prize, Wave Exhibition &amp; Award 2008</strong>
                    <span>Joint International Art Exhibition (UAL Camberwell, Univ of Alberta, Cardiff, UCA, Ewha)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.06</div>
                <div class="cv-aw-info">
                    <strong>Semifinalist</strong>
                    <span>Adobe Design Achievement Awards (ADAA Global), Adobe Systems</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.05</div>
                <div class="cv-aw-info">
                    <strong>Fred A. Hillbruner Artist’s Book Fellowship</strong>
                    <span>The School of the Art Institute of Chicago (SAIC) Fellowship</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2004 - 2008</div>
                <div class="cv-aw-info">
                    <strong>Presidential Scholarship for 4 Years (Full Tuition)</strong>
                    <span>The School of the Art Institute of Chicago (SAIC)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.07</div>
                <div class="cv-aw-info">
                    <strong>Best of Show of U.S. States</strong>
                    <span>The Federal Junior Duck Stamp Art Competition, U.S. Fish &amp; Wildlife Service (U.S. Federal Govt)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.04</div>
                <div class="cv-aw-info">
                    <strong>Honorable Mention Award of Proclamation</strong>
                    <span>Legislature Suffolk County, New York (Official Legislative Proclamation Honor)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.04</div>
                <div class="cv-aw-info">
                    <strong>1st Place of the State of New York</strong>
                    <span>The Federal Junior Duck Stamp Art Competition, U.S. F&amp;WS</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2002.10</div>
                <div class="cv-aw-info">
                    <strong>Gold Prize</strong>
                    <span>Korean American Youth Art Competition, Contemporary Art, The Korea Times (New York)</span>
                </div>
            </div>
        `,
        
        // Module 4: Group Shows
        groupHeading: "SELECTED CURATED GROUP EXHIBITIONS & BIENNALES",
        groupBadge: "CURATED INVITATIONAL SHOWS",
        groupCol1Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.11</div><div class="cv-ex-info"><strong>2025 Autumn International Invitational Exhibition</strong><span>Hwanghakdang, Jeonju National University of Education</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.07</div><div class="cv-ex-info"><strong>Dancing Color: KSCS International Exhibition</strong><span>Tianhe Art Garden, China</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.05</div><div class="cv-ex-info"><strong>The 44th KOCON International Digital Art Exhibition</strong><span>Jeju National University</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2024.11</div><div class="cv-ex-info"><strong>Typesetter's Bridge (Korean Society of Typography Exhibition 18)</strong><span>Realation Space</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.10</div><div class="cv-ex-info"><strong>Empathizing with the Values of Our Era through Art [Sangwon Museum 20th Anniversary]</strong><span>Sangwon Museum of Art</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.09</div><div class="cv-ex-info"><strong>Eternal Light of Art [Seoul Arts High School 70th Anniversary]</strong><span>Doam Gallery, Seoul Art Center</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.04</div><div class="cv-ex-info"><strong>Geeks in Wonderland 2023</strong><span>K-Museum of Contemporary Art (KMCA)</span></div></div>
        `,
        groupCol2Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2021.12</div><div class="cv-ex-info"><strong>GURAPA Showroom x J-Place</strong><span>Gallery Anmok Curated Exhibition</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2021.03</div><div class="cv-ex-info"><strong>Connecting Memories [Youngun Museum Special Curated Show]</strong><span>Youngun Museum of Contemporary Art</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.12</div><div class="cv-ex-info"><strong>Greed (貪慾) Invitational Exhibition</strong><span>Bucheon Art Bunker B39</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.10</div><div class="cv-ex-info"><strong>Philosophy in the Museum V: Environment to Inherit</strong><span>Sangwon Museum of Art</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.09</div><div class="cv-ex-info"><strong>2018 LET’S MAKE TOGETHER [Union Art Fair]</strong><span>S FACTORY (Seoul)</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2017.07</div><div class="cv-ex-info"><strong>Color Play</strong><span>Amway Museum of Art &amp; Gyeonggi Museum of Modern Art</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2017.06</div><div class="cv-ex-info"><strong>Plastic &amp; Contemporary Art Show (PLAS COEX)</strong><span>Chung Jark Art</span></div></div>
        `,
        groupCol3Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2016.10</div><div class="cv-ex-info"><strong>Young &amp; Young Artist Project</strong><span>Youngun Museum of Contemporary Art</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2016.06</div><div class="cv-ex-info"><strong>A Grand Beginning Exhibition</strong><span>Seoul Foundation for Arts and Culture, Seogyo Art Center</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2014.02</div><div class="cv-ex-info"><strong>Conceptual Flight: Flight of the Non-conforming Artist</strong><span>Amway Museum of Art</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2013.05</div><div class="cv-ex-info"><strong>Eternal Light of Art [Seoul Arts High School 60th Anniversary]</strong><span>Hangaram Art Museum, Seoul Arts Center</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2009.07</div><div class="cv-ex-info"><strong>777 Contemporary Art Exhibition</strong><span>L'espace des arts sans frontieres (Paris, France)</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2008</div><div class="cv-ex-info"><strong>BFA Show &amp; Design Show</strong><span>Sullivan Center &amp; G2 Gallery (Chicago, USA)</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2003 - 2004</div><div class="cv-ex-info"><strong>Junior Duck Stamp Original Art U.S. National Museum Tour</strong><span>U.S. Nationwide Museum Tour</span></div></div>
        `,
        
        // Module 5: Press
        pressHeading: "SELECTED PRESS & CRITICAL BIBLIOGRAPHY",
        pressBadge: "ART CRITICISM & MEDIA COVERAGE",
        pressListHtml: `
            <div class="cv-press-item"><span class="cv-press-year">2019</span><span class="cv-press-text"><strong>Dobong Cultural Foundation</strong> – Village Theater White Rubber Shoes 'Special Artist Interview'</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2016</span><span class="cv-press-text"><strong>Monthly Misulsegye (July Issue)</strong> – Ji-Hyun Park, In-depth Feature Interview &amp; Critical Review of the Grand Prize Winner</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2016</span><span class="cv-press-text"><strong>Ewha News &amp; Ewha Voice</strong> – Spotlight on Ewha Artists Leaping onto the World Stage: Grand Prize Winner Ji-Hyun Park</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>Seoul MBC TV</strong> – Evening News Feature: 'Ji-Hyun Park Solo Exhibition [ un ] veil'</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>Daejeon MBC TV</strong> – Morning Live Feature: 'Grand Prize Finalist Ji-Hyun Park at Limlip Museum'</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>ARTHUB</strong> – Selected as Artist Archive Focus</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2008</span><span class="cv-press-text"><strong>Joan Flasch Artists’ Book Collection</strong> – SAIC Permanent Digital Archive Induction</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2003</span><span class="cv-press-text"><strong>Suffolk County Legislature (NY)</strong> – Official Legislative Proclamation Honor</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2002</span><span class="cv-press-text"><strong>The Korea Times New York</strong> – Full-page Gold Prize Feature &amp; Artist Interview</span></div>
        `
    },
    
    zh: {
        pageTitle: "ARTIST CV // 朴芝炫 (JI-HYUN PARK)",
        headerBadge: "🎨 艺术家简历 (纯艺术与新媒体)",
        switchGeneralBtn: "🏛️ 切换至 学术简历 (ACADEMIC CV) →",
        mainHeading: "ARTIST CV // 朴芝炫 (JI-HYUN PARK)",
        subDesc: "朴芝炫 艺术家简历",
        printBtn: "打印 / 保存PDF",
        
        // Quick Filters
        filterStatement: "艺术家陈述 (STATEMENT)",
        filterSolo: "个人展览 (SOLO)",
        filterCollections: "美术馆馆藏 (COLLECTIONS)",
        filterAwards: "奖项与驻留 (AWARDS)",
        filterGroup: "群展精选 (GROUP)",
        filterPress: "艺术评论 (PRESS)",
        
        // Profile
        roleEn: "VISUAL ARTIST · CONCEPTUAL & MEDIA ARTIST",
        email: "jpvoice@naver.com",
        
        // Statement Heading
        statementHeading: "// 艺术家自述 (ARTIST STATEMENT)",
        statementLangBadge: "中 · 英 · 韩 三语典藏版本 (TRILINGUAL EDITION)",
        
        // Statement Body
        statementP1: "对艺术家而言，艺术是现实的延伸。它是对生活的映照，也是对生活某一维度的重新诠释。在这场诠释的终点，艺术家所追寻的是真理。然而，这并非判别真伪的真理。对艺术家来说，真理与非真理如同同一枚硬币的两面。当你为了确立正面而翻转硬币的瞬间，背面便已消失。因此，艺术家选择不翻转它。在不偏向任何一方的居中之地，立下作品，而后退步抽身。并不预设任何必须抵达的‘绝对精神’。",
        statementP2: "在显现与隐匿之间，存在着微妙的张力。这是一种因未被定论而产生的张力。正是这种‘未决定性’使作品能够自发地运动。艺术家将这种运动称为‘游戏’。游戏并非由艺术家所主导。一旦场域铺设完毕，游戏便会自行游玩，并衍生出无人预料的意义。在此显现的真理既非客观的，亦非绝对的。每个人都带着岁月所沉淀的‘前理解’站在作品前，意义在此之上每一次被重新生成。真理不是固定的结论，而是不断运动的开放形态。",
        statementP3: "艺术不作丈量，亦不作证明。当自然科学试图在既定指标内进行阐释时，艺术则走向尚未被定义的彼方。因此它永不完结，也正因永不完结，它得以长存。艺术家所创造的并非完成的客体，而是促成经验发生的场所。视域从过去移向当下，又从当下移向尚未抵达的未来，置于其上的作品亦随之流转。当观者步入这场游戏的瞬间，便踏足语言之上，迈向语言之外。艺术家便为这一步留出虚位。",
        
        // Module 1: Education
        eduHeading: "教育背景与学术历程 (EDUCATION)",
        eduBadge: "学历与学术背景",
        eduTimelineHtml: `
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>韩国梨花女子大学研究生院</span>
                    <span class="cv-node-role">设计学博士 (Ph.D)</span>
                </div>
                <div class="cv-node-desc">
                    <strong>视觉传达设计专业 博士毕业 (2017)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        博士学位论文：《通过语言与表达的解释学机制探讨视觉表现研究》<br>—— 以伽达默尔的‘游戏’概念为中心
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>韩国梨花女子大学研究生院</span>
                    <span class="cv-node-role">设计学硕士 (M.Des)</span>
                </div>
                <div class="cv-node-desc">
                    <strong>视觉传达设计专业 硕士毕业 (2011)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        硕士学位论文：《反映现代‘人类欲望’现象的实验性视觉表现研究》<br>—— 档案与映射方法论
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>美国芝加哥艺术学院 (SAIC)</span>
                    <span class="cv-node-role">纯艺术学士 (B.F.A)</span>
                </div>
                <div class="cv-node-desc">
                    <strong>纯艺术与视觉传达设计专业 (美国芝加哥)</strong><br>
                    <span style="font-size:0.78rem; color:var(--gray-light); line-height:1.75; display:block; margin-top:4px;">
                        · 荣获4年全额校长奖学金 (Presidential Scholarship)<br>
                        · 荣获 Fred A. Hillbruner 艺术家书籍特藏奖学金
                    </span>
                </div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>首尔艺术高等学校 毕业</span>
                    <span class="cv-node-role">美术科</span>
                </div>
                <div class="cv-node-desc">西洋画专业 · 曾就读美国纽约史密斯敦基督教学校 (Smithtown Christian School, NY)</div>
            </div>
            <div class="cv-time-node">
                <div class="cv-node-title">
                    <span>仙和艺术中学校 毕业</span>
                    <span class="cv-node-role">美术科</span>
                </div>
                <div class="cv-node-desc">美术与专业实技毕业</div>
            </div>
        `,
        
        colHeading: "美术馆永久馆藏与国际驻留 (COLLECTIONS & RESIDENCIES)",
        colBadge: "美术馆级档案收藏",
        labelMuseumCol: "美术馆与机构永久馆藏 (MUSEUM COLLECTIONS)",
        collectionsTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2016 / 2017</div>
                <div class="cv-aw-info">
                    <strong>永恩现代美术馆 (Youngun Museum of Contemporary Art) 永久收藏</strong>
                    <span>韩国当代艺术代表性馆藏永久保存与典藏 (韩国京畿道广州)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008</div>
                <div class="cv-aw-info">
                    <strong>芝加哥艺术学院 Joan Flasch 艺术家书籍特藏 (SAIC)</strong>
                    <span>美国芝加哥艺术学院艺术家书籍永久馆藏与数字档案馆载 (美国芝加哥)</span>
                </div>
            </div>
        `,
        labelResidency: "国际艺术家驻留与奖学项目 (RESIDENCIES)",
        residencyTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2009.07</div>
                <div class="cv-aw-info">
                    <strong>巴黎无国界艺术空间 (L'espace des arts sans frontieres) 驻留</strong>
                    <span>法国巴黎国际特邀驻留艺术家 (法国巴黎)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.05</div>
                <div class="cv-aw-info">
                    <strong>Fred A. Hillbruner 艺术家书籍奖学金 (Fellowship)</strong>
                    <span>美国芝加哥艺术学院 (SAIC) 荣誉奖学金</span>
                </div>
            </div>
        `,
        
        // Module 2: Solo Shows
        soloHeading: "个人展览历程 (SOLO EXHIBITIONS)",
        soloBadge: "纽约 · 首尔 · 景德镇 (NEW YORK · SEOUL · JINGDEZHEN)",
        soloCol1Html: `
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2024.07</div>
                <div class="cv-ex-info">
                    <strong>Disney Déjà Vu — 景德镇国际特邀个展</strong>
                    <span>中国景德镇陶瓷大学 (Jingdezhen Ceramic University, 中国)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2023.04</div>
                <div class="cv-ex-info">
                    <strong>TOGETHER TO GATHER</strong>
                    <span>ROOM#4 朴芝炫个人展, 新沙大厦 (SINSA HOUSE, 首尔)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2022.11</div>
                <div class="cv-ex-info">
                    <strong>韩国基础造形学会 世宗特别展特邀个展</strong>
                    <span>世宗艺术中心</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2022.11</div>
                <div class="cv-ex-info">
                    <strong>ATTENTION (朴芝炫个人展)</strong>
                    <span>画廊企划特展</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.09</div>
                <div class="cv-ex-info">
                    <strong>魔镜魔镜 (Mirror Mirror)</strong>
                    <span>POP-UP 艺术快闪特展, InterArt Channel &amp; Public Gallery</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.06</div>
                <div class="cv-ex-info">
                    <strong>BLACK MIRROR, 白胶鞋</strong>
                    <span>大家的美术馆, 道峰文化财团企划个展</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2019.06</div>
                <div class="cv-ex-info">
                    <strong>质疑你的思想 (Doubt Your Thoughts)</strong>
                    <span>特邀个展, 咸锡宪纪念馆 씨알(Ssial)画廊</span>
                </div>
            </div>
        `,
        soloCol2Html: `
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2018.09</div>
                <div class="cv-ex-info">
                    <strong>ￚ 十八年：他们的自由·民主·保守之 X kg ￚ</strong>
                    <span>特邀个展, Knit Gallery (首尔)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.08</div>
                <div class="cv-ex-info">
                    <strong>UNTITLED FEELING</strong>
                    <span>郑雨卿画廊 (Jung Woo Kyung Gallery) 企划特邀个展</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.09</div>
                <div class="cv-ex-info">
                    <strong>WTF? — 第13届新进艺术家发言展全国大奖得主特邀个展</strong>
                    <span>美术世界画廊全馆, 月刊《美术世界》主办</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2017.08</div>
                <div class="cv-ex-info">
                    <strong>OMG! — 朴芝炫第3次特邀个人展</strong>
                    <span>特邀个人展览, Space Artwa</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2016.11</div>
                <div class="cv-ex-info">
                    <strong>[ un ] veil — 纽约第二次个人展</strong>
                    <span>ABLE FINE ART NY GALLERY (纽约切尔西, 美国)</span>
                </div>
            </div>
            <div class="cv-exhibit-row">
                <div class="cv-ex-year">2015.10</div>
                <div class="cv-ex-info">
                    <strong>[ un ] veil — 纽约第一次个人展</strong>
                    <span>ABLE FINE ART NY GALLERY (纽约切尔西, 美国)</span>
                </div>
            </div>
        `,
        
        // Module 3: Awards
        awardHeading: "奖项荣誉与国际驻留 (AWARDS & RESIDENCIES)",
        awardBadge: "国内外艺术大奖与驻留",
        awardsTableHtml: `
            <div class="cv-award-row">
                <div class="cv-aw-date">2017.09</div>
                <div class="cv-aw-info">
                    <strong>最高大奖 (Grand Prize), 第13届新进艺术家发言展全国美术大赛</strong>
                    <span>月刊《美术世界》与美术世界画廊主办全国公开征集大展最高荣誉‘大奖’</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2016.03</div>
                <div class="cv-aw-info">
                    <strong>‘瞩目之作’入选艺术家</strong>
                    <span>梨花女子大学造形艺术大学优秀学术研究作品入选</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2015.05</div>
                <div class="cv-aw-info">
                    <strong>第13届新进艺术家发言展‘天下第一美术大会’大奖最终候选人 (Top 5 Finalist)</strong>
                    <span>月刊《美术世界》与美术世界画廊</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2009.03</div>
                <div class="cv-aw-info">
                    <strong>Casamia Prize 二等奖 (2nd Place), Wave Exhibition 国际联合大展 2008</strong>
                    <span>伦敦艺术大学坎伯韦尔、阿尔伯塔大学、卡迪夫大学、UCA、梨花女子大学联合国际展</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.06</div>
                <div class="cv-aw-info">
                    <strong>Adobe 全球卓越设计大奖 (ADAA) 半决赛入围 (Semifinalist)</strong>
                    <span>Adobe Systems 全球</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2008.05</div>
                <div class="cv-aw-info">
                    <strong>Fred A. Hillbruner 艺术家书籍特藏奖学金</strong>
                    <span>美国芝加哥艺术学院 (SAIC) 荣誉奖学金</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2004 - 2008</div>
                <div class="cv-aw-info">
                    <strong>4年全额校长奖学金 (Presidential Scholarship)</strong>
                    <span>美国芝加哥艺术学院 (SAIC)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.07</div>
                <div class="cv-aw-info">
                    <strong>全美各州综合总冠军特等奖 (Best of Show of U.S. States)</strong>
                    <span>美国联邦青少年鸭票艺术大赛 (Junior Duck Stamp), 美国鱼类及野生动物管理局 (联邦政府)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.04</div>
                <div class="cv-aw-info">
                    <strong>美国纽约州萨福克县议会官方立法决议表彰</strong>
                    <span>Legislature Suffolk County, New York (纽约州官方立法表彰)</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2003.04</div>
                <div class="cv-aw-info">
                    <strong>纽约州第1名 (1st Place of the State of New York)</strong>
                    <span>美国联邦青少年鸭票艺术大赛, U.S. F&amp;WS</span>
                </div>
            </div>
            <div class="cv-award-row">
                <div class="cv-aw-date">2002.10</div>
                <div class="cv-aw-info">
                    <strong>金奖 (Gold Prize)</strong>
                    <span>美洲韩人青年艺术大赛 当代艺术部门, 美洲《韩国日报》(纽约)</span>
                </div>
            </div>
        `,
        
        // Module 4: Group Shows
        groupHeading: "主要企划群展与双年展 (SELECTED GROUP EXHIBITIONS)",
        groupBadge: "国内外重要受邀展览",
        groupCol1Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.11</div><div class="cv-ex-info"><strong>2025 秋季国际受邀作品展</strong><span>全州教育大学 黄鹤堂</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.07</div><div class="cv-ex-info"><strong>Dancing Color: KSCS 国际色彩艺术展</strong><span>中国 广州天河艺术园</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2025.05</div><div class="cv-ex-info"><strong>第44届 KOCON 国际数码艺术展</strong><span>济州大学</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2024.11</div><div class="cv-ex-info"><strong>排字工之桥 (韩国字体排印学会第18届展)</strong><span>Realation Space</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.10</div><div class="cv-ex-info"><strong>以艺术共鸣时代价值 [常元美术馆开馆20周年特展]</strong><span>常元美术馆</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.09</div><div class="cv-ex-info"><strong>艺术永恒之光 [首尔艺高开校70周年特展]</strong><span>道岩画廊, 首尔艺术中心</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2023.04</div><div class="cv-ex-info"><strong>怪人异想世界 2023 展</strong><span>K现代美术馆 (KMCA)</span></div></div>
        `,
        groupCol2Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2021.12</div><div class="cv-ex-info"><strong>GURAPA Showroom x J-Place</strong><span>Gallery Anmok 企划特展</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2021.03</div><div class="cv-ex-info"><strong>连接记忆 [永恩现代美术馆特别企划展]</strong><span>永恩现代美术馆</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.12</div><div class="cv-ex-info"><strong>贪婪 (貪慾) 特邀展</strong><span>富川 Art Bunker B39</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.10</div><div class="cv-ex-info"><strong>美术馆里的哲学故事 V: 留给后代的自然</strong><span>常元美术馆</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2018.09</div><div class="cv-ex-info"><strong>2018 LET’S MAKE TOGETHER [Union Art Fair]</strong><span>S FACTORY (首尔)</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2017.07</div><div class="cv-ex-info"><strong>Color Play 色彩游戏</strong><span>安利美术馆 &amp; 京畿道美术馆</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2017.06</div><div class="cv-ex-info"><strong>韩国造形艺术博览会 (PLAS COEX)</strong><span>清作画廊 (Chung Jark Art)</span></div></div>
        `,
        groupCol3Html: `
            <div class="cv-exhibit-row"><div class="cv-ex-year">2016.10</div><div class="cv-ex-info"><strong>Young &amp; Young Artist Project 青年艺术项目</strong><span>永恩现代美术馆</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2016.06</div><div class="cv-ex-info"><strong>宏伟的开端 展</strong><span>首尔文化财团 西桥艺术实验中心</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2014.02</div><div class="cv-ex-info"><strong>概念性飞行 : 非行艺术家的飞行 [韩国青年艺术家特邀展]</strong><span>安利美术馆</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2013.05</div><div class="cv-ex-info"><strong>艺术永恒之光 [首尔艺高开校60周年特展]</strong><span>艺术殿堂 Hangaram 美术馆</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2009.07</div><div class="cv-ex-info"><strong>777 当代艺术展</strong><span>巴黎无国界艺术空间 (法国巴黎)</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2008</div><div class="cv-ex-info"><strong>BFA 毕业展 &amp; 设计展</strong><span>芝加哥 Sullivan Center &amp; G2 画廊 (美国)</span></div></div>
            <div class="cv-exhibit-row"><div class="cv-ex-year">2003 - 2004</div><div class="cv-ex-info"><strong>Junior Duck Stamp 原作全美巡回展</strong><span>全美各大美术馆巡回展出</span></div></div>
        `,
        
        // Module 5: Press
        pressHeading: "艺术评论与媒体报道 (PRESS & REVIEWS)",
        pressBadge: "学术专访与艺术期刊报道",
        pressListHtml: `
            <div class="cv-press-item"><span class="cv-press-year">2019</span><span class="cv-press-text"><strong>道峰文化财团</strong> – 村庄剧场‘白胶鞋’ ‘朴芝炫艺术家企划深度专访’</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2016</span><span class="cv-press-text"><strong>月刊《美术世界》7月号</strong> – 朴芝炫, 第13届新进艺术家发言展大奖得主 深度特辑专访与艺术评论</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2016</span><span class="cv-press-text"><strong>梨花新闻 &amp; 梨大校报</strong> – 聚焦迈向全球舞台的梨花艺术家 : 大奖得主 朴芝炫</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>首尔 MBC 电视台</strong> – 晚间新闻 ‘朴芝炫个人展 [ un ] veil’ 深度报道</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>大田 MBC 电视台</strong> – 早间直播 ‘林立美术馆新进艺术家展大奖候选 朴芝炫’ 出镜专访</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2015</span><span class="cv-press-text"><strong>ARTHUB</strong> – 艺术家档案馆焦点艺术家入选</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2008</span><span class="cv-press-text"><strong>Joan Flasch Artists’ Book Collection</strong> – 芝加哥艺术学院永久馆藏数字档案登载</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2003</span><span class="cv-press-text"><strong>Suffolk County Legislature (NY)</strong> – 美国纽约萨福克县议会官方立法决议表彰</span></div>
            <div class="cv-press-item"><span class="cv-press-year">2002</span><span class="cv-press-text"><strong>美洲《韩国日报》(纽约)</strong> – Gold Prize 金奖整版作品刊登与艺术家专访</span></div>
        `
    }
};

/**
 * Switch the active language and update DOM elements
 * @param {string} lang - 'ko', 'en', or 'zh'
 */
function setArtistLanguage(lang) {
    if (!ARTIST_I18N_DATA[lang]) {
        lang = 'ko';
    }
    
    // Save preference
    try {
        localStorage.setItem('jihyun_artist_cv_lang', lang);
    } catch(e) {}
    
    // Update active button state
    document.querySelectorAll('.cv-lang-switcher .lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const d = ARTIST_I18N_DATA[lang];

    // Document Title
    document.title = d.pageTitle;

    // Header & Meta Bar
    safeSetText('#txtHeaderBadge', d.headerBadge);
    safeSetText('#txtSwitchGeneralBtn', d.switchGeneralBtn);
    safeSetText('#txtMainHeading', d.mainHeading);
    safeSetText('#txtSubDesc', d.subDesc);
    safeSetText('#txtPrintBtn', d.printBtn);

    // Quick Filters
    safeSetText('#fltStatement', d.filterStatement);
    safeSetText('#fltSolo', d.filterSolo);
    safeSetText('#fltCollections', d.filterCollections);
    safeSetText('#fltAwards', d.filterAwards);
    safeSetText('#fltGroup', d.filterGroup);
    safeSetText('#fltPress', d.filterPress);

    // Statement
    safeSetText('#txtStatementHeading', d.statementHeading);
    safeSetText('#txtStatementLangBadge', d.statementLangBadge);
    safeSetText('#txtStatementP1', d.statementP1);
    safeSetText('#txtStatementP2', d.statementP2);
    safeSetText('#txtStatementP3', d.statementP3);

    // Statement Secondary Column in Dual Grid
    if (lang === 'ko') {
        safeSetText('#txtStatementP1_Secondary', ARTIST_I18N_DATA.en.statementP1);
        safeSetText('#txtStatementP2_Secondary', ARTIST_I18N_DATA.en.statementP2);
        safeSetText('#txtStatementP3_Secondary', ARTIST_I18N_DATA.en.statementP3);
        safeSetText('#txtStatementSecondaryTag', 'ENGLISH (ORIGINAL ESSAY)');
    } else if (lang === 'en') {
        safeSetText('#txtStatementP1_Secondary', ARTIST_I18N_DATA.ko.statementP1);
        safeSetText('#txtStatementP2_Secondary', ARTIST_I18N_DATA.ko.statementP2);
        safeSetText('#txtStatementP3_Secondary', ARTIST_I18N_DATA.ko.statementP3);
        safeSetText('#txtStatementSecondaryTag', 'KOREAN (ORIGINAL ESSAY)');
    } else if (lang === 'zh') {
        safeSetText('#txtStatementP1_Secondary', ARTIST_I18N_DATA.en.statementP1);
        safeSetText('#txtStatementP2_Secondary', ARTIST_I18N_DATA.en.statementP2);
        safeSetText('#txtStatementP3_Secondary', ARTIST_I18N_DATA.en.statementP3);
        safeSetText('#txtStatementSecondaryTag', 'ENGLISH (PARALLEL)');
    }

    // Module 1: Education
    safeSetText('#txtEduHeading', d.eduHeading);
    safeSetText('#txtEduBadge', d.eduBadge);
    safeSetHtml('#eduTimeline', d.eduTimelineHtml);

    // Module 1: Collections
    safeSetText('#txtColHeading', d.colHeading);
    safeSetText('#txtColBadge', d.colBadge);
    safeSetText('#txtLabelMuseumCol', d.labelMuseumCol);
    safeSetHtml('#collectionsTable', d.collectionsTableHtml);
    safeSetText('#txtLabelResidency', d.labelResidency);
    safeSetHtml('#residencyTable', d.residencyTableHtml);

    // Module 2: Solo Shows
    safeSetText('#txtSoloHeading', d.soloHeading);
    safeSetText('#txtSoloBadge', d.soloBadge);
    safeSetHtml('#soloCol1', d.soloCol1Html);
    safeSetHtml('#soloCol2', d.soloCol2Html);

    // Module 3: Awards & Residencies
    safeSetText('#txtAwardHeading', d.awardHeading);
    safeSetText('#txtAwardBadge', d.awardBadge);
    safeSetHtml('#awardsTable', d.awardsTableHtml);

    // Module 4: Group Shows
    safeSetText('#txtGroupHeading', d.groupHeading);
    safeSetText('#txtGroupBadge', d.groupBadge);
    safeSetHtml('#groupCol1', d.groupCol1Html);
    safeSetHtml('#groupCol2', d.groupCol2Html);
    safeSetHtml('#groupCol3', d.groupCol3Html);

    // Module 5: Press
    safeSetText('#txtPressHeading', d.pressHeading);
    safeSetText('#txtPressBadge', d.pressBadge);
    safeSetHtml('#pressList', d.pressListHtml);

    // Footer CTA
    safeSetText('#txtFooterCtaTitle', d.footerCtaTitle);
    safeSetText('#txtFooterCtaDesc', d.footerCtaDesc);
    safeSetText('#txtFooterCtaBtn', d.footerCtaBtn);
}

function safeSetText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text !== undefined) {
        el.textContent = text;
    }
}

function safeSetHtml(selector, html) {
    const el = document.querySelector(selector);
    if (el && html !== undefined) {
        el.innerHTML = html;
    }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Check URL parameter first (e.g. ?lang=en)
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    
    // Check localStorage second
    let savedLang = 'ko';
    try {
        savedLang = localStorage.getItem('jihyun_artist_cv_lang') || 'ko';
    } catch(e) {}
    
    const initialLang = (paramLang && ARTIST_I18N_DATA[paramLang]) ? paramLang : savedLang;
    
    // Set initial language
    setArtistLanguage(initialLang);

    // Bind event listeners to language switcher buttons
    document.querySelectorAll('.cv-lang-switcher .lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            setArtistLanguage(lang);
        });
    });
});
