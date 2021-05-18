import { data } from "../Data";
import YouTube from "react-youtube";
import "./VideoPlay.css";
import { useDataContext } from "../../Context/context";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";

export function VideoPlay() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const { dispatch, state } = useDataContext();
  const navigate = useNavigate();
  let { videoId } = useParams();
  return data.map((item) => {
    if (item.id === videoId) {
      return (
        <div>
          <div>
            <YouTube
              onPlay={() => dispatch({ type: `ADD_TO_HISTORY`, payload: item })}
              videoId={item.id}
              className={state.displayNav ? "video-nav-hidden" : "video"}
            ></YouTube>
            <div
              className={
                state.displayModal
                  ? "channel-details-1"
                  : "channel-details-hidden"
              }
            >
              <span className="col">
                <h2 className="title video-name">{item.name}</h2>
                <span className="title gray last-row inc">
                  {item.views} <span className="circle">.</span> {item.date}
                </span>
              </span>
              <span className="like">
                <span>
                  <i
                    className="fas fa-thumbs-up like padding-1"
                    onClick={() =>
                      dispatch({ type: "TOGGLE_LIKE", payload: item })
                    }
                    style={state.liked.includes(item) ? { color: "red" } : null}
                  ></i>
                </span>
                <span>
                  <i
                    className="fas fa-bookmark save"
                    onClick={() =>
                      dispatch({ type: "TOGGLE_SAVE", payload: item })
                    }
                    style={state.saved.includes(item) ? { color: "red" } : null}
                  ></i>
                </span>
                <span
                  className="playlist"
                  onClick={() => dispatch({ type: "SHOW_MODAL" })}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      pointerEvents: "none",
                      width: "1.5em",
                      height: "1.5em",
                    }}
                  >
                    <g class="style-scope yt-icon">
                      <path
                        d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
                        class="style-scope yt-icon"
                      ></path>
                    </g>
                  </svg>
                </span>
              </span>
              {state.displayModal && <PlaylistModal item={item} />}
            </div>
          </div>
          <div className="relative">
            <div className="v">
              {data.map((items) => {
                if (items.id !== item.id) {
                  return (
                    <div className="video-style-1">
                      <div className="videos">
                        <img
                          src={items.thumbnail}
                          className="thumbnail"
                          onClick={() =>
                            navigate(`/videos/${items.id}`, { replace: true })
                          }
                        ></img>
                      </div>
                      <div className="details-1">
                        <div className="row">
                          <div className="channel-details">
                            <span className="title video-name">
                              {items.name}
                            </span>
                            <span className="title gray padding-9">
                              {items.channelName}
                            </span>
                            <span className="title gray last-row">
                              {items.views} <span className="circle">.</span>{" "}
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}{" "}
            </div>
          </div>
        </div>
      );
    }
  });
}
