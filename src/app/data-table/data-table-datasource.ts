import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  hospitals: string;
  number: string ;
  place: string ; 

}

// TODO: replace this with real data from your application
const HOSPITALS: DataTableItem[] = [
  {place:'مصر القديمة- السيدة- عابدين- الأزبكية',hospitals: 'مستشفى المنيرة العام',number: '0227947205'},
  { place:'مصر الجديدة-  النزهة- المطرية- الزيتون- الأميرية',hospitals: 'مستشفى منشية بكري',number: '0222580270',},
  {place:'شبرا - الموسكي',hospitals: 'مستشفى شبرا العام',number: '0222352325', },
  { place:'روض الفرج',hospitals: 'مستشفى روض الفرج العام',number: '0224581118',},
  {place:'باب الشعرية- الحدائق- الأميرية- الويلي',hospitals: 'مستشفى حميات العباسية',number: '0223424025', },
  {place:'نصرشرق- نصر غرب - منشاة ناصر',hospitals: 'مستشفى الصدر العباسية',number: '0223425245', },
  {place:'حلوان- المعصرة ',hospitals: 'مستشفى حلوان',number: ' ', },
  {place:'مايو- طرة',hospitals: 'مستشفى حلوان العام',number: '0225564364', },
  {place:'القاهرة الجديدة - المقطم',hospitals: 'مستشفى القاهرة الجديدة',number: '0227586397', },
  {place:'الزواية',hospitals: 'مستشفى الزواية',number: '02224261124', },
  {place:'دار السلام - البساتين - المعادي',hospitals: 'مستشفى دار السلام',number: '0223642355', },
  {place:'الساحل' ,hospitals: 'مستشفى الخازندرا',number: '0222057593', },
  {place:'التبين',hospitals: 'مستشفى التبين',number: '0225028813', },
  { place:'عين شمس- السلام أول- السلام ثان - المرج',hospitals: 'مستشفى عين شمس',number: '16096 - 0224024111 - 0224022843 - 0222618189 - 0224024158',},
  {place:'خليفة',hospitals: 'الخليفة',number: '0223916962 - 0223904686', },
  { place:'وسط',hospitals: 'رمد قلاوون',number: '0225901681',},
  {place:'بولاق- غرب' ,hospitals: 'مستشفى بولاق',number: '0225762055'},







];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = HOSPITALS;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'hospitals': return compare(a.hospitals, b.hospitals, isAsc);
        case 'place': return compare(a.place, b.place, isAsc);
        case 'number': return compare(a.number, b.number, isAsc);

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
