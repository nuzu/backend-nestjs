import { Body, Controller, Get, Post } from '@nestjs/common';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  public getCompanies() {
    return this.companiesService.findAll();
  }

  @Post()
  public createCompany(@Body() company: Company) {
    this.companiesService.create(company);
  }
}
