import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/junhee.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '정준희',
    small: '(도리)',
  },
  contact: [
    {
      title: 'dory.jeong@dktechin.com',
      link: 'dory.jeong@dktechin.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/sungsil0624',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이메일을 통해 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
