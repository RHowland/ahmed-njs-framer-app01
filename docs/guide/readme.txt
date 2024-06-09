# GradientBackground Component

🎨🌈

## Description

The `GradientBackground` component creates a full-width, full-height animated gradient background that animates smoothly. It allows customization of the gradient colors, animation speed, and dimensions of the component. Additionally, it can wrap around any children elements, providing a dynamic and engaging background for the parent component's content.

## Installation

You can import the `GradientBackground` component from `'@/components/framer-motion/GradientBackground'`:

```bash
import GradientBackground from '@/components/framer-motion/GradientBackground';
```

## Usage

```tsx
import React, { useState } from 'react';
import GradientBackground from '@/components/framer-motion/GradientBackground';
import { Button } from '@/components/ui/button';

export default function Page() {
    const [animate, setAnimate] = useState(false);

    const handleButtonClick = () => {
        setAnimate(!animate);
    };

    return (
        <section className='w-full min-h-screen flex flex-col justify-center items-center'>
            <GradientBackground
                startingColorLeft="#abb8c3"
                endingColorRight="#000"
                motionSpeed="5s"
                motionDirection="leftToRight"
                componentMaxWidth="70%"
                componentMaxHeight="100%"
                triggerAnimation={animate}
            >
                <div className='w-full h-[50vh] flex justify-center items-center text-center text-slate-50 text-5xl font-bold'>Hello World ✨</div>
            </GradientBackground>
            <Button className='mt-5' onClick={handleButtonClick}>{animate ? 'Stop Animation' : 'Play Animation'}</Button>
        </section>
    )
}
```

## Props

- `startingColorLeft`: (string) The color of the gradient on the left side.
- `endingColorRight`: (string) The color of the gradient on the right side.
- `motionSpeed`: (string) The speed of the animation (e.g., "2s" or "2 seconds").
- `motionDirection`: ('leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop') The direction of the animation.
- `componentMaxWidth`: (string, optional) The maximum width of the component.
- `componentMaxHeight`: (string, optional) The maximum height of the component.
- `triggerAnimation`: (boolean) Controls whether the animation should play or not.

## Example

```tsx
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
```

You can see an example of using the `GradientBackground` component in the `Usage` section above.