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
import React from "react";
import { getProfile } from "assets/web3/web3";

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { IPFS_URL } from "assets/js/constants";
import { useParams } from 'react-router-dom';

function Profile() {
  
  const [info, setInfo] = React.useState({});
  const [profileId, setProfileId] = React.useState(0);
 
  const routeParams = useParams();
  
  React.useState(() => {
    async function getInfo(){
      const {id} = routeParams;
      setProfileId(id);
      const profileInfo = await getProfile(id);
      console.log(profileInfo);
      setInfo(profileInfo);
    }
    getInfo();
  }, [routeParams])



  return (
    <>
      <PanelHeader
        size="sm"
        
      />
      <div className="content">
        <Row>
          <Col xs={12}>
            <img src={info.banner ? `${IPFS_URL}/${info.banner}` : ''} alt="banner" style={{height:300, width:'100vw'}} />
            <div className="text-center">
              <img src={info.avatar ? `${IPFS_URL}/${info.avatar}` : ''} alt="banner" style={{height:150, borderRadius: '50%', marginTop:'-5%'}} />
              <p className="bold" style={{fontSize:40}}>{info.profile.toUpperCase()}</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Profile;
