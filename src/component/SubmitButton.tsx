interface SubmitButtonInterface {
    onClick: () => void
}

function SubmitButton({onClick}: SubmitButtonInterface) {
    return (
        <button onClick={onClick} className="text-green-400 mt-2 py-3 px-2 rounded-lg hover:border border-green-400 hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300 font-semibold md:font-medium text-lg">
            Submit
        </button>

    )
}

export default SubmitButton;