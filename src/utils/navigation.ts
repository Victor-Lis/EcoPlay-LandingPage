const getDown = (id: string) => {
  const element = document.getElementById(id);
  return (element?.offsetTop || 0) + (element?.clientHeight || 0);
};

export const isMoreDown = (id: string) => {
  return window.scrollY > getDown(id);
};

export const isMoreUp = (id: string) => {
    const element = document.getElementById(id)
    return window.scrollY < (element?.offsetTop || 0)
};

export const goTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
