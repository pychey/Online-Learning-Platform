import Link from "next/link"

const Card = (data) => {
  return(
    <Link 
			className="w-full px-5 py-4 bg-white rounded-lg [box-shadow:rgba(100,100,100,0.15)_0px_1px_4px_0px]"
			key={data.index}
			href={data.url}
		>
			{data.title}
		</Link>
  )
}

export default Card