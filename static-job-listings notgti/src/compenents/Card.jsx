import Avatar from './Avatar'
import Badge from './MyBadge'
import Tags from './Tags'
function Card(props) {
    let d = (props.data.new | props.data.featured) ? 'border-l-8 border-[--Desaturated-Dark-Cyan]' : '' 
    return(
        <div className={`font-league relative mt-12 pb-6 bg-white shadow-md m-4 rounded-lg ${d} Desktop:flex Desktop:items-center Desktop:px-12 Desktop:pb-2`}>
            <div className='absolute -top-8 left-6 Desktop:static'>
                <Avatar ss={props.data.logo}/>
            </div>
            <div className='px-8 pt-12 flex flex-col justify-start items-start Desktop:flex-row Desktop:justify-between Desktop:w-full Desktop:pt-4'>
                <div>
                    <div className='flex items-center'>
                        <h2 className='text-[--Desaturated-Dark-Cyan] font-league font-bold'>{props.data.company} </h2>
                        <div className='ml-8'>
                            {props.data.new ? <Badge data={{title: 'New!', colorText: 'bg-[--Desaturated-Dark-Cyan]', colorBg: 'text-red-200'}}/> : ''}
                            {props.data.featured ? <Badge data={{title: 'Featured', colorText: 'bg-green-100', colorBg: 'bg-green-800'}}/> : ''}
                        </div>
                    </div>
                    <h2 className='font-league font-bold mt-4'>{props.data.position}</h2>
                    <div className='inline-flex items-center space-x-4 text-[--Dark-Grayish-Cyan] my-4'>
                        <h1>{props.data.postedAt}</h1>
                        <span className='w-1 h-1 mx-2 rounded-full bg-[--Dark-Grayish-Cyan]'></span>
                        <h1>{props.data.contract}</h1>
                        <span className='w-1 h-1 mx-2 rounded-full bg-[--Dark-Grayish-Cyan]'></span>
                        <h1>{props.data.location} </h1>
                    </div>
                </div>
                <hr className='block w-full my-1 Desktop:hidden'/>
                 <div className=' mt-4 flex flex-wrap gap-2'> 
                 
                    {
                        props.data.tools.map((t, i) => {
                            return(
                                <Tags key={i} title={t} />
                            )
                        })
                    }
                    {
                        props.data.languages.map((t, i) => {
                            return(
                                <Tags key={i} title={t.trim()} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card

{/* /*grid grid-cols-3 gap-2*/ }