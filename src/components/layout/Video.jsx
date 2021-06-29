import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';


class Video extends React.Component {


    render() {
      return (
        <OTSession 
        apiKey="47258574" 
        sessionId="2_MX40NzI1ODU3NH5-MTYyNDg5NDk3ODM2N356dHFyczV2dk9Pdml2K2ZSL2dzU2JDelJ-UH4" 
        token="T1==cGFydG5lcl9pZD00NzI1ODU3NCZzaWc9N2MwMTYwNGQwYWU0ZTViNDhiZDk3M2I1M2UzOWU2Yzg5ZDllZDBlZjpzZXNzaW9uX2lkPTJfTVg0ME56STFPRFUzTkg1LU1UWXlORGc1TkRrM09ETTJOMzU2ZEhGeWN6VjJkazlQZG1sMksyWlNMMmR6VTJKRGVsSi1VSDQmY3JlYXRlX3RpbWU9MTYyNDg5NDk4MiZub25jZT0wLjAzODQxOTE5MTIwODQ1OTcxJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MjQ5ODEzODImaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0="
        >
          <OTPublisher />
          <OTStreams>
            <OTSubscriber />
          </OTStreams>
        </OTSession>
      );
    }
  }

export default Video;

// class Video extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             session: OT.initSession(this.props.apiKey, this.props.sessionId),
//             publisher: OT.initPublisher('publisher')

//         }
//     }

//     videoLoad() {
//         // Attach event handlers
//         session.on({

//         // This function runs when session.connect() asynchronously completes
//         sessionConnected: function () {
//         // Publish the publisher we initialzed earlier (this will trigger 'streamCreated' on other
//         // clients)
//         session.publish(publisher);
//         },
  
//         // This function runs when another client publishes a stream (eg. session.publish())
//         streamCreated: function (event) {
//         session.subscribe(event.stream, 'subscribers', { insertMode: 'append' });
//         }
  
//         });
//     }

// }

// const Video = () => {
//     //


// }