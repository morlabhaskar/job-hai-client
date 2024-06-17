
import { Link } from 'react-router-dom';
import img from '../../assets/media/man.png'
import { AiOutlineCheck } from "react-icons/ai";

export default function HowWorks() {
  return (
    <section class="text-gray-600 bg-slate-100 py-20 body-font">
      <div class="container mx-auto flex md:flex-row flex-col items-center sm:py-3">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded-xl" alt="hero" src={img} />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mx-0">Learn &
            <br /><span className='text-blue-500'>Level up Your SKILLS</span>
          </h1>
          <p class="mb-8 leading-relaxed">Select from a wide range of courses to UpSkill and advance your Career!</p>
          <p class="mb-8 leading-relaxed flex"> <span className='flex items-center'><AiOutlineCheck className='bg-orange-400 h-6 w-6 p-1 mr-2 rounded-full text-black' /> 50+ Couses</span> <span className='flex items-center mx-3'><AiOutlineCheck className='bg-orange-400 h-6 w-6 p-1 mr-2 rounded-full text-black' /> Certificate</span> <span className='flex items-center'><AiOutlineCheck className='bg-orange-400 p-1 mr-2 h-6 w-6 rounded-full text-black' /> Projects</span>  </p>
          <div class="flex justify-center">
          <Link className="btn" to="/all-jobs">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
