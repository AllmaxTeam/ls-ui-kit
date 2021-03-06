import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { Row, Col } from 'antd';

class Basic extends Component {
  state = {
    dataSource: []
  };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic Usage</h3>
        <Row>
          <Col md={12} lg={6}>
            <AutoComplete
              dataSource={this.state.dataSource}
              style={{ width: '100%' }}
              onSearch={this.handleSearch}
              placeholder="input here"
            />
          </Col>
        </Row>
      </section>
    );
  }

  handleSearch = value => this.setState({ dataSource: !value ?
      [] :
      [
        value,
        value + value,
        value + value + value,
      ],
    });
}
 
export default Basic;