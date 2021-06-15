import "./LoginModal.css";

export const LoginModal = () => {
  return (
    <div className="modal-1">
      <br />
      <span className="modal-heading">You need to login to continue</span>
      <div className="flex">
        <button className="button-primary margin-1">Cancel</button>
        <button className="button-primary margin-1">Login</button>
      </div>
    </div>
  );
};
