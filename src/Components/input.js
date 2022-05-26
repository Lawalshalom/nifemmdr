import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

/**
 * @param {String} width
 * @param {String} value
 * @param {String} placeholder
 * @param {Function} onGetTextValue
 * @param {String} type
 * @param {String} name
 */

export const Style = styled.div`
  width: ${props=>props.width};
  margin-bottom: 24.31px;
  .custom {
    width: 100%;
    height: 55.81px;
  }
`

export default class InputBox extends Component {
  static propTypes = {
    width: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onGetTextValue: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string
  }
  _onChangeInput = e => {
    const value = e.target.value;
    const key = e.target.name;
    const { onGetTextValue } = this.props;
    onGetTextValue(value,key);
  }
  render() {
      const { name,placeholder,value,width,type,maxLength } = this.props;
      return (
          <Style width={width}>
              {type === "text" ? 
              <Input 
                size="large" 
                placeholder={placeholder} 
                name={name} 
                value={value} 
                maxLength={maxLength}
                onChange={this._onChangeInput}
              /> : null }
              {type === "password" ? 
              <Input.Password 
                size="large" 
                placeholder={placeholder} 
                name={name} 
                value={value} 
                onChange={this._onChangeInput}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              /> : null }
          </Style>
      )
  }
}

InputBox.defaultProps = {
  placeholder: "Test Label",
  type: "text",
  onGetTextValue: ()=>{},
  width: "100%"
}
