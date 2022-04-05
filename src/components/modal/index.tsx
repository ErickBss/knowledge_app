import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { UserAddressParams } from '../../hooks/useSearchCEP'
import { ShowData } from './ShowData'

export type RegisterDataParams = {
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
    customUI: ({ onClose }) => (
      <ShowData registerData={confirmData} onClose={onClose} />
    ),
  })
}
