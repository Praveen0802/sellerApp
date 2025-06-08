import { useEffect, useState } from "react";
import CustomModal from "../customModal";

const LeftViewModal = ({
  show,
  onClose,
  children,
  className,
  outSideClickClose = false,
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Small delay to ensure DOM is ready before animation
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimated(false);
      // Wait for animation to complete before hiding
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <CustomModal
      show={isVisible}
      onClose={onClose}
      outSideClickClose={outSideClickClose}
    >
      <div
        className={`
          bg-white 
          w-full
          sm:w-[500px]
          h-full
          ${className || ""}
          fixed
          top-0
          left-0
          transition-transform
          duration-300
          ease-in-out
          ${isAnimated ? "translate-x-0" : "-translate-x-full"}
          shadow-2xl
          overflow-auto
        `}
        style={{
          isolation: "isolate",
          transform: isAnimated ? "translateX(0)" : "translateX(-100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </CustomModal>
  );
};

export default LeftViewModal;
