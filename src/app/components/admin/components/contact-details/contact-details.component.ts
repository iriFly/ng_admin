import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  id!: number;
  user!: Observable<User>;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) {
   }

  ngOnInit(): void {
    // this.activateRoute.params.subscribe((params) => this.id = params?.['id']);
    // this.user = this.adminService.getPerson(this.id);

    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user']))
  }

}
