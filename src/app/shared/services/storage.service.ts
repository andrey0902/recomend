import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  public getStorage(key: string) {
    return JSON.parse(this.readData(key));
  }
  public setStorage(key: string, data: any) {
    localStorage.setItem(key, this.convertToString(data));
  }
  private convertToString(data: any) {
    return JSON.stringify(data);
  }
  private readData(key: string) {
    return localStorage.getItem(key);
  }
}
