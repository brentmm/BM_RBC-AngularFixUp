import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Account} from "../../../../../libs/shared/services/src/lib/account";
import {AccountService} from "../../../../../libs/shared/services/src/lib/account.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent {
  userAccounts: Account[] = []
  userAccount: any = '';
  userID: any
  constructor(private accountService: AccountService, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.userAccounts = accounts;
    });
    this.route.params.subscribe(params=>{
      this.userID = params['id'];
    })
    this.userAccount = this.userAccounts.find(({id})=> id === this.userID);
  }


}
