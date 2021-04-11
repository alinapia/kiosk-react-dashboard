
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCashRegister,
  faChartLine,
  faCheckDouble,
  faCloudUploadAlt, faEyeSlash,
  faPlus,
  faRocket,
  faTasks,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import {PageVisitsTable, RecentOrdersTable} from "../../components/Tables";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" /> 작업
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCheckDouble} className="text-success me-2" style={{width: 20}} />주문 접수
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faEyeSlash} className="text-danger me-2" style={{width: 20}} />주문 취소
            </Dropdown.Item>
            {/*<Dropdown.Divider />*/}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row>
        <Col xs={12} className="mb-4">
          <RecentOrdersTable />
        </Col>
      </Row>
    </>
  );
};
