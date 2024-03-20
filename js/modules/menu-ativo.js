// export default function menuAtivo() {
// const links = document.querySelectorAll(".menu a");
// const activeClass = 'ativo';
// links[0].classList.add(activeClass);
// links[0].nextElementSibling.classList.add(activeClass);

// function ativarLink(link) {
//   const url = location.href;
//   const href = link.href;
//   if (url.includes(href)) {
//     link.classList.add(activeClass);
//   }
// } 
// links.forEach(ativarLink);
// }

export default function menuAtivo() {
  const links = document.querySelectorAll(".menu a");
  const activeClass = 'ativo';
  
  function ativarLink(link) {
    const url = new URL(window.location.href);
    const href = new URL(link.href);

    if (url.href === href.href) {
      link.classList.add(activeClass);
    } else {
      link.classList.remove(activeClass);
    }
  } 

  links.forEach(link => {
    ativarLink(link);
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove(activeClass));
      link.classList.add(activeClass);
    });
  });
}
