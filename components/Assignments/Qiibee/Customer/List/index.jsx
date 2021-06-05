/* eslint-disable camelcase */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Row, Tooltip,
} from 'antd';
import {
  followBrand as followBrandFn,
  reedeemPoints as reedeemPointsFn,
} from 'store/qiibee/actions';
import { Actions, BrandCard } from './styles';

const { Meta } = Card;

const Brands = props => {
  const {
    currentUser, brands, followBrand, reedeemPoints,
  } = props;

  if (!currentUser) return <h3>Please log in!</h3>;

  const { brands_following } = currentUser;

  return (
    <Row gutter={[20, 20]}>
      {(brands || []).map(idea => {
        const {
          id,
          title,
          description,
          icon,
        } = idea || {};

        const brandFollowed = brands_following.find(({ brand_id }) => brand_id === id);
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
                <img
                  alt="example"
                  src={icon || 'https://fakeimg.pl/250x160?text="No+Image'}
                />
              )}
              actions={[
                <Actions>
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

Brands.propTypes = {
  currentUser: PropTypes.shape({
    brands_following: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  brands: PropTypes.arrayOf(PropTypes.shape({})),
  followBrand: PropTypes.func,
  reedeemPoints: PropTypes.func,
};

Brands.defaultProps = {
  currentUser: null,
  brands: [],
  followBrand: () => { },
  reedeemPoints: () => { },
};

const mapStateToProps = state => {
  const { currentUser, brands } = state.qiibee;
  return { currentUser, brands };
};

const mapDispatchToProps = {
  followBrand: followBrandFn,
  reedeemPoints: reedeemPointsFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
