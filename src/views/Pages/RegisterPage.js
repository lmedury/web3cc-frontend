/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { registerProfile } from "assets/web3/web3";
import { uploadToIpfs } from "assets/web3/web3";
import ImageUpload from "components/CustomUpload/ImageUpload";
import PictureUpload from "components/CustomUpload/PictureUpload";
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Input,
  Button,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";


function RegisterPage() {
  const [tab, setTab] = React.useState(0);
  const [profileName, setProfileName] = React.useState('');
  const [activity, setActivity] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [imageSelected, setImageSelected] = React.useState(false);
  const [avatarSelected, setAvatarSelected] = React.useState(false);
  const [alert, setAlert] = React.useState(false);


  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);

  const confirmRegistration = async () => {
    const body = {
      "activity": activity,
      "about": about
    }
    let data = await uploadToIpfs(JSON.stringify(body));
    try{
      const register = await registerProfile(profileName, data.path, avatarSelected, imageSelected);
      setAlert(true);
    } catch (err) {

    } finally {
      window.location.href="/admin/home";
    }
    
  }
  return (
    <>
      <div className="content">
        {alert ? 
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Congratulations! You have successfully created your profile!"
          onConfirm={() => window.location.href="/admin/home"}
          confirmBtnBsStyle="info"
        >
          Click on OK to proceed to Home Page
      </SweetAlert> : <></> }
        <div className="register-page">
          <Container>
            <Row className="justify-content-center">
              
              <Col xs="12">
                <Card className="card-signup">
                   <Nav tabs>
                    <NavItem>
                      <NavLink
                        active={tab === 0 ? true : false}
                        href="#"
                        onClick={() => setTab(0)}
                      >
                        Basics
                      </NavLink>
                    </NavItem>
                    
                    <NavItem>
                      <NavLink active={tab === 1 ? true : false} href="#" onClick={() => setTab(1)}>
                        Profile
                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Sign Up</CardTitle>
                  </CardHeader>
                  <CardBody>
                    {tab === 0 ? 
                    <Form>
                        <Row>
                          <Col xs={12} md={{size:6, offset:3}}>
                            <Card>
                              <CardBody>
                                <p>Profile Name:</p>
                                <InputGroup
                                  
                                >
                                  <Input
                                    type="text"
                                    placeholder="Profile Name"
                                    onChange={(e) => setProfileName(e.target.value)}
                                  />
                                </InputGroup>

                                <p>What are you creating?</p>
                                <InputGroup
                                  
                                >
                                  <Input
                                    type="text"
                                    placeholder="What do you do?"
                                    onChange={(e) => setActivity(e.target.value)}
                                  />
                                </InputGroup>

                                <p>Description/About: </p>
                                <InputGroup
                                  
                                >
                                  <Input
                                    type="textarea"
                                    placeholder="About"
                                    onChange={(e) => setAbout(e.target.value)}
                                  />
                                </InputGroup>
                              </CardBody>
                            </Card>
                            <p style={{color:'red'}}>*This is a decentralized web3 project. Everything you mention here is public by default.</p>
                          </Col>
                        </Row>
                      
                    </Form> : <></> }

                    {tab === 1 ?
                      <Form>
                        <Row>
                          <Col xs={12} >
                            <p className="text-center">Select Avatar and Banner:</p>
                            <ImageUpload imageSelected={(value) => setImageSelected(value)} style={{width:'100%'}} />
                            {imageSelected ? 
                            <PictureUpload avatarSelected={(value) => setAvatarSelected(value)} style={{marginTop:'-5%'}} /> : <></> }
                          </Col>
                        </Row>
                        
                        
                      </Form> : <></>
                    }
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      color="primary"
                      size="lg"
                      className="btn-round"
                      href="#"
                      onClick={() => {
                        if(tab === 1) {
                          confirmRegistration();
                        } else if(tab === 0) {
                          setTab(1);
                        }
                      }}
                    >
                      {tab === 0 ? 'Continue' : 'Confirm'}
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      
    </>
  );
}

export default RegisterPage;
