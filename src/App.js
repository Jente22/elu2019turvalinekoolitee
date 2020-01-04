import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

import FromMarkdown from './FromMarkdown'
import Kava from './Kava'
import Allikad from './Allikad'
import Vastused from './Vastused'
import Analuus from './Analuus'

export default function App() {
  return <Container className="my-3" style={{ background: 'rgba(255, 255, 255, 0.9' }}>
    <Row>
      <Col>
        <Tabs className="my-3">
          <Tab eventKey="1" title="Sissejuhatus"><FromMarkdown name="sissejuhatus" /></Tab>
          <Tab eventKey="2" title="Kava ja kulg"><Kava /></Tab>
          <Tab eventKey="3" title="Aruanne"><FromMarkdown name="aruanne" /></Tab>
          <Tab eventKey="4" title="Laste vastused"><Vastused type="lapsed" /></Tab>
          <Tab eventKey="5" title="Vanemate vastused"><Vastused type="vanemad" /></Tab>
          <Tab eventKey="6" title="Analüüs" ><Analuus /></Tab>
          <Tab eventKey="7" title="Kokkuvõte" ><FromMarkdown name="kokkuvote" /></Tab>
          <Tab eventKey="8" title="Allikad" ><Allikad /></Tab>
          <Tab eventKey="9" title="Reflektsioonid" ><FromMarkdown name="reflektsioonid" /></Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>
}