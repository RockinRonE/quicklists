import { Storage, SqlStorage } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  storage: Storage;

  constructor() {
    this.storage = new Storage(SqlStorage, {name: 'checklist'});
  }

  getData(): Promise<any> {
    return this.storage.get('checklists');
  }

  save(data): void {
    let saveData = [];


    // Remove observables
    data.forEach((checklist) => {
      saveData.push({
        title: checklist.title,
        items: checklist.items,
        date: checklist.date
      });
    });
    let newData = JSON.stringify(saveData);
    this.storage.set('checklists', newData);
  }
}
