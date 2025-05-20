const images = ["basket.jpg", "smatchin.jpg", "mma.jpg", "kart.jpg"];
let i = 0;

function changeSlide(direction) {
  i += direction;
  if (i < 0) {
    i = images.length - 1;
  } else if (i >= images.length) {
    i = 0;
  }
  document.getElementById("monImage").src = images[i];
}

function afficher() {
  const contact = document.getElementById("coordonnées");
  contact.innerHTML = `
    <nav>
      <ul>
        <li><img src="telephone.png" width="15" height="15"> Téléphone : 07 59 54 24 97</li>
        <li><img src="arroba.png" width="15" height="15"> Email : Toavina.rakotoarinoro@gmail.com</li>
        <li><img src="cartes-et-drapeaux.png" width="15" height="15"> Adresse : 17 Bd Flandres Dunkerque 1940, 56100 Lorient</li>
        <li><img src="code postale.png" width="15" height="15"> Code postal : 56100, Lorient</li>
      </ul>
    </nav>
  `;
}

