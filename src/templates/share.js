import React from 'react';
import {ShareStyle} from "../styles/styles"
import {
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    RedditShareButton,
    RedditIcon,
  } from "react-share";

const Share = props => {
    return(
        <ShareStyle>
        <EmailShareButton url={props.url}>
          <EmailIcon size={32} round={true}/>
        </EmailShareButton>
        <TwitterShareButton url={props.url}>
          <TwitterIcon size={32} round={true}/>
        </TwitterShareButton>
        <FacebookShareButton url={props.url}>
          <FacebookIcon size={32} round={true}/>
        </FacebookShareButton>
        <WhatsappShareButton url={props.url}>
          <WhatsappIcon size={32} round={true}/>
        </WhatsappShareButton>
        <FacebookMessengerShareButton url={props.url}>
          <FacebookMessengerIcon size={32} round={true}/>
        </FacebookMessengerShareButton>
        <RedditShareButton url={props.url}>
          <RedditIcon size={32} round={true}/>
        </RedditShareButton>
        </ShareStyle>
    )
}

export default Share