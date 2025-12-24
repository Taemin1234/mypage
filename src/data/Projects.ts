export const projects = [
    {
      id: 1,
      name: 'taest 매거진',
      description: '에디터들이 직접 글을 발행하고 독자가 카테고리별로 탐색할 수 있는 온라인 매거진 플랫폼',
      tags: ['React 19', 'Next.js 15', 'Tailwind CSS', 'AWS Elastic Beanstalk', 'node.js + Express', 'MongoDB + Mongoose'],
      links: {
        detail: 'https://decisive-steam-5f0.notion.site/2b716d0d863f812eafb2fa457f71b9f3?source=copy_link',
        github: 'https://github.com',
        live: 'https://example.com'
      },
      color: 'from-slate-600 to-slate-700',
      image: '/images/taest-mag.webp',
      fullDescription: 'Taest Magazine은 "심도보단 감도, 트렌드보단 당신의 결"이라는 컨셉 아래, ' +
    '사용자의 취향과 감각을 콘텐츠로 기록하고 공유하는 온라인 매거진 플랫폼입니다.\n\n' +
    '여러 명의 에디터가 직접 글을 작성·발행할 수 있으며, 사용자는 카테고리 및 에디터별로 ' +
    '콘텐츠를 탐색할 수 있습니다. Next.js App Router 기반의 서버 컴포넌트와 스트리밍 데이터 페칭을 활용해 ' +
    'SEO와 초기 로딩 성능을 개선했으며, JWT 기반 인증과 역할(Role) 시스템을 통해 권한을 세분화했습니다.\n\n' +
    '본 프로젝트는 1인 풀스택 프로젝트로, 기획부터 디자인, 프론트엔드·백엔드 개발, 배포까지 ' +
    '현대적인 웹 애플리케이션의 전 과정을 직접 구현하는 것을 목표로 진행되었습니다.',
      period: '2025.04 - 2025.11 (8개월)',
      team: '개인프로젝트',
      features: [
        'JWT 기반 쿠키 인증 및 역할(Role) 기반 접근 제어 (RBAC)',
      '에디터가 직접 글을 작성·수정·발행할 수 있는 게시글 관리 시스템',
      'TinyMCE 기반 리치 텍스트 에디터 및 이미지 삽입 기능',
      '카테고리·서브카테고리 기반 게시글 탐색 및 동적 라우팅',
      '특별호(Featured) 게시글 메인 페이지 노출',
      '에디터 프로필 페이지 및 에디터별 게시글 목록 제공',
      'Cloudinary 기반 이미지 업로드·최적화·CDN 제공',
      'SEO 친화적인 슬러그 URL 구조',
      'Suspense, 스트리밍, 스켈레톤 UI를 활용한 사용자 경험 개선',
      '모바일·태블릿·데스크톱을 고려한 반응형 UI'
      ],
      challenges: [
        'Next.js App Router 환경에서 서버 컴포넌트와 클라이언트 컴포넌트의 역할 분리',
        '게시글·카테고리·에디터 간 관계를 고려한 MongoDB 스키마 설계',
        'JWT 쿠키 인증과 CORS 설정을 병행한 보안 구조 설계',
        'TinyMCE 기반 HTML 콘텐츠의 XSS 방지를 위한 DOMPurify 적용',
        '1인 개발 환경에서 보안, 성능, 유지보수성을 모두 고려한 구조 설계'
      ],
      outcomes: [
        '풀스택 아키텍처 전반에 대한 실전 이해도 향상',
        'JWT 인증, 비밀번호 해싱, XSS 방지 등 실무 수준의 보안 구현 경험',
        '서버 컴포넌트, 스트리밍, 응답 압축 등을 통한 성능 최적화 경험',
        'Next.js App Router 기반 현대적인 React 개발 패턴 습득',
        '실제 서비스 형태의 콘텐츠 플랫폼을 포트폴리오로 활용 가능'
      ]
    },
    {
      id: 2,
      name: '홍콩 여행 지도',
    
      description:
        'SVG 기반 인터랙티브 지도를 활용해 홍콩의 지역별 숙소·맛집·카페·펍·관광지 정보를 탐색할 수 있는 지도 중심 웹 애플리케이션',
    
      tags: [
        'React 18',
        'TypeScript',
        'Redux Toolkit',
        'React Router',
        'Styled Components',
        'D3.js',
        'SVG',
        'Vercel'
      ],
    
      links: {
        detail: 'https://decisive-steam-5f0.notion.site/2c516d0d863f8005920fd8343c16d897?source=copy_link',
        github: 'https://github.com/Taemin1234/travel-hk',
        live: 'https://travel-hk.vercel.app/'
      },
    
      color: 'from-blue-600 to-blue-700',
      image: '/images/travel-hk.webp',
    
      fullDescription:
        '홍콩 여행 지도는 SVG 기반의 인터랙티브 지도를 중심으로, 사용자가 홍콩의 각 지역을 직접 탐색하며 ' +
        '숙소, 맛집, 카페, 펍, 관광지 정보를 확인할 수 있도록 설계된 웹 애플리케이션입니다.\n\n' +
        '사용자는 마우스 휠을 이용해 지도를 확대·축소하고, 드래그를 통해 지도를 이동할 수 있으며, ' +
        '특정 지역을 클릭하면 해당 지역의 카테고리별 여행 정보가 동적으로 표시됩니다.\n\n' +
        'Redux Toolkit을 활용해 선택된 지역 상태를 전역으로 관리하고, ' +
        'SVG Path와 마우스 이벤트를 결합해 직관적이고 반응성 높은 지도 인터랙션을 구현했습니다.',
    
      period: '2024.9 ~ 2024.10',
      team: '개인 프로젝트',
    
      features: [
        'SVG 기반 홍콩 지도 확대·축소(Zoom) 및 드래그(Pan) 인터랙션',
        '마우스 커서 위치를 기준으로 한 자연스러운 지도 확대·축소',
        '클릭과 드래그를 구분하는 정교한 사용자 입력 처리 로직',
        '지역 클릭 시 Redux 전역 상태를 통한 지역 선택 관리',
        '숙소·맛집·카페·펍·관광지 카테고리 탭 기반 필터링',
        '아코디언 형태의 상세 정보 토글 UI',
        'Styled Components를 활용한 동적 스타일링 및 시각적 피드백',
        '로컬 상태 기반 좋아요(Like) 인터랙션 구현',
        'SPA 구조를 통한 부드러운 페이지 전환 경험'
      ],
    
      challenges: [
        'SVG 좌표계와 화면 좌표계를 변환해 마우스 중심 확대·축소 로직 구현',
        '드래그와 클릭을 구분하기 위한 거리 기반 입력 판별 로직 설계',
        '확대 비율에 따른 지도 이동 경계(min/max) 동적 계산',
        'SVG Path 기반 지역 요소에 대한 호버·클릭 인터랙션 처리',
        'Redux 전역 상태와 컴포넌트 렌더링 흐름 간의 동기화',
        'Styled Components 환경에서 복잡한 UI 상태를 명확하게 표현'
      ],
    
      outcomes: [
        'SVG와 React를 결합한 인터랙티브 UI 구현 경험 축적',
        'Redux Toolkit을 활용한 전역 상태 관리 구조에 대한 이해도 향상',
        '마우스 이벤트 기반 복합 인터랙션 설계 역량 강화',
        '지도 기반 서비스의 UX 설계 및 기술적 구현 경험',
        '시각적 인터랙션이 강조된 프로젝트를 포트폴리오로 활용 가능'
      ]
    },
    {
      id: 3,
      name: '영화 이상형 월드컵 (Movie World Cup)',
      description: 'TMDB API를 활용해 사용자가 설정한 조건의 영화를 탐색하고, 16강 토너먼트를 통해 최종 우승 영화를 선정하는 인터랙티브 웹 애플리케이션',
      tags: [
        'React 18',
        'Redux Toolkit',
        'TanStack Query (React Query)',
        'Intersection Observer',
        'styled-components',
        'TMDB API',
        'React Router',
        'Vercel'
      ],
      links: {
        detail: 'https://decisive-steam-5f0.notion.site/2ca16d0d863f809eb7b1d6f14e2f626d?source=copy_link',
        github: 'https://github.com/Taemin1234/moviecup',
        live: 'https://moviecup.vercel.app/'
      },
      color: 'from-emerald-600 to-emerald-700',
      image: '/images/movie-cup.webp',
      fullDescription: '영화 이상형 월드컵은 TMDB API를 기반으로 사용자가 선택한 조건(장르, 언어, 연도)에 맞는 영화를 탐색하고, ' +
      '16강 토너먼트 방식의 월드컵을 통해 최종 우승 영화를 선정하는 인터랙티브 웹 애플리케이션입니다.\n\n' +
      '무한 스크롤을 통해 대량의 영화 데이터를 탐색할 수 있으며, ' +
      '선택된 16개의 영화는 토너먼트 알고리즘에 따라 8강, 4강, 결승을 거쳐 우승작이 결정됩니다. ' +
      '우승 영화는 명예의 전당(Hall of Fame)에 기록되어 히스토리로 관리됩니다.\n\n' +
      '본 프로젝트는 클라이언트 상태(Redux Toolkit)와 서버 상태(TanStack Query)를 명확히 분리해 설계했으며, ' +
      'Intersection Observer와 React Query를 결합한 무한 스크롤 구현을 통해 성능과 사용자 경험을 동시에 고려했습니다.',
      period: '2024.07 ~ 2024.09',
      team: '개인 프로젝트',
      features: [
        '장르·언어·연도 조건을 조합한 영화 필터링 시스템',
        'TanStack Query의 useInfiniteQuery를 활용한 무한 스크롤 영화 목록',
        'Intersection Observer 기반 자동 페이지네이션',
        '16강 토너먼트 방식의 영화 이상형 월드컵 시스템',
        '라운드별 진행 상황 시각화 및 실시간 선택 반영',
        '우승 시 Confetti 애니메이션 효과 제공',
        '역대 우승 영화를 기록하는 명예의 전당(Hall of Fame)',
        'Redux Toolkit을 통한 필터·월드컵·우승자 전역 상태 관리'
      ],
      challenges: [
        '서버 상태(영화 데이터)와 클라이언트 상태(필터·월드컵 진행)를 분리한 상태 관리 구조 설계',
        'React Query의 캐싱·리패칭 전략과 필터 조건 변경 간의 연동',
        'Intersection Observer와 fetchNextPage를 결합한 무한 스크롤 안정화',
        '16강 → 결승까지 자연스럽게 이어지는 토너먼트 알고리즘 구현',
        '월드컵 진행 상태와 UI 렌더링 흐름 간의 동기화',
        'styled-components 환경에서 재사용 가능한 UI 컴포넌트 설계'
      ],
      outcomes: [
        'TanStack Query를 활용한 서버 상태 관리 및 캐싱 전략 이해',
        'Redux Toolkit 기반 복잡한 전역 상태 구조 설계 경험',
        'Intersection Observer를 활용한 고성능 무한 스크롤 구현 경험',
        '토너먼트 알고리즘 설계 및 단계적 상태 전이 로직 구현',
        '외부 REST API(TMDB)를 활용한 실전 데이터 기반 프로젝트 경험',
        '인터랙티브 콘텐츠 중심 프로젝트를 포트폴리오로 활용 가능'
      ]
    },
    {
      id: 4,
      name: '나와 맞는 영화 캐릭터 찾기',
    
      description:
        '사용자의 답변을 기반으로 MBTI 유형을 도출하고, 이에 어울리는 영화 캐릭터를 매칭해주는 인터랙티브 웹 애플리케이션',
    
      tags: [
        'Next.js 15 (App Router)',
        'React 19',
        'TypeScript',
        'CSS Modules',
        'Context API',
        'Custom Hooks',
        'Vercel'
      ],
    
      links: {
        detail: 'https://decisive-steam-5f0.notion.site/2cc16d0d863f8054ba06c6ded3d7c74f?source=copy_link',
        github: 'https://github.com/Taemin1234/find-movie-character',
        live: 'https://find-movie-character.vercel.app'
      },
    
      color: 'from-indigo-600 to-indigo-700',
      image: '/images/find-movie-character.png',
    
      fullDescription:
        '「나와 맞는 영화 캐릭터 찾기」는 사용자의 성향을 질문 응답을 통해 분석하고, ' +
        'MBTI 유형을 계산하여 가장 어울리는 영화 캐릭터를 매칭해주는 인터랙티브 웹 애플리케이션입니다.\n\n' +
        '총 12개의 질문에 답변하면 다수결 기반의 MBTI 알고리즘을 통해 4자리 유형(EI, SN, TF, JP)을 도출하며, ' +
        '결과 페이지에서는 해당 MBTI 유형에 맞는 대표 영화 캐릭터와 관련 캐릭터, 키워드, 상세 설명을 제공합니다.\n\n' +
        'Next.js App Router 기반으로 구현되었으며, URL 쿼리 파라미터를 활용한 동적 결과 페이지, ' +
        'Suspense를 통한 비동기 데이터 로딩 처리 등 사용자 경험을 고려한 구조로 설계되었습니다.',
    
      period: '2024.03',
      team: '개인 프로젝트',
    
      features: [
        '12개 질문 기반의 MBTI 성향 테스트 진행 시스템',
        '다수결 원칙을 적용한 MBTI 유형 계산 알고리즘',
        'URL 쿼리 파라미터를 활용한 결과 페이지 동적 렌더링',
        'MBTI 유형별 대표·연관 영화 캐릭터 정보 제공',
        'Context API 기반 전역 URL 상태 관리',
        'SNS 공유를 위한 결과 페이지 URL 복사 기능',
        'Suspense를 활용한 비동기 데이터 로딩 처리',
        '반응형 UI 및 모바일 친화적 레이아웃'
      ],
    
      challenges: [
        '질문 응답 흐름에 따라 상태가 자연스럽게 이어지는 UI 로직 설계',
        'MBTI 4개 차원(EI, SN, TF, JP)을 다수결 방식으로 정확히 계산하는 알고리즘 구현',
        'URL 파라미터 기반 결과 페이지에서의 데이터 매칭 구조 설계',
        'Context API를 활용한 전역 상태 관리 범위 설정',
        'JSON 기반 데이터 구조를 타입 안정성 있게 관리'
      ],
    
      outcomes: [
        'Next.js App Router 기반 페이지 구조 및 라우팅 이해도 향상',
        'Context API와 Custom Hooks를 활용한 상태 관리 경험',
        'TypeScript를 활용한 엔드투엔드 타입 안정성 확보',
        '인터랙티브 UI 흐름 설계 및 사용자 경험 개선 경험',
        '완성도 있는 개인 프로젝트를 포트폴리오로 활용 가능'
      ]
    }
  ];
  