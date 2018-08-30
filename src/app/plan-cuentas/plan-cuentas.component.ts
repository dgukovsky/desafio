import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PlanCuentasService } from '../services/plan-cuentas.service';
import {AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plan-cuentas',
  templateUrl: './plan-cuentas.component.html',
  styleUrls: ['./plan-cuentas.component.css']
})
export class PlanCuentasComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'level', 'codigo_completo', 'parent'];
  dataSource: any;
  search: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private auth: AuthService,
    private planCuentasService: PlanCuentasService
  ) { }

  ngOnInit() {
    this.getCuentas();
  }

  onSearch() {
    this.getCuentas(this.search);
  }

  logout() {
    this.auth.logout().subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login']);
      }
    )

  }
  getCuentas(search?) {
    this.planCuentasService.getCuentas(search)
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource<any>(data);
          this.dataSource.paginator = this.paginator;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }


}
