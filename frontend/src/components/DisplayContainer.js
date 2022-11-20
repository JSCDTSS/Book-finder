
export default function DisplayContainer({title='',items}){
  return <div className='DisplayContainer'>
    {title && <p>{title}</p>}
  </div>

}