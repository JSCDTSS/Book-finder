
export default function TextForm({ id, text, details, setDetails, isPassword=false }) {

  return (
    <div className="form-group">
      <div className="form-field">
        <input
          type={isPassword ? "password" : "text"}
          placeholder={text}
          name={id}
          id={id}
          onChange={(e) => {
            setDetails({ ...details, [id]: e.target.value })
          }}
          value={details[id]}
        />
      </div>
    </div>
  )
}