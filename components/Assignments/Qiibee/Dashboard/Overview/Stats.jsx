import {
  Statistic, Card, Col,
} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { COLORS } from '../../styles';

const Stats = () => (
  <>
    <Col span={8}>
      <Card>
        <Statistic
          title="Total MBT Supply"
          value={10000000000.00}
          precision={2}
          valueStyle={{ color: COLORS.BLUE }}
        />
      </Card>
    </Col>

    <Col span={8}>
      <Card>
        <Statistic
          title="MyBrand wallet MBT Supply"
          value={99999000000.00}
          precision={2}
          valueStyle={{ color: COLORS.BLUE }}
        />
      </Card>
    </Col>

    <Col span={8}>
      <Card>
        <Statistic
          title="Circulating MBT Supply"
          value={1000000.00}
          precision={2}
          valueStyle={{ color: COLORS.BLUE }}
        />
      </Card>
    </Col>

    <Col span={6}>
      <Card>
        <Statistic
          title="Reward Transactions"
          value={17000}
          valueStyle={{ color: COLORS.BLUE }}
        />
      </Card>
    </Col>

    <Col span={6}>
      <Card>
        <Statistic
          title="MBT / Transaction"
          value={10}
          valueStyle={{ color: COLORS.GREEN }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>

    <Col span={6}>
      <Card>
        <Statistic
          title="Redeem Transactions"
          value={3950}
          valueStyle={{ color: COLORS.BLUE }}
        />
      </Card>
    </Col>

    <Col span={6}>
      <Card>
        <Statistic
          title="MBT / Transaction"
          value={20.00}
          valueStyle={{ color: COLORS.RED }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </>
);

export default Stats;
