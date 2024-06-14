function MyBadge(props) {
    return(
        <span className={`${props.data.colorText} ${props.data.ColorBg} text-lg font-medium me-2 px-2.5 py-0.5 rounded-full`}>{props.data.title}</span>
    )
}

export default MyBadge