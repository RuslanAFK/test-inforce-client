import { Component } from '@angular/core';
import UrlInterface from '../interfaces/url.interface';
import { UrlService } from '../services/url.service';
import { OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-urls-table-view',
  templateUrl: './urls-table-view.component.html',
  styleUrls: ['./urls-table-view.component.css']
})
export class UrlsTableViewComponent implements OnInit {
  urls: UrlInterface[] = [];

  constructor(private urlService: UrlService, public state: AppStateService, private router: Router) {
  }

  ngOnInit(): void {
    this.urlService.getAllUrls()
      .subscribe(urls => this.urls = urls, err => this.state.setError(err.message));
  }

  deleteUrl(id: number) {
    this.urlService.deleteUrl(id, this.state.getToken() ?? "")
      .subscribe(() => {
        this.urlService.getAllUrls()
        .subscribe(urls => this.urls = urls, err => this.state.setError(err.message));
      }, err => this.state.setError(err.message))
  }
  redirectToDetails(id: number) {
    this.router.navigate(["info/" + id]);
  }

  form = new FormGroup({
    fullAddress: new FormControl(''),
    description: new FormControl('')
  })

  onSubmit(e: Event) {
    e.preventDefault();
    this.urlService.addUrl(this.form.getRawValue(), this.state.getToken() ?? "")
      .subscribe(() => {
        this.urlService.getAllUrls()
        .subscribe(urls => this.urls = urls, err => this.state.setError(err.message));
      }, err => this.state.setError(err.message))
  }
}
