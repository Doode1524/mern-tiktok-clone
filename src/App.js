import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      <div className="app__videos">
        <Video
          url="https://v39-us.tiktokcdn.com/e4436aac7fe06330b94b6f8d7881bfc5/60ce9599/video/tos/useast2a/tos-useast2a-ve-0068c004/363eee73ec9d4a7f8a015ce35c6c835a/?a=1233&br=1516&bt=758&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202106191910390101902080132C31BC71&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzM1d2pwcm1yNTMzNzczM0ApNTc6NDhmO2U0NzdpaWVkOmdzMHMtYzRoMHBgLS1kMTZzc2MuYF9fLzIwLTY1LjVfYzA6Yw%3D%3D&vl=&vr="
          channel="joey"
          description="Sick ass Tik-Tok clone"
          song="Sir Psycho Sexy"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url="https://v39-us.tiktokcdn.com/e4436aac7fe06330b94b6f8d7881bfc5/60ce9599/video/tos/useast2a/tos-useast2a-ve-0068c004/363eee73ec9d4a7f8a015ce35c6c835a/?a=1233&br=1516&bt=758&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202106191910390101902080132C31BC71&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzM1d2pwcm1yNTMzNzczM0ApNTc6NDhmO2U0NzdpaWVkOmdzMHMtYzRoMHBgLS1kMTZzc2MuYF9fLzIwLTY1LjVfYzA6Yw%3D%3D&vl=&vr="
          channel="joey"
          description="Sick ass Tik-Tok clone"
          song="Sir Psycho Sexy"
          likes={123}
          messages={456}
          shares={789}
        />
      </div>
    </div>
  );
}

export default App;
