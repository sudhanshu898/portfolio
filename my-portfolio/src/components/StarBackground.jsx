import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Star = ({ size, top, left, delay, duration }) => (
    <motion.div
        className="absolute rounded-full bg-white"
        style={{
            width: size,
            height: size,
            top: top,
            left: left,
        }}
        animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
        }}
    />
);

const StarBackground = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 70 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 2,
            duration: Math.random() * 3 + 2,
        }));
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#020617] overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <Star key={star.id} {...star} />
            ))}

            {/* Ambient Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-900/5 to-purple-900/5"></div>
        </div>
    );
};

export default StarBackground;
