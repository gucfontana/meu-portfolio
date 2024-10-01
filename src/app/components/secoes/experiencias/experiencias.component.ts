import { Component } from "@angular/core";
import { ItemExperiencias } from "./models/item-experiencias";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-experiencias",
  standalone: true,
  imports: [NgForOf],
  templateUrl: "./experiencias.component.html",
})
export class ExperienciasComponent {
  experiencias: ItemExperiencias[] = [
    {
      duracaoExperiencia: "Mar/2024 - Atualmente",
      imgUrl: "assets/logo-academia.png",
      alt: "Logo da Academia do Programador",
      titulo: "Aluno",
      descricao: `
        <p>
          Aluno do curso de programação da Academia do Programador.
        </p>

        <p>
          <span class="app-texto-principal fw-semibold">Stack:</span> .NET
          Framework, .NET 8, Entity Framework Core, ASP.NET Core MVC,
          ASP.NET Web API, MSTest, Docker, Angular.
        </p>
      `,
    },
  ];
}
