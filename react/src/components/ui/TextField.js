import style from './TextField.module.css'

function TextField(props) {
  let icon = "";
  let preText = "";
  let phoneNumber = "";
  let hasIcon = false;

  if (props.icon) {
    icon = <span className='material-icons-round'>{props.icon}</span>;
    hasIcon = true;
  }
  if (props.preText) {
    preText = <span className={style.currencySymbol}>{props.preText}</span>;
  }
  if (props.variant === "phoneNumber") {
    phoneNumber = <select>
      <option value="+251" data-text="Ethiopia">+251</option>
      <option value="+233" data-text="Ghana">+233</option>
      <option value="+254" data-text="Kenya">+254</option>
      <option value="+234" data-text="Nigeria">+234</option>
      <option value="+27" data-text="South Africa">+27</option>
      <option value="+44" data-text="United Kingdom">+44</option>
    </select>
  }

  function focusHandler(event) {
    if(event.target.tagName !== "SELECT") {
      event.currentTarget.querySelector('input').focus();
    }
  }

  

  return (
    <div className={`${style.input} ${style[props.variant]} ${hasIcon && style.hasIcon}`} onClick={focusHandler}>
      {preText}
      {icon}
      {phoneNumber}
      <input type="text" placeholder={props.placeholder} value={props.val} onChange={props.onChange}/>
      <label>{props.label}</label>
    </div>
  );
}

export default TextField;
