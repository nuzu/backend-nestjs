import { Test } from '@nestjs/testing';
import { CompaniesController } from './companies.controller';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';

describe('ÇompaniesController', () => {
  let companiesController: CompaniesController;
  let companiesService: CompaniesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [CompaniesService],
    }).compile();
    companiesService = module.get<CompaniesService>(CompaniesService);
    companiesController = module.get<CompaniesController>(CompaniesController);
  });

  describe('findAll', () => {
    it('should return an array of companies', async () => {
      const result = [];
      jest.spyOn(companiesService, 'findAll').mockImplementation(() => result);
      // with mock implementation, you are setting what findAll returns
      // this affects getCompanies, so therefore both arrays are empty
      expect(await companiesController.getCompanies()).toBe(result);
    });
  });

  describe('createCompany', () => {
    it('should create new company', async () => {
      await companiesController.createCompany({
        name: 'British Petroleum',
        industry: 'Energy',
      });
      const result = await companiesController.getCompanies();
      expect(result[result.length - 1]).toEqual(
        new Company('British Petroleum', 'Energy'),
      );
    });
  });
});
