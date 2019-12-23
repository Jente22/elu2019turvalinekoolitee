import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

import Sissejuhatus from './Sissejuhatus'
import Aruanne from './Aruanne'
import Kavand from './Kavand'
import Kulg from './Kulg'
import Kokkuvote from './Kokkuvote'
import Allikad from './Allikad'
import Vastused from './Vastused'

export default function App() {
  return <Container className="mt-3" style={{background: 'rgba(255, 255, 255, 0.9' }}>
    <Row>
      <Col>
        <Tabs>
          <Tab eventKey="1" title="Sissejuhatus"><Sissejuhatus /></Tab>
          <Tab eventKey="3" title="Kavand"><Kavand /></Tab>
          <Tab eventKey="2" title="Aruanne"><Aruanne /></Tab>
          <Tab eventKey="4" title="Kulg"><Kulg /></Tab>
          <Tab eventKey="10" title="Laste vastused"><Vastused type="lapsed" /></Tab>
          <Tab eventKey="11" title="Vanemate vastused"><Vastused type="vanemad" /></Tab>
          <Tab eventKey="5" title="Analüüs" >Analüüs</Tab>
          <Tab eventKey="6" title="Hinnang" >Hinnang</Tab>
          <Tab eventKey="7" title="Kokkuvõte" ><Kokkuvote /></Tab>
          <Tab eventKey="8" title="Allikad" ><Allikad /></Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>
}