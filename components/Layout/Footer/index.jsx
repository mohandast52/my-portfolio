import {
  Container, Row, Parent, Col, Input, Rotate,
} from './styles';

const Footer = () => (
  <Container>
    <Parent>
      <Row>
        <Col>
          <div>Got a project? Let’s chat…</div>
          <div>+91 8898162324</div>
        </Col>

        <Col>
          <div>Got a project? Let’s chat…</div>
          <div>+91 8898162324</div>
        </Col>

        <Col>
          <Rotate>&lt; 💅 &gt;</Rotate>
          <Input placeholder="A bigger text input" size="1rem" />
          <div>Got a project? Let’s chat…</div>
          <div>+91 8898162324</div>
        </Col>
      </Row>
    </Parent>
  </Container>
);

export default Footer;
