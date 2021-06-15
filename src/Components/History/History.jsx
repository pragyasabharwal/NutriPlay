import { useDataContext } from "../context/DataContext";
import YouTube from "react-youtube";
import "./History.css";

export function History() {
  const { state, dispatch } = useDataContext();

  return (
    <div className="grid-history">
      <div className="g">
        <span className="title-history"> History </span>
        <div className="history">
          {state.history.map((item) => (
            <div>
              <YouTube videoId={item.id} className="videos-history" />
            </div>
          ))}
        </div>
      </div>
      <div className="d">
        <span onClick={() => dispatch({ type: "CLEAR_HISTORY" })}>
          <i class="fas fa-trash"></i>
          Clear all Watch History
        </span>
      </div>
    </div>
  );
}
