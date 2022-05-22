// export interface Item {
//   id: number;
//   name: string;
// }

declare module saturn {

  export interface Category {
      id: string;
      name: string;
      count: number;
  }

  export interface Brand {
      id: number;
      name: string;
      count: number;
  }

  export interface Outlet {
      id: number;
      nameFull: string;
      name: string;
      count: number;
  }

  export interface Brand2 {
      id: number;
      name: string;
  }

  export interface ClassRange {
      from: string;
      to: string;
  }

  export interface Label {
      url: string;
      mimetype: string;
  }

  export interface Datasheet {
      url: string;
      mimetype: string;
  }

  export interface Eek {
      classRange: ClassRange;
      energyEfficiencyLabelEu2017_1369?: boolean;
      efficiencyClass: string;
      colorCode: string;
      label: Label;
      datasheet: Datasheet;
  }

  export interface Outlet2 {
      id: number;
      name: string;
  }

  export interface Posting {
      posting_id: string;
      posting_text: string;
      price: string;
      price_old: string;
      shipping_cost: number;
      shipping_type: string;
      discount_in_percent: number;
      name: string;
      brand: Brand2;
      eek: Eek;
      top_level_catalog_id: string;
      original_url: string[];
      outlet: Outlet2;
      pim_id: number;
  }

  export interface RootObject {
      categories: Category[];
      brands: Brand[];
      outlets: Outlet[];
      postings: Posting[];
      morePostingsAvailable: boolean;
  }

}

export {saturn} 