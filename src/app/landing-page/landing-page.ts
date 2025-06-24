import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing-page',
  imports: [NgFor, RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  title = 'SnapFace';
  subtitle = 'Partagez vos plus beaux moments avec le monde entier';
  primaryButtonText = 'Commencer';
  secondaryButtonText = 'En savoir plus';
  
  featuresTitle = 'Pourquoi choisir SnapFace ?';
  
  features: Feature[] = [
    {
      icon: '🚀',
      title: 'Rapide et Simple',
      description: 'Partagez vos photos en quelques clics seulement'
    },
    {
      icon: '🎨',
      title: 'Interface Moderne',
      description: 'Une expérience utilisateur élégante et intuitive'
    },
    {
      icon: '💝',
      title: 'Interactions Sociales',
      description: 'Likez et commentez les photos de vos amis'
    },
    {
      icon: '🔒',
      title: 'Sécurisé',
      description: 'Vos données sont protégées et sécurisées'
    }
  ];
  
  ctaTitle = 'Prêt à commencer ?';
  ctaDescription = 'Rejoignez des milliers d\'utilisateurs qui partagent déjà leurs moments';
  ctaButtonText = 'Créer mon compte';
}
