import "./toast.css"
type toastProps = {
  message: string;
};
const Toast = (props: toastProps) => {
  return (
    <div className="toastBar">
      <div className="toastMsg">{props.message}</div>
      <div className="toastClose">x</div>
    </div>
  );
};

export default Toast;
