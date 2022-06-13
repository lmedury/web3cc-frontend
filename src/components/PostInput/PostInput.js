import { IPFS_URL } from "assets/js/constants";
import PostCard from "components/Cards/PostCard";
import ImageUpload from "components/CustomUpload/ImageUpload";
import PictureUpload from "components/CustomUpload/PictureUpload";
import React from "react";

import {Row, Col, Card, CardBody, Input, InputGroup, Button} from 'reactstrap';

export default function PostInput(props) {

    const [openEditor, setOpenEditor] = React.useState(false);
    const [typeOfPost, setTypeOfPost] = React.useState(0);
    const [imageSelected, setImageSelected] = React.useState('');
    const [showImage, setShowImage] = React.useState(false);
    const [postText, setPostText] = React.useState('');
    const [posted, setPosted] = React.useState(false);
    

    const post = (type) => {
        setTypeOfPost(type);
        setOpenEditor(true);
    }

    const confirmPost = () => {
        setPosted(true);
    }

    return(
        <Row>
            {false ?
            <Col xs={12} md={{size:6, offset: openEditor ? 0 : 3}}>
                <Card>
                    <CardBody>
                        <Row style={{padding:20}}>
                            <Col xs={4} style={{border: '1px solid black', padding:30}} onClick={() => post(0)} className="text-center">
                                <i className="now-ui-icons text_caps-small" style={{fontSize:120}} />
                                <p>TEXT</p>
                            </Col>
                            <Col xs={4} style={{border: '1px solid black', padding:30}} onClick={() => post(1)} className="text-center">
                                <i className="now-ui-icons media-1_camera-compact" onClick={() => setShowImage(true)} style={{fontSize:120}} />
                                <p>IMAGE</p>
                            </Col>
                            <Col xs={4} style={{border: '1px solid black', padding:30}} onClick={() => post(2)} className="text-center">
                                <i className="now-ui-icons media-1_button-play" style={{fontSize:120}} />
                                <p>VIDEO</p>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col> : <></> }

            
            <Col xs={12} md={{size:6, offset:3}}>
                <Card>
                    <CardBody>
                        <img src={props.avatar} style={{borderRadius:'50%', width:60}} />
                        <span className="space-apart bold">
                            {props.profile}
                            <span className="space-apart text-muted">0xe42D...</span>
                        </span>
                        
                        <Row>
                            <Col xs={12}>
                                <InputGroup
                                  style={{border: '1px solid grey', marginTop:'3%', borderRadius:10}}
                                >
                                  <Input
                                    type="textarea"
                                    placeholder="Post...."
                                    onChange={(e) => setPostText(e.target.value)}
                                  />
                                </InputGroup>
                            </Col>
                            {showImage ?
                            <Col xs={12}>
                                <ImageUpload imageSelected={(e) => setImageSelected(e)} style={{width:'100%'}} />
                            </Col> : <></> }
                            <Col xs={12}>
                                <Row>
                                    <Col xs={9} style={{textAlign:'left', marginTop:'3%'}}>
                                        <i className="now-ui-icons media-1_camera-compact pointer" onClick={() => setShowImage(true)} style={{fontSize:30}} />
                                        <i className="now-ui-icons media-1_button-play space-apart pointer" style={{fontSize:30}} />
                                    </Col>
                                    <Col xs={3} style={{textAlign:'right', marginTop:'1.5%'}}>
                                        <Button onClick={() => confirmPost()} color="warning">POST</Button>
                                    </Col>
                                </Row>
                               
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                
            </Col> 
            {posted ? 
            <Col xs={12}>
                <PostCard profile={props.profile} avatar={props.avatar} text={postText} banner={`${IPFS_URL}/${imageSelected}`} likes={0} comments={[]} />
            </Col> : <></> }
        </Row>
        
    )
}