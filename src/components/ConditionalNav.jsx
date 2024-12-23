
// Component for conditional navigation
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import signinData from '../data/SigninData';
import subtract from '/assets/subtract.svg';
import logo from '/assets/logo.svg';
import pie from '/assets/pie.svg';
import arrow from '/assets/arrow.svg';
import signupInfo from '../data/signupInfo';
function ConditionalNav() {
  const [selectedType, setSelectedType] = useState('SAAS');
  const location = useLocation();

  // Render the navigation only if the current route is not "/dashboard"
  if (location.pathname === '/dashboard') {
    return null;
  }

  const filteredData =
    selectedType === 'SAAS' ? signinData.slice(0, 4) : signinData.slice(4);

  return (
    <div className="w-auto h-auto flex ">

      <div className="w-[50vw] h-screen relative hidden xl:block">

       <div className="absolute top-56  left-32">
        <div className="w-[447px] h-[150px] bg-white shadow-xl shadow-gray-300 rounded-3xl border-2 border-gray-200">
          <div className='flex items-center px-4 py-3 border-b-2 border-gray-200'>
          <img src={logo} alt="logo" className="w-8 h-6"/>
          <p className=' text-md font-bold'>AI to detect & Autofix Bad Code</p>
          </div>

          <div className='flex items-center px-4 py-2 gap-9 justify-center text-[14px]'>
            {signupInfo.slice(0,-1).map((info, index) => (
              <div className="flex flex-col mt-2" key={index}>
              <span className='mx-auto font-extrabold'>{info.metric}</span>
              <span>{info.title}</span>
              </div>
            ))}
          </div>
        </div>
       </div>

       <div className="absolute top-[350px]  left-80">
        <div className="w-[270px] h-[164px] bg-white rounded-3xl border-2 border-gray-200 shadow-xl shadow-gray-300">
          <div className="flex items-center justify-between px-5 py-3 ">

            <div className="w-[56px] h-[56px] rounded-full bg-purple-100   ">
            <img src={pie} alt="pie" className="w-8 h-7 mx-auto mt-3"/>
            </div>
           
           <div className="flex flex-col">
            <p className="mx-auto text-blue-700 font-extrabold flex gap-2">
            <img src={arrow} alt="arraow" className="w-3 h-"/>  
            14%</p>
           <p className="text-[13px]">This week</p>
           </div>

          </div>

         {/* render lisr */}
         {
        signupInfo.slice(-1).map((info, index) => (
            <div className=" text-[16px] font-bold ml-4" key={index}>
            <p>{info.title}</p>
            <p className="text-3xl">{info.metric}</p> 
            </div>
        ))
        }       
        </div>       
       </div>
       <img src={subtract} alt="substract" className="absolute bottom-0 left-0 w-64"/>
      </div>


      <div className="xl:w-[50vw] w-[100vw] lg:w-[100vw] md:w-[100vw] h-screen bg-gray-100"> 
 
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="xl:w-[672px] w-[380px] h-[560px] bg-white border-2 border-gray-200 rounded-xl flex flex-col items-center ">

<div className='border-b-2 border-gray-200 flex justify-center flex-col items-center w-full p-5'>
<div className="flex gap-3 mt-8">
      <img src={logo} alt="logo" className="w-10 h-10"/>
      <p className='text-2xl mt-2 font-satoshi'>CodeAnt AI</p>
      </div>

      <p className='text-2xl font-bold mt-4'>Welcome to CodeAnt AI</p>
      
<div className="flex mt-7 xl:w-[624px] w-full xl:h-[60px] bg-gray-200 rounded-md">
        <button
          className={`w-[311px] h-[60px] rounded-md  border-gray-300 ${
            selectedType === 'SAAS' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => setSelectedType('SAAS')}
        >
          SAAS
        </button>
        <button
          className={`w-[311px] h-[60px] rounded-md ${
            selectedType === 'Self-Hosted' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => setSelectedType('Self-Hosted')}
        >
          Self-Hosted
        </button>
      </div>


</div>

      {/* Render List */}
      <div className="mt-5 flex flex-col gap-3 ">
        {filteredData.map((info, index) => (
             <Link to="/dashboard" key={index}>
            <div className="flex items-center justify-center xl:w-[445px] w-[330px] h-[57px] border border-gray-300 rounded-lg px-3 hover:bg-gray-100">
              <img src={info.icon} alt={info.title} className="w-6 h-6 mr-3" />
              <p className="text-sm font-medium">{info.title}</p>
            </div>
          </Link>
        
        ))}
      </div>

      </div>

      <p className='mt-5'>By signing up, you agree to the <span className='font-bold'>Privacy Policy</span></p>
    
      </div> 
      </div>

    </div>
    
  );
}

export default ConditionalNav