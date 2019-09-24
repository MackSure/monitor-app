/*
 * @Author: ruzhan
 * @Date: 2019-09-24 14:10:44
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React, {Component} from 'react';
import {Modal} from 'antd';

class IModal extends Component {
    render () {
        return (
            <Modal
                title="详细信息"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleOk}
            >

            <p>{this.props.content}</p>    
            </Modal>
        );
    }
}

export default IModal;