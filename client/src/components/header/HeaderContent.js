import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { menuShow } from "../../configurations/Config";
import { connect } from "react-redux";
import Switch from "../switch";
import { toggleMode } from "../../actions/App";
import { Row, Col } from "antd";
import { HeaderLogo } from "../../configurations/Config";
import { FiBell, FiMail, FiGrid, FiUsers, FiMessageSquare, FiFlag } from "react-icons/fi";
import PopoverWrapper from "../popover/index";
import MenuWrapper from "../menu";
import Badge from "../badge/index";
import Avatar from "../avatar/index";
import Icon from "../Icon/index";
import Button from "../button/index";

class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
  }
  notifications = () => {
    return (
      <React.Fragment>
        <Row
          type="flex"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
          justify="space-between"
          style={{width:"200px"}}
        >
         <Col span={24}>
         <Col span={4}><Icon type={"user-add"}></Icon></Col>
         <Col span={20}><Link to ="/"><p>New Users</p></Link></Col>
         </Col>
         <Col span={24}>
         <Col span={4}><Icon type={"user-delete"}></Icon></Col>
         <Col span={20}><Link to ="/"><p>Users Deleted</p></Link></Col>
         </Col>
         <Col span={24}>
         <Col span={4}><Icon type={"line-chart"}></Icon></Col>
         <Col span={20}><Link to ="/"><p>Sales Report</p></Link></Col>
         </Col>
         <Col span={24}>
         <Col span={4}><Icon type={"idcard"}></Icon></Col>
         <Col span={20}><Link to ="/"><p>New Client</p></Link></Col>
         </Col>
        </Row>
      </React.Fragment>
    );
  };
  messages = () => {
    return (
      <React.Fragment>
        <p>Messages Loading...</p>
      </React.Fragment>
    );
  };
  account = () => {
    return (
      <React.Fragment>
        <p>Account Loading...</p>
      </React.Fragment>
    );
  };
  render() {
    return (
      <div>
        <Row type="flex" align="middle">
          <Col span={2}>
            <div className="logo">
              <HeaderLogo />
            </div>
          </Col>
          {/* <Col span={2}>
            {menuShow.leftMenu === true ? (
              <Button
                type="primary"
                onClick={() => this.props.toggleCollapsed("collapsedLeft")}
                style={{ marginBottom: 16, zIndex: 10 }}
              >
                <Icon
                  type={
                    this.props.state.collapsedLeft ? "menu-unfold" : "menu-fold"
                  }
                />
              </Button>
            ) : null}
          </Col> */}
          <Col span={18}>
            <MenuWrapper
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              //style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/">
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FiGrid style={{ fontSize: "1.4rem" }} />&nbsp;&nbsp;Dashboard
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/users">
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FiUsers style={{ fontSize: "1.4rem" }} />&nbsp;&nbsp;Users
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/messages">
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FiMessageSquare style={{ fontSize: "1.4rem" }} />&nbsp;&nbsp;Messages</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/flaggedprofiles"><span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FiFlag style={{ fontSize: "1.4rem" }} />&nbsp;&nbsp;Flagged Profiles
                  </span>
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="5">
                <Link to="/settings"><FiGrid />&nbsp;&nbsp;Settings</Link>
              </Menu.Item> */}
            </MenuWrapper>
          </Col>

          {/* <Col span={4}>
            <span>
              Switch Theme
                  <Switch
                onChange={() => {
                  this.props.dispatch(toggleMode());
                }}
                style={{ marginLeft: 10 }}
                defaultChecked={true}
              ></Switch>
            </span>
          </Col> */}

          <Col style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} span={4}>
              
                {/* <Badge count={10} style={{ color: "white" }}>
                  <PopoverWrapper
                    title={"Notifications"}
                    content={this.notifications()}
                  >
                    <FiBell
                      className="headerIcon"
                      style={{
                        width: "24px",
                        height: "24px"
                      }}
                    />
                  </PopoverWrapper>
                </Badge>
              
              
                <Badge count={5} style={{ color: "white" }}>
                  <PopoverWrapper title={"Messages"} content={this.messages()}>
                    <FiMail
                      className="headerIcon"
                      style={{
                        width: "24px",
                        height: "24px"
                      }}
                    />
                  </PopoverWrapper>
                </Badge> */}
              
                {/* <span style={{ marginRight: 12 }}>
                  Switch Theme
                      <Switch
                    onChange={() => {
                      this.props.dispatch(toggleMode());
                    }}
                    style={{ marginLeft: 10 }}
                    defaultChecked={true}
                  ></Switch>
                </span> */}

                <Badge dot style={{ color: "white" }}>
                  <PopoverWrapper title={"Account"} content={this.account()}>
                    <Avatar
                      shape="circle"
                      size="40px"
                      icon="user"
                      style={{ color: "white" }}
                    />
                  </PopoverWrapper>
                </Badge>
              
              
                {menuShow.rightMenu === true ? (
                  <Button
                    type="primary"
                    onClick={() => this.props.toggleCollapsed("collapsedRight")}
                    style={{ zIndex: 10 }}
                  >
                    <Icon
                      type={
                        this.props.state.collapsedRight
                          ? "menu-fold"
                          : "menu-unfold"
                      }
                    />
                  </Button>
                ) : null}
              
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null)(HeaderContent);
