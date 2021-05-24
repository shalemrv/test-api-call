import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from './../users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
	usersList!: any[];

	constructor(private UsersService: UsersService, private router: Router) {
		this.usersList = [];
	}

	ngOnInit(): void {
		this.UsersService.getUsers().subscribe((res: any) => {
			this.usersList = res?.results;
		});
	}
}
