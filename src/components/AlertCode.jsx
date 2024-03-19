const AlertCode = ({text='Unknown',color='primary'}) => {
    return ( 
        <div className="text-lg">
        <span className="text-gray-400">&lt;</span>
        <span className="text-cyan-300">Alert </span>
        <span className="text-blue-400">text</span>
        <span className="text-gray-400">=</span>
        <span className="text-rose-400">"{text}" </span>
        <span className="text-blue-400">color</span>
        <span className="text-gray-400">=</span>
        <span className="text-rose-400">"{color}"</span>
        <span className="text-gray-400"> /&gt;</span>
      </div>
     );
}
 
export default AlertCode;