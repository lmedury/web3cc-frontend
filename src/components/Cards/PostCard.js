import React from "react";

import {Row, Col, Card, CardBody, Input, InputGroup, Button} from 'reactstrap';
import { data } from "assets/data/comments";

export default function PostCard(props) {

    const [likes, setLikes] = React.useState(props.likes ?? 3);
    const [liked, setLiked] = React.useState(false);
    const [comments, setComments] = React.useState(props.comments ? props.comments : data);
    const [comment, setComment] = React.useState('');

    const like = () => {
        setLiked(!liked);
        if(liked) {
            setLikes(likes-1);
            return;
        }
        setLikes(likes+1);
    }

    const postComment = () => {
        const currentComments = [...comments];
        const newComment = {
            comment: comment,
            postedby: "@Lalith",
            avatar: currentComments[0].avatar
        }
        currentComments.unshift(newComment);
        setComments(currentComments);
    }

    return(
        
        <Row className="fade-in">
            <Col xs={{size:6, offset:3}}>
                <Card>
                    <CardBody>
                        <img src={props.avatar} style={{borderRadius:'50%', width:60}} />
                        <span className="space-apart bold">
                            {props.profile}
                            <span className="space-apart text-muted">0xe42D...</span>
                        </span>
                        <div className="space-top">
                            <p>{props.text ? props.text : 'I do not think web3 is overrated! True, there sometimes is a lack of infrastructure but the centralized alternatives are worse.'}</p>
                        </div>
                        <div className="space-top">
                            <img src={props.banner} />
                        </div>
                        <Row className="space-top">
                            <Col xs={6} className="text-left">
                                <i className="now-ui-icons ui-2_favourite-28 pointer" onClick={() => like()} style={{fontSize:16, color: liked ? 'red' : ''}} />
                                <span className="text-muted" style={{fontSize:20, marginLeft:'1%'}}>{likes}</span>
                            </Col>
                        </Row>
                        <Row className="space-top">
                            <Col xs={12}>
                                <p>Your comment:</p>
                                <InputGroup
                                  style={{border: '1px solid grey', borderRadius:10}}
                                >
                                  <Input
                                    type="textarea"
                                    placeholder="Post...."
                                    onChange={(e) => setComment(e.target.value)}
                                    
                                  />
                                </InputGroup>
                            </Col>
                            <Col xs={12} className="text-right">
                                <Button onClick={() => postComment()} color="warning">COMMENT</Button>
                            </Col>
                        </Row>

                        <Row className="space-top">
                            <Col xs={12}>
                                <p>Comments:</p>
                                {comments.map(comment => 
                                    <div>
                                        <img src={comment.avatar} style={{borderRadius:'50%', width:60}} />
                                        <span className="space-apart bold">
                                            {comment.postedby}
                                        </span>
                                        <p className="space-top">{comment.comment}</p>
                                    </div>
                                
                                )}
                                
                            </Col>
                            
                        </Row>
                        
                    </CardBody>
                    
                </Card>
            </Col>
        </Row>
       
    )
}