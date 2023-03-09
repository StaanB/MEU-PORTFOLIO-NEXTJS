// Váriaveis da Navbar

export const NavAnimations = {
  nomeLaranjaFora: {
    opacity: 0,
    x: -200,
  },

  nomeLaranjaEmTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 120,
      duration: 1.4,
    },
  },

  nomeLaranjaHover: {
    scale: 1.1,
  },

  NavInicioFora: {
    opacity: 0,
    x: 200,
  },

  NavInicioTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.1,
    },
  },

  NavInicioHover: {
    scale: 1.2,
    originX: 0,
  },

  NavSobreFora: {
    opacity: 0,
    x: 200,
  },

  NavSobreTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.3,
    },
  },

  NavSobreHover: {
    scale: 1.2,
    originX: 0,
  },

  NavHabilidadesFora: {
    opacity: 0,
    x: 200,
  },

  NavHabilidadesTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.5,
    },
  },

  NavHabilidadesHover: {
    scale: 1.2,
    originX: 0,
  },

  NavProjetoFora: {
    opacity: 0,
    x: 200,
  },

  NavProjetoTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.7,
    },
  },

  NavProjetoHover: {
    scale: 1.2,
    originX: 0,
  },

  NavContatoFora: {
    opacity: 0,
    x: 200,
  },

  NavContatoTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.9,
    },
  },

  NavContatoHover: {
    scale: 1.2,
    originX: 0,
  },
};

// Variáveis da página principal

// Animaçõs dos temas de cores
export const ColorsVars = {
  coresOcultas: {
    opacity: 0,
    y: 1000,
  },

  coresEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 0.7,
      delayChildren: 0.3,
    },
  },

  bandeiraFora: {
    opacity: 0,
    y: 1000,
  },

  bandeiraEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 0.5,
    },
  },

  amareloFora: {
    opacity: 0,
    y: 1000,
  },

  amareloEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 0.7,
    },
  },

  verdeFora: {
    opacity: 0,
    y: 1000,
  },

  verdeEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 0.9,
    },
  },

  laranjaFora: {
    opacity: 0,
    y: 1000,
  },

  laranjaEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 1.1,
    },
  },

  azulFora: {
    opacity: 0,
    y: 1000,
  },

  azulEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 1.3,
    },
  },
  
  vermelhoFora: {
    opacity: 0,
    y: 1000,
  },

  vermelhoEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 1.7,
    },
  },
  
};

// Animações do Herobanner

export const HeroBannerVars = {
  containerOculto: {
    opacity: 0,
    y: 1000,
  },

  containerEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 0.7,
      delayChildren: 0.3,
    },
  },

  containerSaindo: {
    y: "-100vw",
  },

  fotoHover: {
    scale: 0.9,
  },

  h1Fora: {
    opacity: 0,
    y: 1000,
  },

  h1EmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 0.7,
    },
  },

  h1Clicado: {
    letterSpacing: "2px",
  },

  pFora: {
    opacity: 0,
    y: 1000,
  },

  pEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 0.9,
    },
  },

  ulFora: {
    opacity: 0,
    y: 1000,
  },

  ulEmTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 1.1,
    },
  },
};

// Animações do About me

export const CardsAnimation = {
  inView: {
    scale: [1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1],
    transition: {
      duration: 5,
    },
  },

  ButtonAnimation: {
    scale: 1.1,
    transition: {
      duration: 0.6,
    },
  },
};
