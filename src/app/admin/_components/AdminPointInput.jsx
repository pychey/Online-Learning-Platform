const AdminPointInput = ({ value, placeholder, onChange }) => {
	return(
		<input
      value={value}
      onChange={onChange}
			placeholder={placeholder}
      className="px-4 py-3 max-w-[640px] w-full bg-white border rounded-md border-admin-border font-medium 
                text-[#707070] focus:text-black focus:shadow-sm focus:outline-none transition-all duration-300"
    />
	)
}

export default AdminPointInput