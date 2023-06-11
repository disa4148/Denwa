import { useState, useEffect } from "react";
import { Logotype } from "src/shared/UI/logotype/Logotype";

const LogotypeAnimation = () => {
  const [showLogo, setShowLogo] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 4000); // задержка перед запуском анимации
    () => clearTimeout(timer);
  }, []);

  return (
    <div className={showLogo ? "logo-container show" : "logo-container"}>
      <Logotype />
    </div>
  );
};

export default LogotypeAnimation;
