export const getRandomName = () => {
  const names = [
    "Jaxson Dias",
    "Lucas Silva",
    "Carlos Souza",
    "Marcos Oliveira",
    "Gustavo Rocha",
    "Ricardo Lima",
    "Felipe Martins",
    "Eduardo Costa",
    "Thiago Almeida",
    "Rafael Pereira",
    "Pedro Santos",
    "Bruno Carvalho",
    "Gabriel Almeida",
    "Vinícius Costa",
    "André Lima",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

export const getRandomAvatar = () => {
  const randomImage = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`;
  return randomImage;
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
