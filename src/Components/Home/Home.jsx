import "./Home.css";
import { data } from "../Data";
import { useDataContext } from "../../Context/context";
import { Link } from "react-router-dom";

export function Home() {
  const { dispatch, state } = useDataContext();

  return (
    <>
      <div
        className="video-listing-1"
        style={
          state.displayNav
            ? { marginLeft: "-10em", transition: "350ms" }
            : { marginLeft: "unset", transition: "350ms" }
        }
      >
        {data.map((item) => (
          <div className="video-style" key={item.id}>
            <Link to={`videos/${item.id}`}>
              <div className="videos">
                <img
                  src={item.thumbnail}
                  className="thumbnail"
                  onClick={() => dispatch({ type: "TOGGLE_NAV_2" })}
                ></img>
              </div>
            </Link>
            <div className="details">
              <div className="row">
                <img src={item.img} className="img-round"></img>
                <div className="channel-details">
                  <span className="title video-name">{item.name}</span>
                  <span className="title gray padding-9">
                    {item.channelName}
                  </span>
                  <span className="title gray last-row">
                    {item.views} <span className="circle">.</span> {item.date}
                  </span>
                </div>
              </div>
              <span
                className="ellipsis"
                onClick={() =>
                  dispatch({ type: "TOGGLE_ACTIONS", payload: item })
                }
              >
                <i class="fas fa-ellipsis-v"></i>
              </span>
            </div>
            <div
              className="cta"
              style={
                state.flag.includes(item)
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              <span
                onClick={() => {
                  dispatch({ type: "ADD_TO_WATCH_LATER", payload: item });
                }}
              >
                Save to Watch Later
              </span>
            </div>
          </div>
        ))}
      </div>
      <footer></footer>
    </>
  );
}
