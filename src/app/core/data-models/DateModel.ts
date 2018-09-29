export interface IDateModel {
  createdDate: string;
  modifiedDate: string;
  effectiveDate: string;
  expiredDate: string;
}

export class DateModel {
  createdDate: string;
  modifiedDate: string;
  effectiveDate: string;
  expiredDate: string;
  
  constructor(dateModel?: IDateModel) {
    if (dateModel) {
      this.createdDate = dateModel.createdDate;
      this.modifiedDate = dateModel.modifiedDate;
      this.effectiveDate = dateModel.effectiveDate;
      this.expiredDate = dateModel.expiredDate;
    } else {
      this.createdDate = "";
      this.modifiedDate = "";
      this.effectiveDate = "";
      this.expiredDate = "";
    }
  }
}