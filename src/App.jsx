import './App.css'

function App() {

  return (
    <>
<header className='p-5'>
  <div className='flex justify-between lg:hidden '>
    <div><img src="https://www.gold.ac.uk/assets/img/svg/sprite/logo.svg" alt="goldsmithlogo" /></div>
  <div><img src="./assets/images/logos.PNG" alt="logos" /></div>
  </div>
  
  {/* desktop */}

  <div className='hidden lg:flex justify-between'>
  <div><img src="https://www.gold.ac.uk/assets/img/svg/sprite/logo.svg" alt="goldsmithlogo" /></div>
    <div className='flex gap-8'>
      <div className=''><img src="https://www.gold.ac.uk/assets/img/svg/sprite/charm-menu-staff-students.svg" alt="" /></div>
      <div className='w-[100px]'><img src="https://www.gold.ac.uk/assets/img/svg/sprite/charm-menu-search.svg" alt="" /></div>
       <div className='w-[100px]'><img src="https://www.gold.ac.uk/assets/img/svg/sprite/charm-menu.svg" alt="" /></div>
    </div>
  </div>
  </header>    
<main>
  {/* mobile */}

  <div className='' >
<img src="https://www.gold.ac.uk/media/images-by-section/study/clearing-and-adjustment/clearing-2023/clearing-homepage-1-compressed.png" alt="" className='w-full'/>
<div className='z-10 flex flex-col  justify-center items-center relative top-[-60px] px-7 lg:px-0 lg:w-[50%] lg:top-[-320px] lg:left-[30%]'>
  <img src="https://www.gold.ac.uk/media/images-by-section/study/clearing-and-adjustment/clearing-2023/CLEARED[79].svg" alt="" className=' ' />
<button  className='bg-[#fed100] h-[70px] relative top-[-25px] lg:top-[-40px] font-medium  border px-8 border-gray-400 border-b-8 w-full lg:w-[50%] border-b-[#223036]'>Apply now through clearing</button>
  </div>

</div>


<div className=' bg-[#f6f7f7] p-4 absolute top-[200px] pt-[100px] lg:top-[500px] lg:w-full  '>
  <div className='bg-white '>
    <div className='flex gap-5  flex-col justify-center items-center'>
      <div className='bg-[#fed100]  relative  w-20 h-2 '></div>
      <p className='text-black font-medium '>Goldsmiths, University of London</p>
      <p className='w-[70%] px-3'> Lorem ipsum dolor sit amet, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quod. consectetur adipisicing elit. Necessitatibus eum harum cupiditate at?</p>
    </div>
<hr className='ml-6 mr-6 mt-20 py-4'/>
<div className='flex justify-between px-6 pb-4'>
  <p className='text-[#646ec0] font-medium'> About Goldsmiths</p>
  <div>
    <img src="https://www.gold.ac.uk/assets/img/svg/sprite/icon-more-666.svg" alt="" />
  </div>
</div>
  </div>

</div>



</main>
    
      </>
  )
}

export default App
