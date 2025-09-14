
const Choice = ({data, answer, index, onChangeAnswer, onChange}) => {

	return(
		<div className="flex items-center gap-2.5">
			<input
				type="radio"
				name="correctChoice"
				checked={answer === index}
				onChange={onChangeAnswer}
				className="w-5 h-5"
			/>
			<div className="w-full h-12 flex items-center">
				<input
					type="text"
					value={data || ""}
					onChange={onChange}
					className="w-full h-9 border-b border-transparent hover:border-gray-300 outline-0 
									focus:border-primary transition-colors duration-200"
					placeholder={`Choice`}
			/>
			</div>
		</div>
	)
}

export default Choice