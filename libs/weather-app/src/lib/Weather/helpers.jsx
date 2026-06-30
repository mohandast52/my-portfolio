import PropTypes from 'prop-types';
import { Switch, Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

export const Header = ({ isCelcius = false, onTempChange = () => {} }) => (
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

Header.propTypes = {
  isCelcius: PropTypes.bool,
  onTempChange: PropTypes.func,
};

/**
 * Footer component
 */
export const Footer = ({
  isLeftDisabled = false,
  onLeftClick = () => {},
  isRightDisabled = false,
  onRightClick = () => {},
}) => (
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

Footer.propTypes = {
  isLeftDisabled: PropTypes.bool,
  onLeftClick: PropTypes.func,
  isRightDisabled: PropTypes.bool,
  onRightClick: PropTypes.func,
};
