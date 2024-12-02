import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemExperiencias } from "./models/item-experiencias";

@Component({
  selector: "app-experiencias",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./experiencias.component.html",
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {
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
      `,
      stack: [
        ".NET Framework",
        ".NET 8",
        "Entity Framework Core",
        "ASP.NET Core MVC",
        "ASP.NET Web API",
        "MSTest",
        "Docker",
        "Angular"
      ]
    },
    // adicionar mais experiências aqui
  ];

  // Propriedades para animação e filtros
  public isLoaded: boolean = false;
  public selectedFilter: string = 'all';

  ngOnInit(): void {
    // Inicia a animação após o componente carregar
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);

    // Configura o observer para animações no scroll
    this.setupScrollAnimation();
  }

  /**
   * Configura as animações baseadas no scroll da página
   */
  private setupScrollAnimation(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observa os cards para animação
    setTimeout(() => {
      document.querySelectorAll('.experience-card').forEach(card => {
        observer.observe(card);
      });
    }, 0);
  }

  /**
   * Formata a data para exibição
   * @param date string da data
   * @returns string formatada
   */
  formatDate(date: string): string {
    return date.replace(' - ', '–');
  }

  /**
   * Retorna todas as stacks únicas para o filtro
   */
  get uniqueStacks(): string[] {
    const stacks = new Set<string>();
    this.experiencias.forEach(exp => {
      exp.stack?.forEach(tech => stacks.add(tech));
    });
    return Array.from(stacks).sort();
  }

  /**
   * Filtra experiências baseado na stack selecionada
   */
  filterByStack(stack: string = 'all'): void {
    this.selectedFilter = stack;
    // A filtragem acontecerá no template
  }

  /**
   * Verifica se uma experiência deve ser mostrada baseado no filtro atual
   */
  shouldShowExperience(experience: ItemExperiencias): boolean {
    if (this.selectedFilter === 'all') return true;
    return experience.stack?.includes(this.selectedFilter) ?? false;
  }
}
