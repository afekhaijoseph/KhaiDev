import padre from '../assets/images/padre.png'
const Image = () => {
  return (
    <div className="bg-accent w-full aspect-square mx-auto rounded-full relative">
        <img className="absolute left-1/2 -bottom-1 -translate-x-1/2 object-cover w-full rounded-b-full "src={padre}  alt=""/>
    </div>
  )
}

export default Image