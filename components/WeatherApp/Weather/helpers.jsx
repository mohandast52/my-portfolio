import { Spin, Switch, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export const Header = ({
  isCelcius,
  onTempChange
}) => (
  <div className="header">
    <h3>Weather App</h3>
    <Switch
      checkedChildren="F"
      unCheckedChildren="C"
      checked={!isCelcius}
      onChange={onTempChange}
    />
  </div>
)

export const Footer = ({
  isLeftDisabled,
  onLeftClick,
  isRightDisabled,
  onRightClick
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
)