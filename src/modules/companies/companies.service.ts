import { Injectable } from '@nestjs/common';
import { Company } from './companies.model';

@Injectable()
export class CompaniesService {
  private readonly companies: Company[] = [
    new Company('Coca Cola', 'Beverages'),
    new Company('Apple', 'Technology'),
    new Company('Disney', 'Entertainment'),
  ];

  public create(company: Company) {
    this.companies.push(company);
  }

  public findAll(): Company[] {
    return this.companies;
  }
}
