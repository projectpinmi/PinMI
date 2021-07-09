import React, {useState, useEffect} from 'react';
import VideoChatComponent from "../VideoChatComponent.js";
import { useReactMediaRecorder } from "react-media-recorder";
import firebases from 'firebase/app'
import 'firebase/storage';


// import { storage } from "firebase/storage";

// firebase hook
import { firebase } from "../../hooks/firebase";
// import firebase from 'firebase/app'

// context
import { useSessionValue } from "../../context";


// const firebaseConfig = {
//     apiKey: "AIzaSyAgrCEFA0mP0VHZApA774OWYF-ydZka6aY",
//     authDomain: "fbtest-fd449.firebaseapp.com",
//     projectId: "fbtest-fd449",
//     storageBucket: "fbtest-fd449.appspot.com",
//     messagingSenderId: "1030894182264",
//     appId: "1:1030894182264:web:da9a1dda8ef31ac3be328d",
//     measurementId: "G-CXQ9YE9HPS"
//   };
// firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
console.log("storage:", storage);

const PracticeSession = () => {
    //video call state
    const [room, setRoom] = useState("hello");
    const [baseURL, setBaseURL] = useState('https://pinmi-test.herokuapp.com/room/' + room);
    const [apiKey, setApiKey] = useState("YOUR_API_KEY");
    const [sessionId, setSessionId] = useState("YOUR_SESSION_ID");
    const [token, setToken] = useState("YOUR_TOKEN");

    //audio rec state
    const {status, startRecording, stopRecording, mediaBlobUrl,} 
    =useReactMediaRecorder({ video: false, audio: true });

    const {setMediaUrl: setMediaBlobUrl} = useSessionValue();
    setMediaBlobUrl(mediaBlobUrl);

    console.log("mediaBlob context", mediaBlobUrl);

    return (  
        <div>
            <h1> Practice Session </h1>
            <button onClick = 
            {() => {fetchServerRes(setApiKey, setSessionId, setToken, baseURL)}}
            >Click me for a new session token</button>
            <h1>apiKeys: {apiKey}</h1>
            <h1>sessionId: {sessionId}</h1>
            <h1>token: {token}</h1>
            <h1>mediaBlob: {mediaBlobUrl}</h1>
            <br></br>
            {/* <button onClick = 
            {() => {handleUpload("uploadedFiles", file)}}
            >Upload Blob</button> */}
            {/* <h1>mediablob: {file}</h1> */}
            {/* <RecordView /> */}
            <VideoChatComponent 
            apiKey = {apiKey} 
            sessionId = {sessionId} 
            token = {token} 
            startRec = {startRecording} 
            stopRec = {stopRecording}/>
        </div>
    );
}


const RecordView = () => {
    const {
      status,
      startRecording,
      stopRecording,
      mediaBlobUrl,
    } = useReactMediaRecorder({ video: false, audio: true });
    const {setMediaUrl: setMediaBlobUrl} = useSessionValue();
    var stoppedFlag = ((status === "stopped")? true : null);

    useEffect(() => {
        setMediaBlobUrl(mediaBlobUrl);
      }, [stoppedFlag]);
    //setMediaBlobUrl(mediaBlobUrl);
    // // let blob = null;
    // // useEffect(() => {
    // //     blob = fetch(mediaBlobUrl).then(r => r.blob());
    // //     props.setFile(blob);
    // //     console.log("setBlob babeeeeey")
    // //   }, [stoppedFlag]);

   
    return (
      <div>
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
        <video src={mediaBlobUrl} controls autoPlay loop />
      </div>
    );
  };

const fetchServerRes = (setApiKey, setSessionId, setToken, baseURL) => {
    fetch(baseURL).then(function(res) {
        return res.json()
      }).then(function(res) {
        setApiKey(res.apiKey);
        setSessionId(res.sessionId);
        setToken(res.token);
        //initializeSession();
      }).catch((error) => {console.log(error)});
}

const handleUpload = (path, file) => {
    if (file){//file is the file that you want to upload (maybe could be a objectURL)
      var f = file.name
      //firebase.storage() is how you access google cloud storage. 
      //here we are creating a storage reference in the data bucket. 
      //This is where the object will be saved
      var fileRef = storage.ref(`${path}/${f}`); 
      console.log(`handle ${path}/${f}`)
      fileRef.put(file).then((snapshot) => {
           console.log('Uploaded a file!');
          });
    }
    else {
      console.log("Nothing to upload!")
    }
  }

export default PracticeSession;