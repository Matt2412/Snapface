import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  TabSnap!: FaceSnap[];

  ngOnInit() {
    this.TabSnap = [
      {
        title: 'Mission Engie',
        description: "J'ai intégré une plateforme appelée Darwin qui s'occupe du monitoring des parcs éoliens, solaires, hydroélectriques et biogaz à travers le monde. Au sein d'une équipe Testing, j'étais chargé de créer des tests automatisés sur une application de gestion des parcs.",
        imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.leTmMc6QKbax8JmBNQvTBQHaDa?pid=ImgDet&rs=1',
        dateDebut: new Date("2023-02-15"),
        dateFin: new Date("2023-07-01"),
        snaps: -1,
        location: 'Lyon',
        technos: "C#/.NET, Selenium, Azure Devops, Git"
        },
        {
          title: 'Mission EDF',
          description: "Intégré dans la DSIT SUP, au sein d'une équipe Outillages. J'ai travaillé dans un environnement technique en méthode Agile où j'ai eu l'occasion de travailler sur de nombreux sujets différents.",
          imageUrl: 'https://tribunedelyon.fr/wp-content/uploads/sites/5/2020/12/quartier-girondins-lyon.png?x63873',
          dateDebut: new Date("2022-05-15"),
          dateFin: new Date("2022-12-25"),
          snaps: 200,
          location: 'Lyon',
          technos: "C#, PHP, SQL, Javascript, HTML, CSS"
        },
        {
          title: 'Stage Sopra Steria',
          description: "Intégration au sein d’un centre de service travaillant sur le maintien opérationnel de plusieurs applications médicales de la SNCF. J’ai eu l’occasion de travailler sur de la gestion de projet, du développement et de la rédaction de cas de tests.",
          imageUrl: 'https://media.glassdoor.com/l/3d/dd/c8/67/batiment.jpg',
          dateDebut: new Date("2021-04-15"),
          dateFin: new Date("2021-09-15"),
          snaps: 123,
          location: 'Limonest',
          technos: "Python, Selenium, Robot Framework"
        },
        {
          title: 'Stage Sanofi',
          description: "Assistance à des utilisateurs au sein d’une équipe R&D. Développement de macros en VBA, rédaction de documentation et correction de problèmes informatiques.",
          imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.ucXONvL2cRwhTLhLyso1kgHaDt?pid=ImgDet&rs=1',
          dateDebut: new Date("2019-05-15"),
          dateFin: new Date("2019-08-15"),
          snaps: 0,
          location: "Marcy L'étoile",
          technos: "VBA"
        },
        {
          title: "M2 Management et Stratégie des Systèmes d'Information",
          description: "Offre de formation répondant aux besoins du marché en conseil et audit des systèmes d’information, offrant aux étudiants les compétences nécessaires à la maîtrise d’ouvrage dans le domaine des S.I sur des aspects stratégiques, managériaux, fonctionnels et technologiques.",
          imageUrl: 'https://facdedroit.univ-lyon3.fr/medias/photo/manufacture-des-tabacs_1512655251112-jpg?ID_FICHE=100177',
          dateDebut: new Date("2020-09-03"),
          dateFin: new Date("2021-09-03"),
          snaps: 50,
          location: 'Lyon',
          technos: ""
        },
        {
          title: "M1 Management des Risques des Systèmes d'Information",
          description: "Le parcours Management des risques des systèmes d'information (MRSI) labellisé SecNumedu par l'ANSSI vise à former des gestionnaires du risque et sécurité des systèmes d'information, notamment en cybersécurité organisationnelle.",
          imageUrl: 'https://www.pagesjaunes.fr/media/agc/resize/300x400/93/d2/85/00/00/93/2a/bd/e7/dd/5d3993d2850000932abde7dd/5d3993d2850000932abde7de.jpg',
          dateDebut: new Date("2019-09-03"),
          dateFin: new Date("2020-09-03"),
          snaps: 0,
          location: 'Poitiers',
          technos: "Kali Linux"
        },
        {
          title: 'Licence informatique',
          description: "L’objectif de la licence mention Informatique est de donner les bases nécessaires pour la poursuite d’études prioritairement dans le domaine de l’informatique.",
          imageUrl: 'https://portaildoc.univ-lyon1.fr/medias/photo/buex-1-_1611919385963-JPG',
          dateDebut: new Date("2015-09-03"),
          dateFin: new Date("2019-09-03"),
          snaps: 777,
          location: 'Lyon',
          technos: "C++, C, Javascript, Java, HTML, CSS, PHP, Scheme, LC3, SQL"
        }
    ];
  }
}
