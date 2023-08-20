import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../services/url.service';
import { AppStateService } from '../services/app-state.service';
import UrlDetailsInterface from '../interfaces/url-details.interface';

@Component({
  selector: 'app-url-info',
  templateUrl: './url-info.component.html',
  styleUrls: ['./url-info.component.css']
})
export class UrlInfoComponent implements OnInit {
  url: UrlDetailsInterface | undefined;
  constructor(private route: ActivatedRoute, private urlService: UrlService, private state: AppStateService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      let stringId: string = p["id"];
      let id = parseInt(stringId);
      this.urlService.getUrlById(id, this.state.getToken() ?? "")
        .subscribe(url => this.url = url,
          err => this.state.setError(err));
    })
  }
}
