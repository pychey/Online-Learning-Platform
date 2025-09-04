
const Modal = ({ isOpen, onCancel, onSave, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <div
        className="flex flex-col gap-2 bg-white p-6 rounded-lg shadow-lg w-full max-w-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
				<div className="flex w-full justify-between">
					<button 
						onClick={() => onCancel()}
						className="py-1 px-4 border-2 border-secondary rounded-md font-medium text-lg text-secondary 
											cursor-pointer duration-200"
					>
						Cancel
					</button>
					<button 
						onClick={() => onSave()}
						className="py-1 px-4 bg-secondary/90 hover:bg-secondary rounded-md font-medium text-lg text-white 
											cursor-pointer duration-200"
					>
						Create
					</button>
				</div>
      </div>

			
    </div>
  );
};

export default Modal;