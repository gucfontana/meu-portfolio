import { NgClass, NgForOf } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { LinkNavbar } from "./models/link-navbar";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  public colapsarNavbar: boolean = false;
  public isScrolled: boolean = false;

  public linksNavbar: LinkNavbar[] = [
    { href: "#sobre", texto: "Sobre" },
    { href: "#habilidades", texto: "Habilidades" },
    { href: "#stack", texto: "Stack" },
    { href: "#experiencias", texto: "Experiências" },
    { href: "#portfolio", texto: "Portfólio" },
  ];

  // Detecta o scroll da página para adicionar efeitos na navbar
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Verifica qual link está ativo baseado na seção atual
  isActive(href: string): boolean {
    if (!href) return false;

    // Remove o # do href para comparação
    const section = href.replace('#', '');

    // Pega todas as seções
    const sections = document.querySelectorAll('section');

    for (let i = 0; i < sections.length; i++) {
      const element = sections[i];
      if (element.id === section) {
        const rect = element.getBoundingClientRect();
        // Considera ativo se a seção estiver visível na viewport
        return rect.top <= 150 && rect.bottom >= 150;
      }
    }

    return false;
  }

  // Fecha o menu mobile após clicar em um link
  closeMenu(): void {
    if (window.innerWidth < 992) { // 992px é o breakpoint do bootstrap para lg
      this.colapsarNavbar = false;
    }
  }

  // Scroll suave para as seções
  scrollToSection(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu();
    }
  }
}
