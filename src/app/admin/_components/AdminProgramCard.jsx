const { default: Card } = require("./Card")

const AdminProgramCard = ({data, url}) => {
	
	if (!data) return <div>Loading...</div>
	console.log(data);
	

	return(
		<Card url={url}>
			<div className="flex gap-4 p-4">
				<img src={data?.logo_url} className="w-[92px]"/>
				<div className="flex flex-col mt-2">
					<h1 className="text-xl font-medium">ជំនាញផ្នែក: {data.program_title}</h1>
					<p className="">វគ្គសិក្សា: {data.courses.length}</p>
				</div>
			</div>
		</Card>
	)
}

export default AdminProgramCard