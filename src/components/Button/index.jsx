function Button(props){
    const {title, changeCount} = props

    return(
        <button onClick={changeCount} className="mx-10 rounded-2xl text-xl font-semibold shadow-md bg-gray-500 text-white px-8 py-4">
            {title}
        </button>
    )
}

export default Button