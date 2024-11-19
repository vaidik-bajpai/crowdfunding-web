interface FormHeaderInterface {
    title: string
}

function FormHeader({title}: FormHeaderInterface) {
    return (
        <div className="mx-auto text-center">
            <div className="text-white text-xl font-bold md:text-3xl mb-2 mt-3">{title}</div>
        </div>
    )
}

export default FormHeader;