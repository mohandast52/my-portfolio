import Image from 'next/image';
import { connect } from 'react-redux';
import {
  Button, Card, Col, Row, Tooltip,
} from 'antd';
import {
  followBrand as followBrandFn,
  reedeemPoints as reedeemPointsFn,
} from '../../state/actions';
import { Actions, BrandCard } from './styles';

const { Meta } = Card;

interface BrandsProps {
  currentUser?: any;
  brands?: any[];
  followBrand?: (id: any) => void;
  reedeemPoints?: (id: any) => void;
}

const Brands = ({
  currentUser = null, brands = [], followBrand = () => { }, reedeemPoints = () => { },
}: BrandsProps) => {

  if (!currentUser) return <h3>Please log in!</h3>;

  const { brands_following } = currentUser;
  return (
    <Row gutter={[20, 20]}>
      {(brands || []).map((idea: any) => {
        const {
          id,
          title,
          description,
          icon,
        } = idea || {};

        const brandFollowed = brands_following.find(({ brand_id }: any) => brand_id === id);
        const { reedeem_points_provided } = brandFollowed || {};

        const getRedeemButton = () => {
          if (!brandFollowed) {
            return (
              <Tooltip title="Follow brand to redeem points!">
                <Button type="primary" ghost disabled>Redeem</Button>
              </Tooltip>
            );
          }

          if (!reedeem_points_provided) {
            return (
              <Tooltip title="Brand have not provided any redeem points, please WAIT.">
                <Button type="primary" ghost disabled>No points!</Button>
              </Tooltip>
            );
          }

          return (
            <Button
              type="primary"
              ghost
              onClick={() => reedeemPoints(id)}
              disabled={!reedeem_points_provided}
            >
              Redeem
            </Button>
          );
        };

        return (
          <Col span={6} key={id}>
            <BrandCard
              hoverable
              cover={(
                <Image
                  alt="example"
                  src={icon || 'https://fakeimg.pl/250x160?text="No+Image'}
                  width={280}
                  height={150}
                  unoptimized
                />
              )}
              actions={[
                <Actions key="actions">
                  {/* @ts-expect-error antd 6 dropped the "danger" Button type; kept for parity */}
                  <Button type="danger" ghost disabled={brandFollowed} onClick={() => followBrand(id)}>
                    {brandFollowed ? 'Following' : 'Follow'}
                  </Button>
                  {getRedeemButton()}
                </Actions>,
              ]}
            >
              <Meta
                title={title}
                description={description}
              />
            </BrandCard>
          </Col>
        );
      })}
    </Row>
  );
};

const mapStateToProps = (state: any) => {
  const { currentUser, brands } = state.qiibee;
  return { currentUser, brands };
};

const mapDispatchToProps = {
  followBrand: followBrandFn,
  reedeemPoints: reedeemPointsFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
