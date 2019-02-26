import { Injectable } from "@nestjs/common";
import { Company } from "./companies.model";

@Injectable()
export class CompaniesService {
    private readonly companies: Company[] = [
        new Company("Coca Cola", "Beverages"),
        new Company("Apple", "Technology"),
        new Company("Disney", "Entertainment")
    ];

    create(company: Company) {
        this.companies.push(company);
    }

    findAll(): Company[] {
        return this.companies
    }
}