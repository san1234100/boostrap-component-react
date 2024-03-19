const ButtonCode = ({color,type='button',text='Primary'}) => {
    return ( 
        <div className='text-lg'>
        <span className='text-gray-500'>&lt;</span>
        <span className='text-cyan-400'>Button </span>
        <span className='text-blue-400'>className</span>
        <span className='text-gray-400'>=</span>
        <span className=' text-rose-500'>"{color}" </span>
        <span className='text-blue-400'>type</span>
        <span className='text-gray-400'>=</span>
        <span className=' text-rose-500'>"{type}"</span>
        <span className='text-gray-500'>&gt;</span>
        <span>{text}</span>
        <span className='text-gray-500'>&lt;</span>
        <span className='text-gray-500'>/</span>
        <span className='text-cyan-400'>Button</span>
        <span className='text-gray-500'>&gt;</span>
      </div>
     );
}
 
export default ButtonCode;