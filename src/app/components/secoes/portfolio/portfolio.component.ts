import { Component } from "@angular/core";
import { NgClass, NgForOf } from "@angular/common";
import { ItemPortfolio } from "./models/item-portfolio";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: "./portfolio.component.html",
})
export class PortfolioComponent {
  readonly itensPortfolio: ItemPortfolio[] = [
    {
      href: "https://gucfontana.github.io/note-keeper/dashboard",
      imgUrl: "assets/foto-notekeeper.png",
      descricao: "NoteKeeper",
      detalhes: "Aplicativo para gerenciar notas de forma eficiente.",
    },
    {
      href: "https://gucfontana.github.io/gerenciador-tmdb/filmes",
      imgUrl: "assets/foto-tmdb.png",
      descricao: "TMDB",
      detalhes: "Gerenciador de filmes utilizando a API do TMDB.",
    },
    {
      href: "https://pokedex-angular-sepia.vercel.app/listagem",
      imgUrl: "assets/foto-pokedex.png",
      descricao: "Pokedex",
      detalhes: "Gerenciador de pokemons utilizando a API do Pokemon.",
    },
    {
      href: "https://github.com/gucfontana/e-agenda",
      imgUrl: "assets/foto-eagenda.png",
      descricao: "e-Agenda",
      detalhes: "Gerenciador de contatos, compromissos e tarefas.",
    },
  ];
}
