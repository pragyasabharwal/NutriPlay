import "./Home.css";
import { useDataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "../context/AuthProvider";
import { LoginModal } from "../modal/LoginModal";
import { REACT_APP_BASE_URL } from "../../utils/server";

export function Home() {
  const [data, setData] = useState();
  const { login } = useAuth();
  const { setModal, modal } = useDataContext();

  console.log(REACT_APP_BASE_URL)

  useEffect(() => {
    (async function () {
      const res = await axios.get(
        `${REACT_APP_BASE_URL}/videos`
      );
      console.log(res);
      setData(res.data.videos);
    })();
  }, []);

  const { dispatch, state } = useDataContext();

  return (
    <>
      {modal && <LoginModal />}
      <div
        className="video-listing-1"
        style={
          state.displayNav
            ? { marginLeft: "-10em", transition: "350ms" }
            : { marginLeft: "unset", transition: "350ms" }
        }
      >
        {data ? (
          data?.map((item) => (
            <div className="video-style" key={item._id}>
              <Link to={`videos/${item._id}`}>
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
                    login
                      ? dispatch({ type: "ADD_TO_WATCH_LATER", payload: item })
                      : setModal(true);
                  }}
                >
                  Save to Watch Later
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="spinner">
            <ClipLoader color={"black"} size={50} />
          </div>
        )}
      </div>
      <footer></footer>
    </>
  );
}
