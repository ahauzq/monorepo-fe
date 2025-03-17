import { Button } from 'antd';
import { useSelector } from 'react-redux';

import { Tooltip } from '@/components/basic';
import { RootState } from '@/models/store';
import I18N from '@/utils/I18N';

import s from './index.less';

const HomePage: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  return <div>web</div>;
};
export default HomePage;
