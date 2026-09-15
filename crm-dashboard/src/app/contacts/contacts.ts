import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class ContactsComponent {
  contacts = [
    { name: 'Aashain Milinda', company: 'Tech Solutions', email: 'aashain@gmail.com', phone: '+94 77 123 4567', dealsCount: '3 Deals' },
    { name: 'Ankita Perera', company: 'Global Ventures', email: 'ankita@gmail.com', phone: '+94 71 987 6543', dealsCount: '1 Deal' },
    { name: 'Sahan Rathnayake', company: 'Cloud Dynamics', email: 'sahan@gmail.com', phone: '+94 70 555 1234', dealsCount: '5 Deals' },
    { name: 'Kasun Kalhara', company: 'Apex Systems', email: 'kasun@apex.lk', phone: '+94 77 222 3344', dealsCount: '2 Deals' },
    { name: 'Dilini Fernando', company: 'Softlabs PLC', email: 'dilini@softlabs.com', phone: '+94 76 888 9900', dealsCount: '4 Deals' },
    { name: 'Nimali Silva', company: 'Virtusa Digital', email: 'nimali.s@virtusa.io', phone: '+94 71 444 5566', dealsCount: '2 Deals' },
    { name: 'Ruwan Jayasinghe', company: 'CodeGen Labs', email: 'ruwan@codegen.net', phone: '+94 78 111 2233', dealsCount: '6 Deals' },
    { name: 'Chathura De Silva', company: 'Synergen Health', email: 'chathura@synergen.lk', phone: '+94 75 333 4455', dealsCount: '3 Deals' },
    { name: 'Tharindu Wickramasinghe', company: 'IFS Technologies', email: 'tharindu@ifs.com', phone: '+94 77 999 0011', dealsCount: '2 Deals' },
    { name: 'Kavindi Perera', company: '99x Technology', email: 'kavindi@99x.io', phone: '+94 72 666 7788', dealsCount: '4 Deals' },
    { name: 'Pradeep Kumara', company: 'Dialog Axiata', email: 'pradeep.k@dialog.lk', phone: '+94 77 777 8899', dealsCount: '1 Deal' },
    { name: 'Buddhika Bandara', company: 'SLT Mobitel', email: 'buddhika@slt.lk', phone: '+94 71 123 9876', dealsCount: '3 Deals' },
    { name: 'Sanjaya Liyanage', company: 'Mitra Innovation', email: 'sanjaya@mitra.io', phone: '+94 70 888 1122', dealsCount: '2 Deals' },
    { name: 'Hasini Jayawardena', company: 'Sysco LABS', email: 'hasini@syscolabs.com', phone: '+94 76 333 2211', dealsCount: '5 Deals' },
    { name: 'Mahesh Senanayake', company: 'WSO2 Sri Lanka', email: 'mahesh@wso2.com', phone: '+94 77 444 1100', dealsCount: '3 Deals' }
  ];
}