import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { UserAddressParams } from '../../hooks/useSearchCEP'

type RegisterDataParams = {
  cep: string
  name: string
  cpf: string
  userAddress: UserAddressParams
}

interface ModalProps {
  confirmData: RegisterDataParams
}

export function Modal({ confirmData }: ModalProps) {
  console.log(confirmData)
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <h1>{confirmData.name}</h1>
          <p>You want to delete this file?</p>
          <button onClick={onClose}>No</button>
          <button
            onClick={() => {
              this.handleClickDelete()
              onClose()
            }}
          >
            Yes, Delete it!
          </button>
        </div>
      )
    },
  })
}
