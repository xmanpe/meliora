import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./FloatingParticle.scss";

import melioraLogo from '../../images/meliora/meliora.svg';

const FloatingParticle = () => {
    const [init, setInit] = useState(false);

    // This should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // Load only the slim version of tsParticles
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 1,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#F4AC56",
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 200,
                                },
                                value: 30,
                            },
                            opacity: {
                                value: 0.5,
                                animation: {
                                    enable: true,
                                    speed: 1, // Adjust the speed of the glow animation
                                    minimumValue: 0.2, // Minimum opacity value
                                    sync: false, // Make the animation sync for each particle
                                },
                            },
                            shape: {
                                type: "star",
                                star: {
                                    sides: 5,
                                },
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                            shadow: {
                                enable: true,
                                color: {
                                    value: "#F4AC56",
                                },
                                offset: {
                                    x: 0,
                                    y: 0,
                                },
                                blur: 15, // Increase blur for a more pronounced glow effect
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default FloatingParticle;
