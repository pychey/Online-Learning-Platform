

const AdminLinkInput = ({ value, onChange, placeholder }) => {

	return(
		<input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="px-4 py-3 w-full bg-white border rounded-md border-admin-border font-medium 
                text-[#707070] focus:text-black focus:shadow-sm focus:outline-none transition-all duration-300"
    />
	)
}

export default AdminLinkInput