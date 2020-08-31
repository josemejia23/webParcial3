import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from './../cargar-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) {
    _CargarScripts.Carga(["jquery.min","jquery-migrate-3.0.1.min","jquery.waypoints.min","jquery.stellar.min","owl.carousel.min",,"js/scrollax.min","main","popper.min","bootstrap.min","jquery.easing.1.3","jquery.magnific-popup.min","jquery.animateNumber.min","google-map"]);
  }

  ngOnInit() {
  }

}


