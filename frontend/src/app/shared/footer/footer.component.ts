import { Component } from '@angular/core';
import { BaseComponent } from 'app/base.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends BaseComponent {

  date: Date = new Date();

  constructor(
    public toastr: ToastrService,
    public router: Router
  ) {
    super(toastr, router);
  }

  protected onInit() {

  }

  protected onAfterViewInit(): void {
  }
  protected onDestroy(): void {
  }

}
