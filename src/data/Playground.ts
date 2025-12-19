export const experiments = [
    {
      id: 1,
      name: '3D Card Hover Effect',
      description: 'CSS와 JavaScript를 활용한 3D 인터랙티브 카드 효과',
      tags: ['React', 'CSS', 'Animation'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com'
      },
      image: 'https://images.unsplash.com/photo-1670090130759-2562be5929f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNhcmQlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODYxODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'CSS transform과 JavaScript를 활용하여 마우스 움직임에 반응하는 3D 카드 효과를 구현했습니다.\n\n카드에 마우스를 올리면 마우스 위치에 따라 카드가 3D로 회전하며, 빛의 반사 효과까지 적용하여 현실감 있는 인터랙션을 제공합니다.',
      learnings: [
        'CSS transform-style: preserve-3d를 활용한 3D 공간 구현',
        'requestAnimationFrame을 활용한 부드러운 애니메이션',
        'React useRef와 useEffect를 활용한 DOM 조작',
        'CSS 변수를 활용한 동적 스타일링'
      ],
      nextSteps: [
        'React Spring 라이브러리를 활용한 물리 기반 애니메이션 적용',
        '터치 디바이스에서도 동작하도록 개선',
        '카드 뒤집기 효과 추가'
      ]
    },
    {
      id: 2,
      name: 'Particle Animation',
      description: 'Canvas API로 구현한 파티클 애니메이션 시스템',
      tags: ['Canvas', 'TypeScript', 'Animation'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com'
      },
      image: 'https://images.unsplash.com/photo-1643315283442-f63a93493125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0aWNsZSUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NjU4NjE4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'HTML5 Canvas API를 활용하여 마우스 움직임에 반응하는 파티클 애니메이션을 구현했습니다.\n\n수천 개의 파티클이 마우스 주변으로 모이고 흩어지는 효과를 60fps로 부드럽게 렌더링하며, 성능 최적화에 집중했습니다.',
      learnings: [
        'Canvas API의 효율적인 렌더링 방법',
        'RequestAnimationFrame을 활용한 애니메이션 루프',
        '파티클 시스템의 물리 엔진 구현',
        'Web Worker를 활용한 계산 성능 향상',
        'TypeScript로 타입 안정성 확보'
      ],
      nextSteps: [
        'WebGL로 마이그레이션하여 성능 향상',
        '다양한 파티클 모양과 색상 추가',
        '사용자 설정 가능한 옵션 패널 구현'
      ]
    },
    {
      id: 3,
      name: 'Custom Hooks Library',
      description: '재사용 가능한 React 커스텀 훅 모음',
      tags: ['React', 'TypeScript', 'Hooks'],
      links: {
        detail: '#',
        github: 'https://github.com'
      },
      image: 'https://images.unsplash.com/photo-1564931768730-7e4d8e240044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwbGlicmFyeSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NTg2MTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: '실무에서 자주 사용하는 로직을 커스텀 훅으로 추상화한 라이브러리입니다.\n\nuseDebounce, useIntersectionObserver, useLocalStorage 등 20개 이상의 유용한 훅을 제공하며, TypeScript로 완벽한 타입 지원을 제공합니다.',
      learnings: [
        'React Hooks의 동작 원리와 규칙',
        'TypeScript Generic을 활용한 유연한 타입 정의',
        '커스텀 훅의 재사용성과 추상화 레벨 설계',
        'Jest와 React Testing Library를 활용한 테스트 작성',
        'Storybook을 활용한 문서화'
      ],
      nextSteps: [
        'NPM 패키지로 배포',
        '더 많은 훅 추가 (useForm, useInfiniteScroll 등)',
        '사용 예제와 문서 보강'
      ]
    }
  ];