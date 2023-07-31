
const Modal = ({ isOpen, onClose, resumePath }) => {
  const modalStyles = isOpen ? 'fixed inset-0 flex items-center justify-center' : 'hidden';
  const backdropStyles = isOpen ? 'fixed inset-0 bg-black bg-opacity-50' : 'hidden';

  const renderResume = () => {
    
      return <iframe src={resumePath} id="resumeViewer" className="w-full"></iframe>;
    
  };

  return (
    <>
      {/* Modal backdrop (semi-transparent background) */}
      <div  className={backdropStyles} onClick={onClose}>

      {/* Modal container */}
      <div id="resumeContainer" className={modalStyles}>
        {/* Modal content */}
        <div  className="bg-white rounded-lg p-4 w-3/5"> {/* Changed width to w-3/5 */}
          {/* Modal header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#08192f]">My Resume</h2>
            <button  className="text-gray-600 hover:text-gray-800" onClick={onClose}>
              <svg id="closeBtn" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Modal content/body */}
          {renderResume()}
        </div>
      </div>
      </div>
    </>
  );
};

export default Modal;
