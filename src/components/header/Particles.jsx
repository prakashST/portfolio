import React from 'react'
import Particle from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const Particles = () => {
  const particleInit = async (main) => await loadFull(main)
  const particlesOptions = {
    fullScreen: {
      enable: false,
    },
    particles: {
      color: {
        value: '#fff',
      },

      links: {
        color: '#',
        distance: 130,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 6,
        straight: true,
      },
      number: {
        density: {
          enable: true,
          area: 900,
        },
        value: 30,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 10,
          color: '#fff',
        },
      },
      size: {
        anim: {
          enable: true,
          size_min: 0.5,
          speed: 15,
        },
      },
    },
  }

  return <Particle init={particleInit} options={particlesOptions} />
}

export default Particles
