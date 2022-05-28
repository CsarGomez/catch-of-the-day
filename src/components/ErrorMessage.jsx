const ErrorMessage = ({ msg, color }) => (
  <p style={{ color: `${color}`, fontStyle: 'italic' }}>{msg}</p>
);

export default ErrorMessage;
