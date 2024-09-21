const getBottom = (id: string) => {
  const element = document.getElementById(id);
  return (element?.offsetTop || 0) + (element?.clientHeight || 0);
};

export const isMoreDown = (id: string) => {
  return window.scrollY > getBottom(id);
};

const getTop = (id: string) => {
  const element = document.getElementById(id);
  return (element?.offsetTop || 0);
};

export const isMoreUp = (id: string) => {
  return window.scrollY < getTop(id);
};

export const goTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
