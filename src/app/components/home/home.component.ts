import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { TransfersService } from 'src/app/services/transfers.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { BanksService } from 'src/app/services/banks.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  account: any = {};
  newTransfer: any = {};
  newContact: any = {};
  transfers: any = [];
  contacts: any = [];
  banks: any = [];
  formModal: any;

  constructor(
    private accountService: AccountService,
    private transfersService: TransfersService, 
    private contactsService: ContactsService,
    private banksService: BanksService
  ) {}

  ngOnInit(): void {
    this.accountService.getAccount().subscribe(
      (res) => {
        this.account = res.data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.transfersService.getTransfers().subscribe(
      (res) => {
        this.transfers = res.data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.contactsService.getContacts().subscribe(
      (res) => {
        this.contacts = res.data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.banksService.getBanks().subscribe(
      (res) => {
        this.banks = res.Banco;
      },
      (error) => {
        console.log(error);
      }
    );
    
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  openModal() {
    this.formModal.show();
  }

  closeModal() {
    this.formModal.hidden();
  }

  createContact() {
    this.contactsService.createContact(this.newContact);
  }
}
