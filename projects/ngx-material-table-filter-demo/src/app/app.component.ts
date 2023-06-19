import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  exampleDataSource = new MatTableDataSource([
    { email: '1', username: 'user1', password: 'password1', description: 'description1', someSelect: '1' },
    { email: '', username: 'user2', password: 'password2', description: 'description2', someSelect: '2' },
    { email: '', username: 'user3', password: 'password3', description: 'description3', someSelect: '3' },
  ]);
}
