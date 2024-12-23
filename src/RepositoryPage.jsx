
import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

const RepositoryPage = () => {
  
  return (
    <div className="xl:h-screen h-full xl:bg-gray-100 w-[100vw]">
    <div className="flex flex-col xl:flex-row">
   <Sidebar />
   <div className="xl:flex xl:justify-center xl:items-center xl:p-5 ml-0">
   <MainContent />
      </div>
     </div>
    </div>
  )
}

export default RepositoryPage