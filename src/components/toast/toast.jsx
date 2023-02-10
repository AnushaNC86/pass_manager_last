import "./toast.css";

const Toast = (props) => {
  return (
    <div className="toastBar">
      <div className="toastMsg">{props.message}</div>
      <div className="toastClose">x</div>
    </div>
  );
};

export default Toast;
