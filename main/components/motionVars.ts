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
    color: "#ea580c",
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
    color: "#ea580c",
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
    color: "#ea580c",
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
      delay: 0.5,
    },
  },

  NavProjetoHover: {
    scale: 1.2,
    originX: 0,
    color: "#ea580c",
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
      delay: 0.5,
    },
  },

  NavContatoHover: {
    scale: 1.2,
    originX: 0,
    color: "#ea580c",
  },
};

// Variáveis da página principal

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
      delayChildren: 0.5,
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
    color: "#ea580c",
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
    backgroundColor: "var(--laranja-600)",
    borderColor: "var(--laranja-600)",
    scale: 1.1,
    transition: {
      duration: 0.6,
    },
  },
};
