import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '저는 1년 차 백엔드 개발자로, Java, MySQL, Redis, MQ 등을 활용해 실제 프로덕션 서비스를 운영한 경험이 있습니다. 확장성과 유지보수성이 높은 백엔드 아키텍처를 설계하고 구축하기 위해 항상 고민하며 성장하고 있습니다.',
    '서비스 개발은 결국 개발자와 비즈니스 간의 원활한 커뮤니케이션에서 시작된다고 생각합니다. 저는 능동적이고 적극적인 소통을 통해 문제를 해결하고 비즈니스 발전에 기여하는 것을 중요하게 여기며, 이러한 자세로 더 나은 개발자가 되기 위해 끊임없이 학습하고 경험하며 노력하고 있습니다.',
  ],
  sign: 'dory.jeong',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
