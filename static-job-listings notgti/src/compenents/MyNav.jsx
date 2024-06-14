import bgMobile from '../assets/images/bg-header-mobile.svg'
import { useState } from 'react'

function MyNav({ sendData }) {
  const [searchVal, setSearchVal] = useState('')
  const [searched, setSearched] = useState([])
  

  const change = () => {
    setSearchVal(event.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === " ") {
      let s = searched
      setSearched([...searched, {title: searchVal}],)
      sendData([...searched, {title: searchVal}])
      setSearchVal('') 
    }
    return
  }
const del = e => {
  setSearched(searched.filter(item => item !== e));
  sendData(searched.filter(item => item !== e))
}

  return (
    <header className="bg-[--Desaturated  -Dark-Cyan] ">
        <img className=" h-48 " src={bgMobile} alt="" />
        <div className='relative top-6 flex justify-center items-center container mx-auto'>
          <div className='w-full  bg-white rounded-md shadow-lg p-4 px-8 flex justify-between items-center'>
            <div className='flex items-center'>
              <div className='flex w-min space-x-1'>
                {searched.map((t, i) => (
                <div key={i} class="flex w-min items-center bg-slate-200 rounded-sm">
                  <div class="mx-2">
                    {t.title}
                  </div>
                  <div class="flex items-center ms-auto bg-[--Desaturated-Dark-Cyan] hover:bg-[--Very-Dark-Grayish-Cyan]">
                      <button onClick={()=>{del(t)}} class="w-6 h-6 flex items-center justify-center">
                        <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                    </div>
                </div>
                ))}
              </div>
            <input  placeholder='search' onKeyDown={handleKeyDown} onChange={change} value={searchVal} type="text" className="block w-full p-4 text-gray-900 outline-none rounded-lg text-base" />
            </div>
            <div> 
              <button className='text-sm text-[--Desaturated-Dark-Cyan] hover:underline font-semibold' onClick={()=>{setSearched([])}}>Clear</button> </div>
          </div>
        </div>
    </header>
  )
}

export default MyNav
