import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

import Sissejuhatus from './Sissejuhatus'
import Aruanne from './Aruanne'
import Kava from './Kava'
import Kokkuvote from './Kokkuvote'
import Allikad from './Allikad'
import Vastused from './Vastused'
import Analuus from './Analuus'

export default function App() {
  return <Container className="my-3" style={{background: 'rgba(255, 255, 255, 0.9' }}>
    <Row>
      <Col>
        <Tabs className="pt-3">
          <Tab eventKey="1" title="Sissejuhatus"><Sissejuhatus /></Tab>
          <Tab eventKey="3" title="Kava ja kulg"><Kava /></Tab>
          <Tab eventKey="2" title="Aruanne"><Aruanne /></Tab>
          <Tab eventKey="10" title="Laste vastused"><Vastused type="lapsed" /></Tab>
          <Tab eventKey="11" title="Vanemate vastused"><Vastused type="vanemad" /></Tab>
          <Tab eventKey="5" title="Analüüs" ><Analuus /></Tab>
          <Tab eventKey="6" title="Hinnang" >Hinnang</Tab>
          <Tab eventKey="7" title="Kokkuvõte" ><Kokkuvote /></Tab>
          <Tab eventKey="8" title="Allikad" ><Allikad /></Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>
}