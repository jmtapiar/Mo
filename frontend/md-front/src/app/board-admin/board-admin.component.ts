import { UserService } from '../services/user.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

/** @title Responsive sidenav */

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  content: string;
  currentUser: any;

  fillerNav = Array.from({length: 2}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 2}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;
  bandera:boolean = false;

  constructor(private token: TokenStorageService, private userService: UserService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    console.log("Recupera el usuario   : "+ this.token.getUser());
    if (this.currentUser = this.token.getUser())
      this.bandera = true;
      
  }
  ngOnDestroy(): void {
    console.log("Recupera el usuario   : "+ this.token.getUser());
    if (this.bandera)
    {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}


}

