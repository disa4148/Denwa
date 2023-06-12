import HeaderLinks from "src/features/headerLinks/HeaderLinks"
import LogotypeAnimation from "src/features/logotypeAnimation/LogotypeAnimation"

export const Header: React.FC = () => {
  return (
    <div>
      <LogotypeAnimation />
      <HeaderLinks />
    </div>
  )
}
