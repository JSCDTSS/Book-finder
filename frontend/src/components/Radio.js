
export default function Radio({id, group, state, onChange}){

  return <>
    <label>{id}</label>
    <input type="radio" id={id} name={group} value={id} checked={state} onChange={onChange}/>
  </>
}