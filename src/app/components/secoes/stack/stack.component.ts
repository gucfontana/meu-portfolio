import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StackItem {
  icone: string;
  titulo: string;
  nivel?: number;
  tecnologias?: string[];
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  public itensStack: StackItem[] = [
    {
      icone: 'bi bi-code-slash',
      titulo: 'Frontend',
      nivel: 55,
      tecnologias: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap']
    },
    {
      icone: 'bi bi-database',
      titulo: 'Backend',
      nivel: 85,
      tecnologias: ['.NET Core', 'C#', 'SQL Server', 'Entity Framework']
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
      document.querySelectorAll('.stack-item').forEach(card => {
        observer.observe(card);
      });
    }, 0);
  }
}
