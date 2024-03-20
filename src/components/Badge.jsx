const Badge = ({text='Badge',color='primary'}) => {
    return ( 
        <span className={`px-4 py-1 select-none rounded-full badge-${color} text-sm`}>{text}</span>
     );
}
 
export default Badge;