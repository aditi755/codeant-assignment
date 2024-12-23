// MainContent.js
import repoData from "../data/repoData";
import database from '/assets/database.svg';
import bluedot from '/assets/bluedot.svg';
import plus from '/assets/plus.svg';
import refresh from '/assets/refresh.svg';
const MainContent = () => {
  return (
    <div className="bg-white p-0 xl:w-[82.9vw] w-100vw h-[94.4vh] rounded-md ">

      <div className="flex flex-col px-5 py-2 xl:flex-row justify-between">

        <div>
        <p className="text-lg font-bold">Repositories</p>
        <p className="text-sm mt-1">33 total repositories</p>
        </div>

      <div className="flex gap-2 mt-3 xl:mt-0">
        <button className="w-[127px] h-[40px] bg-white border-2 border-gray-200 rounded-md flex items-center p-2">
        <img src={refresh} alt="refresh" className="w-4 h-4 mr-2"/>
        <p className="text-sm xl:text-sm ">Refresh all</p>
        </button>
        <button className="w-[150px] h-[40px] bg-blue-600 text-white rounded-md flex items-center p-2">
          <img src={plus} alt="plus" className="w-4 h-4 mr-2"/>
          <p className="text-sm">Add Repository</p>
          </button>
      </div>
      
      </div>

      <div className="px-5">
      <input type="text" className="border-2 border-gray-200 rounded-md xl:w-80 md:w-80 w-[88vw] h-8 mt-4 p-3" placeholder="Search Repositories"/>
      </div>


      {/* tables borderline top and bottom */}
      <ul className="mt-4">
      {repoData.map((repo, index) => (
       <li key={index} className="border-2 border-gray-200 h-[80px] flex flex-col justify-center px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">

       <div className="flex items-center gap-2"> {/* Align items horizontally */}
         <span className="font-semibold text-[15px]">{repo.repoName}</span>
         <span className="w-[60px] h-5 bg-blue-100 rounded-xl text-center">
           <p className="text-blue-400 text-[12px]">{repo.status}</p>
         </span>        
       </div>
     
       <div className="flex items-start gap-8 xl:text-[13px] text-[10px]  mt-2">
        <div className="flex items-center">
        <span>{repo.language}</span>
        <img src={bluedot} alt="bluedot" className="w-4 h-[7px]"/>
        </div>
        <div className="flex items-center gap-2">
          <img src={database} alt="database" className="w-3 h-4"/>
          <span>{repo.size}</span>
        </div>
         <span>{repo.updateTime}</span>
       </div>

     </li>
     
      ))}
    </ul>
    </div>
  );
};

export default MainContent;