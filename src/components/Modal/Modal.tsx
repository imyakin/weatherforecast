import React from 'react'

interface ModalProps{
    closeModal: () => void;
    cityHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Modal: React.FC<ModalProps> = ({closeModal, cityHandler}) => {
  return (
    <div className="modal" style={{display: "block"}}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Cities</h5>
                <button onClick={closeModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <select className="form-select" id="inputGroupSelect01" onChange={(e) => cityHandler(e)}>
                    <option defaultValue={'Choose...'}>Choose...</option>
                    <option value="London,UK">London</option>
                    <option value="Yerevan,AR">Yerevan</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Moscow">Moscow</option>
                </select>
            </div>
            <div className="modal-footer">
                <button onClick={closeModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Modal