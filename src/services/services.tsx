/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSP } from "../pnpConfig/pnpjsConfig";
import { spfi } from "@pnp/sp";
import "@pnp/sp/lists";
import "@pnp/sp/items/get-all";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/publishing-sitepageservice";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getItems(listName: string, paramSelect: string, paramFilter: string, paramExpand: string = '') {

    const _sp = getSP();
    const spCache = spfi(_sp).using();

    return spCache.web.lists.getByTitle(listName).items.select(paramSelect).filter(paramFilter).expand(paramExpand).getAll()
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getItemsById(listName: string, id: number, paramSelect: string, expand: string = '') {

    const _sp = getSP();
    const spCache = spfi(_sp).using();

    return spCache.web.lists.getByTitle(listName).items.filter(`Id eq ${id}`).select(paramSelect).expand(expand).getAll()
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function addItem(listName: string, properties: any) {

    try {
        const _sp = getSP()
        const spCache = spfi(_sp).using()

        await spCache.web.lists.getByTitle(listName).items.add(properties)
    }
    catch (error: any) {
        console.log(error)
        return false
    }

    return true
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function updateItem(listName: string, listItemId:number, properties: any) {

    try {
        const _sp = getSP()
        const spCache = spfi(_sp).using()

        await  spCache.web.lists.getByTitle(listName).items.getById(listItemId).update(properties)
    }
    catch (error: any) {
        console.log(error)
        return false
    }

    return true
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function deleteItem(listName: string, listItemId:number) {

    try {
        const _sp = getSP()
        const spCache = spfi(_sp).using()

        await  spCache.web.lists.getByTitle(listName).items.getById(listItemId).recycle()
    }
    catch (error: any) {
        console.log(error)
        return false
    }

    return true
}