/*
 * @Author: ruzhan
 * @Date: 2019-09-19 13:54:19
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React, {Component} from 'react'
import { Row,Col } from 'antd';
import './style/common.less';

import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';

class Admin extends Component {
    render () {
        return (
            <Row className="container">
                <Col  span={4} className="nav-left">
                <NavLeft/>
                </Col>
                <Col span={20} className="main">
                    <Header/>
                    <Row className="content">
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}

export default Admin;