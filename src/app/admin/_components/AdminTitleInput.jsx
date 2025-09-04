const AdminTitleInput = ({ value = "loading...", onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="px-4 py-3 w-[720px] bg-white border rounded-md border-admin-border font-medium text-xl 
                text-[#707070] focus:text-black focus:shadow-md focus:outline-none transition-all duration-300"
    />
  );
};

export default AdminTitleInput;