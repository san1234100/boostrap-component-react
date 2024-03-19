import Button from '../components/Button'
import ButtonCode from '../components/ButtonCode';
const ButtonPage = () => {
  return (
    <div className="text-white px-10">
      <h4 className="text-5xl font-semibold">Buttons</h4>
      <p className="font-light text-2xl pt-2">
        Use Bootstrap’s custom button styles for actions in forms, dialogs, and
        more with support for multiple sizes, states, and more.
      </p>
      <h4 className="mt-10 text-4xl font-semibold text-purple-500">Variants</h4> 
    <p className="text-gray-300 pt-2 text-lg">
    Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
    </p>
    <div className="border border-gray-500 rounded pt-5 mt-5 w-fit ">
     {/* buttons */}
      <div className='flex items-center space-x-5 px-20'>
      <Button className='btn btn-primary' type="button">Primary</Button>
      <Button className='btn btn-secondary' type="button">Secondary</Button>
      <Button className='btn btn-success' type="button">Success</Button>
      <Button className='btn btn-danger' type="button">Danger</Button>
      <Button className='btn btn-warning' type="button">Warning</Button>
      <Button className='btn btn-light' type="button">Light</Button>
     <Button className='btn btn-dark' type="button">Dark</Button>
      </div>
      <div className='bg-gray-500 h-[1px]'></div>
      <p className='p-2 text-gray-400 font-semibold'>HTML</p>
      <div className='bg-gray-500 h-[1px]'></div>
      <div className='bg-black p-5 bg-opacity-35'>
        <pre>
          <code>
         <ButtonCode
         color={'btn btn-primary'}       
         />
          <ButtonCode
         color={'btn btn-secondary'} 
         text='Secondary'      
         />
          <ButtonCode
         color={'btn btn-success'}   
         text='Success'    
         />
          <ButtonCode
         color={'btn btn-danger'}   
         text='Danger'    
         />
          <ButtonCode
         color={'btn btn-warning'}    
         text='Warning'   
         />
          <ButtonCode
         color={'btn btn-light'}    
         text='Light'   
         />
         <ButtonCode
         color={'btn btn-dark'}  
         text='Dark'     
         />
          </code>
        </pre>
      </div>
    </div>
    </div>
  );
};

export default ButtonPage;
