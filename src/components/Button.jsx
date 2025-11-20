export const Button = ({ icon, children }) => {
  return (
    <div className="btn-wrapper">
      <button type="button" className="btn">
        {icon && <img src={icon} alt="" className="btn-icon" />}
        {children}
      </button>
    </div>
  )
} 