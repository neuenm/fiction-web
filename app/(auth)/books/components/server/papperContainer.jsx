const PapperContainer = ({ children }) => (
  <div
    className='flex-grow mx-4 p-8 bg-papper shadow-lg rounded-lg border border-gray-300 flex-col flex items-center justify-between'
    style={{ minHeight: '80vh' }}
  >
    {children}
  </div>
);

export default PapperContainer;
