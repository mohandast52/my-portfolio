/* eslint-disable camelcase */
import { connect } from 'react-redux';
import {
  Button,
  Card, Col, Tag, Row,
} from 'antd';
import PropTypes from 'prop-types';
import { Actions } from './styles';

const { Meta } = Card;

const Brands = props => {
  const { brands } = props;

  return (
    <Row gutter={[20, 20]}>
      {(brands || []).map(idea => {
        const {
          id,
          title,
          description,
          tags,
          icon,
        } = idea || {};

        return (
          <Col span={8} key={id}>
            <Card
              hoverable
              cover={(
                <img
                  alt="example"
                  src={icon || 'https://fakeimg.pl/250x160'}
                />
              )}
              actions={[
                <Actions>
                  <Button type="primary" ghost>Follow</Button>
                </Actions>,
              ]}
            >
              <Meta
                title={title}
                description={description}
              />
              {tags.map(tag => <Tag key={`${id}-${tag}`} color="blue">{tag}</Tag>)}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

Brands.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape({})),
};

Brands.defaultProps = {
  brands: [],
};

const mapStateToProps = state => {
  const { brands } = state.qiibee;
  return { brands };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
