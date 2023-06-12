import HeaderLinks from "src/features/headerLinks/HeaderLinks"
import ToggleModal from "src/features/toggleModal/ToggleModal"
import LogotypeAnimation from "src/features/logotypeAnimation/LogotypeAnimation"
export const Header: React.FC = () => {
  return <div>
    <LogotypeAnimation/>
    <HeaderLinks/>
    <ToggleModal/>
  </div>
}
