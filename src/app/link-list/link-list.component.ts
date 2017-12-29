import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Link} from '../types';

// 1
import {ALL_LINKS_QUERY, AllLinkQueryResponse} from '../graphql';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  allLinks: Link[] = [];
  loading = false;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {

    // 4
    this.apollo.query({
      query: ALL_LINKS_QUERY
    }).subscribe((response: any) => {
      // 5
      this.allLinks = response.data.allLinks;
      this.loading = response.loading;
    });

  }

}
