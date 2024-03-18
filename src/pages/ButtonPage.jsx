import Button from '../components/Button'
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
    <div className="border border-gray-400 rounded p-5 mt-5 w-fit px-20">
     {/* buttons */}
      <div className='flex items-center space-x-5'>
      <Button className='btn btn-primary' type="button">Primary</Button>
      <Button className='btn btn-secondary' type="button">Secondary</Button>
      <Button className='btn btn-success' type="button">Success</Button>
      <Button className='btn btn-danger' type="button">Danger</Button>
      <Button className='btn btn-warning' type="button">Warning</Button>
      <Button className='btn btn-light' type="button">Light</Button>
     <Button className='btn btn-dark' type="button">Dark</Button>
      </div>

    </div>
    </div>
  );
};

export default ButtonPage;
