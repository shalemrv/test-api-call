import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	usersList: any[];

	constructor(private http: HttpClient) {
		this.usersList = [];
	}

	getUsers() {
		let singleStreamObservable = this.http.get(
			`https://randomuser.me/api?results=25`
		);

		singleStreamObservable.subscribe((res: any) => {
			console.log('Service');
			console.log(res);
			this.usersList = res?.results;
		});

		return singleStreamObservable;
	}
}
