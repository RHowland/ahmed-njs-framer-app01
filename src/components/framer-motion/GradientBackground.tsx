// Component Name: GradientBackground.tsx
"use client";
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useRef } from 'react';

interface GradientBackgroundProps {
  startingColorLeft: string;
  endingColorRight: string;
  motionSpeed: string; // Format: '2s' or '2 seconds'
  motionDirection: 'leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop';
  componentMaxWidth?: string;
  componentMaxHeight?: string;
  triggerAnimation: boolean;
  children?: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  startingColorLeft,
  endingColorRight,
  motionSpeed,
  motionDirection,
  componentMaxWidth = '100%',
  componentMaxHeight = '100%',
  triggerAnimation,
  children,
}) => {
  const getDirectionStyles = () => {
    switch (motionDirection) {
      case 'leftToRight':
        return { start: '0% 50%', end: '100% 50%' };
      case 'rightToLeft':
        return { start: '100% 50%', end: '0% 50%' };
      case 'topToBottom':
        return { start: '50% 0%', end: '50% 100%' };
      case 'bottomToTop':
        return { start: '50% 100%', end: '50% 0%' };
      default:
        return { start: '0% 50%', end: '100% 50%' };
    }
  };

  const { start, end } = getDirectionStyles();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--start', start);
      ref.current.style.setProperty('--end', end);
    }
  }, [start, end]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        maxWidth: componentMaxWidth,
        maxHeight: componentMaxHeight,
        background: `linear-gradient(135deg, ${startingColorLeft}, ${endingColorRight})`,
        backgroundSize: '200% 200%',
        animation: triggerAnimation ? `gradientAnimation ${motionSpeed} linear infinite` : 'none',
      }}
    >
      {children}
    </motion.div>
  );
};

export default GradientBackground;


/**
* =====================================================================
*   ORIGINAL DOCUMENTATION  (Append to end of component code block)
* =====================================================================
* File Name      : GradientBackground.tsx
* Component Name : GradientBackground
* Component Type : Custom UI Component
* Date Created   : 2024-06-09
* Dev Name       : Arshahdul Ahmed
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : The component was created to provide a visually appealing background animation that can enhance the user interface of an application. This specific requirement for a  animated gradient background needed to be met using Next.js with TypeScript, TailwindCSS, and Framer Motion, ensuring it could easily be integrated into different parts of the application as a reusable component.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  : This component creates a full-width, full-height animated gradient background that animates smoothly. It allows customization of the gradient colors, animation speed, and the dimensions of the component. Additionally, it can wrap around any children elements, providing a dynamic and engaging background for the parent component's content.
* 
* ------------------------------
* Footnote Comments: none
* 
* ------------------------------
* Input Comments: none
* 
* ------------------------------
* Output Comments: none
* 
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : No unusual code was required. However, special care was taken to ensure the custom CSS properties for the gradient animation were applied correctly using TypeScript, and the Framer Motion library was used to handle the animation smoothly. The component also ensures compatibility with TailwindCSS for styling and layout purposes.
*
*/
