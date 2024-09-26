import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordstrengthchecker',
  templateUrl: './passwordstrengthchecker.component.html',
  styleUrl: './passwordstrengthchecker.component.css'
})
export class PasswordStrengthCheckerComponent {
  password: string = '';
  strengthMessage: string = '';

  checkPasswordStrength() {
    const strength = this.calculateStrength();

    this.strengthMessage = this.getStrengthMessage(strength);
  }

  private calculateStrength(): number {
    let strength = 0;
    if (this.password.length >= 8) strength++;
    if (/[A-Z]/.test(this.password)) strength++;
    if (/[0-9]/.test(this.password)) strength++;
    if (/[\W_]/.test(this.password)) strength++;
    return strength;
  }

  private getStrengthMessage(strength: number): string {
    switch (strength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
        return 'Moderate';
      case 3:
      case 4:
        return 'Strong';
      default:
        return '';
    }
  }
}
