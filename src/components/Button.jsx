export const Button = ({ icon, children, variant = "primary" }) => {
  return (
    <div className="btn-wrapper">
      <button type="button" className={`btn btn-${variant}`}>
        {icon && <img src={icon} alt="" className="btn-icon" />}
        {children}
      </button>
    </div>
  )
} 