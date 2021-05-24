import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from './../users.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
	index: number;
	selectedUser: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private UsersService: UsersService
	) {}

	ngOnInit(): void {
		this.index = parseInt(this.route.snapshot.params['id']);

		let notNumber = typeof this.index != 'number';

		if (notNumber) {
			console.log(`Invalid User ${this.index}`);
			this.router.navigateByUrl('');
			return;
		}

		if (this.index > this.UsersService.usersList.length) {
			console.log('Invalid User');
			this.router.navigateByUrl('');
			return;
		}

		this.selectedUser = this.UsersService.usersList[this.index];
	}
}
