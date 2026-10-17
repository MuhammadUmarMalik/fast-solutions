import { makeAutoObservable } from "mobx";
class UIStore {
  menuOpen = false; openFaq: number | null = 0; activeStep = 0;
  constructor() { makeAutoObservable(this); }
  toggleMenu = () => { this.menuOpen = !this.menuOpen; };
  closeMenu = () => { this.menuOpen = false; };
  toggleFaq = (i: number) => { this.openFaq = this.openFaq === i ? null : i; };
  setStep = (i: number) => { this.activeStep = i; };
}
export const uiStore = new UIStore();
