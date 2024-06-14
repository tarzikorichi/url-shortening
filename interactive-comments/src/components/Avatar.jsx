function Avatar(props) {
    return(
        <img className="w-10 h-10 rounded-full" src={'src/assets/'+ props.srcImage } alt="Rounded avatar" />
    )
}
export default Avatar