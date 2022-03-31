export default function Item({ text, Icon, active, uid, setItemSelected }) {
  const handleClick = () => {
    setItemSelected((_) => uid)
  }

  return (
    <div className="item__container">
      <div className="item__container-main" onClick={handleClick}>
        <p className={active === uid ? "item__active" : "item__inactive"}>
          {text}
        </p>
      </div>

      <Icon />
    </div>
  )
}
