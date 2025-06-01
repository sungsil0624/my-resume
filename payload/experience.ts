import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: 'dktechin',
      positions: [
        {
          title: '공통 서비스 개발팀 / BE Developer',
          startedAt: '2025-01',
          descriptions: [
            '카카오 광고센터 어드민 운영',
            '광고센터 BE API 개발 & 화면 개발',
            'Kubernetes 기반 인프라 아키텍처 운영 & APM 활용 모니터링을 통한 성능 최적화',
            '장애 대응 프로세스 수립 및 개발 가이드 작성',
            '코드 리뷰와 기술 스터디를 통한 팀 내 전문성 및 협업 역량 강화',
          ],
          skillKeywords: [
            'JAVA',
            'Spring Boot',
            'MySQL',
            'Rabbit MQ',
            'Jenkins',
            'Kubernetes',
            'Redis',
            'Docker',
            'Angular',
          ],
        },
        {
          title: 'AI 공통 플랫폼 팀 / BE Developer Intern',
          startedAt: '2024-10',
          endedAt: '2024-12',
          descriptions: [
            '카카오 i 공지사항 서비스 이관',
            'Golang -> Kotlin 컨버팅 및 인프라 요소 최적화',
            '미사용 이미지 삭제 스케줄러 개발',
            '일관성 있는 캐싱 및 무효화 정책 적용',
          ],
          skillKeywords: ['Kotlin', 'Spring Boot', 'MySQL', 'Kubernetes', 'Docker'],
        },
      ],
    },
  ],
};

export default experience;
