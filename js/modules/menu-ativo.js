export default function menuAtivo() {
const links = document.querySelectorAll(".menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
    ativarLink();
  }
} 

links.forEach(ativarLink);
}