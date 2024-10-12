import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    {url: '/biribiri.jpg',
     title: 'Biribiri State Park',
     titleLink: 'https://maps.app.goo.gl/LiEXPtqffvzbUidr8',
     description: 'Biribiri State Park was created in 1998 and is located 13km from the city of Diamantina in the state of Minas Gerais - Brazil. The main attractions are waterfalls, natural wells and the village of Biribiri.'
    },
    {url: '/caraca.jpg',
     title: 'Caraça Sanctuary',
     titleLink: 'https://maps.app.goo.gl/GEUbopqBoxazUpTH6',
     description: 'Caraça is the name of a stretch of the Serra do Espinhaço, which resembles the image of a giants face lying down, located in the towns of Catas Altas and Santa Bárbara, in the state of Minas Gerais - Brazil.  The Caraça Sanctuary was founded in 1774. It was the site of a school where great personalities from Brazilian history studied, such as Brazilian presidents Arthur Bernardes and Affonso Pena.'
    },
    {url: '/diamantina.jpg',
     title: 'Diamantina City',
     titleLink: 'https://maps.app.goo.gl/pC2gH7EpSfEmCKe28',
     description: 'Founded at the beginning of the 18th century, Diamantinas origins were linked to the discovery of diamonds in the region, which boosted its development and turned it into an important mining center. To this day, the city preserves a colonial architectural ensemble, with manor houses, churches and cobbled streets that reflect its historic past. In recognition of its cultural and historical importance, Diamantina was declared a UNESCO World Heritage Site in 1999.'
    },
    {url: '/mariana.jpg',
     title: 'Mariana City',
     titleLink: 'https://maps.app.goo.gl/hvww6Mf7mkdR3ufRA',
     description: 'Mariana is known as the primate of Minas Gerais, as it was the first town, city, bishopric and capital of Minas Gerais. In the 18th century, it was one of the largest gold-producing cities for the Portuguese Empire. It became the first capital of Minas Gerais by taking part in a dispute in which the town that collected the most gold would be elevated to the status of a city, making it the capital of the then Captaincy of Minas Gerais.'
    },
    {url: '/ouro-preto.jpg',
     title: 'Ouro Preto City',
     titleLink: 'https://maps.app.goo.gl/Kc2HzregEzm4t5t76',
     description: 'Ouro Preto is located in one of the main areas of the gold cycle. Officially, 800 tons of gold were sent to Portugal in the 18th century, not counting what circulated illegally and what remained in the colony. The city became one of the most populous in the Americas, with around 40,000 people in 1730 and, decades later, 80,000. At that time, the population of New York was less than half that number of inhabitants and the population of São Paulo was no more than 8,000.'
    },
    {url: '/peruacu.jpg',
     title: 'Peruaçu Caves National Park',
     titleLink: 'https://maps.app.goo.gl/i3hDUKt6F2wx362s6',
     description: 'The Peruaçu Caves National Park is a conservation unit created by decree on September 21, 1999, whose main objective is to protect the geological and archaeological heritage found in the northern region of Minas Gerais. It is home to over 140 caves, more than 80 archaeological sites and cave paintings, as well as the indigenous Xakriabás tribe.'
    },
    {url: '/rio-preto.jpg',
     title: 'Rio Preto State Park',
     titleLink: 'https://maps.app.goo.gl/BBRLNXqVXYSLwQwR8',
     description: 'The Rio Preto State Park, created on September 27, 1993, is located in the city of São Gonçalo do Rio Preto, in the Espinhaço mountain range complex, Minas Gerais, Brazil. The park is open to visitors with several trails. It is also home to ground zero of the Royal Road and is part of the Diamond Tourist Circuit.'
    },
    {url: '/serra-do-cipo.jpg',
     title: 'Serra do Cipó National Park',
     titleLink: 'https://maps.app.goo.gl/Bvc5rpWLGh9mBHJR8',
     description: 'The Serra do Cipó National Park is a Brazilian conservation unit located in the Espinhaço mountain range in Minas Gerais. Its geological history is complex and dates back to the Precambrian period, with its sandy rocks having been formed by marine deposits over 1.7 billion years ago. There are a total of 100,000 hectares of savannahs, rupestrian fields and woods, as well as rivers, waterfalls, canyons, caves, preserved archaeological sites and many adventure sports.'
    },
    {url: '/serro.jpg',
     title: 'Serro City',
     titleLink: 'https://maps.app.goo.gl/ugD4mAy5MNFrFGAX8',
     description: 'Located in the center-northeast of Minas Gerais, in the central region of the Espinhaço mountain range, Serro is part of the Diamond Trail and the Estrada Real, a legacy of the mines that attracted the bandeirantes from São Paulo and the Northeast in the 18th century. Surrounded by mountains, hills, rivers and waterfalls, Serro is a destination for lovers of historical and ecological tourism.'
    },
    {url: '/tabuleiro.jpg',
     title: 'Tabuleiro Waterfall',
     titleLink: 'https://maps.app.goo.gl/xzx3tZaXLvqbUo4Z9',
     description: 'The Tabuleiro Waterfall is a Brazilian waterfall located in the Espinhaço mountain range, in the town of Conceição do Mato Dentro. It is the highest in Minas Gerais and the third highest in Brazil. There are 273 meters of free fall formed from a wall of monumental beauty.'
    }
  ];

  selectedImage: {url: string, title: string, titleLink: string, description: string} = this.images[0];
  originalImageIndex = 0;

  get filteredImages() {
    return this.images.filter((_, index) => index !== this.originalImageIndex);
  }

  onImageSelected(image: {url: string, title: string, titleLink: string, description: string}) {
    const currentImage = this.selectedImage;
    const clickedImageIndex = this.images.indexOf(image);

    //
    this.selectedImage = image;
    this.images.splice(this.originalImageIndex, 1, currentImage);
    this.originalImageIndex = clickedImageIndex;
  }

  //Method to open the link in a new tab by clicking on the title
  openTitleLink(url: string) {
    window.open(url, '_blank');
  }
}
