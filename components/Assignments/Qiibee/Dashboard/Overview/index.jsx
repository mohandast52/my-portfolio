import {
  Row, Col,
} from 'antd';
import Stats from './Stats';
import GraphSales from './SalesArea';
import ComparisonSales from './ComparisonBar';
import BrandsPie from './BrandsPie';
import { GraphCard } from '../styles';

const Overview = () => (
  <div>
    <Row gutter={[24, 24]}>
      <Stats />
      <Col span={24}>
        <GraphCard>
          <GraphSales />
        </GraphCard>
      </Col>

      <Col span={12}>
        <GraphCard>
          <BrandsPie />
        </GraphCard>
      </Col>

      <Col span={12}>
        <GraphCard>
          <ComparisonSales />
        </GraphCard>
      </Col>
    </Row>
  </div>
);

export default Overview;
