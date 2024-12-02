import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemHabilidades } from "./models/item-habilidades";

@Component({
  selector: "app-habilidades",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./habilidades.component.html",
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  public itensHabilidades: ItemHabilidades[] = [
    {
      icone: "bi-code-slash",
      titulo: "Desenvolvimento Frontend",
      descricao: "Experiência em criar interfaces modernas e responsivas com Angular",
      nivel: 55
    },
    {
      icone: "bi-server",
      titulo: "Desenvolvimento Backend",
      descricao: "Experiência em desenvolvimento com ASP.NET MVC, APIs RESTful e integração com bancos de dados",
      nivel: 85
    },
  ];

  ngOnInit(): void {
    this.setupScrollAnimation();
  }

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

    setTimeout(() => {
      document.querySelectorAll('.skill-item').forEach(card => {
        observer.observe(card);
      });
    }, 0);
  }

  // Método opcional para categorizar habilidades
  getCategorizedSkills() {
    return {
      technical: this.itensHabilidades.filter(skill => skill.categoria === 'technical'),
      soft: this.itensHabilidades.filter(skill => skill.categoria === 'soft'),
      tools: this.itensHabilidades.filter(skill => skill.categoria === 'tools')
    };
  }
}
