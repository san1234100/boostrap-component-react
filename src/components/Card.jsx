const Card = ({size='xs',link='#',img='../src/assets/images/top-web-development.jpg',title='Unknown',btnName='Click',...props}) => {
    return ( 
        <div className={`rounded-lg bg-white h-fit text-black max-w-${size}`}>
        <img src={img} className="rounded-md" alt="card_image" />
        <div className="p-5">
            <h4 className=" text-2xl font-semibold">{title}</h4>
            <p className="font-medium text-gray-700 pt-2 mb-5">
            {props.children}
            </p>
            <a href={link} target="blank" className="px-4 py-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-md">{btnName}</a>
        </div>
       </div>
     );
}
 
export default Card;