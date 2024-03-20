const BadgeCode = ({color='primary',text='Badge'}) => {
    return ( 
        <div className='text-lg'>
        <span className='text-gray-500'>&lt;</span>
        <span className='text-cyan-400'>Badge </span>
        <span className='text-blue-400'>text</span>
        <span className='text-gray-400'>=</span>
        <span className=' text-rose-500'>"{text}" </span>
        <span className='text-blue-400'>color</span>
        <span className='text-gray-400'>=</span>
        <span className=' text-rose-500'>"{color}" </span>
        <span className='text-gray-500'>/&gt;</span>
      </div>
     );
}
export default BadgeCode;