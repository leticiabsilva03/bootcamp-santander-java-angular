import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
 {

	quantidade: number = 0

  constructor() { }

	adicionar(){
		this.quantidade += 1
	}
	decrementar(){
		this.quantidade -= 1
	}

	// checked -> content -> view

	// quando o primeiro conteúdo é iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}

	// depois da inicialização da view
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit")
	}

	// após alguma alteração, verifica o conteúdo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked")
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked")
	}

	ngDoCheck(): void {
		console.log("ngDoCheck")
	}

	  ngOnInit(): void {
			console.log("ngOnInit")
  }

	ngOnDestroy(): void {
		console.log("Goodbye, my friend!")
	}

}
