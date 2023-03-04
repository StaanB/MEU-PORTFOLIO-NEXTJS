// Váriaveis da Navbar

export const navTitulo = {
  oculto: {
    opacity: 0,
    x: -200,
  },

  emTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 120,
      duration: 1.4,
    },
  },
};

export const navInicio = {
  oculto: {
    opacity: 0,
    x: 200,
  },

  emTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.1,
    },
  },
};

export const navSobre = {
  oculto: {
    opacity: 0,
    x: 200,
  },

  emTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.3,
    },
  },
};

export const navHabilidades = {
  oculto: {
    opacity: 0,
    x: 200,
  },

  emTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.5,
    },
  },
};

export const navProjetos = {
  oculto: {
    opacity: 0,
    x: 200,
  },

  emTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.7,
    },
  },
};

export const navContato = {
  oculto: {
    opacity: 0,
    x: 200,
  },

  emTela: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 2,
      delay: 0.9,
    },
  },
};

// Variáveis da página principal

export const mainContainer = {
  oculto: {
    opacity: 0,
    y: 500,
  },

  emTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      duration: 0.7,
      delayChildren: 0.5,
    },
  },

  exit: {
    y: "-100vw"
  }
};

export const h1MainContainer = {
  oculto: {
    opacity: 0,
    y: 500,
  },

  emTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 0.7,
    },
  },
};

export const pMainContainer = {
  oculto: {
    opacity: 0,
    y: 500,
  },

  emTela: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.7,
      delay: 0.9,
    },
  },
};

export const ulMainContainer = {
  oculto: {
    opacity: 0,
    y: 500,
  },

  emTela: {
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
