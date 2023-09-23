export const createLoader = () => {
  const loaderWrapper = document.createElement('div');
  const loader = document.createElement('div');
  const inner1 = document.createElement('span');
  const inner2 = document.createElement('span');
  const inner3 = document.createElement('span');
  const inner4 = document.createElement('span');

  loaderWrapper.classList.add('loader-wrapper');
  loader.classList.add('loader');
  inner1.classList.add('loader-inner-1');
  inner2.classList.add('loader-inner-2');
  inner3.classList.add('loader-inner-3');
  inner4.classList.add('loader-inner-4');


  loader.append(inner1, inner2, inner3, inner4);
  loaderWrapper.append(loader);


  return loaderWrapper;
};

