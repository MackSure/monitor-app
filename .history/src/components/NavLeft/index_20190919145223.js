/*
 * @Author: ruzhan
 * @Date: 2019-09-18 10:31:26
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {


  
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/icon/sharegoodsavatar.png" alt=""/>
                    <h1>Monitor</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
}