import PostalCodeInfo from "./PostalCodeInfo";
import PostalCodeInput from "./PostalCodeInput";
import logo from '../assets/logo.svg';

const Demo = () => {

  return (
    <main>
   
    <div className="mb-10 h-28 pt-0 mt-0 w-full items-center">
        <div className="flex flex-col items-center">
        <div className='w-96 h-28 '>
           
           <img value={logo} src={logo} alt='Logo' className='object-cover mr-2' />

    </div>
    </div>
    </div>
        <div className="flex flex-col items-center justify-center">
        <PostalCodeInput />
        
        <PostalCodeInfo />
        </div>
    </main>
  )
}

export default Demo