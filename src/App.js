import "./App.css";
import { LikedVideos } from "./Components/LikedVideos";
import { Nav } from "./Components/Nav/Nav";
import { WatchLater } from "./Components/WatchLater/WatchLater";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { VideoPlay } from "./Components/VideoPlay/VideoPlay";
import { SavedVideos } from "./Components/SavedVideos";
import { History } from "./Components/History/History";
import { Library } from "./Components/Library/Library";
import { Playlist } from "./Components/Playlist/Playlist";
import { Login } from "./Components/Auth/Login/Login"
import { Signup } from "./Components/Auth/Signup/Signup";
import { PrivateRoute } from "./Components/Auth/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/watch-later" element={<WatchLater />} />
        <PrivateRoute path="/liked" element={<LikedVideos />} />
        <PrivateRoute path="/saved" element={<SavedVideos />} />
        <Route path="/videos/:videoId" element={<VideoPlay />} />
        <PrivateRoute path="/history" element={<History />} />
        <PrivateRoute path="/library" element={<Library />} />
        <Route path="/playlists/:name" element = {<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
