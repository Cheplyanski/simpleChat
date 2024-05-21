import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export type ChatTab = {
  name: string;
  id: string;
  logo?: string;
};

export const LOCAL_STORAGE_TABS_KEY = 'local-tabs-key';
@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private chatTabs: ChatTab[] = [];
  constructor() {
    this.initDataToLocalStorage();
  }

  private initDataToLocalStorage(): void {
    let storage = localStorage.getItem(LOCAL_STORAGE_TABS_KEY);
    if (storage === null) {
      let json = JSON.stringify(this.chatTabs);
      localStorage.setItem(LOCAL_STORAGE_TABS_KEY, json);
    } else {
      this.chatTabs = JSON.parse(storage as string);
    }
  }

  private getDataFromStorage(): ChatTab[] {
    let storage = localStorage.getItem(LOCAL_STORAGE_TABS_KEY);
    this.chatTabs = JSON.parse(storage as string);
    return this.chatTabs;
  }

  private setDataToStorage(chatTabs: ChatTab[]): void {
    let json = JSON.stringify(chatTabs);
    localStorage.setItem(LOCAL_STORAGE_TABS_KEY, json);
  }

  public createTab(): ChatTab {
    this.chatTabs = this.getDataFromStorage();
    const index: number = this.chatTabs.length + 1;
    const newTab: ChatTab = {
      name: `Вкладка N${index}`,
      id: uuidv4(),
    };
    this.chatTabs = [...this.chatTabs, newTab];

    this.setDataToStorage(this.chatTabs);
    return newTab;
  }

  public getNameById(id: string): string | undefined {
    return this.chatTabs.find((tab: ChatTab) => tab.id === id)?.name;
  }
}
