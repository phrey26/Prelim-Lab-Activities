import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  //methods
  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  //control properties
  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';

  //country
  countryList: string[] = ["Philippines", "South Korea", "Japan", "USA", "Canada"]

  //chaewonvariants
  chaeVarList: any[] = [
    {chae_Var: 'Chaebron', from: 'Lakers Edition', isActive:false},
    {chae_Var: 'Chae-1', from: 'Overwatch Era', isActive:false},
    {chae_Var: 'Kim Chae-Won', from: 'Pre-Debut', isActive:false},
    {chae_Var:'Chaewon', from: 'Le Serrafim leader', isActive:true},
    {chae_Var: 'CHAEWON RAHHHH', from: 'United States of Chaewon', isActive:false},
  ]
}
