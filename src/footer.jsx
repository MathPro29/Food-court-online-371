export default function Footer() {
    return (
        <>
        <div className="bg-blue-500 rounded w-full h-16 flex items-center justify-center">
        <div className='flex text-center items-center justify-center'>
        <p className="flex text-white items-center">
          <p className="font-bold">Develop with</p>
          <div className="flex m-2">
          <img src="react-logo-svgrepo-com.svg" alt="" className="w-6" /> React
          </div>
          <div  className="flex m-2">
          <img src="vite.svg" alt="" className="w-6"    /> Vite
          </div>
          <div  className="flex m-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt=""  className="w-6"/> Tailwind
          </div>
        </p>
      </div>
    </div>
</>
    );
  }
  