import CloseButton from './CloseButton';

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="relative p-6 border-b border-amber-500/20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light tracking-wider text-amber-400 uppercase">
          {title}
        </h2>
        <CloseButton onClick={onClose} ariaLabel="Close modal" />
      </div>
    </div>
  );
};

export default ModalHeader;

