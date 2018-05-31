let num_nb;
if (window.innerWidth > 1024) {
  num_nb = Math.round(Math.sqrt(window.innerWidth * 25));
}
if (window.innerWidth > 768) {
  num_nb = Math.round(Math.sqrt(window.innerWidth * 10));
} else {
  num_nb = Math.round(Math.sqrt(window.innerWidth * 3));
}

export const particlesConfig = {
  particles: {
    number: {
      value: num_nb,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ['#dcd0c0', '#c0b382', '#474747', '#dddddd', '#515152']
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.55,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#bdbdbd',
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true,
      onresize: {
        enable: true,
        density_auto: true,
        density_area: 400
      }
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    },
    retina_detect: true
  }
};
