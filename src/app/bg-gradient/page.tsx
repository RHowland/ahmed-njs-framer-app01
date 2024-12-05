"use client";
import React, { useState } from 'react';
import GradientBackground from '@/components/framer-motion/GradientBackground';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/custom-ui/header/navbar/navbar';

export default function page() {
    const [animate, setAnimate] = useState(false);

    const handleButtonClick = () => {
        setAnimate(!animate);
    };
    return (
        <>
         {/* Section 1: Navigation */}
            <Navbar />
            {/* Section 2: Component Preview */}
            <section className='w-full min-h-screen flex flex-col justify-center items-center'>
                <GradientBackground
                    startingColorLeft="#abb8c3"
                    endingColorRight="#000"
                    motionSpeed="5s"
                    motionDirection="leftToRight"
                    componentMaxWidth="70%"
                    triggerAnimation={animate}
                    componentMaxHeight="100%"
                >
                    <div className='w-full h-[50vh] flex justify-center items-center text-center text-slate-50 text-5xl font-bold'>Hello World ✨</div>
                </GradientBackground>
                <Button className='mt-5' onClick={handleButtonClick}>{animate ? 'Stop Animation' : 'Play Animation'}</Button>
            </section>
        </>
    )
}


/**
 * ---------------------------------------------------------------------
 * File Name : page.tsx
 * Component Name : bg-gradient 
 * Component Type : UI Component preview
 * Dev Initials : Arshahdul Ahmed
 * Date Created : 2024-06-09
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: The component was necessary to provide a visually appealing background animation that enhances the user interface of the application. It allows for a dynamic and engaging background experience, adding to the overall aesthetic appeal of the UI.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: This component renders a preview of a UI element featuring a gradient background animation. It includes a button that controls the animation, toggling between starting and stopping the animation based on user interaction.
 *
 * ------------------------------
 * Section Comments: The component is divided into two main sections: Navigation and Component Preview. The Navigation section includes a custom UI navbar for navigating through the application. The Component Preview section showcases the main functionality of the component, displaying a gradient background animation with a button to control the animation state.
 *
 * ------------------------------
 * Input Comments:
 *
 * ------------------------------
 * Output Comments: The component renders a visually appealing gradient background animation along with a button. Clicking the button toggles the animation, providing interactive control over the background animation's behavior.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No unusual code was required for this component. Standard React and TypeScript practices were used to implement the functionality. The component leverages state management to control the animation and dynamically update the button text based on its state.
 *
 */
