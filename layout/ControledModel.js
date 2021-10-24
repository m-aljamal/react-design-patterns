const Modal = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <div className="backgrund" onClick={onRequestClose}>
      // stopPropagation to not let if user click inside body will not close the
      modal
      <div className="body" onClick={(e) => e.stopPropagation()}>
        <button onClick onClick={onRequestClose}>
          Hide Modal
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

//   style for modal background =
//   position: fixed
//   z-index:1
//   left:0
//   top:0
//   width:100%
//   height:100%
//   overFlow:auto
//   background-color:

//   style for modal body  =
//   background-color:
//   margin: 10% auto
//   padding: 20px
//   width:50%

const Parent = () => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      <Modal
        shouldShow={shouldShow}
        onRequestClose={() => setShouldShow(false)}
      >
        <p>modal content</p>
      </Modal>
    </>
  );
};
