import Lottie from "lottie-react"

import logotypeAnimation from "./denwa logotype.json"

const LogotypeAnimation: React.FC = () => {
  return (
    <Lottie
      animationData={logotypeAnimation}
      style={{ height: "25px", width: "256px", cursor: "pointer" }}
      autoplay={true}
      loop={false}
    />
  )
}

export default LogotypeAnimation
