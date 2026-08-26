export const experiments = [
  {
    id: 1,
    name: 'Windows98 컨셉 포트폴리오',
    description: 'Windows98의 컨셉을 가진 초기 포트폴리오',
    tags: ['React', 'TypeScript', 'Hooks'],
    links: {
      github: 'https://github.com/Taemin1234/windows98',
      live: 'https://taemin1234.github.io/windows98/',
    },
    image: '/images/windows98.png',
    fullDescription: '최초로 만든 포트폴리오 사이트로 windows98을 모티프로 만들었습니다. windows 98의 ui를 참고해 폴더, 작업표시줄, 시작버튼, 아이콘 등을 구현했습니다. 실제 동작도 추가해 재미를 더했습니다',
    learnings: [
      'jQuery ui를 통해 폴더와 창 이동을 구현.',
      'windows98의 ui를 구현하여 추억과 재미있는 경험 선사',
      'reload와 close 함수를 통해 재시작과 종료 버튼 구현',
      '윈도우 로딩창 구현',
      '메인화면에서 타이핑되는 효과 적용'
    ],
  },
  {
    id: 2,
    name: 'Up & Down 게임',
    description: 'Typescript와 React연습을 위한 숫자 맞추기 게임',
    tags: ['React', 'TypeScript'],
    links: {
      github: 'https://github.com/Taemin1234/UpDown',
      live: 'https://updown-lime.vercel.app/'
    },
    image: '/images/updown.png',
    fullDescription: '사용자의 입력에 따라 힌트를 제공하여 정답을 찾아가는 숫자 맞추기 게임입니다. Typescript와 React의 동작 방식 이해를 위해 만들었으며 게임의 흐름(입력-검증-기록)을 React의 상태 관리 로직으로 구현했습니다.',
    learnings: [
      '각각 독립된 컴포넌트로 분리하여 유지보수성과 재사용성 확보',
      '게임이력을 저장하고 애니메이션 효과 적용',
      '결과값을 저장해 순위 시스템 적용',
    ],
  },
  {
    id: 3,
    name: '숫자야구 게임',
    description: 'TypeScript와 JavaScript 연습을 위한 숫자 야구 게임',
    tags: ['Typescript'],
    links: {
      github: 'https://github.com/Taemin1234/Bulls-and-Cows',
      live: 'https://taemin1234.github.io/Bulls-and-Cows/'
    },
    image: '/images/bulls_and_cows.png',
    fullDescription: '숫자 야구 게임(Bulls and Cows)입니다.TypeScript와 JavaScript의 동작 방식을 이해하기 위해 제작했으며 DOM 조작, 배열 기반 로직을 직접 구현하며 타입 안정성과 런타임 동작의 차이를 경험하는 것을 목표로 했습니다.',
    learnings: [
      'TypeScript 타입 정의를 통해 DOM 요소, 이벤트, 상태 값을 명확히 관리',
      '배열 비교 로직을 직접 구현하여 strike / ball / out 판정 처리',
      '이벤트 기반 UI 흐름(입력 → 검증 → 결과 기록 → 초기화) 구조화',
      'JS 런타임 동작과 TS 타입 체크의 역할 차이를 체감하는 연습 프로젝트'
    ],
  },
  {
    id: 4,
    name: '리코셰 로봇',
    description: 'Canvas로 구현한 리코셰 로봇 게임',
    tags: ['JavaScript'],
    links: {
      github: 'https://github.com/Taemin1234/richoche_robot',
      live: 'https://taemin1234.github.io/richoche_robot/'
    },
    image: '/images/richoche-robot.png',
    fullDescription: '다른 말과 벽을 이용하여 최소 횟수로 목표 색을 목표지점으로 이동하는 게임. Canvas를 활용해 그래픽 렌더링, 좌표 기반 인터랙션, 충돌 판정 및 requestAnimationFrame 기반 애니메이션 구현을 목표로 했습니다.',
    learnings: [
      'canvas에 그래픽 요소를 직접 랜더링',
      '좌표 기반으로 로봇의 위치와 목표지점 설정',
      '로봇의 이동과 충돌 판정 로직 설정',
    ],
  },
];