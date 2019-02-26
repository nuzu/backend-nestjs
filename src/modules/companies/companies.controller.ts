import {Controller, Get, Post, Body} from '@nestjs/common';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {

    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    getCompanies() {
        return this.companiesService.findAll();
    }

    @Post()
    createCompany(@Body() company: Company) {
        this.companiesService.create(company)
    }
}