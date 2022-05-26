import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Button } from 'antd';

/**
 * @param {String} text
 * @param {String} type
 * @param {String} htmlType
 * @param {Boolean} loading
 * @param {Function} onGetTextValue
 */

export const Style = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export default class ButtonBox extends Component {
  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    htmlType: PropTypes.string,
    loading: PropTypes.bool,
    onAction: PropTypes.func
  }
  render() {
      const { text,onAction,type,loading,htmlType } = this.props;
      return (
          <Style>
              <Button
                onClick={onAction} 
                type={type} 
                size="large" 
                block 
                htmlType={htmlType}
                loading={loading}
              >
                {text}
              </Button>
          </Style>
      )
  }
}

ButtonBox.defaultProps = {
  text: "Test button",
  type: "primary",
  loading: false,
  onAction: ()=>{}
}
