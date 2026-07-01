import { Switch, Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

interface HeaderProps {
  isCelcius?: boolean;
  onTempChange?: () => void;
}

export const Header = ({ isCelcius = false, onTempChange = () => {} }: HeaderProps) => (
  <div className="header">
    <h3>Weather App</h3>
    <Switch
      checkedChildren="F"
      unCheckedChildren="C"
      checked={!isCelcius}
      onChange={onTempChange}
    />
  </div>
);

interface FooterProps {
  isLeftDisabled?: boolean;
  onLeftClick?: () => void;
  isRightDisabled?: boolean;
  onRightClick?: () => void;
}

export const Footer = ({
  isLeftDisabled = false,
  onLeftClick = () => {},
  isRightDisabled = false,
  onRightClick = () => {},
}: FooterProps) => (
  <div className="footer">
    <Button
      type="primary"
      size="large"
      shape="round"
      disabled={isLeftDisabled}
      icon={<ArrowLeftOutlined />}
      onClick={onLeftClick}
    />

    <Button
      type="primary"
      size="large"
      shape="round"
      disabled={isRightDisabled}
      icon={<ArrowRightOutlined />}
      onClick={onRightClick}
    />
  </div>
);
