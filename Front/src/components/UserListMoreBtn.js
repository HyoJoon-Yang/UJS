import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserListMoreBtn() {
  return (
    <Accordion flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header>+ 더보기</Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col sm={4}>
                        분석 영상 출력 부분
                    </Col>
                    <Col sm={8}>분석 결과 텍스트 출력 부분</Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    
    );
}

export default UserListMoreBtn;
