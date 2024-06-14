import Avatar from "./Avatar"

function Replay (props) {
    return(
        <div className="card mx-2 flex flex-col">
            <div> 
                <textarea className="w-full border rounded-md h-24 p-4" placeholder='Add a comment ...' name="post" id=""></textarea>
            </div>
            <div className="flex justify-between mt-6"> 
                <div>
                    <Avatar srcImage={props.currentUser.image.png}/>
                </div>
                <div>
                    <button className="px-6 font-rubik font-semibold py-2 rounded-md text-white bg-[--Moderateblue]"> SEND </button>
                </div>
            </div>
        </div>
    )
}

export default Replay